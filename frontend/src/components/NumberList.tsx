import React from 'react';
import cx from 'classnames';
import { IPrime } from 'types';
import NumberBadge from './NumberBadge';

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
      <div className="shadow rounded py-6 mt-3 h-[400px] md:h-auto overflow-auto fancy-scroll bg-alt-6 text-white space-y-4">
        {error ? (
          <div className="h-full px-5 flex  flex-col items-center justify-center text-alt-2 text-xl">
            <span className="material-icons text-red-400 text-7xl">report</span>
            Error fetching prime numbers
          </div>
        ) : numbers?.length ? (
          <ul id="list">
            {numbers.reverse().map((e, i) => (
              <li id="list-item" className="flex justify-around" key={i}>
                <NumberBadge number={e.leftPrime} />
                <NumberBadge number={e.number} className="text-alt-3" />
                <NumberBadge number={e.rightPrime} />
              </li>
            ))}
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
