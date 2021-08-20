module.exports = async function (context, req) {

    const newItem = {
        id: "5",
        name: "Pohutukawa",
        };
 
  if (newItem != null) { 
    context.bindings.outputDocument = newItem;
    context.res = {
        status: 200,
        body: { result: "success" },
    };
  } else {
    context.res = {
      status: 400,
      body: { result: "error" },
    };
  }
};