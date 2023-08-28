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
  const [goodState, setGoodState] = useState('Jam');

  const selectedGoodMessage = `${goodState} is selected`;
  const noGoodSelectedMessage = 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodState.length ? (
          <>
            {selectedGoodMessage}
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => {
                setGoodState('');
              }}
            />
          </>
        )
          : noGoodSelectedMessage
        }
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={cn({
                'has-background-success-light': good === goodState,
              })}
            >
              <td>
                <button
                  data-cy={`${good === goodState ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${good === goodState ? 'is-info' : ''}`}
                  onClick={() => {
                    setGoodState(goodState === good ? '' : good);
                  }}
                >
                  {good === goodState ? '-' : '+'}
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
