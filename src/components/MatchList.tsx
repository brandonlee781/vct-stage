import { FunctionComponent } from '@/lib/types'
import { useEditableMatches } from '../providers/EditableMatchesProvider'
import { MatchView } from './MatchView'
import { groupBy } from 'lodash-es'
import React from 'react'

export const MatchList = (): FunctionComponent => {
  const matches = useEditableMatches()

  const matchWeeks = groupBy(matches, i => i.week)
  return (
    <>
      {Object.entries(matchWeeks)?.map(([week, weekMatches])=> {
        return (
          <React.Fragment key={`week-${week}`}>
            <span className="col-span-2" >Week {week}</span>
            {weekMatches.map(m => <MatchView match={m} key={m.id}/>)}
          </React.Fragment>
        )
      })}
    </>
  )
  
}
