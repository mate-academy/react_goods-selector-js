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
  const [selectedGood, updateGood] = useState('Jam');
  const isSelectedGood = item => item === selectedGood;

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {`${selectedGood} is selected`}

            <button
              onClick={() => updateGood('')}
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              className={`${isSelectedGood(item) && 'has-background-success-light'}`}
              key={item}
            >
              <td>
                <button
                  onClick={
                    () => updateGood(
                      isSelectedGood(item)
                        ? ''
                        : item,
                    )
                  }
                  data-cy={
                    isSelectedGood(item)
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={`button ${isSelectedGood(item) && 'is-info'}`}
                >
                  {isSelectedGood(item) ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
