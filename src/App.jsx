import 'bulma/css/bulma.css';
import { useState } from 'react';
import cn from 'classnames';

import './App.scss';
import { Title } from './components/Title';

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
  const [goodValue, setGoodValue] = useState('Jam');

  return (
    <main className="section container">
      <Title goodValue={goodValue} setGoodValue={setGoodValue} />

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light': goodValue === good,
              })}
            >
              <td>
                <button
                  data-cy={good === goodValue ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${cn({ 'is-info': good === goodValue })}`}
                  onClick={() => setGoodValue(good === goodValue ? '' : good)}
                >
                  {good === goodValue ? '-' : '+'}
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
