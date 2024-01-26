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
  const [selectedGood, setSelectedGood] = useState(goods[8]);

  let buttonValue = '+';
  let buttonClassName = 'button';
  let buttonData = 'AddButton';
  let backgroundClassName = '';

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGood} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
            }}
          />
        </h1>
      ) : (
        <h1
          className="title is-flex is-align-items-center"
        >
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map((good) => {
            if (good === selectedGood) {
              buttonValue = '-';
              buttonClassName = 'button is-info';
              buttonData = 'RemoveButton';
              backgroundClassName = 'has-background-success-light';
            } else {
              buttonValue = '+';
              buttonClassName = 'button';
              buttonData = 'AddButton';
              backgroundClassName = '';
            }

            return (
              <tr data-cy="Good" className={backgroundClassName}>
                <td>
                  <button
                    data-cy={buttonData}
                    type="button"
                    className={buttonClassName}
                    onClick={() => {
                      if (good !== selectedGood) {
                        buttonValue = '-';
                        buttonClassName = 'button is-info';
                        buttonData = 'RemoveButton';
                        backgroundClassName = 'has-background-success-light';
                        setSelectedGood(good);
                      } else {
                        buttonValue = '+';
                        buttonClassName = 'button';
                        buttonData = 'AddButton';
                        backgroundClassName = '';
                        setSelectedGood('');
                      }
                    }}
                  >
                    {buttonValue}
                  </button>
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
