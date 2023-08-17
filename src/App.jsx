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

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? (
          <>No goods selected</>
        ) : (
          <>
            <>{`${selectedGood} is selected`}</>

            <button
              onClick={() => {
                setGood('');
              }}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        )
        }
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                cn({ 'has-background-success-light': selectedGood === good })
              }
            >
              <td>
                <button
                  onClick={() => {
                    setGood(selectedGood === good ? '' : good);
                  }}
                  data-cy={selectedGood === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={cn('button', { 'is-info': selectedGood === good })}
                >
                  {selectedGood === good ? (
                    <>-</>
                  ) : (
                    <>+</>
                  )}
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
