const {StatusCodes} = require('http-status-codes');
const Person = require('../model/people')

const getAllPeople = async(req,res)=>{
    const person = await Person.find({})
    res.status(StatusCodes.OK).json({person})
}

//CREATE PERSON
const createPerson = async(req,res)=>{
    const person = await Person.create(req.body)
    res.status(StatusCodes.CREATED).json({person})
}

// READ PERSON
const getSinglePerson = async(req,res, next)=>{
   try {
    const {id:personID} = req.params
    const person = await Person.findOne({_id:personID})
    if(!person){
        throw new Error (`No Person With ID: ${personID}`)
    }
    res.status(StatusCodes.OK).json({person})
   } catch (error) {
    next(error)
   }
}


//UPDATE PERSON
const updatePerson = async (req, res, next) => {
    try {
      const { id: personID } = req.params;
    //   console.log(req.params);
      
      const updatedPerson = req.body;
      
      const person = await Person.findOneAndUpdate(
        { _id: personID },
        updatedPerson,
        { new: true, runValidators: true }
      );
      
    //   console.log(person);
      
      if (!person) {
        throw new Error(`No Person With ID: ${personID}`);
      }
      
      res.status(StatusCodes.OK).json({ person });
    } catch (error) {
      next(error);
    }
  };
  

// DELETE PERSON
const deletePerson = async(req,res, next)=>{
    try {
        const {id:personID} = req.params
        const person = await Person.findOneAndDelete({_id:personID})
        if (!person) {
            throw new Error(`No Person With ID: ${personID}`);
          }
          res.status(StatusCodes.OK).json({person})
    } catch (error) {
        next(error)
        console.log(error);
    }
}

module.exports = {
    getAllPeople,
    getSinglePerson,
    createPerson,
    updatePerson,
    deletePerson,

}