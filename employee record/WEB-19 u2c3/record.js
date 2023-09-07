// // fill in javascript code here
// // // fill in javascript code here

// let name1 = document.getElementById("name");
// let id = document.getElementById("employeeID");
// let dept = document.getElementById("department");
// let expi = document.getElementById("exp");
// let email = document.getElementById("email");
// let mob = document.getElementById("mbl");
// let tbody = document.querySelector("tbody");
// let tabarr = [];

// const button = document.querySelector("input[type='submit']");

// button.addEventListener("click", function (event) {
//     event.preventDefault();

//     let data = {
//         name2: name1.value,
//         id2: id.value,
//         dept2: dept.value,
//         expi2: expi.value,
//         email2: email.value,
//         mob2: mob.value,
//         roll2: "",
//     };

//     if (data.expi2 > 5) {
//         data.roll2 = "Senior";
//     } else if (data.expi2 >= 2 && data.expi2 <= 5) {
//         data.roll2 = "Junior";
//     } else if (data.expi2 > 0 && data.expi2 <= 1) {
//         data.roll2 = "Fresher";
//     }
//     tabarr.push(data);
//     renderTable(); // Re-render the table with the updated data
// });

// // Function to delete a row when the delete button is clicked
// function deleteRow(index) {
//     tabarr.splice(index, 1);
//     renderTable(); // Re-render the table after removing the element
// }

// // Function to render the table with the current data
// function renderTable() {
//     tbody.innerHTML = ""; // Clear the table

//     tabarr.forEach(function (elem, index) {
//         let tr = document.createElement("tr");
//         let td1 = document.createElement("td");
//         let td2 = document.createElement("td");
//         let td3 = document.createElement("td");
//         let td4 = document.createElement("td");
//         let td5 = document.createElement("td");
//         let td6 = document.createElement("td");
//         let td7 = document.createElement("td");
//         let td8 = document.createElement("td"); // New TD for the Delete button

//         td1.innerText = elem.name2;
//         td2.innerText = elem.id2;
//         td3.innerText = elem.dept2;
//         td4.innerText = elem.expi2;
//         td5.innerText = elem.email2;
//         td6.innerText = elem.mob2;
//         td7.innerText = elem.roll2;

//         // Create a Delete button
//         let deleteButton = document.createElement("button");
//         deleteButton.innerText = "Delete";
//         deleteButton.addEventListener("click", function () {
//             deleteRow(index); // Call the deleteRow function with the index
//         });

//         td8.appendChild(deleteButton);

//         tr.append(td1, td2, td3, td4, td5, td6, td7, td8); // Add the Delete button TD
//         tbody.appendChild(tr);
//     });
// }



//<------------------------------------>


let inp1 = document.getElementById("name");
let inp2 = document.getElementById("employeeID");
let inp3 = document.getElementById("department");
let inp4 = document.getElementById("exp");
let inp5 = document.getElementById("email");
let inp6 = document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let frm=document.querySelector("form");
let arr = [];
frm.addEventListener("submit",function(event){
    event.preventDefault()
    let data={
        Name:inp1.value,
        ID1:inp2.value,
        dprt:inp3.value,
        expri:inp4.value,
        mail:inp5.value,
        mob:inp6.value,
        role:"",
        btn: "delete"
    }
    if (data.expri > 5) {
            data.role = "Senior";
            } else if (data.expri >= 2 && data.expri <= 5) {
                data.role = "Junior";
            } else if (data.expri > 0 && data.expri <= 1) {
                data.role = "Fresher";
    }
    arr.push(data)
    let tr1= document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("button")

    arr.map((ele)=>{
        td1.innerText=ele.Name
        td2.innerText=ele.ID1
        td3.innerText=ele.dprt
        td4.innerText=ele.expri
        td5.innerText=ele.mail
        td6.innerText=ele.mob
        td7.innerText=ele.role
        td8.innerText=ele.btn
    })
    td8.addEventListener("click",function(){
        tr1.remove()
    })
    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr1)
    td8.style.backgroundColor="red"
    td8.style.border="none";
    td8.style.marginTop="6px"
})