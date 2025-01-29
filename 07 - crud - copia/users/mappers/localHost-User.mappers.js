import { user } from "../models/users";

export const localHostUserModel =(localHostUser)=>{
const  {
    avatar,balance,first_name,gender,id,isActive,last_name} = localHostUser;

return new user({
avatar,
balance,
firstName: first_name,
gender,
id,
isActive,
lastName:last_name,

})

} 