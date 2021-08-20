module.exports = function (context, req) {

  const id = "5";
  const name = "Putaputaweta";
 
  if (name != null) {
    context.bindings.outputDocument.nam = name;
    context.bindings.outputDocument.id = id;
    context.res = {
      body: { result: "success" },
    };
  } else {
    context.res = {
      status: 400,
      body: { result: "error" },
    };
  }
};
//module.exports = function (context, req) {

// const newItem = {
//id: "5",
//name: "Pohutukawa",
//};

//context.bindings.outputDocument = JSON.stringify(newItem);
// context.bindings.outputDocument = JSON.stringify({
//    id: "5",
//    name: "Pohutukawa"
//});

//context.done();

//};
