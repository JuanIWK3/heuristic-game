'use client';

import type { Heuristic } from '@/data/heuristics';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { type ReactNode, useState } from 'react';
import { type Problem, type Site, gameContext } from './game';

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [points, setPoints] = useState<number>(0);
  const [sites, setSites] = useState<Site[]>([]);
  const [selected, setSelected] = useState<{
    site: Site;
    problem: Problem;
  } | null>(null);
  const router = useRouter();
  const [alreadyAnswered] = useState<Set<Problem>>(new Set());

  console.log('Game context provider');

  function selectRandom() {
    console.log('Selecting random problem');

    const allProblems = sites.flatMap((site) => site.problems);

    console.log(`Already answered: ${alreadyAnswered.size}`);

    if (alreadyAnswered.size === allProblems.length) {
      alreadyAnswered.clear();
      router.push(`/results?points=${points}`);
      setPoints(0);
      return;
    }

    const randomWebSite = sites[Math.floor(Math.random() * sites.length)];

    const availableProblems = randomWebSite.problems.filter(
      (problem) => !alreadyAnswered.has(problem),
    );

    if (availableProblems.length === 0) {
      return selectRandom();
    }

    const randomProblem =
      availableProblems[Math.floor(Math.random() * availableProblems.length)];

    setSelected({
      site: randomWebSite,
      problem: randomProblem,
    });
  }

  function answer(heuristic: Heuristic | null) {
    if (!selected) {
      return;
    }
    console.log(`Answering ${heuristic} for ${selected.problem.answer}`);
    alreadyAnswered.add(selected.problem);

    if (!heuristic) {
      toast({
        title: 'Time is up!',
        variant: 'destructive',
      });
    }

    if (heuristic === selected?.problem.answer) {
      toast({
        title: 'Correct answer!',
      });
      setPoints(points + 1);
      // save user answer
    } else {
      toast({
        title: 'Incorrect answer.',
        variant: 'destructive',
      });
    }

    setSites((sites) =>
      sites.map((site) => {
        if (site.name === selected.site.name) {
          return {
            ...site,
            problems: site.problems.map((problem) => {
              if (problem === selected.problem) {
                return {
                  ...problem,
                  userAnswer: heuristic,
                };
              }
              return problem;
            }),
          };
        }
        return site;
      }),
    );

    setSelected(null);
  }

  return (
    <gameContext.Provider
      value={{
        points,
        setPoints,
        sites,
        selectRandom,
        selected,
        answer,
        alreadyAnswered: alreadyAnswered.size,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
