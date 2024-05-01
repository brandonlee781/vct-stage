/* eslint-disable unicorn/no-array-callback-reference */
import type { FunctionComponent } from '@/lib/types'
import {
  useEditableMatches,
  useEditableMatchesDispatch,
} from '@/hooks/useEditableMatches'
import { convertShareableCode } from '@/lib/shareableCode'
import { MatchView } from './MatchView'
import { entries, groupBy } from 'lodash-es'
import { useSearch } from '@tanstack/react-router'
import { Route as LeagueRoute } from '@/routes/league.$leagueId'
import type { Match } from '@/types'
import type React from 'react'

type MatchListProps = {
  stageFilter: '1' | '2'
}
export const MatchList = ({
  stageFilter,
}: MatchListProps): FunctionComponent => {
  const searchParamaters = useSearch({
    from: LeagueRoute.fullPath,
  })
  const matches = useEditableMatches()
  const dispatch = useEditableMatchesDispatch()

  useEffect(() => {
    const data = convertShareableCode((searchParamaters as { s: string }).s)

    for (const d of data) {
      dispatch({
        type: 'edit',
        id: d.id,
        data: {
          maps: d.maps,
        },
      })
    }
  }, [searchParamaters, dispatch])

  const createMatchSection = ([weekNumber, weekMatches]: [
    string,
    Match[],
  ]): React.ReactNode => {
    return (
      <Fragment key={`week-${weekNumber}`}>
        <span className="col-span-2 pl-2 my-2">Week {weekNumber}</span>
        {weekMatches.map(m => {
          const matchClass = clsx(
            m.group === 'alpha' && 'col-start-1',
            m.group === 'omega' && 'col-start-2'
          )
          return <MatchView match={m} key={m.id} className={matchClass} />
        })}
      </Fragment>
    )
  }

  const filterMatchSections = (completed: boolean): React.ReactNode[] => {
    return entries(
      groupBy(
        matches.filter(m => m.stage === stageFilter),
        match => match.week
      )
    )
      .map(([week, weekMatches]) => {
        if (completed && weekMatches.every(m => m.completed)) {
          // if filtering on completed matches
          // only return weeks that are all completed
          return [week, weekMatches] as [string, Match[]]
        } else if (!completed && weekMatches.some(m => !m.completed)) {
          // if filtering on upcoming matches
          // return weeks with any uncompleted matches
          return [week, weekMatches] as [string, Match[]]
        }
        return null
      })
      .filter(Boolean)
      .map(createMatchSection)
  }

  const upcomingMatchSections = filterMatchSections(false)
  const completedMatchSections = filterMatchSections(true)

  return (
    <div className="col-span-2 flex flex-col sm:grid sm:grid-cols-2 gap-2">
      {upcomingMatchSections}
      <div className="border-t border-b w-full border-gray-700 col-span-2 mt-2 py-2 text-center">
        Completed
      </div>
      {completedMatchSections}
    </div>
  )
}
