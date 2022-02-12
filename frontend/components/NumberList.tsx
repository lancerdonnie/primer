import React from 'react';
import cx from 'classnames';

const numbers = Array.from({ length: 10 }).map((_) => ({
  leftPrime: 5,
  rightPrime: 7,
  number: 6,
}));
const NumberList = () => {
  return (
    <div className="">
      <div
        className={cx('flex justify-around text-alt-4 text-sm font-bold', {
          invisible: !numbers?.length,
        })}
      >
        <span>left prime</span>
        <span>number</span>
        <span>right prime</span>
      </div>
      <div className="shadow rounded py-6 mt-3 min-h-[400px] bg-white bg-alt-2 text-white">
        {numbers?.length ? (
          numbers.map((e) => (
            <div className="flex justify-around">
              <span className="text-xl font-bold">{e.leftPrime}</span>
              <span className="text-xl font-bold text-alt-3">{e.number}</span>
              <span className="text-xl font-bold">{e.rightPrime}</span>
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
