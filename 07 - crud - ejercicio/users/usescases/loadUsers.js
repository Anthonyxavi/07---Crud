import { localHostUserModel } from "../mappers/localHost-User.mappers"
import { user } from "../models/users"


export const loadUsersByPage = async (page = 1)=>{
    const url    = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`
    const  res   = await fetch(url)
    const {data} = await res.json()
    const users = data.map(localHostUserModel)
    console.log(users)
return users}