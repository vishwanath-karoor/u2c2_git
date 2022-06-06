// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myfunction)

function myfunction() {
    
    event.preventDefault();
    
    // declaring variables

    var image = document.querySelector("#image").value;

    var name = document.querySelector("#name").value;

    var batch = document.querySelector("#batch").value;

    var dsamarks = document.querySelector("#dsa").value;

    var skillmarks = document.querySelector("#cs").value;

    var codingmarks = document.querySelector("#coding").value;

   console.log(image,name,batch,dsamarks,skillmarks,codingmarks)
    // creating the body of the table to be appended
     
    //first create the row tr, then td1 to td9 columns

    var tr = document.createElement("tr");

    //creating td1 to td 9 columns
    var td1 = document.createElement("td");
    var imagelink = document.createElement("img");
    imagelink.setAttribute("src",image)
    td1.append(imagelink)

    var td2 = document.createElement("td");
    td2.innerText = name;

    var td3 = document.createElement("td");
     td3.innerText = batch;

    var td4 = document.createElement("td");
    td4.innerText = dsamarks;

    var td5 = document.createElement("td");
    td5.innerText = skillmarks;

    var td6 = document.createElement("td");
    td6.innerText = codingmarks;

    

    var td7 =document.createElement("td");
    var obtainedmarks = +(dsamarks) + +(skillmarks) + +(codingmarks)
     var percentage = (obtainedmarks/30)*100
     td7.innerText = percentage
    
    var td8 = document.createElement("td");
    if(percentage<=50)
     {
         td8.innerText = "Aysnc";
         td8.style.backgroundColor="red";
         td8.style.color="white";
     }
     else
     {
        td8.innerText = "Regular";
        td8.style.backgroundColor="green";
         td8.style.color="white";
     }

     var td9 = document.createElement("td");
     td9.innerText = "Delete";
     td9.addEventListener("click",deletefn);
     td9.style.backgroundColor="red";
     td9.style.cursor = "pointer";

     function deletefn(){
         event.target.parentNode.remove()
     }

     

     // appedending the assigned elemsts to tbody;

     tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)

     document.querySelector("tbody").append(tr)

}