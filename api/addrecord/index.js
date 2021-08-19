module.exports = async function (context, req) {

    const newItem = {
        id: "5",
        tree: "Pohutukawa",
        isComplete: false
      };

    if (newItem != null) {

       // const { resource: createdItem } = await container.items.create(newItem);

       // context.bindings.outputDocument = req.body;
       
        context.bindings.outputDocument = newItem;
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

