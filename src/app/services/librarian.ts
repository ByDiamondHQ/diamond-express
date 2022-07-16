import { models } from "../../database/models";

const findOne = async (model, query, select?) => {
  return (await models[model].find(query).select(select).exec())[0]
}

const update = async (model, query, body) => {
  return (await models[model].findOneAndUpdate(query, { $set: body }, { new: true }).exec())
}

const create = async (model, body) => {
  const item = await new models[model](body)
  // const { error } = await item.joiValidate(body)

  // if (error) throw (error.details)
  return (await item.save())
}

const findAll = async (model, query, options?) => {
  return (await models[model].find(query).limit(options?.limit).exec())
}

const deleteOne = async (model, query) => {
  return (await models[model].deleteOne(query).exec())
}

const deleteAll = async (model, query) => {
  return (await models[model].deleteMany(query).exec())
}

export default {
  findOne,
  update,
  create,
  findAll,
  deleteOne,
  deleteAll
}