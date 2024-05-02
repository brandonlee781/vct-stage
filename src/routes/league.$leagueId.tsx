import { useMatches } from '@/store/useMatches'
import LeaguePage from '@/pages/League'
import type { Leagues } from '@/types'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/league/$leagueId')({
  component: LeaguePage,
  beforeLoad({ params }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setCurrent = useMatches.getState().setCurrent
    if (params.leagueId) {
      const id = params.leagueId as unknown as keyof Leagues
      setCurrent(id)
    }
  },
})
