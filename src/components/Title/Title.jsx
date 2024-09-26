export const Title = ({ goodValue, setGoodValue }) => (
  <h1 className="title is-flex is-align-items-center">
    {goodValue ? `${goodValue} is selected` : 'No goods selected'}
    {goodValue && (
      <button
        data-cy="ClearButton"
        type="button"
        className="delete ml-3"
        onClick={() => {
          setGoodValue('');
        }}
      />
    )}
  </h1>
);
