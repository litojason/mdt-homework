import moment from "moment";

export const handleTransactionDate = (date) => {
  return moment(date).format("Do MMM");
};
