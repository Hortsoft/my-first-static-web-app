module.exports = function (context, req) {
  const newItem = {
    id: "5",
    name: "Pohutukawa",
  };

  context.bindings.outputDocument = newItem;
  context.done();
};
