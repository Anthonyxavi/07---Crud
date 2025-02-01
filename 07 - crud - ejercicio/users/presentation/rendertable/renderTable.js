import { user } from "../../models/users"
import userStore from "../../store/userStore"
import './renderTable.css'

let table;
const createTable = ()=>{
const table = document.createElement('table'),
tableheaders = document.createElement('thead')

tableheaders.innerHTML=`<tr>
<th>#ID </th>
<th>balance </th>
<th>FistName </th>
<th>LastName </th>
<th>isActive </th>
<th>Action</th>
</tr>`

const tableBody = document.createElement('tbody')
table.append(tableheaders,tableBody)
return table
}
export const renderTable = (element)=>{
const users = userStore.getUser();
if (!table){ table = createTable()
    element.append(table)}
let tableHTML = '';
users.forEach(user=>{
    tableHTML += `
    <tr>
<td>${user.id}</td>
<td>${user.balance}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.isActive}</td>
<td>
<a href="#/" data-id"${user.id}">Select</a>
|
<a href="#/" data-id"${user.id}">Delete</a>
 </td>
</tr>`
})
table.querySelector('tbody').innerHTML= tableHTML
}

