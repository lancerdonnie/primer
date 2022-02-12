import type { NextPage } from 'next';
import { useState } from 'react';
import Nav from 'components/Layout/Nav';
import NumberList from 'components/NumberList';
import PrimeForm from 'components/PrimeForm';
import { IPrime } from 'types';

const Home: NextPage = () => {
  const [numbers, setNumbers] = useState<IPrime[]>(
    Array.from({ length: 10 }).map((_) => ({
      leftPrime: 5,
      rightPrime: 7,
      number: 6,
    }))
  );
  const [error, setError] = useState<string>('');

  return (
    <div className="lg:px-4 md:px-5 sm:px-2">
      <div className="max-w-5xl mx-auto min-h-screen relative before:bg-layer before:absolute before:left-0 before:bottom-0 before:h-1/2 before:w-1/2 before:bg-no-repeat before:bg-bottom before:-z-10">
        <Nav />
        <div className="flex md:flex-col gap-10 md:gap-5">
          <div className="flex-1">
            <p className="text-sm text-justify md:text-center">
              Generate prime numbers that are equi-distant from a number
            </p>
            <PrimeForm
              setNumbers={(data) => setNumbers((prev) => [...prev, data])}
              setError={(error) => setError(error)}
            />
          </div>
          <div className="flex-1  md:mt-5">
            <NumberList numbers={numbers} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
