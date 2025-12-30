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
  const [good, setGood] = useState('Jam');
  const [history, setHistory] = useState(0);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {good ? <>{good} is selected</> : <>No goods selected</>}
        {good !== '' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          <tr
            data-cy="Good"
            className={`${good === 'Dumplings' && 'has-background-success-light'}`}
          >
            <td>
              <button
                data-cy={`${good === 'Dumplings' ? 'RemoveButton' : 'AddButton'}`}
                type="button"
                className="button"
                onClick={() => setGood(good === 'Dumplings' ? '' : 'Dumplings')}
              >
                {good === 'Dumplings' ? <>-</> : <>+</>}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${good === 'Jam' && 'has-background-success-light'}`}
          >
            <td>
              <button
                data-cy={`${good === 'Jam' ? 'RemoveButton' : 'AddButton'}`}
                type="button"
                className="button is-info"
                onClick={() => setGood(good === 'Jam' ? '' : 'Jam')}
              >
                {good === 'Jam' ? <>-</> : <>+</>}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={`${good === 'Garlic' && 'has-background-success-light'}`}
          >
            <td>
              <button
                data-cy={`${good === 'Garlic' ? 'RemoveButton' : 'AddButton'}`}
                type="button"
                className="button"
                onClick={() => setGood(good === 'Garlic' ? '' : 'Garlic')}
              >
                {good === 'Garlic' ? <>-</> : <>+</>}
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};
