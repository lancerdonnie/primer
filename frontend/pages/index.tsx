import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import Nav from 'components/Layout/Nav';
import NumberList from 'components/NumberList';

const MAX = 100;

const validate = (input: any) => {
  if (input === '' || input === undefined) return 'input is required';
  if (isNaN(input)) return `input must be a number`;
  if (Number(input) > MAX) return `input must be a greater than ${MAX}`;
};

const Home: NextPage = () => {
  const [state, setState] = useState<string>('');
  const [error, setError] = useState<string | undefined>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(state);
    setError(err);
  };

  return (
    <div className="md:px-5 sm:px-2">
      <div className="max-w-5xl mx-auto min-h-screen relative before:bg-layer before:absolute before:left-0 before:bottom-0 before:h-1/2 before:w-1/2 before:bg-no-repeat before:bg-bottom before:-z-10">
        <Nav />
        <div className="flex md:flex-col gap-5">
          <div className="flex-1">
            <p className="text-sm text-justify">
              Generate prime numbers that are equi-distant from a number
            </p>
            <form className="mt-2 flex" onSubmit={handleSubmit}>
              <Input
                value={state}
                onChange={handleChange}
                name="input"
                placeholder="Enter Number here"
                error={error}
              />
              <Button className="w-24 ml-4" type="submit">
                Submit
              </Button>
            </form>
          </div>
          <div className="flex-1  md:mt-5">
            <NumberList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
