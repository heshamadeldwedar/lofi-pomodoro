'use client';
import Timer from '@/src/app/components/timer';
import { useState } from 'react';

interface IPomodoroPeriod {
  type: 'work' | 'short-break' | 'long-break';
  duration: number;
  title: string;
  index: number;
};

export default function Home() {

  const [running, setRunning] = useState(false);

  const pomodoroRound : Array<IPomodoroPeriod> = [
    { type: 'work', duration: 1500, title: 'Pomodoro', index: 1 },
    { type: 'short-break', duration: 3000, title: 'Short Break', index: 1 },
    { type: 'work', duration: 1500, title: 'Pomodoro', index: 2 },
    { type: 'short-break', duration: 3000, title: 'Short Break', index: 2 },
    { type: 'work', duration: 1500, title: 'Pomodoro', index: 3 },
    { type: 'short-break', duration: 3000, title: 'Short Break', index: 3 },
    { type: 'work', duration: 1500, title: 'Pomodoro', index: 4 },
    { type: 'long-break', duration: 900, title: 'Long Break', index: 4 },
  ];
  const [currentRoundIndex, setRoundIndex] = useState(0);
  const currentPeriod = pomodoroRound[currentRoundIndex];

  return (


    <div className="flex justify-center">

      <main className="flex flex-col gap-8 items-center sm:items-start">

        <div className='pt-16'>


          <div className="text-center mb-1.5">
            <span>{currentPeriod.title}</span>
          </div>

          <div className="mb-4">
            <Timer initialValue={currentPeriod.duration} running={running} onExpire={() => {
              setRunning(false)
            }
            } />

          </div>

          {/* Timer Button Section */}


          <div className="flex justify-center items-center gap-4">

            {/* Round Counter */}
            <div className='text-sm'>
              Round <span className='font-bold'> {currentPeriod.index} / 4</span>
            </div>

            <button
              className="w-16 h-16 p-3.5 border border-inherit rounded-2xl"
              onClick={() => setRunning(!running)}
            >
              <img src={running ? '/pause.svg' : '/start.svg'} />
            </button>

            {/* Goal Counter */}
            <div className='text-sm'>
              <span className='font-bold'>0/0</span> Goal
            </div>

          </div>



        </div>


      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
