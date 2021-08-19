module.exports = async function (context, req) {

    const newItem = {
        id: "5",
        name: "Pohutukawa"
      };
       
      context.bindings.outputDocument = newItem;
        context.done();
 
};

