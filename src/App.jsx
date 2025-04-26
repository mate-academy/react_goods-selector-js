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
  const [value, setValue] = useState('Jam is selected');
  const [selected, setSelected] = useState('Jam');
  const [visibility, setVisibility] = useState(true);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value}
        {visibility && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setValue('No goods selected');
              setVisibility(false);
              setSelected('');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              key={good}
              className={
                good === selected ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={selected === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={selected === good ? 'button is-info' : 'button'}
                  onClick={() => {
                    setValue(`${good} is selected`);
                    setSelected(good);
                    setVisibility(true);
                  }}
                >
                  {good === selected ? '-' : '+'}
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
