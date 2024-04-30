import { FunctionComponent } from '@/lib/types';
import { Match } from '../types';
import { useEditableMatchesDispatch } from '../providers/EditableMatchesProvider';
import React from 'react';
type MatchProps = {
  match: Match
}

const matchWrapperClass = clsx(
  'w-full max-w-[350px]',
  'grid grid-cols-[1fr,32px,32px,1fr] gap-1 items-center self-start',
  'bg-vctMid-500',
  'rounded'
)

const showRoundsButtonClass = clsx(
  'h-2 py-1 w-full text-[8px]',
  'cursor-pointer hover:bg-gray-500 border-t border-gray-600',
  'flex items-center justify-center'
)

export const MatchView = ({ match }: MatchProps): FunctionComponent => {
  const dispatch = useEditableMatchesDispatch()
  const team1Score = match.maps.filter(m => m.team1Rounds > m.team2Rounds).length
  const team2Score = match.maps.filter(m =>  m.team2Rounds > m.team1Rounds).length
  const canInceaseScore = team1Score + team2Score < 3

  const increaseTeam1Score = () => {
    if (team1Score < 2 && canInceaseScore) {
      dispatch({
        type: 'edit',
        id: match.id,
        data: {
          ...match,
          maps: [
            ...match.maps,
            {
              team1Rounds: 13,
              team2Rounds: 9,
            }
          ]
        }
      })
    }
  }

  const decreaseTeam1Score = () => {
    const team1Wins = match.maps.filter(m => m.team1Rounds > m.team2Rounds)
    const maps = [
      ...team1Wins.slice(0, team1Wins.length - 1),
      ...match.maps.filter(m => m.team2Rounds > m.team1Rounds)
    ]
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps,
      }
    })
  }

  const increaseTeam2Score = () => {
    if (team2Score < 2 && canInceaseScore) {
      dispatch({
        type: 'edit',
        id: match.id,
        data: {
          ...match,
          maps: [
            ...match.maps,
            {
              team1Rounds: 9,
              team2Rounds: 13,
            }
          ]
        }
      })
    }
  }

  const decreaseTeam2Score = () => {
    const team1Wins = match.maps.filter(m => m.team2Rounds > m.team1Rounds)
    const maps = [
      ...team1Wins.slice(0, team1Wins.length - 1),
      ...match.maps.filter(m => m.team1Rounds > m.team2Rounds)
    ]
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps,
      }
    })
  }

  const setMapRound = (e: React.ChangeEvent<HTMLInputElement>, index: number, type: 'team1' | 'team2') => {
    const val = parseInt(e.currentTarget.value)

    if (val < 0) return

    const map = match.maps[index]
    if (type === 'team1') {
      map.team1Rounds = val
    } else {
      map.team2Rounds = val
    }
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps: [
          ...match.maps.slice(0, index),
          map,
          ...match.maps.slice(index + 1)
        ]
      }
    })
  }
  const resetHandler = () => {
    dispatch({
      type: 'reset',
      id: match.id,
    })
    setShowRounds(false)
  }

  const [showRounds, setShowRounds] = useState(false)

  return (
    <div className={matchWrapperClass}>
      <div className="px-2 text-white text-sm">{match.team1}</div>
      <MatchViewButton
        onLeftClick={increaseTeam1Score}
        onRightClick={decreaseTeam1Score}
      >
        {team1Score}
      </MatchViewButton>
      <MatchViewButton
        onLeftClick={increaseTeam2Score}
        onRightClick={decreaseTeam2Score}
      >
        {team2Score}
      </MatchViewButton>
      <div className="px-2 text-white text-sm text-right">{match.team2}</div>
      <div className="row-start-2 col-span-4">
          {showRounds && !!match.maps.length && (
            <div className="border-t border-gray-600 text-white grid grid-cols-3 gap-1 p-2">
              {match.maps.map((map, index) => {
                return (
                  <Fragment key={`${match.id}-map-${index}`}>
                    <input type="number" value={map.team1Rounds} className="max-w-15 pl-2" onChange={(e) => setMapRound(e, index, 'team1')} />
                    <span className="text-center">Map {index + 1}</span>
                    <input type="number" value={map.team2Rounds} className="max-w-15 pl-2" onChange={(e) => setMapRound(e, index, 'team2')} />
                  </Fragment>
                )
              })}
              <button
                className="col-span-3 border border-gray-700 rounded h-8 uppercase bold bg-slate-600 mt-3"
                onClick={resetHandler}
              >
                Reset
              </button>
            </div>
          )}
        <div
          className={`${showRoundsButtonClass} ${!match.maps.length ? '!cursor-default hover:!bg-transparent' : ''}`}
          onClick={() => match.maps.length && setShowRounds(!showRounds)}
        >
          <span className={clsx('transition-transform duration-200', !showRounds && 'rotate-180')}>^</span>
        </div>
      </div>
    </div>
  )
}


const matchViewButtonClasses = clsx(
  'p-1 w-8',
  'bg-transparent hover:bg-gray-700 rounded-md my-1'
)
type MatchViewButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  onLeftClick?: () => void
  onRightClick?: () => void
}
const MatchViewButton = ({ children, onLeftClick, onRightClick }: MatchViewButtonProps): FunctionComponent => {
  const contextMenuHandler = (e: React.MouseEvent) => {
    if (onRightClick) {
      e.preventDefault()
      onRightClick()
    }
  }
  return (
    <button className={matchViewButtonClasses} onClick={onLeftClick} onContextMenu={contextMenuHandler}>
      {children}
    </button>
  )
}