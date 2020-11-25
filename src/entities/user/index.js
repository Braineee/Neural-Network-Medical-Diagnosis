import uuidv4 from  'uuid';
import userEntity from './user.entity';
import userSchema from '../../schemas/user-schemas/guest.schema';

async function validate(body) {
  return await userSchema.validate(body);
}

function getId() {
  return uuidv4();
}

const makeUser = userEntity({ getId, validate });

export default makeUser;