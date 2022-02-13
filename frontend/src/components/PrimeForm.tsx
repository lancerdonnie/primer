import React, { useState } from 'react';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { Axios, validate } from 'utils';
import { IPrime } from 'types';
import { nanoid } from 'nanoid/non-secure';

interface IProps {
  setNumbers: (data: IPrime) => void;
  setError: (error: string) => void;
}
const PrimeForm = ({ setNumbers, setError }: IProps) => {
  const [state, setState] = useState<string>('');
  const [formError, setFormError] = useState<string | undefined>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate(state);
    setFormError(err);
    if (err) return;
    setLoading(true);
    try {
      const {
        data: { data },
      } = await Axios.post('/', { input: Number(state) });
      setNumbers({ ...data, id: nanoid() });
      setError('');
    } catch (error) {
      setError('error fetching prime numbers');
    }
    setLoading(false);
  };

  return (
    <form
      name="form"
      className="mt-2 flex-col gap-4 flex md:items-center"
      onSubmit={handleSubmit}
    >
      <Input
        value={state}
        onChange={handleChange}
        name="input"
        placeholder="Enter Number here"
        error={formError}
        className="w-full md:w-80"
      />
      <Button className="w-full md:w-80" type="submit" loading={loading}>
        Generate
      </Button>
    </form>
  );
};

export default PrimeForm;
