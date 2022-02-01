// const createIndex = (keys) => {

// }

const initSearch = () => {
  const div = document.getElementById("search");
  const input = div.firstElementChild;

  input.addEventListener("input", onSearch);
};

const onSearch = (event) => {
  console.log("Search: " + event.target.value);
};
