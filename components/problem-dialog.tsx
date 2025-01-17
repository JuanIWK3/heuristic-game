import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type Problem, gameContext } from '@/context/game';
import { type Heuristic, heuristics } from '@/data/heuristics';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ProblemDialog({
  problem,
  name,
}: {
  problem: Problem;
  name: string;
}) {
  const { answer } = useContext(gameContext);
  const [open, setOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(500);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          answer(null);
          setOpen(false);
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, answer]);

  const renderContent = () => (
    <div>
      {timer > 0 && (
        <div className="text-center text-2xl">
          {timer}
          <br />
          seconds
        </div>
      )}
      <div>
        <DialogTitle>What is the heuristic for this problem?</DialogTitle>
        <DialogDescription>{problem.description}</DialogDescription>
        <Image
          src="https://picsum.photos/600/400"
          width={200}
          height={200}
          alt="Warning"
          className="w-full p-4"
        />

        <Select
          onValueChange={(key) => {
            answer(key as Heuristic);
            setOpen(false);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a Heuristic" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(heuristics).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{name}</DialogTrigger>
        <DialogContent className="">
          <DialogHeader>{renderContent()}</DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{name}</DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>{renderContent()}</DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
