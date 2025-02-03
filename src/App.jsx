import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [value, setValue] = useState('Jam');
  const [isHidden, setIsHidden] = useState(false);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value ? `${value} is selected` : 'No goods selected'}
        {!isHidden && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setIsHidden(true);
              setValue(null);
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
              className={classNames({
                'has-background-success-light': good === value,
              })}
            >
              <td>
                <button
                  data-cy={good === value ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': good === value,
                  })}
                  onClick={() => {
                    if (good === value) {
                      setValue(null);
                      setIsHidden(true);
                    } else {
                      setValue(good);
                      setIsHidden(false);
                    }
                  }}
                >
                  {good === value ? '-' : '+'}
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
