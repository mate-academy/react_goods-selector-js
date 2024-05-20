import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

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
  const [title, setTitle] = useState('Jam');
  const [buttonText, setButtonText] = useState('-');
  const [buttonDataCy, setButtonDataCy] = useState('RemoveButton');
  const handleButtonClick = good => {
    if (title === good) {
      setTitle('No goods selected');
      setButtonDataCy('AddButton');
      setButtonText('+');
    } else {
      setTitle(good);
      setButtonDataCy('RemoveButton');
      setButtonText('-');
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title !== 'No goods selected'
          ? `${title} is selected`
          : 'No goods selected'}
        {title !== 'No goods selected' && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setTitle('No goods selected');
            }}
          />
        )}
      </h1>
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={classNames({
                'has-background-success-light': good === title,
              })}
              key={good}
            >
              <td>
                <button
                  data-cy={good === title ? buttonDataCy : 'AddButton'}
                  type="button"
                  className={`button ${classNames({ 'is-info': good === title })}`}
                  onClick={() => {
                    handleButtonClick(good);
                  }}
                >
                  {good === title ? buttonText : '+'}
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
