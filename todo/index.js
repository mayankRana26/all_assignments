// let frm= document.querySelector("form");
// let tbdy=document.querySelector("tbody");
// let inp1=document.getElementById("task");
// let inp2=document.getElementById("priority");
// frm.addEventListener("submit",function(event)
// {
// event.preventDefault()
// let name=inp1.value;
// let prio=inp2.value;
// let row=document.createElement("tr");
// let clmn=document.createElement("td");
// clmn.innerText=name;
// row.append(clmn);

// let pr1=document.createElement("td");
// pr1.innerText=prio;
// row.append(pr1)
// if(prio=="High"){
//     pr1.style.backgroundColor="red"
// }else{
//     pr1.style.backgroundColor="green"
 
// }

// tbdy.append(row)
// // taskNameInput.value = "";
// //  prioritySelect.value = ""
// })


//----------------------------->

let frm= document.querySelector("form");
let tbdy=document.querySelector("tbody");
let inp1=document.getElementById("task");
let inp2=document.getElementById("priority");
let arr=[]
frm.addEventListener("submit",function(event)
{
    event.preventDefault();
    let data={
        task:inp1.value,
        prio:inp2.value
    }
    arr.push(data)
    let tr1= document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td")
    arr.map((ele)=>{
        td1.innerText=ele.task
        td2.innerText=ele.prio
        if(td2.innerText=="High"){
            td2.style.backgroundColor="red"
        }else{
            td2.style.backgroundColor="green"

        }
    })
    tr1.append(td1,td2)
    tbdy.append(tr1)
})