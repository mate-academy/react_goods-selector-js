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
  const handleClickGood = clickedGood => {
    if (selectedGood === clickedGood) {
      setSelectedGood('');
    } else {
      setSelectedGood(clickedGood);
    }
  };

  const noGoods = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );
  const isGoods = (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          handleClickGood(selectedGood);
        }}
      />
    </h1>
  );

  return (
    <main className="section container">
      {selectedGood ? isGoods : noGoods}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                good === selectedGood ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={
                    selectedGood === good ? 'button is-info' : 'button'
                  }
                  onClick={() => {
                    handleClickGood(good);
                  }}
                >
                  {selectedGood === good ? '-' : '+'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
