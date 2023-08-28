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

const EMPTY_SPACE = '';
const ADD_BUTTON_TEXT = '+';
const REMOVE_BUTTON_TEXT = '-';
const DEFAULT_GOOD_VALUE = 'Jam';

export const App = () => {
  const [goodState, setGoodState] = useState(DEFAULT_GOOD_VALUE);

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
                setGoodState(EMPTY_SPACE);
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
                  className={`button ${good === goodState ? 'is-info' : EMPTY_SPACE}`}
                  onClick={() => {
                    setGoodState(goodState === good ? EMPTY_SPACE : good);
                  }}
                >
                  {good === goodState ? REMOVE_BUTTON_TEXT : ADD_BUTTON_TEXT}
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
