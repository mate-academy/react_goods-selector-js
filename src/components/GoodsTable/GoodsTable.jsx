import { Good } from '../Good';

export const GoodsTable = ({ goods, selectGood, selectedGood }) => (
  <table className="table">
    <tbody>
      {goods.map(good => (
        <Good
          good={good}
          key={good}
          selectGood={selectGood}
          selectedGood={selectedGood}
        />
      ))}
    </tbody>
  </table>
);
