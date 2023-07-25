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

export const Good = ({ good, setSelectedGood, selectedGood, setNoGoods }) => (
  <tr
    data-cy="Good"
    className={good === selectedGood ? 'has-background-success-light' : ''}
  >
    <td>
      <button
        onClick={() => {
          setSelectedGood(good);
          setNoGoods(false);
        }}
        data-cy={good === selectedGood ? `RemoveButton` : 'AddButton'}
        type="button"
        className={`button ${good === selectedGood ? 'is-info' : ''}`}
      >
        {good === selectedGood ? '-' : '+'}
      </button>
    </td>
    <td data-cy="GoodTitle" className="is-vcentered">
      {good}
    </td>
  </tr>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [noGoods, setNoGoods] = useState(false);

  return (
    <main className="section container">
      {noGoods === true && (
      <h1 className="title is-flexis-align-items-center">No goods selected</h1>
      )}

      {noGoods === false ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            onClick={() => {
              setNoGoods(true);
              setSelectedGood('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        </h1>
      ) : (
        ''
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
