const url = "http://localhost:5000/api";

const regular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-z0-9*\d!@#$%^&*()_+-="№?~]{6,32}$/;

const doctors = [
  {
    name: "",
    id: "jkfhnawfoawjfawfawf",
  },
  {
    name: "Валентин",
    id: "jkr12331rfesgrsdgisa9e",
  },
  {
    name: "Геннадий",
    id: "kawkd0awdaj8wu98d8aw9yd",
  },
];

const tableHeader = ["Имя", "Врач", "Дата", "Жалобы", ""];

export { url, regular, doctors, tableHeader };
