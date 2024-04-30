import { FunctionComponent } from '@/lib/types'
import { useEditableMatches, useEditableMatchesDispatch } from '../providers/EditableMatchesProvider'
import { convertShareableCode } from '@/lib/shareableCode'
import { MatchView } from './MatchView'
import { groupBy } from 'lodash-es'
import { useSearch } from '@tanstack/react-router'
import { Route as LeagueRoute } from '@/routes/league.$leagueId'
import { Match } from '@/types'

type MatchListProps = {
  splitByGroup?: boolean
}
export const MatchList = ({ splitByGroup }: MatchListProps): FunctionComponent => {
  const searchParams = useSearch({
    from: LeagueRoute.fullPath
  })
  const matches = useEditableMatches()
  const dispatch = useEditableMatchesDispatch()

  useEffect(() => {
    const data = convertShareableCode((searchParams as {s: string}).s)
    
    for (const d of data) {
      dispatch({
        type: 'edit',
        id: d.id,
        data: {
          maps: d.maps
        }
      })
    }
  }, [searchParams, dispatch])


  const matchWeeks = groupBy(matches, i => i.week)

  if (splitByGroup) {
    const grouped: { [key: string]: { alpha: Match[]; omega: Match[] } } = {}
    Object.keys(matchWeeks).forEach(week => {
      grouped[week] = {
        alpha: matchWeeks[week].filter(m => m.group === 'alpha'),
        omega: matchWeeks[week].filter(m => m.group === 'omega')
      }
    })
    return (
      <>
      {Object.entries(grouped)?.map(([week, weekMatches])=> {
        return (
          <Fragment key={`week-${week}`}>
            <span className="col-span-2" >Week {week}</span>
            <div className="flex flex-col gap-y-2">
              {weekMatches.alpha.map(m => <MatchView match={m} key={m.id}/>)}
            </div>
            <div className="flex flex-col gap-y-2">
              {weekMatches.omega.map(m => <MatchView match={m} key={m.id}/>)}
            </div>
          </Fragment>
        )
      })}
    </>
    )
  }
  return (
    <>
      {Object.entries(matchWeeks)?.map(([week, weekMatches])=> {
        return (
          <Fragment key={`week-${week}`}>
            <span className="col-span-2" >Week {week}</span>
            {weekMatches.map(m => <MatchView match={m} key={m.id}/>)}
          </Fragment>
        )
      })}
    </>
  )
  
}
