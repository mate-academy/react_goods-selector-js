import classNames from 'classnames';
import React from 'react';

export const Good = ({ selectedGood, onSelect, good }) => {
  return (
    <tr
      data-cy="Good"
      className={classNames({
        'has-background-success-light': good === selectedGood,
      })}
    >
      <td>
        {selectedGood === good ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={() => onSelect('')}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => onSelect(good)}
          >
            +
          </button>
        )}
      </td>
      <td />

      <td data-cy="GoodTitle" className="is-vcentered">
        {good}
      </td>
    </tr>
  );
};
