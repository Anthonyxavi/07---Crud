import userStore from "./store/userStore";


export const userApp = async (element)=>{
element.innerHTML = 'loading...';
await userStore.loadNextPage()

}