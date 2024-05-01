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

  const upcomingMatchSections = entries(
    groupBy(
      matches.filter(m => !m.completed && m.stage === stageFilter),
      match => match.week
    )
  ).map(createMatchSection)
  const completedMatchSections = entries(
    groupBy(
      matches.filter(m => m.completed && m.stage === stageFilter),
      match => match.week
    )
  ).map(createMatchSection)

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
