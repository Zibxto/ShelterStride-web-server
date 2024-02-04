const express = require('express');
const multer = require('multer');
const path = require('path');
const propertyController = require('../controllers/propertyController');

const propertyRouter = express.Router();

// Set storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const pathImage = path.join(__dirname, '../images')
      cb(null, pathImage); // Define the folder where images will be stored
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage: storage });

propertyRouter.get('/', propertyController.getProperties);
propertyRouter.get('/:id', propertyController.getPropertyById);
propertyRouter.post('/', upload.single('image'), propertyController.addProperty);
propertyRouter.put('/:id', upload.single('image'), propertyController.updateProperty);
propertyRouter.delete('/:id', propertyController.deleteProperty);

module.exports = { propertyRouter };