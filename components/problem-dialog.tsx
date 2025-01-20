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
import { gameContext } from '@/context/game';
import { type Heuristic, heuristics } from '@/data/heuristics';
import type { Problem, Site } from '@/data/sites';
import { useMediaQuery } from '@/hooks/use-media-query';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ProblemDialog({
  problem,
  site,
}: {
  problem: Problem;
  site: Site;
}) {
  const { answer } = useContext(gameContext);
  const [open, setOpen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (!open) {
      return;
    }

    if (timer <= 0) {
      answer(null);
      setOpen(false);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [open, answer, timer]);

  const renderContent = () => (
    <div className="overflow-scroll">
      {timer > 0 && (
        <div className="text-center text-2xl">
          {timer}
          <br />
          seconds
        </div>
      )}
      <div className="overflow-scroll">
        <DialogTitle>
          {site.name}: What is the heuristic for this problem?
        </DialogTitle>
        <DialogDescription>{problem.description}</DialogDescription>
        <Image
          src={problem.image}
          width={200}
          height={200}
          alt="Warning"
          className="w-full p-4 rounded-lg"
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

  const trigger = () => {
    return (
      <div
        className={
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 animate-bounce border-red-400 border px-4 py-2 hover:shadow-xl'
        }
      >
        <Image
          src={site.logo ?? 'https://picsum.photos/50'}
          alt="logo"
          height={50}
          width={50}
        />
      </div>
    );
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>{trigger()}</DialogTrigger>
        <DialogContent className="overflow-scroll">
          <DialogHeader>{renderContent()}</DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger>{trigger()}</DrawerTrigger>
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
