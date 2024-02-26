import cn from 'classnames';
import { Button } from '../Button/Button';

export const Good = ({ good, selectedGood, onGoodClick }) => (
  <tr
    key={good}
    className={cn({
      'has-background-success-light': good === selectedGood,
    })}
    onClick={() => {
      onGoodClick(good === selectedGood ? false : good);
    }}
    data-cy="Good"
  >
    <td>
      <Button good={good} selectedGood={selectedGood} />
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
