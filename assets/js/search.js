const minSearchLength = 3;

let fuse;
const keys = [];

const addKeys = (url, title, tags) => {
  keys.push({
    url,
    title,
    tags,
  });
};

const createIndex = () => {
  fuse = new Fuse(keys, {
    keys: ["title", "tags"],
    isCaseSensistive: false,
  });
};

const initSearch = () => {
  createIndex();

  const div = document.getElementById("search");
  const input = div.firstElementChild;

  input.addEventListener("input", onSearch);
};

const onSearch = (event) => {
  const value = event.target.value;

  if (value.length < minSearchLength) return;

  const results = document.getElementById("search-results");
  results.style.display = "block";

  const resultsContent = document.getElementById("search-results-content");
  resultsContent.innerHTML = "";

  const res = fuse.search(value);
  if (!res.length) {
    resultsContent.innerHTML = "No results found";
    return;
  }

  res.forEach((result) => {
    const url = result.item.url;
    const title = result.item.title;
    const tags = result.item.tags;

    const div = document.createElement("div");

    div.innerHTML = `
    <h2><a href="${url}">${title}</a></h2>
    <p class="tags"><strong>Tags:</strong> ${tags}</p>
    `;
    resultsContent.appendChild(div);
  });
};
