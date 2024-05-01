import { getShareableCode } from '@/lib/shareableCode'
import type { FunctionComponent } from '@/lib/types'
import { useEditableMatches } from '@/hooks/useEditableMatches'
import type { LEAGUES } from '@/types'
import { Link, getRouteApi } from '@tanstack/react-router'
const route = getRouteApi('/league/$leagueId')

export const LeagueToolbar = (): FunctionComponent => {
  const matches = useEditableMatches()
  const params = route.useParams<{ leagueId: keyof typeof LEAGUES }>()
  const shareHandler = (): void => {
    const code = getShareableCode(matches)
    window.navigator.clipboard
      .writeText(
        `https://brandonlee781.github.io/vct-stage/league/${params.leagueId}${code.length > 1 ? `?s=${code}` : ''}`
      )
      .then(() => {
        window.alert('Shareable link copied to clipboard')
      })
      .catch(error => {
        throw error
      })
  }
  return (
    <div className="relative w-full h-10 bg-slate-700 flex flex-row justify-center items-center px-4">
      <Link
        className="mx-2"
        to="/league/$leagueId"
        params={{ leagueId: 'americas' }}
      >
        Americas
      </Link>
      <Link
        className="mx-2"
        to="/league/$leagueId"
        params={{ leagueId: 'china' }}
      >
        China
      </Link>
      <Link
        className="mx-2"
        to="/league/$leagueId"
        params={{ leagueId: 'emea' }}
      >
        EMEA
      </Link>
      <Link
        className="mx-2"
        to="/league/$leagueId"
        params={{ leagueId: 'pacific' }}
      >
        Pacific
      </Link>
      <button
        className="absolute top-1 right-4 border border-transparent rounded h-8 uppercase bold flex items-center px-2"
        onClick={shareHandler}
      >
        <IconMdiShare className="mr-1" />
        Share
      </button>
    </div>
  )
}
