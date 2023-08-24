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
  const [good, setGood] = useState('Jam');

  const goodClass = item => item === good
    ? 'has-background-success-light'
    : '';

  const deleteButton = (
    <button
      data-cy="RemoveButton"
      type="button"
      className="button is-info"
      onClick={() => setGood('')}
    >
      -
    </button>
  );

  const addButton = item => (
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => setGood(item)}
    >
      +
    </button>
  );

  const defaultTitle = (
    <h1 className="title is-flex is-align-items-center">
      No goods selected
    </h1>
  );

  const selectedTitle = (
    <h1 className="title is-flex is-align-items-center">
      {`${good} is selected`}

      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => setGood('')}
      />
    </h1>
  );
  const title = !good
    ? defaultTitle
    : selectedTitle;

  const goodsList = goods.map(item => (
    <tr
      key={item}
      data-cy="Good"
      className={goodClass(item)}
    >
      <td>
        {item === good ? deleteButton : addButton(item)}
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {item}
      </td>
    </tr>
  ));

  return (
    <main className="section container">
      {title}
      <table className="table">
        <tbody>
          {goodsList}
        </tbody>
      </table>
    </main>
  );
};
