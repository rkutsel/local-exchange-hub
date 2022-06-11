module.exports = {
  format_date: () => {
    const currentDate = new Date();
    return `${currentDate.getMonth() + 1
    }-${currentDate.getDate()
    }-${currentDate.getFullYear()}`;
  },
  is_equal: (a, b) => {
    if(a == b) {
      return false;
    } else {
      return true;
    }
  }
} 
