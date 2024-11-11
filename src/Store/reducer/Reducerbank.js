const initailvalue = {
  Amount: 0,
};
export const Reducerbank = (state = initailvalue, { type, payload }) => {
  switch (type) {
    case "Deposit":
      return { Amount: state.Amount + payload };
    case "withDraw":
      return { Amount: state.Amount - payload };
    case "checkbal":
      return state;
    default:
      return state;
  }
};
