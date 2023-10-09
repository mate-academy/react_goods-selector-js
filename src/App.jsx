import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from 'classnames';

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

  const handleTitleChange = (good) => {
    if (good === title) {
      setTitle(null);

      return;
    }

    setTitle(good);
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {title
          ? `${title} is selected`
          : 'No goods selected'
        }

        {title
          && (
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              aria-label="clearTitle"
              onClick={() => handleTitleChange(null)}
            />
          )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good) => {
            const isSelectedGood = good === title;

            return (
              <tr
                data-cy="Good"
                key={uuidv4()}
                className={
                  classes({ 'has-background-success-light': isSelectedGood })
                }
              >
                <td>
                  <button
                    data-cy={isSelectedGood
                      ? 'RemoveButton'
                      : 'AddButton'
                    }
                    aria-label={isSelectedGood
                      ? 'clearTitle'
                      : 'setTitle'
                    }
                    type="button"
                    className={
                      classes('button', { 'is-info': isSelectedGood })
                    }
                    onClick={() => handleTitleChange(good)}
                  >
                    {isSelectedGood
                      ? '-'
                      : '+'
                    }
                  </button>
                </td>

                <td
                  data-cy="GoodTitle"
                  className="is-vcentered"
                >
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
