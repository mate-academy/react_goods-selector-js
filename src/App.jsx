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

export const Good = ({ good }) => {
  const [buttonClass, setButtonClass] = useState('button');
  const [bg, setBg] = useState('');
  const [operator, setOperator] = useState('+');
  const [button, setButton] = useState('AddButton');

  return (
    <tr
      data-cy="Good"
      className={bg}
    >
      <td>
        <button
          onClick={(event) => {
            if (buttonClass === 'button is-info') {
              setButtonClass(`button`);
            } else {
              setButtonClass('button is-info');
            }

            if (operator === '-') {
              setOperator('+');
            } else {
              setOperator('-');
            }

            if (bg === '') {
              setBg('has-background-success-light');
            } else {
              setBg('');
            }

            if (button === 'AddButton') {
              setButton('RemoveButton');
            } else {
              setButton('AddButton');
            }
          }}
          data-cy={button}
          type="button"
          className={buttonClass}
        >
          {operator}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

export const App = () => (
  <main className="section container">
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>

    <h1 className="title is-flex is-align-items-center">
      Jam is selected

      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
      />
    </h1>

    <table className="table">
      <tbody>
        {goods && goods.map(good => (
          <Good good={good} key={good} />
        ))}

        <tr data-cy="Good" className="has-background-success-light">
          <td>
            <button
              data-cy="RemoveButton"
              type="button"
              className="button is-info"
            >
              -
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Jam
          </td>
        </tr>

        <tr data-cy="Good">
          <td>
            <button
              data-cy="AddButton"
              type="button"
              className="button"
            >
              +
            </button>
          </td>

          <td data-cy="GoodTitle" className="is-vcentered">
            Garlic
          </td>
        </tr>
      </tbody>
    </table>
  </main>
);
