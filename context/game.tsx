'use client';

import type { Heuristic } from '@/data/heuristics';
import type { Problem, Site } from '@/data/sites';
import { type Dispatch, type SetStateAction, createContext } from 'react';

type UserContext = {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  sites: Site[];
  selected: {
    site: Site;
    problem: Problem;
  } | null;
  selectRandom: VoidFunction;
  answer(heuristic: Heuristic | null): void;
  alreadyAnswered: number;
};

export const gameContext = createContext<UserContext>({
  score: 0,
  setScore: () => {
    /* default implementation */
  },
  sites: [],
  selected: null,
  selectRandom: () => {
    /* default implementation */
  },
  answer() {
    /* default implementation */
  },
  alreadyAnswered: 0,
});
