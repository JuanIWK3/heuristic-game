"use client";

import { gameContext } from "@/context/game";
import { useContext, useEffect } from "react";

export default function Home() {
	const { points, sites, selectRandomSite, selectedSite } =
		useContext(gameContext);

	useEffect(() => {
		selectRandomSite();
	}, [selectRandomSite]);

	return (
		<div className="flex p-8 flex-col items-center justify-items-center min-h-screen w-full">
			<h1 className="font-bold">Heuristic Finder Game</h1>

			{selectedSite}
			<p>Points: {points}</p>

			<div>
				{sites.map((site) => (
					<div key={site.name}>
						<h2
							className={`font-bold flex my-2 ${selectedSite === site.name ? "text-red-500" : ""}`}
						>
							{site.name}
						</h2>

						<div className="flex flex-col gap-2">
							{site.problems.map((problem) => (
								<div className="border p-2 rounded" key={problem.description}>
									<p>{problem.description}</p>
									<p className="font-bold">Answer: {problem.answer}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
