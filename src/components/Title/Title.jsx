import React from 'react';

export const Title = ({ good, onClear }) => {
  return (
    <>
      {good === '' ? (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => onClear('')}
          />
        </h1>
      )}
    </>
  );
};
