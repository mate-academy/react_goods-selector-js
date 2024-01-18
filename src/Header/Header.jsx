export const Header = ({ goodName, handleDelete }) => (
  <>
    {goodName
      ? (
        <h1 className="title is-flex is-align-items-center">
          {`${goodName} is selected`}

          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleDelete}
          />
        </h1>
      )
      : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )
    }
  </>
);
