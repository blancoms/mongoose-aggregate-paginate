var aggregatePaginate = require('./lib/mongoose-aggregate-paginate-allowdiskuse')

module.exports = function (schema) {
  schema.statics.aggregatePaginate = aggregatePaginate
}
