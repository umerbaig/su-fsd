import React from 'react';

interface IProps {
  message: string;
}

const Error: React.FC<IProps> = ({ message }) => {
  return (
    <h3 className="text-2xl text-center font-semibold mb-6 text-black">
      {message}
    </h3>
  );
};

export default Error;
