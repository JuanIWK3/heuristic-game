import { gameContext } from '@/context/game';
import { use } from 'react';
import { Button } from './ui/button';

export function Footer() {
  const { score, alreadyAnswered, sites, setTutorialStep } = use(gameContext);

  const problemCount = sites.flatMap((site) => site.problems).length;

  return (
    <div className="flex justify-between w-full">
      <div className="" />
      <div className="text-center flex flex-col">
        <div>
          Score: <Button variant={'default'}>{score}</Button>
        </div>
        <p>
          Answered: {alreadyAnswered}/{problemCount}
        </p>
      </div>
      <Button
        onClick={() => {
          localStorage.removeItem('finishedTutorial');
          setTutorialStep(1);
        }}
      >
        ?
      </Button>
    </div>
  );
}
