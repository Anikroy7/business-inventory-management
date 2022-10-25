const { createCategroyService, getCategoriesService, getCategoryByIdService, updateCategoryByIdService } = require("../services/category.service")

module.exports.createCategory = async (req, res, next) => {
    try {
        const result = await createCategroyService(req.body);
        console.log(result);
        res.status(200).json({
            status: "Successfull",
            message: "Successfuly create the category",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't create the category",
            error: error.message
        })
    }
}



module.exports.getCategories = async (req, res, next) => {
    try {
        const result = await getCategoriesService();
        console.log(result);
        res.status(200).json({
            status: "Successfull",
            message: "Successfuly get all categories",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't get the categories",
            error: error.message
        })
    }
}


module.exports.getCategoryById = async (req, res, next) => {

    const { id } = req.params;
    try {
        const result = await getCategoryByIdService(id);
        console.log(result);
        if (!result) {
            return res.status(400).json({
                status: "Failed",
                message: "Couldn't get the category",
                error: error.message
            })
        }
        res.status(200).json({
            status: "Successfull",
            message: "Successfuly get the category by id",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't get the category",
            error: error.message
        })
    }
}

module.exports.updateCategoryById = async (req, res, next) => {

    const { id } = req.params;
    try {
        const result = await updateCategoryByIdService(id, req.body);
        console.log(result);
        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "Failed",
                message: "Please provide a valid id",
                error: error.message
            })
        }
        res.status(200).json({
            status: "Successfull",
            message: "Successfuly get the category by id",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't get the category",
            error: error.message
        })
    }
}