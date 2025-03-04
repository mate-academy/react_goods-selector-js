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
  const noSelected = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );
  const defaultGood = goods[goods.length - 2];
  const [goodState, setGoodState] = useState(defaultGood);
  const [value, setValue] = useState(
    <h1 className="title is-flex is-align-items-center">
      {defaultGood} is selected
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          setValue(noSelected);
          setGoodState('');
        }}
      />
    </h1>,
  );

  return (
    <main className="section container">
      {value}
      <table className="table">
        <tbody>
          {goods.map(good => (
            <tr
              data-cy="Good"
              className={
                goodState === good ? 'has-background-success-light' : ''
              }
            >
              <td>
                <button
                  data-cy={goodState === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={`button ${goodState === good ? 'is-info' : ''}`}
                  onClick={() => {
                    if (goodState === good) {
                      setValue(noSelected);
                      setGoodState('');
                    } else {
                      setGoodState(good);
                      setValue(
                        <h1 className="title is-flex is-align-items-center">
                          {good} is selected
                          <button
                            data-cy="ClearButton"
                            type="button"
                            className="delete ml-3"
                            onClick={() => {
                              setValue(noSelected);
                              setGoodState('');
                            }}
                          />
                        </h1>,
                      );
                    }
                  }}
                >
                  {goodState === good ? '-' : '+'}
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
