const cloudinary = require('cloudinary').v2;
const multer = require('multer');

cloudinary.config({
    cloud_name:"dagij9w4m",
    api_key:"528395728487758",
    api_secret:"_Ns_7Q2pp9AifgyFjfh4EOnneeE",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file){
    const result = await cloudinary.uploader.upload(file,{
        resource_type : 'auto'
    })
    return result;
}

const upload = multer({storage});

module.exports = {upload,imageUploadUtil};
