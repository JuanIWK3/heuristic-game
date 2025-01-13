import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { gameContext, type Problem } from '@/context/game';
import { type Heuristic, heuristics } from '@/data/heuristics';
import Image from 'next/image';
import { Button } from './ui/button';
import { useContext, useEffect, useState } from 'react';

export function ProblemDialog({
  problem,
  name,
}: { problem: Problem; name: string }) {
  const { answer } = useContext(gameContext);
  const [open, setOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(5);

  setTimeout(() => {
    if (timer > 0 && open) {
      setTimer(timer - 1);
    }
  }, 1000);

  useEffect(() => {
    if (timer === 0) {
      answer('none');
      setOpen(false);
    }
  }, [timer, answer]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{name}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {timer > 0 && (
            <div className="text-center text-2xl">
              {timer}
              <br />
              seconds
            </div>
          )}

          <DialogTitle>What is the heuristic for this problem?</DialogTitle>
          <DialogDescription>{problem.description}</DialogDescription>
          <Image
            src="https://picsum.photos/600/400"
            width={600}
            height={400}
            alt="Warning"
          />
          <div className="flex gap-2 flex-wrap">
            {Object.entries(heuristics).map(([key, value]) => (
              <Button
                key={key}
                variant={'outline'}
                onClick={() => {
                  answer(key as Heuristic);

                  setOpen(false);
                }}
                className="border p-2 rounded"
              >
                {value}
              </Button>
            ))}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
