let ls = localStorage.getItem("input");

let table = ls ? JSON.parse(ls) : [];

export let addData = (data) => {
  table.push(data);
  localStorage.setItem("input", JSON.stringify(table));
};

export let dataEdited = (data, index) => {
  console.log(data, index);
  let editdata = localStorage.getItem("input");
  table[index] = data;
  localStorage.setItem("input", JSON.stringify(table));
};

export let removedata = (index) => {
  let deleteData = localStorage.getItem("input");
  table.splice(index, 1);
  localStorage.setItem("input", JSON.stringify(table));
};
