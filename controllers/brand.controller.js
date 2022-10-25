const { createBrandService, getBrandsService, getBrandByIdService, updateBrandByIdService } = require("../services/brand.service")


// create a brand
module.exports.createBrand = async (req, res, next) => {

    try {
        const result = await createBrandService(req.body);
        res.status(200).json({
            status: "Successfull",
            message: "Successfully create the brand",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "couldn't create the brand",
            error: error.message
        })
    }

}


// get all brands
module.exports.getBrands = async (req, res, next) => {

    try {
        const result = await getBrandsService();
        res.status(200).json({
            status: "Successfull",
            message: "Successfully get the brands",
            brands: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "couldn't get the brands",
            error: error.message
        })
    }

}

// get all brands
module.exports.getBrandById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await getBrandByIdService(id);

        if (!brand) {
            return res.status(400).json({
                status: "failed",
                message: "Please Provide a valid id",
            })
        }
        res.status(200).json({
            status: "Successfull",
            message: "Successfully get the brand",
            brand: brand
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "couldn't get the brand",
            error: error.message
        })
    }

}


// update a brand
module.exports.updateBrandById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await updateBrandByIdService(id, req.body);
        if (!result.modifiedCount) {
            return res.status(400).json({
                status: "failed",
                message: "couldn't update the brand by this id",
            })
        }
        res.status(200).json({
            status: "Successfull",
            message: "Successfully update the brand",
            brand: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "couldn't update the brand",
            error: error.message
        })
    }

}