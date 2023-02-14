import userModel from './Model.mjs'
import dotenv from 'dotenv'
dotenv.config()

const key = process.env["SECRETKEY"]

export async function createUserService(userReq) {
    const user = new userModel()
    let onErr;

    user.firstname = userReq.firstname
    user.lastname = userReq.lastname
    user.email = userReq.email
    user.password = userReq.password
    user.password = (userReq.password)

    await user.save((err) => {
        if (err) {
            onErr = true
        }
    })

    return onErr
}