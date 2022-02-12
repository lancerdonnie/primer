import React from 'react';
import cx from 'classnames';
import { IPrime } from 'types';

interface IProps {
  numbers: IPrime[];
  error?: string;
}

const NumberList = ({ numbers, error }: IProps) => {
  return (
    <div className="">
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
          <span>"Error fetching number"</span>
        ) : numbers?.length ? (
          numbers.reverse().map((e) => (
            <div className="flex justify-around">
              <span className="text-alt-2 text-xl font-bold bg-white px-10 py-3 skew-x-[-7deg] rounded-xl rounded-tr-none">
                {e.leftPrime}
              </span>
              <span className="text-alt-3 text-xl font-bold bg-white px-10 py-3 skew-x-[-7deg] rounded-xl rounded-tr-none">
                {e.number}
              </span>
              <span className="text-alt-2 text-xl font-bold bg-white px-10 py-3 skew-x-[-7deg] rounded-xl rounded-tr-none">
                {e.rightPrime}
              </span>
            </div>
          ))
        ) : (
          <div>numbers will appear here</div>
        )}
      </div>
    </div>
  );
};

export default NumberList;
