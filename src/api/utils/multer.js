const multer = require('multer')
const path = require('path')


module.exports = multer({
    storage: multer.diskStorage({
        // destination: (req, file, cb)=>{
        //     cb(null, './../uploads/')
        // },
       
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
})