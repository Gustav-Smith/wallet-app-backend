const categoriesQueries = {
  findById: (id) => {
    return {
      name: "fatch-category",
      text: "SELECT * FROM categories WHERE id = $1",
      values: [Number(id)],
    };
  },
};

module.exports = categoriesQueries;