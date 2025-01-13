'use client';

import { Button } from '@/components/ui/button';
import { gameContext } from '@/context/game';
import { useSearchParams } from 'next/navigation';
import { use } from 'react';

export default function ResultsPage() {
  const { sites } = use(gameContext);
  // get points from url query
  const params = useSearchParams();
  const points = Number(params.get('points'));

  return (
    <div className="min-h-screen gap-8 p-8 flex flex-col items-center justify-center">
      <h1 className="font-bold text-2xl">Results</h1>
      <p>
        You scored <Button variant={'outline'}>{points}</Button> points
      </p>

      <div className="w-full max-w-sm">
        <h1 className="text-center font-bold mb-4">Answers</h1>
        <ul>
          {sites.map((site) => (
            <div className="flex flex-col gap-4" key={site.name}>
              {site.problems.map((problem) => (
                <div
                  className={`flex border flex-col gap-4 w-full p-4 rounded ${problem.userAnswer === problem.answer ? 'border-green-500' : 'border-red-500'}`}
                  key={problem.description}
                >
                  <h2>{problem.description}</h2>
                  <div className="flex justify-between w-full">
                    <p>Yours</p>
                    <p>Correct</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p>
                      {problem.userAnswer
                        ? problem.userAnswer
                        : 'You did not answer'}
                    </p>
                    <h2>{problem.answer}</h2>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
