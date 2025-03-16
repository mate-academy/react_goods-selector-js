import { useState, useEffect } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

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
  const [selectedGood, setSelectedGood] = useState(null);
  const [selectedValue, setSelectedValue] = useState('');
  const [alertNoGoods, setAlertGoods] = useState('No goods selected');

  useEffect(() => {
    // console.log(selectedGood + ' in effect');

    if (selectedGood !== null) {
      setSelectedValue(`${selectedGood} is selected`);
      setAlertGoods('');
    } else {
      setSelectedValue('');
      setAlertGoods('No goods selected');
    }
  }, [selectedGood]);

  return (
    <main className="section container">
      {/* No Selected */}
      <h1
        className={classNames('title', 'is-align-items-center', {
          'is-flex': selectedGood === null,
          hidden: selectedGood !== null,
        })}
      >
        {alertNoGoods}
      </h1>

      {/* Selected Good */}

      <h1
        className={classNames('title', 'is-align-items-center', {
          'is-flex': selectedGood !== null,
          hidden: selectedGood === null,
        })}
      >
        {selectedValue}

        <button
          data-cy="ClearButton"
          type="button"
          className={classNames('ml-3', 'delete', {
            hidden: selectedGood === null,
          })}
          onClick={() => {
            setSelectedGood(null);
          }}
        />
      </h1>

      {/* List if Goods */}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={classNames({
                'has-background-success-light': selectedGood === good,
              })}
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedGood(prev => (prev === good ? null : good));
                  }}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  {selectedGood === good ? '-' : '+'}
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
