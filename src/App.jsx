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
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {getHeader(selectedGood, setSelectedGood)}

      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              key={good}
              data-cy="Good"
              className={
                  good === selectedGood
                    ? 'has-background-success-light'
                    : ''
                  }
            >
              <td>
                {getButton(good, selectedGood, setSelectedGood)}
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

function getHeader(selectedGood, setSelectedGood) {
  const reset = () => setSelectedGood(null);

  return (!selectedGood
    ? <h1 className="title is-flex is-align-items-center">No goods selected</h1>
    : (
      <h1 className="title is-flex is-align-items-center">
        {`${selectedGood} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={reset}
        />
      </h1>
    ));
}

function getButton(good, selectedGood, setSelectedGood) {
  let dataCy = 'AddButton';
  let className = 'button';
  let content = '+';

  if (good === selectedGood) {
    dataCy = 'RemoveButton';
    className = 'button is-info';
    content = '-';
  }

  const click = () => goodButtonCLick(good, selectedGood, setSelectedGood);

  return (
    <button
      data-cy={dataCy}
      type="button"
      className={className}
      onClick={click}
    >
      {content}
    </button>
  );
}

function goodButtonCLick(good, selectedGood, setSelectedGood) {
  if (good === selectedGood) {
    setSelectedGood(null);
  } else {
    setSelectedGood(good);
  }
}
