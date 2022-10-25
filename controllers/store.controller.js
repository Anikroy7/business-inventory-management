
const { getStoresService, createStoreService, getStoreByIdService, updateStoreByIdService } = require("../services/store.service");

// Create A Store
module.exports.createStore = async (req, res, next) => {

    try {
        const result = await createStoreService(req.body)
        res.status(200).json({
            status: "Successfull",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't create a store",
            error: error.message
        })
    }
}

// Get The Store
module.exports.getStores = async (req, res, next) => {

    try {
        const store = await getStoresService()
        res.status(200).json({
            status: "Successfull get the stores",
            result: store
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't get a store",
            error: error.message
        })
    }
}


// Get Store By Id
module.exports.getStoreById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const store = await getStoreByIdService(id);
        if (!store) {
            return res.status(400).json({
                status: "Failed",
                message: "Please give a valid Id",
            })
        }

        res.status(200).json({
            status: "Successfull get the store By Id",
            result: store
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't get a store by id",
            error: error.message
        })
    }
}


// Update Store By Id
module.exports.updateStoreById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await updateStoreByIdService(id, req.body);
        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "Failed",
                message: "Please give a valid Id",
            })
        }
        res.status(200).json({
            status: "Successfull update the store By Id",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Couldn't update a store by id",
            error: error.message
        })
    }
}