import type { FunctionComponent } from "@/lib/types";
import { Link } from '@tanstack/react-router';

export const Home = (): FunctionComponent => {
	return (
		<div className="w-screen h-screen flex flex-col justify-center items-center text-lg font-bold">
			<Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'pacific' }}>Pacific</Link>
			<Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'emea' }}>EMEA</Link>
			<Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'china' }}>China</Link>
			<Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'americas' }}>Americas</Link>
		</div>
	);
};