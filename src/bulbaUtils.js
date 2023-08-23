export const checkSelectedGoods = (meal, selectedGood) => ({
  'has-background-success-light': selectedGood === meal,
});

export const checkInfoButtonColor = (meal, selectedGood) => ({
  'is-info': selectedGood === meal,
});
