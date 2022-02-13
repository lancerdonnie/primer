import React from 'react';

interface IProps {
  number: number | null;
  className?: string;
}

const NumberBadge = ({ number, className }: IProps) => {
  return (
    <span
      className={`text-alt-2 text-xl font-bold bg-white w-24 h-14 skew-x-[-7deg] rounded-xl rounded-tr-none flex items-center justify-center ${className}`}
    >
      {typeof number === 'number' ? (
        <span className="truncate">{number}</span>
      ) : (
        <span className="text-red-400">-</span>
      )}
    </span>
  );
};

export default NumberBadge;
