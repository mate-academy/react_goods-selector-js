import 'bulma/css/bulma.css';
import { useState } from 'react';
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
  const [element, setElement] = useState('Jam');
  const [count, setCount] = useState(2);
  const selectedGood = count % 2 === 0;

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {element && selectedGood
          ? `${element} is selected`
          : `No goods selected`
        }

        <button
          onClick={() => {
            setElement('');
          }}
          data-cy={element && selectedGood ? 'ClearButton' : ''}
          type="button"
          className="delete ml-3"
          style={{ display: element && selectedGood ? 'block' : 'none' }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={element === good && selectedGood
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => {
                    setElement(good);
                    setCount(element === good ? count + 1 : 2);
                  }}
                  data-cy={element === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${element === good && selectedGood ? 'is-info' : ''}`}
                >
                  {element === good && selectedGood ? '-' : '+'}
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
