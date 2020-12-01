const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const guestEntity = require('./guest.entity');
const guestSchema = require('../../schemas/guestSchemas/guest.schema');

async function validate(body) {
  return await guestSchema.validate(body);
}

async function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function getId() {
  return uuidv4();
}

const makeGuestEntity = guestEntity({ getId, validate, encryptPassword });

module.exports = makeGuestEntity;
