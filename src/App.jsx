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

  const changeState = change => {
    setSelectedGood(change);
    // console.log('change');
    // add has-background-success-light
    // add has-text-black
    // remove has-background-success-light
    // remove has-text-black
  };

  const clearState = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {/*
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ?? 'No goods selected'}{' '}
        <button
          className="is-primary"
          type="button"
          onClick={() => {
            clearState(selectedGood);
          }}
        >
          Clear
        </button>
      </h1>
      */}

      <h1 className="title is-flex is-align-items-center">
        {!selectedGood ? 'No goods selected' : `${selectedGood} is selected`}{' '}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              clearState(selectedGood);
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  selectedGood === good
                    ? 'has-background-success-light has-text-black'
                    : ''
                }
              >
                <td>
                  {selectedGood === good ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        clearState(selectedGood);
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => {
                        changeState(good);
                      }}
                    >
                      +
                    </button>
                  )}
                </td>
                <td                   data-cy="GoodTitle"
                  className={selectedGood === good ? 'is-vcentered' : ''}>{good}</td>
              </tr>
            );
          })}
          {/* 
          <tr
            data-cy="Good"
            className={
              selectedGood === 'Dumplings'
                ? 'has-background-success-light has-text-black'
                : ''
            }
          >
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => {
                  changeState('Dumplings');
                }}
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={
              selectedGood === 'Jam'
                ? 'has-background-success-light has-text-black'
                : ''
            }
          >
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
                onClick={() => {
                  // changeState('Jam');
                  clearState(selectedGood);
                }}
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr
            data-cy="Good"
            className={
              selectedGood === 'Garlic'
                ? 'has-background-success-light has-text-black'
                : ''
            }
          >
            <td>
              <button
                data-cy="AddButton"
                type="button"
                className="button"
                onClick={() => {
                  changeState('Garlic');
                }}
              >
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr>
          */}
        </tbody>
      </table>
    </main>
  );
};
