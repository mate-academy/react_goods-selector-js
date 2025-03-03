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
  const [selected, setSelected] = useState('Jam')

  const unselectGood = () => {
    setSelected('')
  }

  const selectGood = (good) => {
    setSelected(good)
  }

  return (
  <main className="section container">
    {selected === '' ? (
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    ) : (
      <h1 className="title is-flex is-align-items-center">
        {selected} is selected
        <button data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={unselectGood}
        />
      </h1>
    )
  }

    <table className="table">
      <tbody>
      {goods.map(good => {
        return (
          <tr data-cy="Good" key={good} className={cn({
            "has-background-success-light": selected === good
          })}>
            <td>
              {
                selected === good ? (
                  <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={unselectGood}
                  >
                  -
                  </button>
                ) : (
                  <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => selectGood(good)}
                  >
                    +
                  </button>
                )
              }
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              {good}
            </td>
          </tr>
        )
      })}
      </tbody>
    </table>
  </main>
  )
};
