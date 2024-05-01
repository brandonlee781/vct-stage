import type { FunctionComponent } from '@/lib/types'
import type { Match } from '@/types'
import {
  useEditableMatches,
  useEditableMatchesDispatch,
} from '@/hooks/useEditableMatches'
import { convertShareableCode } from '@/lib/shareableCode'
import { MatchView } from './MatchView'
import { groupBy } from 'lodash-es'
import { useSearch } from '@tanstack/react-router'
import { Route as LeagueRoute } from '@/routes/league.$leagueId'

type MatchListProps = {
  splitByGroup?: boolean
}
export const MatchList = ({
  splitByGroup,
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

  const completed = groupBy(
    matches.filter(m => m.completed),
    match => match.week
  )
  const upcoming = groupBy(
    matches.filter(m => !m.completed),
    match => match.week
  )
  const matchWeeks = groupBy(matches, match => match.week)

  if (splitByGroup) {
    const groupedUpcoming: {
      [key: string]: { alpha: Match[]; omega: Match[] }
    } = {}
    const groupedCompleted: {
      [key: string]: { alpha: Match[]; omega: Match[] }
    } = {}
    Object.keys(matchWeeks).forEach(week => {
      groupedUpcoming[week] = {
        alpha: matchWeeks[week].filter(
          m => !m.completed && m.group === 'alpha'
        ),
        omega: matchWeeks[week].filter(
          m => !m.completed && m.group === 'omega'
        ),
      }

      groupedCompleted[week] = {
        alpha: matchWeeks[week].filter(m => m.completed && m.group === 'alpha'),
        omega: matchWeeks[week].filter(m => m.completed && m.group === 'omega'),
      }
    })
    return (
      <>
        {Object.entries(groupedUpcoming)?.map(([week, weekMatches]) => {
          return (
            <Fragment key={`week-${week}`}>
              <span className="col-span-2">Week {week}</span>
              <div className="flex flex-col gap-y-2">
                {weekMatches.alpha.map(m => (
                  <MatchView match={m} key={m.id} />
                ))}
              </div>
              <div className="flex flex-col gap-y-2">
                {weekMatches.omega.map(m => (
                  <MatchView match={m} key={m.id} />
                ))}
              </div>
            </Fragment>
          )
        })}
        <div className="border-t border-b w-full border-gray-700 col-span-2 mt-2 py-2 text-center">
          Completed
        </div>
        {Object.entries(groupedCompleted)?.map(([week, weekMatches]) => {
          return (
            <Fragment key={`week-${week}`}>
              <span className="col-span-2">Week {week}</span>
              <div className="flex flex-col gap-y-2">
                {weekMatches.alpha.map(m => (
                  <MatchView match={m} key={m.id} />
                ))}
              </div>
              <div className="flex flex-col gap-y-2">
                {weekMatches.omega.map(m => (
                  <MatchView match={m} key={m.id} />
                ))}
              </div>
            </Fragment>
          )
        })}
      </>
    )
  }
  return (
    <>
      {Object.entries(upcoming)?.map(([week, weekMatches]) => {
        return (
          <Fragment key={`week-${week}`}>
            <span className="col-span-2 pl-2">Week {week}</span>
            {weekMatches.map(m => (
              <MatchView match={m} key={m.id} />
            ))}
          </Fragment>
        )
      })}
      <div className="border-t border-b w-full border-gray-700 col-span-2 mt-2 py-2 text-center">
        Completed
      </div>
      {Object.entries(completed)?.map(([week, weekMatches]) => {
        return (
          <Fragment key={`week-${week}`}>
            <span className="col-span-2 pl-2">Week {week}</span>
            {weekMatches.map(m => (
              <MatchView match={m} key={m.id} />
            ))}
          </Fragment>
        )
      })}
    </>
  )
}
