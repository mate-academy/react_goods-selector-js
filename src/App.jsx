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
  const [selected, setSelected] = useState('Jam');
  const titleText = selected ? `${selected} is selected` : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}
        {selected ? (
          <button
            onClick={() => setSelected('')}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        ) : null}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(item => (
            <tr
              data-cy="Good"
              key={item}
              className={
                item === selected ? 'has-background-success-light' : null
              }
            >
              <td>
                <button
                  onClick={() =>
                    selected === item ? setSelected('') : setSelected(item)
                  }
                  data-cy={item === selected ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={item === selected ? 'button is-info' : 'button'}
                >
                  {item === selected ? '-' : '+'}
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
