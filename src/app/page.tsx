'use client';
import Timer from '@/src/app/components/timer';
import { useState } from 'react';


export default function Home() {

  const [rounds, setRound] = useState(1);
  const [breaks, setBreak] = useState(1);
  const [running, setRunning] = useState(false);

  return (


    <div className="flex justify-center">

      <main className="flex flex-col gap-8 items-center sm:items-start">

        <div>


          <button

            onClick={() => setRunning(!running)}
            className="w-full px-4 py-2 text-white bg-red-500 rounded-lg shadow-md"
          >
            {running ? 'Stop' : 'Start'}
          </button>

        </div>


      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
