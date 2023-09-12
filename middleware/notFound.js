const {StatusCodes} = require('http-status-codes')

const notFoundMiddleware = (req, res)=> res.status(StatusCodes.NOT_FOUND).send('Route Not Found')


module.exports = notFoundMiddleware