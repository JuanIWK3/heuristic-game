'use client';

import { ProblemDialog } from '@/components/problem-dialog';
import { gameContext } from '@/context/game';
import { use, useEffect } from 'react';

export default function Home() {
  const { points, sites, selectRandom, selected } = use(gameContext);

  useEffect(() => {
    if (!selected) {
      setTimeout(() => {
        selectRandom();
      }, 1000);
    }
  }, [selected, selectRandom]);

  return (
    <div className="flex p-8 flex-col items-center justify-items-center min-h-screen w-full">
      <div className="flex justify-between w-full">
        <h1 className="font-bold">Heuristic Finder Game</h1>
        <p>Points: {points}</p>
      </div>

      <div className="flex gap-4 flex-wrap">
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
    </div>
  );
}
