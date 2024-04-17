import React from 'react';
import { Good } from '../Good/Good';

export const GoodsList = ({ goods, selectedGood, onSelect }) => {
  return (
    <table className="table">
      <tbody>
        {goods.map(g => (
          <Good
            key={g}
            good={g}
            selectedGood={selectedGood}
            onSelect={onSelect}
          />
        ))}
      </tbody>
    </table>
  );
};
