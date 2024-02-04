const db = require('../models');
const { checkUserRank } = require('./userController'); 

// Get Models
const Property = db.properties

// Add a new house
const addProperty = async (req, res) => {
    try {
      const { name, price, address, bathroom_num, bedroom_num, location } = req.body;
      const imagePath = req.file ? req.file.path : ''; // Save the image path or URL
  
      const newProperty = await Property.create({
        name,
        price,
        address,
        bathroom_num,
        bedroom_num,
        location,
        image: imagePath,
      });
      if (newProperty)
        res.status(201).json({message: 'Property added successfully', data: newProperty});
      else
      res.status(400).json({error: 'Please check your are entering the right data'})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Get all houses
  const getProperties = async (req, res) => {
    try {
      const properties = await Property.findAll();
      if (properties)
        res.json(properties);
      else
        res.status(404).json({error: 'requested resources not found'})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Get a house
  const getPropertyById = async (req, res) => {
    try {
      const properties = await Property.findByPk(req.params.id);
      if (properties) {
        res.json(properties);
      }
      else {
        res.status(404).json({error: 'requested resource not found'})
      }  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    addProperty: [checkUserRank, addProperty],
    getProperties: [checkUserRank, getProperties],
    getPropertyById: [checkUserRank, getPropertyById] 
  };