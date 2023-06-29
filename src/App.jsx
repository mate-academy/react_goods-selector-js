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
  const [good, setGood] = useState('Jam');
  const noGoodSelectedBlock = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  const goodSelectedBlock = (
    <h1 className="title is-flex is-align-items-center">
      {good}
      {' is selected'}

      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          setGood('');
        }}
      />
    </h1>
  );

  return (
    <>
      <main className="section container">
        {good === ''
          ? noGoodSelectedBlock
          : goodSelectedBlock
        }

        <table className="table">
          <tbody>
            {goods.map((goodElement, index) => {
              const isSelected = good === goodElement;

              return (
                <tr
                  data-cy="Good"
                  className={cn({
                    'has-background-success-light': isSelected,
                  })}
                  key={goodElement}
                >
                  <td>
                    <button
                      data-cy={
                        isSelected
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={cn('button', {
                        'is-info': isSelected,
                      })}
                      onClick={() => {
                        setGood(isSelected ? '' : goodElement);
                      }}
                    >
                      {isSelected ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {goodElement}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};
