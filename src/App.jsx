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
  const [selectGood, setSelectGood] = useState('No goods selected');
  const [styleForSelect, setStyleForSelect] = useState(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectGood}

        <button
          onClick={() => {
            setSelectGood('No goods selected');
            setStyleForSelect(null);
          }}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={cn({
                'has-background-success-light': styleForSelect === good,
              })}
            >
              <td>
                <button
                  onClick={() => {
                    setSelectGood(`${good} is selected`);
                    setStyleForSelect(good);
                  }}
                  data-cy="AddButton"
                  type="button"
                  className={cn('button', {
                    'is-info': styleForSelect === good,
                  })}
                >
                  +
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table">
        <tbody>
          <tr data-cy="Good">
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
