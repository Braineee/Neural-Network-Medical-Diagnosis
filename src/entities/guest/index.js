import bcrypt from 'bcryptjs';
import guestEntity from './guest.entity';
import guestSchema from '../../schemas/user-schemas/guest.schema';

async function validate(body) {
  return await guestSchema.validate(body);
}

async function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function getId() {
  return uuidv4();
}

const makeGuest = guestEntity({ getId, validate, encryptPassword });

export default makeGuest;
