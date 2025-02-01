import { loadUsersByPage } from "../usescases/loadUsers";
import { user } from "../models/users";

const state = {
currentPage:0,
users:[]
};

const loadNextPage    = async ()=>{
    const users = await loadUsersByPage(state.currentPage +1)
    if (users.length === 0) return;
    state.currentPage += 1;
    state.users = users
}
const loadPreviusPage = async ()=>{}
const onUserChange    = async ()=>{}
const reloadPage      = async ()=>{}


export default {
getUser:()=>[...state.users],
getCurrentPage:()=> state.currentPage,
loadNextPage,
loadPreviusPage,
onUserChange,
reloadPage,
}