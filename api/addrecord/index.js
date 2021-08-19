module.exports = async function (context, req) {

    const id = "4"; 
    const name = "Putaputaweta"; 

    if (id && name != null) {

        context.bindings.outputDocument = JSON.stringify({
                 id: "5",
                 name: "Pohutukawa"
        }); 
        context.res = {
            body: {'result': 'success'}
        };
    }else{
        context.res = {
            status: 400,
            body: {'result': 'error'}
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
