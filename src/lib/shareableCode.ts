import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string'
import { chunk } from 'lodash-es'
import { Match } from '@/types'

export const getShareableCode = (matches: Match[]) => {
  const data = []
  for (const match of matches) {
    if (match.maps.length) {
      const mData = [
        match.id.toString().padStart(2, '0'),
        ...match.maps.map(map => [map.team1Rounds?.toString().padStart(2, '0'), map.team2Rounds?.toString().padStart(2, '0')]).flat(),
        '|'
      ]
      data.push(mData)
    }
  }
  const str = compressToEncodedURIComponent(data.join(''))
  return str
}

export const convertShareableCode = (str: string): { id: number; maps: Match['maps'] }[] => {
  const data = decompressFromEncodedURIComponent(str)
  const parts = data.split('|')
  return parts.map(part => {
    if (!part.length) return null
    const exec = part.match(/\d{2}/gim) || []
    const [id, ...scores] = exec
    const groupedScores = chunk(scores, 2)
    
    if (!id) return null
    return {
      id: parseInt(id),
      maps: groupedScores.map(([first, second]) => ({ team1Rounds: parseInt(first), team2Rounds: parseInt(second) }))
    }
  }).filter(Boolean)
}