const Category = require('../models/Category')

exports.createCategroyService = async (data) => {
    const result = await Category.create(data);
    return result;
}

exports.getCategoriesService = async () => {
    const result = await Category.find({});
    return result;
}

exports.getCategoryByIdService = async (id) => {
    const result = await Category.findOne({ _id: id });
    return result;
}

exports.updateCategoryByIdService = async (id, doc) => {
    const result = await Category.updateOne({ _id: id }, doc, {
        runValidators: true
    });
    return result;
}   