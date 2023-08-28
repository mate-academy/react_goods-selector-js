import { GoodsItem } from '../GoodsItem';

export const GoodsList = ({ goods, selectedGood, onGoodsSelect }) => (
  <>
    {goods.map(good => (
      <GoodsItem
        good={good}
        selectedGood={selectedGood}
        onGoodsSelect={onGoodsSelect}
        key={good}
      />
    ))}
  </>
);
