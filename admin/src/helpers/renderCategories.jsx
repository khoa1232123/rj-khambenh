const renderCategories = (categories, child = 0) => {
  const data = [];
  let line = "";

  for (let i = 0; i < child; i++) {
    line = line + "-- ";
  }

  child++;

  for (let cat of categories) {
    data.push(
      <option key={cat._id} value={cat._id}>
        {line + cat.title}
      </option>
    );
    if (cat.children.length > 0) {
      data.push(renderCategories(cat.children, child));
    }
  }

  return data;
};

const renderMenuCategories = (categories) => {
  const data = [];

  for (let cat of categories) {
    data.push(
      <li key={cat._id}>
        {cat.title}
        {cat.children.length > 0 ? (
          <ul>{renderMenuCategories(cat.children)}</ul>
        ) : (
          ""
        )}
      </li>
    );
  }

  return data;
};

const renderDataCategories = (categories, child = 0) => {
  const data = [];
  let line = "";

  for (let i = 0; i < child; i++) {
    line = line + "-- ";
  }

  child++;

  for (let cat of categories) {
    data.push({ ...cat, title: line + cat.title });
    if (cat.children.length > 0) {
      data.push(...renderDataCategories(cat.children, child));
    }
  }

  return data;
};

export { renderCategories, renderMenuCategories, renderDataCategories };
