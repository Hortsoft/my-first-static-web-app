module.exports = function (context) {
  const newItem = {
    id: "5",
    name: "Pohutukawa",
  };

  context.bindings.outputDocument = newItem;
  context.done();
};
