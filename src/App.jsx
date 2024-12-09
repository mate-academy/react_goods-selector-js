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
  const [activeIndex, setActiveIndex] = useState(8);

  const handleClick = index => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <main className="section container">
      {activeIndex !== null ? (
        <h1 className="title is-flex is-align-items-center">
          {goods[activeIndex]} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setActiveIndex(null)}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}
      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            return (
              <tr
                data-cy="Good"
                className={
                  activeIndex === index ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    data-cy={
                      activeIndex === index ? 'RemoveButton' : 'AddButton'
                    }
                    type="button"
                    className={
                      activeIndex === index ? 'button is-info' : 'button'
                    }
                    onClick={() => handleClick(index)}
                  >
                    {activeIndex === index ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
