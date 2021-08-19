module.exports = async function (context, req) {
  req.body.id = "4";
  req.body.name = "Putaputaweta";

  const name = req.body.name;

  if (name != null) {
    context.bindings.outputDocument = req.body;
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
