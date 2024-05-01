import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from 'lz-string'
import { chunk } from 'lodash-es'
import type { Match } from '@/types'

export const getShareableCode = (matches: Match[]): string => {
  const data = []
  for (const match of matches) {
    if (match.maps.length > 0) {
      const mData = [
        match.id.toString().padStart(2, '0'),
        ...match.maps.flatMap(map => [
          map.team1Rounds?.toString().padStart(2, '0'),
          map.team2Rounds?.toString().padStart(2, '0'),
        ]),
        '|',
      ]
      data.push(mData)
    }
  }
  const compressedString = compressToEncodedURIComponent(data.join(''))
  return compressedString
}

export const convertShareableCode = (
  string_: string
): { id: number; maps: Match['maps'] }[] => {
  const data = decompressFromEncodedURIComponent(string_)
  const parts = data.split('|')
  return parts
    .map(part => {
      if (part.length === 0) return null
      const exec = part.match(/\d{2}/gim) || []
      const [id, ...scores] = exec
      const groupedScores = chunk(scores, 2)

      if (!id) return null
      return {
        id: Number.parseInt(id),
        maps: groupedScores.map(([first, second]) => ({
          team1Rounds: Number.parseInt(first),
          team2Rounds: Number.parseInt(second),
        })),
      }
    })
    .filter(Boolean)
}
