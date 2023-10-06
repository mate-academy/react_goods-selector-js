import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const selected = selectedGood !== '';

  const renderButton = (test, style, value = '', item = '') => (
    <button
      data-cy={test}
      type="button"
      className={style}
      onClick={() => setSelectedGood(item)}
    >
      {value}
    </button>
  );

  const headerWithGood = (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}

      {renderButton('ClearButton', 'delete ml-3')}
    </h1>
  );

  const defaultHeader = (
    <h1 className="title is-flex is-align-items-center">
      No goods selected
    </h1>
  );

  const renderedGoods = goods.map((good) => {
    const isCelected = selectedGood !== good;

    const valueToSet = isCelected ? good : '';
    const testText = isCelected ? 'AddButton' : 'RemoveButton';
    const className = isCelected ? 'button' : 'button is-info';
    const buttonText = isCelected ? '+' : '-';
    const rowStyle = !isCelected && 'has-background-success-light';

    return (
      <tr
        data-cy="Good"
        key={good}
        className={rowStyle}
      >
        <td>
          {renderButton(testText, className, buttonText, valueToSet)}
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    );
  });

  return (
    <main className="section container">
      {selected ? headerWithGood : defaultHeader}

      <table className="table">
        <tbody>
          {renderedGoods}
        </tbody>
      </table>
    </main>
  );
};
