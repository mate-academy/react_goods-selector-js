import { useState } from 'react';
import 'bulma/css/bulma.css';
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



  const [selectedGood, setSelectedGood] = useState('Jam');
  let titleContent;
  if (selectedGood) {
    titleContent = (
      <>
        {selectedGood} is selected
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => setSelectedGood('')}
        />
      </>
    );
  } else {
    titleContent = 'No goods selected';
  }

  return (
    <main className="section container">
    <h1 className="title is-flex is-align-items-center" >{titleContent}</h1>

    <table className="table">
      <tbody>
          {goods.map((good) => {
            const isCurrentSelected = good === selectedGood;
            return(
            <tr data-cy= "Good" key={good} className={isCurrentSelected ? 'has-background-success-light' : ''}>
              <td>
                  {isCurrentSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  ) : (
                      <button
                        data-cy="AddButton"
                        type="button"
                        className="button"
                        onClick={() => setSelectedGood(good)}
                      >
                        +
                      </button>
                )}
              </td>

          <td data-cy="GoodTitle" className="is-vcentered">
              {good}
          </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </main>
  )
};
