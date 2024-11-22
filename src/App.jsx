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
  const [activeIndex, setActiveIndex] = useState(8);

  const handleRowClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <main className="section container">
      <h1
        className={classNames('title', {
          'is-flex is-align-items-center': activeIndex === null,
        })}
      >
        {activeIndex === null
          ? 'No goods selected'
          : `${goods[activeIndex]} is selected`}
        {activeIndex !== null && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setActiveIndex(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((n, index) => (
            <tr
              data-cy="Good"
              key={n}
              className={classNames({
                'has-background-success-light': activeIndex === index,
              })}
            >
              <td>
                <button
                  data-cy={activeIndex === index ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': activeIndex === index,
                  })}
                  onClick={() => handleRowClick(index)}
                >
                  {activeIndex === index ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {n}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
