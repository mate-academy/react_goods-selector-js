import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
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

  function handleSelectGood(item) {
    if (selectedGood === item) {
      setSelectedGood('');
    } else {
      setSelectedGood(item);
    }
  }

  function handleClear() {
    setSelectedGood('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => {
            return (
              <tr
                key="item"
                data-cy="Good"
                className={classNames({
                  'has-background-success-light': selectedGood === item,
                })}
              >
                <td>
                  <button
                    data-cy={
                      selectedGood === item ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={classNames('button', {
                      'is-info': selectedGood === item,
                    })}
                    onClick={() => handleSelectGood(item)}
                  >
                    {selectedGood === item ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {item}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
