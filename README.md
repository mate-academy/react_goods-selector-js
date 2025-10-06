# React Goods Selector JS

You are given an array of goods. Render them in a table with the ability to select one or clear the selection.

> Here is [the working version](https://mate-academy.github.io/react_goods-selector)

In this task, we use the [Bulma CSS framework](https://bulma.io/). It is already installed and imported so that you may use its classes.

1. Write everything inside the `App` (**don't** create additional components).
1. Save a `selectedGood` in the state (`Jam` is the default value).
1. Show the name of the selected good in the `h1.title` (`Jam is selected`).
1. Add the `has-background-success-light` class to the `tr` of the selected Good.
1. Show the `ClearButton` button in the title only when a good is selected.
1. `ClearButton` should clear the selection by setting an empty string to `selectedGood`.
1. The title should show `No goods selected` when there is no selected good.
1. Each good should have an `AddButton` to select the good.
    - only 1 good can be selected at a time;
1. Don't show `AddButton` when a good is selected.
1. Show `RemoveButton` for the selected good to clear the selection.

У цьому завданні ми використовуємо [CSS-фреймворк Bulma](https://bulma.io/). Він вже встановлений та імпортований, тому ви можете використовувати його класи.

1. Напишіть все всередині `App` (**не** створюйте додаткові компоненти).

1. Збережіть `selectedGood` у стані (`Jam` – значення за замовчуванням).

1. Покажіть назву вибраного товару в `h1.title` (`Jam вибрано`).

1. Додайте клас `has-background-success-light` до `tr` вибраного товару.

1. Показуйте кнопку `ClearButton` у заголовку лише тоді, коли товар вибрано.

1. `ClearButton` має очистити вибір, встановивши порожній рядок у `selectedGood`.

1. Заголовок повинен показувати `No goods selected`, коли товар не вибрано.

1. Кожен товар повинен мати `AddButton` для вибору товару.

- одночасно можна вибрати лише 1 товар;
1. Не показувати кнопку «Додати», коли товар вибрано.
1. Показувати кнопку «Видалити» для вибраного товару, щоб очистити вибір.



## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://ElinaMrachkovska.github.io/react_goods-selector-js/) and add it to the PR description.
