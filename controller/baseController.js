const {nanoid} = require('nanoid')

class BaseController {
  constructor(model){
    this.model = model
  }

  add(data){
    return this.model.create({
      id:nanoid(),
      ...data
    })
  }

  get(query){
    return this.model.findAll({
      where: query
    })
  }

  getId(id){
    return this.model.findOne(
      {where: {id}})
  }

  edit(id, data){
    return this.model.update(
      data, {
        where: {id}
      }
    )
  }

  remove(id){
    return this.model.destroy(
      {where: {id}}
    )
  }
}

module.exports = BaseController