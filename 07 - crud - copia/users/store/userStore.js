import { loadUsersByPage } from "../usescases/loadUsers";


const state = {
currentPage:0,
users:[]
};

const loadNextPage    = async ()=>{
    await loadUsersByPage(state.currentPage +1)
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