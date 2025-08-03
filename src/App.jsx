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

const goodsList = goods.map(item => {
  return { name: item, isChecked: false };
});

const filterGoods = goodItem => {
  const foundGood = goodsList.filter(item => goodItem === item.name);

  return foundGood[0].name;
};

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');
  const [checkedGood, setCheckedGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood === '' && (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <h1 className="title is-flex is-align-items-center">
        {selectedGood && `${selectedGood} is selected`}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setSelectedGood('');
              setCheckedGood('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goodsList.map(good => {
            return (
              <tr
                data-cy="Good"
                className={
                  checkedGood === good.name
                    ? `has-background-success-light`
                    : ''
                }
                onClick={() => {
                  setSelectedGood(filterGoods(good.name));
                  setCheckedGood(good.name);
                }}
              >
                <td>
                  {checkedGood === good.name ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={event => {
                        event.stopPropagation();
                        setSelectedGood('');
                        setCheckedGood('');
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
