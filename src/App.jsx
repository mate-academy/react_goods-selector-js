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
  const [selectedElement, setSelectedElement] = useState('Jam');

  return (
    <main className="section container">

      <h1 className="title is-flex is-align-items-center">
        {selectedElement
          ? `${selectedElement} is selected`
          : `No goods selected`
        }

        <button
          onClick={() => {
            setSelectedElement('');
          }}
          data-cy={selectedElement ? 'ClearButton' : ''}
          type="button"
          className="delete ml-3"
          style={{ display: selectedElement ? 'block' : 'none' }}
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={selectedElement === good
                ? 'has-background-success-light' : ''}
            >
              <td>
                <button
                  onClick={() => {
                    setSelectedElement(selectedElement === good
                      ? null : good);
                  }}
                  data-cy={selectedElement === good
                    ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${selectedElement === good ? 'is-info' : ''}`}
                >
                  {selectedElement === good ? '-' : '+'}
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
