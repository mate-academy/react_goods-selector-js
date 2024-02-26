export const SelectedGoodMessage = ({ selectedItem, onGoodClick }) =>
  selectedItem ? (
    <h1 className="title is-flex is-align-items-center">
      {selectedItem} is selected
      <button
        data-cy="ClearButton"
        onClick={() => {
          onGoodClick('');
        }}
        type="button"
        className="delete ml-3"
      />
    </h1>
  ) : (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );
