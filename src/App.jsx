import { useState } from 'react';
import 'bulma/css/bulma.css';
import cn from 'classnames';
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

export const ItemGood = (
  {
    good, selectedGood, setselectedGood,
  },
) => {
  const [btnClickVerification, setBtnClVer] = useState(false);

  return (
    <tr data-cy="Good" className={`${btnClickVerification && 'has-background-success-light'}`}>
      <td>
        <button
          data-cy={`${btnClickVerification ? 'RemoveButton' : 'AddButton'}`}
          type="button"
          className={cn('button', {
            'is-info': btnClickVerification,
          })}
          onClick={
            ({ type }) => {
              if (type === 'click') {
                setBtnClVer(true);
                setselectedGood(good);
              }
            }
          }
        >
          {`${btnClickVerification ? '-' : '+'}`}
        </button>
      </td>

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};

export const App = () => {
  const [selectedGood, setselectedGood] = useState('Jam');
  const [goodsMod] = useState(goods);

  const setTextTitleAppear = () => {
    const showNoSelectionStr = document.querySelectorAll('.title')[0];

    if (selectedGood === '') {
      showNoSelectionStr.classList.remove('is-hidden');
    } else if (selectedGood !== '') {
      showNoSelectionStr.classList.add('is-hidden');
    }
  };

  return (
    <main className="section container">
      <h1 className={
        `title is-flex is-align-items-center ${selectedGood ? 'is-hidden' : ''}`
        }
      >
        No goods selected
      </h1>

      <h1 className={
        `title is-flex is-align-items-center ${!selectedGood ? 'is-hidden' : ''}`
        }
      >
        {`${selectedGood} is selected`}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={
            () => {
              setselectedGood('');
              setTextTitleAppear();
            }
          }
        />
      </h1>

      <table className="table">
        <tbody>
          {goodsMod.map(item => (
            <ItemGood
              key={item}
              good={item}
              selectedGood={selectedGood}
              setselectedGood={setselectedGood}
              setTextTitleAppear={setTextTitleAppear}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export const App1 = () => {
  const [good] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">No goods selected</h1>

      <h1 className="title is-flex is-align-items-center">
        {good}

        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>

      <table className="table">
        <tbody>
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
              Dumplings
            </td>
          </tr>

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
};
