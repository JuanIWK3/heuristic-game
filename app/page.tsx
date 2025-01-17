'use client';

import { ProblemCard } from '@/components/problem-card';
import { gameContext } from '@/context/game';
import { use, useEffect } from 'react';

export default function Home() {
  const { points, sites, selectRandom, selected, alreadyAnswered } =
    use(gameContext);

  useEffect(() => {
    if (!selected) {
      setTimeout(() => {
        selectRandom();
      }, 1000);
    }
  }, [selected, selectRandom]);

  return (
    <div className="flex p-8 flex-col items-center justify-between min-h-screen w-full">
      <div className="flex flex-col justify-between w-full items-center">
        <h1 className="font-bold text-3xl">Heuristic Finder Game</h1>
      </div>

      <div className="flex gap-4 flex-wrap items-center justify-center">
        {sites.map((site) => (
          <ProblemCard key={site.name} site={site} selected={selected} />
        ))}
      </div>
      <div className="text-center">
        <p>Points: {points}</p>
        <p>Answered: {alreadyAnswered}/18</p>
      </div>
    </div>
  );
}
