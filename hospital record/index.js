// fill in javascript code here
let inp1 = document.getElementById("name");
let inp2 = document.getElementById("docID");
let inp3 = document.getElementById("dept");
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
        dlt: "Delete"  
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
    let td8=document.createElement("td")

    arr.map((ele)=>{
        td1.innerText=ele.Name
        td2.innerText=ele.ID1
        td3.innerText=ele.dprt
        td4.innerText=ele.expri
        td5.innerText=ele.mail
        td6.innerText=ele.mob
        td7.innerText=ele.role
        td8.innerText=ele.dlt
    })
    td8.addEventListener("click",function(){
        tr1.remove()
    })
    tr1.append(td1,td2,td3,td4,td5,td6,td7,td8);
    tbody.append(tr1)
    td8.style.backgroundColor="red"
})

