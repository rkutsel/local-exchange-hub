module.exports = {
  format_date: () => {
    const currentDate = new Date();
    return `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
  },
};
