const Property = require("../Models/propertyModel")

const insertproperty =  async (propertyname, type, city, country, price, guests, description ) => {
   try{
    const propertyToCreate = {propertyname, type, city, country, price, guests, description };

    if(country && country.trim()!==''){
        propertyToCreate.country = country
    }
    // save in db
    const newProperty = await Property.create(propertyToCreate);
    return {
        id: newProperty._id
    }
}catch(err){
    throw err;
}
}

const getPropertyById = async(id) => {
    try{
    const property = await Property.findById(id);
    return property;
    }catch(err){
    throw err;
}
}

const getProperties = async() => {
    try{
      const Properties = await Property.find();
      return Properties;
    }
    catch(err){
    throw err;
}
}
module.exports = {insertproperty,getPropertyById,getProperties}