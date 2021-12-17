const { userSchema, userUpdateSchema } = require('../schema/user.schema');

const validateUserRegistration = async user => {
    try{
        await userSchema.validate(user);
        return null;
    }
    catch (err){
        return err.errors[0];
    }
}

const validateUserUpdate = async user => {
    try{
        await userUpdateSchema.validate(user);
        return null;
    }
    catch (err){
        return err.errors[0];
    }
}

module.exports.validateUserRegistration = validateUserRegistration;
module.exports.validateUserUpdate = validateUserUpdate;