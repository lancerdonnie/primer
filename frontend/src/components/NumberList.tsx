import React from 'react';
import cx from 'classnames';
import { IPrime } from 'types';
import { AnimatePresence } from 'framer-motion';
import NumberListItem from './NumberListItem';

interface IProps {
  numbers: IPrime[];
  error?: string;
}

const NumberList = ({ numbers, error }: IProps) => {
  return (
    <div>
      <div
        className={cx('flex justify-around text-alt-0 text-sm font-bold', {
          invisible: !numbers?.length,
        })}
      >
        <span>left prime</span>
        <span>number</span>
        <span>right prime</span>
      </div>
      <div className="shadow rounded py-6 mt-3 h-[400px] md:h-auto overflow-auto fancy-scroll bg-alt-6 text-white">
        {error ? (
          <div className="h-full px-5 flex  flex-col items-center justify-center text-alt-2 text-xl">
            <span className="material-icons text-red-400 text-7xl">report</span>
            {error}
          </div>
        ) : numbers?.length ? (
          <ul id="list" className="space-y-4">
            <AnimatePresence>
              {numbers.map((e) => (
                <NumberListItem key={e.id} data={e} />
              ))}
            </AnimatePresence>
          </ul>
        ) : (
          <div className="h-full px-5 flex items-center justify-center text-alt-2 text-xl">
            Generated prime numbers will appear here
          </div>
        )}
      </div>
    </div>
  );
};

export default NumberList;
