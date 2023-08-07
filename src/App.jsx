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
  const [selectedGood, setValue] = useState('Jam');

  const handleSelect = good => () => setValue(good);

  const renderActionButton = (good, isSelected) => (
    <button
      onClick={handleSelect(isSelected ? '' : good)}
      data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
      type="button"
      className={cn('button', { 'is-info': isSelected })}
    >
      {isSelected ? '-' : '+'}
    </button>
  );

  return (
    <div className="App">
      <main className="section container">
        <div className="is-flex is-align-items-center">
          <h1 className="title">
            {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
          </h1>

          {selectedGood && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={handleSelect('')}
            />
          )}
        </div>

        <table className="table">
          <tbody>
            {goods.map((good) => {
              const isSelected = good === selectedGood;

              return (
                <tr
                  data-cy="Good"
                  key={good}
                  className={cn({ 'has-background-success-light': isSelected })}
                >
                  <td>{renderActionButton(good, isSelected)}</td>
                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};
