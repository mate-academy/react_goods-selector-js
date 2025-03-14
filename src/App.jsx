import 'bulma/css/bulma.css';
import './App.scss';
import cn from 'classnames';
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
  const defaultSelectedGood = 'Jam';
  const [selectedGood, setSelectedGood] = useState(defaultSelectedGood);
  const [selectedState, setSelectedState] = useState(!!defaultSelectedGood);

  return (
    <main className="section container">
      {selectedState ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedState(false);
              setSelectedGood('');
            }}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={cn({
                'has-background-success-light':
                  good === selectedGood && selectedState,
              })}
            >
              <td>
                <button
                  data-cy={
                    good === selectedGood && selectedState
                      ? 'RemoveButton'
                      : 'AddButton'
                  }
                  type="button"
                  className={cn('button', {
                    'is-info': good === selectedGood && selectedState,
                  })}
                  onClick={() => {
                    if (good === selectedGood && selectedState) {
                      setSelectedState(false);
                      setSelectedGood('');
                    } else {
                      setSelectedState(true);
                      setSelectedGood(good);
                    }
                  }}
                >
                  {good === selectedGood && selectedState ? '-' : '+'}
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
