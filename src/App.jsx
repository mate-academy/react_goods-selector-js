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
  const [selectedGood, setState] = useState('Jam');
  const [activeIndex, setActiveIndex] = useState(8);
  const [isActive, setButtonState] = useState(true);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood !== ''
          ? `${selectedGood} is selected`
          : 'No goods selected'}
        {selectedGood && (
          <button
            onClick={() => {
              setState('');
            }}
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((x, index) => (
            <tr
              className={
                activeIndex === index ? 'has-background-success-light' : null
              }
              data-cy={x}
              key={x}
            >
              <td>
                <button
                  onClick={() => {
                    setState(x);
                    handleToggle(index);
                    setButtonState(!isActive);
                  }}
                  data-cy="AddButton"
                  type="button"
                  className="button"
                >
                  {activeIndex === index ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {x}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
