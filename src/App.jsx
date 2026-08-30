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
  const [selectedGood, setValue] = useState('Jam');
  const selectedItem = 'has-background-success-light';
  const noGoodsSelected = 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood === '' ? noGoodsSelected : `${selectedGood} is selected`}
        {selectedGood !== '' ? (
          <button
            data-cy="ClearButton"
            onClick={() => setValue('')}
            type="button"
            className="delete ml-3"
          />
        ) : (
          ''
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({ [selectedItem]: good === selectedGood })}
              key={good}
            >
              <td>
                <button
                  data-cy={good === selectedGood ? 'RemoveButton' : 'AddButton'}
                  onClick={() =>
                    good === selectedGood ? setValue('') : setValue(good)
                  }
                  type="button"
                  className={classNames('button', {
                    'is-info': good === selectedGood,
                  })}
                >
                  {good === selectedGood ? '-' : '+'}
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
