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
  const [message, setMessage] = useState('No goods selected');
  const [selectedGood, setSelectedGood] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <main className="section container">
      {/* <h1 className="title is-flex is-align-items-center">No goods selected</h1> */}

      <h1 className="title is-flex is-align-items-center">
        {message}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setMessage(`No goods selected`);
            setSelectedGood(null);
            setSelectedIndex(null);
          }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            return (
              <>
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    selectedIndex === index
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy="AddButton"
                      type="button"
                      className={cn('button', {
                        'is-info': selectedIndex === index,
                      })}
                      onClick={() => {
                        setMessage(`${good} is selected`);
                        setSelectedGood(selectedGood === good ? null : good);
                        setSelectedIndex(selectedGood === good ? null : index);
                      }}
                    >
                      {selectedGood === good ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              </>
            );
          })}

          {/* <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button data-cy="AddButton" type="button" className="button">
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr> */}
        </tbody>
      </table>
    </main>
  );
};
