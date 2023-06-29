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

const arrOfKeys = [];

function setRandomKey() {
  const randomKey = Math.floor(Math.random() * 1000);

  if (!arrOfKeys.includes(randomKey)) {
    arrOfKeys.push(randomKey);

    return randomKey;
  }

  return setRandomKey();
}

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const selectedTitle = selectedGood
    ? (
      <h1 className="title is-flex is-align-items-center">
        {`${selectedGood} is selected`}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </h1>
    )
    : (
      <h1 className="title is-flex is-align-items-center">
        No goods selected
      </h1>
    );

  return (
    <main className="section container">
      {selectedTitle}
      <table className="table">
        <tbody>
          {goods.map((good) => {
            const selected = good === selectedGood;

            return (
              <tr
                key={setRandomKey()}
                data-cy="Good"
                className={cn('', {
                  'has-background-success-light': selected,
                })}
              >
                <td>
                  <button
                    data-cy={selected
                      ? 'RemoveButton'
                      : 'AddButton'}
                    type="button"
                    onClick={() => (selected
                      ? setSelectedGood('')
                      : setSelectedGood((good)))}
                    className={cn('button', {
                      'is-info': selected,
                    })}
                  >
                    {
                      selected
                        ? '-'
                        : '+'
                    }
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
