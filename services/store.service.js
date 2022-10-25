const Store = require("../models/Store");

exports.createStoreService = async (data) => {
    const result = await Store.create(data);
    return result;
}

exports.getStoresService = async () => {
    const result = await Store.find({});
    return result;
}

exports.getStoreByIdService = async (id) => {
    const result = await Store.findOne({ _id: id });
    return result;
}

exports.updateStoreByIdService = async (id, doc) => {
    console.log(id, doc);
    const result = await Store.updateOne({ _id: id }, doc, {
        runValidators: true
    });
    return result;
}