module.exports = function (context, req) {
  
   // const newItem = {
    //id: "5",
    //name: "Pohutukawa",
  //};

  //context.bindings.outputDocument = JSON.stringify(newItem);
  context.bindings.outputDocument = JSON.stringify({
      id: "5",
      name: "Pohutukawa"
  });

  context.done();

};
