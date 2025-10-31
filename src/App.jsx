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
  const getButtonFor = name => {
    if (name === selectedGood) {
      return (
        <button
          type="button"
          data-cy="RemoveButton"
          className='button is-info'
          onClick={() => setSelectedGood('')}
        >
          -
        </button>
      );
    }

    return (
      <button
        type="button"
        data-cy="AddButton"
        className='button'
        onClick={() => setSelectedGood(name)}
      >
        +
      </button>
    );
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood ? (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(name => (
            <tr
              key={name}
              data-cy="Good"
              className={
                name === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>{getButtonFor(name)}</td>
              <td data-cy="GoodTitle">{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
