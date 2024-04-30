import { FunctionComponent } from '@/lib/types'
import { useEditableMatches, useEditableMatchesDispatch } from '../providers/EditableMatchesProvider'
import { convertShareableCode } from '@/lib/shareableCode'
import { MatchView } from './MatchView'
import { groupBy } from 'lodash-es'
import { useSearch } from '@tanstack/react-router'
import { Route as LeagueRoute } from '@/routes/league.$leagueId'

export const MatchList = (): FunctionComponent => {
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
