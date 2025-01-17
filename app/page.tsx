'use client';

import { ProblemDialog } from '@/components/problem-dialog';
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
          <div key={site.name}>
            <h2
              className={`font-bold flex my-2 border p-4 rounded ${selected?.site.name === site.name ? 'text-red-500' : ''}`}
            >
              {selected && selected.site.name === site.name ? (
                <ProblemDialog problem={selected?.problem} name={site.name} />
              ) : (
                site.name
              )}
            </h2>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p>Points: {points}</p>
        <p>Answered: {alreadyAnswered}/18</p>
      </div>
    </div>
  );
}
