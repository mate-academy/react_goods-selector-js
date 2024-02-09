import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

const GoodRow = ({ good, selectedGood, onClick }) => {
  const isSelected = selectedGood === good;
  const buttonClassName = classNames('button', { 'is-info': isSelected });
  const rowClassName = classNames({
    'has-background-success-light': isSelected,
  });

  return (
    <tr data-cy="Good" className={rowClassName}>
      <td>
        <button
          onClick={onClick}
          data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={buttonClassName}
        >
          {isSelected ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

const defaultSelectedGood = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(defaultSelectedGood);

  const handleGoodClick = (good) => {
    setSelectedGood(
      prevSelectedGood => (prevSelectedGood === good ? null : good),
    );
  };

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood(null)}
          />
          )}
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <GoodRow
              key={good}
              good={good}
              selectedGood={selectedGood}
              onClick={() => handleGoodClick(good)}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
