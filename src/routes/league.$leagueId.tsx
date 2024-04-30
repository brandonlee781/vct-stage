import LeaguePage from '@/feature/league/pages/League';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/league/$leagueId')({
  component: LeaguePage
})