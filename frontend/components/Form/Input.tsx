import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = ({ error, type, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <input
        className="border border-alt-1/30 text-alt-1 rounded h-12 px-4"
        {...props}
      />
      {error && (
        <span className="flex items-center gap-2 text-sm mt-1 text-gray-400">
          <span className="material-icons text-red-400 text-base">error</span>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
