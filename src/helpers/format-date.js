import moment from "moment";

const convertDate = (date) => moment(date).format("DD.MM.YYYY");
const convertDateInput = (date) => moment(date).format("YYYY-MM-DD");

export { convertDate, convertDateInput };