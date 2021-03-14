const {Categories} =  require('../models')
const BaseController = require('./baseController')

class CategoriesController extends BaseController{
  constructor(){
    super(Categories)
  }
}

module.exports = CategoriesController