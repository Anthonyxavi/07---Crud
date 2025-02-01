import { renderTable } from "./presentation/rendertable/renderTable.js";
import userStore from "./store/userStore";

export const userApp = async (element)=>{
element.innerHTML = 'loading...';
await userStore.loadNextPage()
element.innerHTML = '';
console.log(userStore.getUser())

renderTable(element)
}