'use client';

import type { Heuristic } from '@/data/heuristics';
import type { Problem, Site } from '@/data/sites';
import { type Dispatch, type SetStateAction, createContext } from 'react';

type UserContext = {
  points: number;
  setPoints: Dispatch<SetStateAction<number>>;
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
  points: 0,
  setPoints: () => {
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
