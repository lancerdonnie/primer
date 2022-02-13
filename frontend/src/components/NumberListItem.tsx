import React from 'react';
import { motion } from 'framer-motion';
import { IPrime } from 'types';
import NumberBadge from './NumberBadge';

const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 };

const NumberListItem = ({ data }: { data: IPrime }) => {
  return (
    <motion.li
      id="list-item"
      className="flex justify-around"
      initial="out"
      animate="in"
      layout
      variants={{
        in: { scaleY: 1, opacity: 1 },
        out: {
          scaleY: 0,
          opacity: 0,
        },
      }}
      transition={transition}
    >
      <NumberBadge number={data.leftPrime} />
      <NumberBadge number={data.number} className="text-alt-3" />
      <NumberBadge number={data.rightPrime} />
    </motion.li>
  );
};

export default NumberListItem;
