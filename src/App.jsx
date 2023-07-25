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

export const Good = ({ good, setSelectedGood, selectedGood, setNoGoods }) => {
  const IS_SELECTED_GOOD = good === selectedGood;

  return (
    <tr
      data-cy="Good"
      className={IS_SELECTED_GOOD ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          onClick={() => {
            if (IS_SELECTED_GOOD) {
              setSelectedGood('');
              setNoGoods(false);
            } else {
              setSelectedGood(good);
              setNoGoods(true);
            }
          }}
          data-cy={IS_SELECTED_GOOD ? `RemoveButton` : 'AddButton'}
          type="button"
          className={`button ${IS_SELECTED_GOOD ? 'is-info' : ''}`}
        >
          {IS_SELECTED_GOOD ? '-' : '+'}
        </button>
      </td>
      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [noGoods, setNoGoods] = useState(true);

  return (
    <main className="section container">
      {noGoods === false && (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
      )}

      {noGoods === true ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            onClick={() => {
              setNoGoods(false);
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        null
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <Good
              good={good}
              selectedGood={selectedGood}
              setSelectedGood={setSelectedGood}
              setNoGoods={setNoGoods}
              key={good}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
