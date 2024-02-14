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
  const [selectedGood, chahgeSelectedGood] = useState('Jam');
  const [title, setTitle] = useState(`${selectedGood} is selected`);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            chahgeSelectedGood('');
            setTitle('No goods selected');
          }}
        />
      </h1>

      <table className="table">
        {goods.map(good => (
          <tbody>
            {good === selectedGood && (
            <tr data-cy="Good" className="has-background-success-light">
              <td>
                <button
                  data-cy="RemoveButton"
                  type="button"
                  className="button is-info"
                  onClick={() => {
                    chahgeSelectedGood(good);
                    setTitle(`${good} is selected`);
                  }}
                >
                  -
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
            )}
            {good !== selectedGood && (
              <tr data-cy="Good">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      chahgeSelectedGood(good);
                      setTitle(`${good} is selected`);
                    }}
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            )}
          </tbody>
        ))}
      </table>
    </main>
  );
};
