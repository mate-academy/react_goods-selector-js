import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classnames from 'classnames';

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
  const [selectedGood, setSelected]
    = useState(goods.find(item => item === 'Jam'));

  function removeBtnClickHandler() {
    setSelected(null);
  }

  function itemBtnClickHandler(item) {
    return item === selectedGood
      ? setSelected(null)
      : setSelected(goods.find(product => product === item));
  }

  return (
    <main className="section container">
      {!selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      {selectedGood && (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood}
          {' '}
          is selected

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeBtnClickHandler}
          />
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              className={classnames(item === selectedGood
                ? 'has-background-success-light'
                : '')}
              key={item}
            >
              <td>
                <button
                  data-cy={item === selectedGood ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classnames('button', item === selectedGood
                    ? 'is-info'
                    : '')}
                  onClick={() => itemBtnClickHandler(item)}
                >
                  {item === selectedGood ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {item}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
