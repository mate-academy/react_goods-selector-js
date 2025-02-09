import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

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

const Title = ({ selectedGood, setSelectedGood }) => (
  <>
    {selectedGood !== '' ? `${selectedGood} is` : 'No goods'} selected
    {selectedGood !== '' && (
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => setSelectedGood('')}
      />
    )}
  </>
);

const Good = ({ selectedGood, setSelectedGood, good }) => (
  <>
    <td>
      <button
        data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
        type="button"
        className={selectedGood === good ? 'button is-info' : 'button'}
        onClick={() =>
          selectedGood === good ? setSelectedGood('') : setSelectedGood(good)
        }
      >
        {selectedGood === good ? '-' : '+'}
      </button>
    </td>

    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        <Title selectedGood={selectedGood} setSelectedGood={setSelectedGood} />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                selectedGood === good && 'has-background-success-light'
              }
            >
              <Good
                selectedGood={selectedGood}
                setSelectedGood={setSelectedGood}
                good={good}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
