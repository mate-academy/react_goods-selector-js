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
  const changeGood = (good, text) => {
    chahgeSelectedGood(good);
    setTitle(text);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => changeGood('', 'No goods selected')}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr>
              {good === selectedGood && (
                <tr
                  data-cy="Good"
                  className="has-background-success-light"
                  key="selectedProduct"
                >
                  <td>
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      key="buttonRemove"
                      onClick={() => changeGood(good, `${good} is selected`)}
                    >
                      -
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              )
              }
              {good !== selectedGood && (
              <tr data-cy="Good" key="product">
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    key="buttonAdd"
                    onClick={() => changeGood(good, `${good} is selected`)}
                  >
                    +
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
              )
            }
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
