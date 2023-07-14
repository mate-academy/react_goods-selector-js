import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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

  function removeGood() {
    return setSelectedGood('');
  }

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        { selectedGood === ''
          ? 'No goods selected'
          : `${selectedGood} is selected`
        }

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeGood}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                classNames({
                  'has-background-success-light': good === selectedGood,
                })}
            >
              <td>
                <button
                  data-cy={
                    classNames(good === selectedGood
                      ? 'RemoveButton'
                      : 'AddButton')
                    }
                  type="button"
                  className={classNames('button', {
                    'is-info': good === selectedGood,
                  })}
                  onClick={() => {
                    setSelectedGood(good === selectedGood ? '' : good);
                  }}
                >
                  {good === selectedGood ? '-' : '+'}
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
