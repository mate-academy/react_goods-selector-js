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

const cn = require('classnames');

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const titleMessage = selectedGood.length === 0 ? (
    'No goods selected'
  ) : (`${selectedGood} is selected`);
  const setButtonTitle = good => (selectedGood === good ? '-' : '+');
  const setDataCy = good => (
    selectedGood === good ? 'RemoveButton' : 'AddButton'
  );

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleMessage}

        {!!selectedGood.length && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light':
                  selectedGood === good,
              })}
            >
              <td>
                <button
                  data-cy={setDataCy(good)}
                  type="button"
                  className={cn('button', {
                    'is-info': selectedGood === good,
                  })}
                  onClick={() => (selectedGood === good
                    ? setSelectedGood('')
                    : setSelectedGood(good))
                  }
                >
                  {setButtonTitle(good)}
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
