'use client';

import { gameContext } from '@/context/game';
import { use } from 'react';

export default function ResultsPage() {
  const { points } = use(gameContext);

  return (
    <div>
      <h1>Results</h1>
      <p>You scored {points} points</p>
    </div>
  );
}
