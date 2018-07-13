module.exports = {
  callAll() {
    Array
      .from(arguments)
      .forEach(fn => fn());
  }
};
