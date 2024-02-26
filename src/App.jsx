import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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
  const SelectedMessage = ({ selectedGood }) =>
    selectedGood ? (
      <h1 className="title is-flex is-align-items-center">
        {selectedGood} is selected
        <button
          data-cy="ClearButton"
          onClick={() => {
            setSelectedGood('');
          }}
          type="button"
          className="delete ml-3"
        />
      </h1>
    ) : (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    );

  const Good = ({ good }) => (
    <tr
      key={good}
      className={cn({
        'has-background-success-light': good === selectedGood,
      })}
      onClick={() => {
        setSelectedGood(good === selectedGood ? false : good);
      }}
      data-cy="Good"
    >
      <td>
        <Button good={good} />
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );

  const Button = ({ good }) =>
    good === selectedGood ? (
      <button data-cy="RemoveButton" type="button" className="button is-info">
        -
      </button>
    ) : (
      <button data-cy="AddButton" type="button" className="button">
        +
      </button>
    );

  return (
    <main className="section container">
      <SelectedMessage selectedGood={selectedGood} />

      <table className="table">
        <tbody>
          {goods.map(good => {
            return <Good good={good} key={good} />;
          })}
        </tbody>
      </table>
    </main>
  );
};
