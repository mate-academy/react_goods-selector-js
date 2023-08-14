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

export const Good = ({ good, selectedGood, setIsSelected }) => {
  const addGood = () => {
    if (selectedGood === good) {
      setIsSelected(null);
    } else {
      setIsSelected(good);
    }
  };

  return (
    <tr
      data-cy="Good"
      className={selectedGood === good ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={`button${selectedGood === good ? ' is-info' : ''}`}
          onClick={addGood}
        >
          {selectedGood === good ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

export const App = () => {
  const selectedByDefault = 'Jam';
  const [isSelected, setIsSelected] = useState(selectedByDefault);

  const clearValue = () => {
    setIsSelected(null);
  };

  return (
    <main className="section container">
      {isSelected ? (
        <h1 className="title is-flex is-align-items-center">
          {`${isSelected} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clearValue}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good
              good={good}
              key={good}
              selectedGood={isSelected}
              setIsSelected={setIsSelected}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default App;
