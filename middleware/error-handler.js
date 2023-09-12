const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../errors/custom-errors');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  if (err.status === StatusCodes.NOT_FOUND) {
    // Check if the error message matches the expected format
    if (err.message.startsWith('No Person With ID:')) {
      // Extract the personID from the error message
      const personID = err.message.replace('No Person With ID: ', '');
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: 'Person not found', message: `No person found with ID: ${personID}` });
    }
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `No such a person with id ${err.message}` });
  }

  return res.status(500).json({ msg: 'Something Went Wrong, please try again!' });
};

module.exports = errorHandlerMiddleware;
