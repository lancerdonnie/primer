import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const Button = ({ children, className = '', loading }: Props) => {
  return (
    <button
      className={`bg-secondary h-12 flex items-center justify-center rounded text-white text-lg hover:bg-secondary-dark transition ${className}`}
      disabled={loading}
    >
      {loading ? (
        <span className="material-icons animate-spin">incomplete_circle</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
