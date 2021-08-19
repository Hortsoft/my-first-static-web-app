module.exports = async function (context, req) {

    const newItem = {
        id: "5",
        name: "Pohutukawa",
        isComplete: false
      };

    if (newItem != null) {

        context.bindings.outputDocument = newItem;
        context.done();
        
    }else{
        context.res = {
            status: 400,
            body: {'result': 'error'}
        };
    }
};

