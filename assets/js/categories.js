const categories = [];

/**
 * Add category (if not already in categories)
 * @param {string} category Category
 */
const addCategory = (category) => {
  if (!categories.includes(category)) {
    categories.push(category);
  }
};

/**
 * Set categories select
 */
const setCategories = () => {
  const div = document.getElementById("categories");

  const selector = document.createElement("select");

  const option = document.createElement("option");
  option.value = "";
  option.textContent = "No category filter";
  selector.appendChild(option);

  for (const category of categories) {
    const coption = document.createElement("option");
    coption.value = category;
    coption.textContent = category;
    selector.appendChild(coption);
  }

  selector.onchange = (event) => onCategoryChange(event);

  div.appendChild(selector);
};

/**
 * On category change
 * @param {Event} event Event
 */
const onCategoryChange = (event) => {
  console.log("Category: " + event.target.value);
};
