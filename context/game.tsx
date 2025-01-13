'use client';

import type { Heuristic } from '@/data/heuristics';
import { createContext, type Dispatch, type SetStateAction } from 'react';

export type Problem = {
  image: string;
  answer: Heuristic;
  description: string;
  userAnswer?: Heuristic | null;
};

export type Site = {
  name: string;
  problems: Problem[];
};

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
});
