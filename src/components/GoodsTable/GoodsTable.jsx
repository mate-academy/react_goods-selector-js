import React from 'react';
import { GoodsTableRow } from '../GoodsTableRow';

export const GoodsTable = ({ goods, title, setTitle }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <GoodsTableRow
          good={good}
          title={title}
          setTitle={setTitle}
        />
      ))}
    </tbody>
  </table>
);
