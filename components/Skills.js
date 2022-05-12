import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { boxShadow } from 'tailwindcss/defaultTheme';

const Skills = ({ skills }) => {
  const [items, setItems] = useState(skills);
  return (
    <Reorder.Group
      axis='y'
      values={items}
      onReorder={setItems}
      className='flex flex-col justify-start w-full items-end'
    >
      {items.map((item) => (
        <Reorder.Item
          whileDrag={{
            backgroundColor: '#f97316',
            boxShadow: '0px 0px 5px #1e293b',
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: '#f97316',
            boxShadow: '0px 0px 5px #1e293b',
          }}
          key={item}
          value={item}
          className='py-2 px-2 drop-shadow-md bg-yellow-500 w-full sm:w-32 text-center font-semibold text-md rounded-md mb-2 '
        >
          {item}
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};

export default Skills;
