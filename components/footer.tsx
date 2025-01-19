import { gameContext } from '@/context/game';
import { use } from 'react';
import { Button } from './ui/button';

export function Footer() {
  const { score, alreadyAnswered, sites } = use(gameContext);

  const problemCount = sites.flatMap((site) => site.problems).length;

  return (
    <div className="text-center">
      <div>
        Score: <Button variant={'default'}>{score}</Button>
      </div>
      <p>
        Answered: {alreadyAnswered}/{problemCount}
      </p>
    </div>
  );
}
