import type { FunctionComponent } from "@/lib/types";

export const Home = (): FunctionComponent => {
	return (
		<div className="bg-blue-300 font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<p className="text-white text-6xl">Hello, world!</p>
		</div>
	);
};