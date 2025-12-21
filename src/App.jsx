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
  const [selectedGoods, setSelectedGoods] = useState(goods[8]);

  return (
    <main className="section container">
      {selectedGoods === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {`${selectedGoods} is selected`}
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGoods('');
            }}
          />
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                selectedGoods === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={
                    selectedGoods === good ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={
                    selectedGoods === good ? 'button is-info' : 'button'
                  }
                  onClick={
                    selectedGoods === good
                      ? // eslint-disable-next-line prettier/prettier
                      () => {setSelectedGoods('');}
                      : // eslint-disable-next-line prettier/prettier
                      () => {setSelectedGoods(good);}
                  }
                >
                  {selectedGoods === good ? '-' : '+'}
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
