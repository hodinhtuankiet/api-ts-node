import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    authentication: {
        password: {
            type: String,
            require: true,
            select: false,
        },
        salt: {
            type: String,
            select: false,
        },
        sessionToken: {
            type: String,
            select: false,
        }
    }
});
export const UserModel = mongoose.model('User',UserSchema)

export const getUsers = UserModel.find();
export const getUserByEmail = (email:String) => UserModel.findOne({email})
// confirm user login or not
export const getUserBySessionToken = (sesstionToken:string) => UserModel.findOne({
    'authentication.token':sesstionToken
});
export const getUserById = (id:String) => UserModel.findOne(id)
// learn about Recode ts 
export const createUser = (value: Record<string,any>) => new UserModel(value)
    .save().then((user)=> user.toObject())
export const deleteUserById = (id:String) => UserModel.findOneAndDelete({_id:id})
export const updateUserById = (id:String,value: Record<string,any>) => UserModel.findByIdAndUpdate(id,value)