# React Goods Selector JS

You are given an array of goods. Render them in a table with the ability to select one or clear the selection.

> Here is [the working version](https://mate-academy.github.io/react_goods-selector)

In this task, we use the [Bulma CSS framework](https://bulma.io/). It is already installed and imported so that you may use its classes.

1. Write everything inside the `App` (**don't** create additional components).
2. Save a `selectedGood` in the state (`Jam` is the default value).
3. Show the name of the selected good in the `h1.title` (`Jam is selected`).
4. Add the `has-background-success-light` class to the `tr` of the selected Good.
5. Show the `ClearButton` button in the title only when a good is selected.
6. `ClearButton` should clear the selection by setting an empty string to `selectedGood`.
7. The title should show `No goods selected` when there is no selected good.
8. Each good should have an `AddButton` to select the good.
    - only 1 good can be selected at a time;
9. Don't show `AddButton` when a good is selected.
10. Show `RemoveButton` for the selected good to clear the selection.

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://momos1703.github.io/react_goods-selector-js/) and add it to the PR description.


<!-- <tr data-cy="Good">
  <td>
    <button
      data-cy="AddButton"
      type="button"
      className="button"
      onClick={() => {
        setValue('Dumplings');
        setAvailible('-');
      }}
    >
      {`${availible}`}
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
      onClick={() => {
        setValue('Jam');
        setAvailible('-');
      }}
    >
      {`${availible}`}
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
      onClick={() => {
        setValue('Garlic');
        setAvailible('-');
      }}
    >
      {`${availible}`}
    </button>
  </td>

  <td data-cy="GoodTitle" className="is-vcentered">
    Garlic
  </td>
</tr> -->
