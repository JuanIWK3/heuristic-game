import { use } from 'react';
import { Button } from './ui/button';
import { gameContext } from '@/context/game';
import Tutorial1 from '@/assets/tutorial-1.png';
import Tutorial2 from '@/assets/tutorial-2.png';
import Tutorial3 from '@/assets/tutorial-3.png';
import Tutorial4 from '@/assets/tutorial-4.png';
import Tutorial5 from '@/assets/tutorial-5.png';
import Tutorial6 from '@/assets/tutorial-6.png';
import Tutorial7 from '@/assets/tutorial-7.png';
import Image from 'next/image';

export function Tutorial() {
  const { tutorialStep, setTutorialStep } = use(gameContext);

  if (localStorage.getItem('finishedTutorial')) {
    return null;
  }

  if (tutorialStep === 0) {
    return null;
  }

  return (
    <div className="absolute min-h-screen w-full bg-white z-10 flex items-center justify-center ">
      {tutorialStep === 1 && (
        <div className="flex flex-col items-center gap-4 p-8 animate-in duration-500">
          <h2 className="font-bold text-2xl">How to play</h2>
          <Image src={Tutorial1} alt="tutorial" className="w-96" />
          <p>
            Welcome, in this game you have 6 sites to help solve the problem.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 2 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <Image src={Tutorial2} alt="tutorial" className="w-96" />
          <p>
            After some time, our scan will detect a problem in one of the sites.
            The site will be bouncing and highlighted in red.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 3 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <Image src={Tutorial3} alt="tutorial" className="w-96" />
          <p>
            Click on the site to open the site details and solve the problem.
            You will have 60 seconds to solve the problem.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 4 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <Image src={Tutorial4} alt="tutorial" className="w-96" />
          <p>
            Analyze the problem description and the image to select the best
            heuristic to solve the problem.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 5 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <Image src={Tutorial5} alt="tutorial" className="w-96" />
          <p>
            After selecting the heuristic, you can see if you got right or
            wrong.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 6 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <p className="">
            After the 18 problems, you will see your score and the correct
            answers.
          </p>
          <Image src={Tutorial6} alt="tutorial" className="w-96" />
          <div className="flex gap-4">
            <Button onClick={() => setTutorialStep(0)} variant={'outline'}>
              Skip
            </Button>
            <Button onClick={() => setTutorialStep((prev) => prev + 1)}>
              Next
            </Button>
          </div>
        </div>
      )}

      {tutorialStep === 7 && (
        <div className="flex flex-col items-center gap-4 p-8">
          <h2 className="font-bold text-2xl">How to play</h2>
          <p className="">
            If you want to see the tutorial again, click on the interrogation
            button below.
          </p>
          <Image src={Tutorial7} alt="tutorial" className="w-48" />
          <div className="flex gap-4">
            <Button
              onClick={() => {
                setTutorialStep(0);
                localStorage.setItem('finishedTutorial', 'true');
              }}
            >
              Play
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
