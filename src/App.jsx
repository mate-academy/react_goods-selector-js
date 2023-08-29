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
const SELECTED_GOOD_MESSAGE = ' is selected';
const NO_GOOD_SELECTED_MESSAGE = 'No goods selected';

export const App = () => {
  const [goodState, setGoodState] = useState(goods[8]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodState.length ? (
          <>
            {goodState + SELECTED_GOOD_MESSAGE}
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
          : NO_GOOD_SELECTED_MESSAGE
        }
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good) => {
            const stateComprationResult = good === goodState;

            return (
              <tr
                data-cy="Good"
                key={good}
                className={cn({
                  'has-background-success-light': stateComprationResult,
                })}
              >
                <td>
                  <button
                    data-cy={`${stateComprationResult ? 'RemoveButton' : 'AddButton'}`}
                    type="button"
                    className={`button ${stateComprationResult ? 'is-info' : EMPTY_SPACE}`}
                    onClick={() => {
                      setGoodState(stateComprationResult ? EMPTY_SPACE : good);
                    }}
                  >
                    {stateComprationResult
                      ? REMOVE_BUTTON_TEXT
                      : ADD_BUTTON_TEXT}
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
