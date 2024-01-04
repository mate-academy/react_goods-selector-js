import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

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

const START_SELECTED_GOOD = 'Jam';

export const App = () => {
  const [selectedGood, setSelectedGood] = useState(START_SELECTED_GOOD);

  const selectGood = (name) => {
    const callback = () => setSelectedGood(name);

    return callback;
  };

  const unSelectGood = () => {
    setSelectedGood('');
  };

  const Good = ({ name }) => {
    const isSelected = name === selectedGood;

    let button = (
      <button
        data-cy="AddButton"
        type="button"
        className="button"
        onClick={selectGood(name)}
      >
        +
      </button>
    );

    if (isSelected) {
      button = (
        <button
          data-cy="RemoveButton"
          type="button"
          className="button is-info"
          onClick={unSelectGood}
        >
          -
        </button>
      );
    }

    return (
      <tr
        data-cy="Good"
        className={cn({ 'has-background-success-light': isSelected })}
      >
        <td>
          { button }
        </td>

        <td data-cy="GoodTitle" className="is-vcentered">
          { name }
        </td>
      </tr>
    );
  };

  const SelectedGood = ({ good }) => {
    if (!good) {
      return (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      );
    }

    return (
      <h1 className="title is-flex is-align-items-center">
        {`${good} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={unSelectGood}
        />
      </h1>
    );
  };

  return (
    <main className="section container">
      <SelectedGood good={selectedGood} />

      <table className="table">
        <tbody>
          {
            goods.map(
              (good, i) => <Good name={good} key={good} />,
            )
          }
        </tbody>
      </table>
    </main>
  );
};
