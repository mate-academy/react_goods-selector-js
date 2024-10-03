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

export const SelectItem = ({ select, setSelect, name }) => {
  return (
    <tr
      data-cy="Good"
      className={select === name ? 'has-background-success-light' : ''}
    >
      <td>
        <button
          data-cy={select === name ? 'RemoveButton' : 'AddButton'}
          type="button"
          className={`button ${select === name && ' is-info'}`}
          onClick={() => (select === name ? setSelect('') : setSelect(name))}
        >
          {select === name ? '-' : '+'}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {name}
      </td>
    </tr>
  );
};

export const App = () => {
  const [select, setSelect] = useState('Jam');

  return (
    <main className="section container">
      {select.length > 0 ? (
        <h1 className="title is-flex is-align-items-center">
          {select} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelect('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(el => {
            return (
              <SelectItem
                select={select}
                setSelect={setSelect}
                name={el}
                key={el}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
