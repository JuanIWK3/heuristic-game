'use client';

import { Footer } from '@/components/footer';
import { ProblemCard } from '@/components/problem-card';
import { Tutorial } from '@/components/tutorial';
import { gameContext } from '@/context/game';
import { use, useEffect } from 'react';

export default function Home() {
  const { sites, selectRandom, selected, tutorialStep } = use(gameContext);

  useEffect(() => {
    if (!selected && tutorialStep === 0) {
      setTimeout(() => {
        selectRandom();
      }, 100);
    }
  }, [selected, selectRandom, tutorialStep]);

  return (
    <>
      <Tutorial />
      <div className="flex p-8 flex-col items-center justify-between min-h-screen w-full">
        <div className="flex flex-col justify-between w-full items-center">
          <h1 className="font-bold text-3xl">Heuristic Finder Game</h1>
        </div>

        <div className="flex gap-4 flex-wrap items-center justify-center">
          {sites.map((site) => (
            <ProblemCard key={site.name} site={site} selected={selected} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
