const users = require('../model/user')
const uuid = require('uuid')
const user = require('../model/user')

const get = async () => {
  return await users.find()
}

const post = async body => {
  if (!body.email || !body.name || !body.password || !body.phones) {
    throw new Error('email,name,password and phones are required')
  }

  const newUsers = new user({
    _id: uuid.v4(),
    email: body.email,
    password: body.password,
    phones: body.phones
  })
  await newUsers.save()
  return { message: 'user has been created succesfully' }
}

module.exports = { get, post }
