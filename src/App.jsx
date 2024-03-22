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
  const [checkIndex, setCheckIndex] = useState(goods.indexOf('Jam'));
  const [selectedGood, setSelectedGood] = useState(true);

  const handleGoodSelection = (currentGood, index) => {
    if (currentGood === good) {
      setGood('');
      setCheckIndex('');
      setSelectedGood(false);
    } else {
      setGood(currentGood);
      setCheckIndex(index);
      setSelectedGood(true);
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${good} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood(false);
              setGood('');
              setCheckIndex('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((x, index) => (
            <tr
              key={x}
              data-cy="Good"
              className={
                checkIndex === index && selectedGood
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={`${selectedGood && index === checkIndex ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${checkIndex === index && selectedGood ? 'is-info' : ''}`}
                  onClick={() => handleGoodSelection(x, index)}
                >
                  {checkIndex === index && selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
