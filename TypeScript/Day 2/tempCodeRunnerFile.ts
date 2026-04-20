sortByNameDesc = [...data.products].sort((a, b) =>
    b.title.localeCompare(a.title)
  );