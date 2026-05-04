import { Good } from './Good';

export const GoodsList = ({ goods, selectedGood, setSelectedGoog }) => {
  return (
    <table className="table">
      <tbody>
        {goods.map(good => (
          <Good
            good={good}
            selectedGood={selectedGood}
            setSelectedGoog={setSelectedGoog}
            key={good}
          />
        ))}
      </tbody>
    </table>
  );
};
