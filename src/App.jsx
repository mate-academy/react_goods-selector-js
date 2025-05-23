import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import clsx from 'clsx';

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

const GoodButton = ({ id, dataCy, className, onClick, sign }) => (
  <button
    id={id}
    data-cy={dataCy}
    type="button"
    className={className}
    onClick={onClick}
  >
    {sign}
  </button>
);

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const onClickAddButton = event => {
    setSelectedGood(event.currentTarget.id);
  };

  const onClickRemoveButton = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is` : 'No goods'} selected
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={onClickRemoveButton}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isGoodSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={clsx({
                  'has-background-success-light': good === selectedGood,
                })}
              >
                <td>
                  {isGoodSelected ? (
                    <GoodButton
                      id={good}
                      dataCy="RemoveButton"
                      className="button is-info"
                      onClick={onClickRemoveButton}
                      sign="-"
                    />
                  ) : (
                    <GoodButton
                      id={good}
                      dataCy="AddButton"
                      className="button"
                      onClick={onClickAddButton}
                      sign="+"
                    />
                  )}
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
