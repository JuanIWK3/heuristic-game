'use client';

import type { Heuristic } from '@/data/heuristics';
import type { Problem, Site } from '@/data/sites';
import { sites as data } from '@/data/sites';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { type ReactNode, useEffect, useState } from 'react';
import { gameContext } from './game';

export function GameContextProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState<number>(0);
  const [sites, setSites] = useState<Site[]>(data);
  const [selected, setSelected] = useState<{
    site: Site;
    problem: Problem;
  } | null>(null);
  const [tutorialStep, setTutorialStep] = useState<number>(1);
  const router = useRouter();
  const [alreadyAnswered] = useState<Set<Problem>>(new Set());

  console.log('Game context provider');

  function selectRandom() {
    console.log('Selecting random problem');

    const allProblems = sites.flatMap((site) => site.problems);

    console.log(`Already answered: ${alreadyAnswered.size}`);

    if (alreadyAnswered.size === allProblems.length) {
      alreadyAnswered.clear();
      router.push(`/results?score=${score}`);
      setScore(0);
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
      setScore(score + 1);
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

  // if localStorage has a finishedTutorial key, set tutorialStep to 0
  useEffect(() => {
    if (localStorage.getItem('finishedTutorial')) {
      setTutorialStep(0);
    }
  });

  return (
    <gameContext.Provider
      value={{
        score,
        setScore,
        sites,
        selectRandom,
        selected,
        answer,
        alreadyAnswered: alreadyAnswered.size,
        tutorialStep,
        setTutorialStep,
      }}
    >
      {children}
    </gameContext.Provider>
  );
}
