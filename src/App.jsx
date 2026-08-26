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
const NOT_SELECTED = '';
const STARTED_GOOD = 'Jam';

function PrintSelectedGood(good, selectGood) {
  const isSelected = good === NOT_SELECTED;
  const print = isSelected ? 'No goods selected' : `${good} is selected`;

  return (
    <h1 className="title is-flex is-align-items-center">
      {print}
      {!isSelected && (
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3 "
          onClick={() => selectGood(NOT_SELECTED)}
        />
      )}
    </h1>
  );
}

function PrintButton(isSelected, good, selectGood) {
  const dadaCy = isSelected ? 'RemoveButton' : 'AddButton';
  const className = `button${isSelected ? ' is-info' : ''}`;
  const onClick = () =>
    isSelected ? selectGood(NOT_SELECTED) : selectGood(good);

  const text = isSelected ? '-' : '+';

  return (
    <button
      data-cy={dadaCy}
      type="button"
      className={className}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function PrintGoods(selectedGood, selectGood) {
  return goods.map(good => {
    const isSelected = good === selectedGood;

    return (
      <tr
        data-cy="Good"
        key={good}
        className={isSelected ? 'has-background-success-light' : ''}
      >
        <td>{PrintButton(isSelected, good, selectGood)}</td>
        <td data-cy="GoodTitle" className="is-vcentered">
          {good}
        </td>
      </tr>
    );
  });
}

export const App = () => {
  const [selectedGood, selectGood] = useState(STARTED_GOOD);

  return (
    <main className="section container">
      {PrintSelectedGood(selectedGood, selectGood)}

      <table className="table">
        <tbody>{PrintGoods(selectedGood, selectGood)}</tbody>
      </table>
    </main>
  );
};
