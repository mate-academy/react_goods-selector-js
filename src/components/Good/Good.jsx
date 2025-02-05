import cn from 'classnames';
import { SelectButton } from '../SelectButton';

export const Good = ({ good, selectGood, selectedGood }) => (
  <tr
    data-cy="Good"
    className={
      selectedGood === good ? cn('has-background-success-light') : cn('')
    }
  >
    <td>
      <SelectButton
        good={good}
        selectGood={selectGood}
        isSelected={selectedGood === good}
      />
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);
