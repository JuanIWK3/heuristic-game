import { Button } from '@/components/ui/button';
import { gameContext } from '@/context/game';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { use } from 'react';

export function ResultsContent() {
  const { sites } = use(gameContext);
  const params = useSearchParams();
  const points = Number(params.get('points'));

  const problems = sites.flatMap((site) => site.problems);

  return (
    <div className="min-h-screen gap-8 p-8 flex flex-col items-center justify-center">
      <Link href="/">
        <Button variant={'outline'} className="text-blue-500">
          <MoveLeft /> Play again
        </Button>
      </Link>
      <h1 className="font-bold text-2xl">Results</h1>
      <p>
        You scored <Button variant={'outline'}>{points}</Button> points
      </p>
      <h1 className="text-center font-bold mb-4">Answers</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {problems.map((problem) => (
          <div
            className={`flex my-4 max-w-lg justify-between border flex-col gap-4 p-4 rounded ${
              problem.userAnswer === problem.answer
                ? 'border-green-500'
                : 'border-red-500'
            }`}
            key={problem.description}
          >
            <h2>{problem.description}</h2>
            <div className="border p-2 rounded">
              <p>
                {problem.userAnswer ? problem.userAnswer : 'You did not answer'}
              </p>
              <h2>
                Correct: <b className="font-bold">{problem.answer}</b>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
