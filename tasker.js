// logout
var loggedout=document.getElementById("logout");
loggedout.onclick=function(){
    location.href="signin.html";
}
// logout

// done not done page
var donebut=document.getElementById("done");
var allbut=document.getElementById("all");
var notbut=document.getElementById("notdone");

donebut.onclick=function(){
allbut.style.color="rgb(183, 182, 182)";
allbut.style.border="solid rgb(183, 182, 182) 1px";
allbut.style.backgroundColor="rgb(236, 237, 238)";
allbut.style.boxShadow="none";
allbut.style.fontWeight="normal";
notbut.style.color="rgb(183, 182, 182)";
notbut.style.border="solid rgb(183, 182, 182) 1px";
notbut.style.backgroundColor="rgb(236, 237, 238)";
notbut.style.boxShadow="none";
notbut.style.fontWeight="normal";
donebut.style.color="black";
donebut.style.border="solid white 1px";
donebut.style.backgroundColor="white";
donebut.style.boxShadow="0px 2px 5px grey";
donebut.style.fontWeight="bold";
}
notbut.onclick=function(){
    allbut.style.color="rgb(183, 182, 182)";
    allbut.style.border="solid rgb(183, 182, 182) 1px";
    allbut.style.backgroundColor="rgb(236, 237, 238)";
    allbut.style.boxShadow="none";
    allbut.style.fontWeight="normal";
    donebut.style.color="rgb(183, 182, 182)";
    donebut.style.border="solid rgb(183, 182, 182) 1px";
    donebut.style.backgroundColor="rgb(236, 237, 238)";
    donebut.style.boxShadow="none";
    donebut.style.fontWeight="normal";
    notbut.style.color="black";
    notbut.style.border="solid white 1px";
    notbut.style.backgroundColor="white";
    notbut.style.boxShadow="0px 2px 5px grey";
    notbut.style.fontWeight="bold";
}
allbut.onclick=function(){
    donebut.style.color="rgb(183, 182, 182)";
    donebut.style.border="solid rgb(183, 182, 182) 1px";
    donebut.style.backgroundColor="rgb(236, 237, 238)";
    donebut.style.boxShadow="none";
    donebut.style.fontWeight="normal";
    notbut.style.color="rgb(183, 182, 182)";
    notbut.style.border="solid rgb(183, 182, 182) 1px";
    notbut.style.backgroundColor="rgb(236, 237, 238)";
    notbut.style.boxShadow="none";
    notbut.style.fontWeight="normal";
    allbut.style.color="black";
    allbut.style.border="solid white 1px";
    allbut.style.backgroundColor="white";
    allbut.style.boxShadow="0px 2px 5px grey";
    allbut.style.fontWeight="bold";
}
// done not done page

// task
var onbut=document.getElementById("on");
var example=document.getElementById("ex");
onbut.style.display="none";
document.getElementById("radio").onclick=function(){
    if(onbut.style.display==="none"){
        onbut.style.display="block";
        example.style.textDecoration="line-through";
        example.style.color="rgb(183, 182, 182)";
    }
    else if(onbut.style.display==="block"){
        onbut.style.display="none";
        example.style.textDecoration="none";
        example.style.color="black";
    }
}
// task

// lists
var settings=document.getElementById("settings");
var list=document.getElementById("list");

list.style.visibility="hidden";
settings.style.position="absolute";
settings.style.top="300px";

var catogries=document.getElementById("catogries");
catogries.onclick=function(){
    list.style.visibility="visible";
    catogries.style.visibility="hidden";
    settings.style.position="absolute";
    settings.style.top="450px";
    list.style.position="absolute";
    list.style.top="250px";
}

var lists=document.getElementById("p");
lists.onclick=function(){
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px";
}
// lists over

// catogries change
var noneele=document.getElementById("none");
var homeele=document.getElementById("home");
var schoolele=document.getElementById("school");
var shopele=document.getElementById("shop");
var topic=document.getElementById("a");

noneele.onclick=function(){
    topic.textContent="All your tasks";
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px";
}
homeele.onclick=function(){
    topic.textContent="Home";
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px";
}
schoolele.onclick=function(){
    topic.textContent="School";
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px"; 
}
shopele.onclick=function(){
    topic.textContent="Shopping list";
    list.style.visibility="hidden";
    catogries.style.visibility="visible";
    settings.style.position="absolute";
    settings.style.top="300px"; 
}
// catogries change

// delete popup
var cancelbutton=document.getElementById("cancelbut");
var deletebutton=document.getElementById("deletebut");
var trashbutton=document.getElementById("trash");

trashbutton.onclick=function(){
    document.getElementById("popup").style.display="block";
}

cancelbutton.onclick=function(){
    document.getElementById("popup").style.display="none";
}

deletebutton.onclick=function(){
    document.getElementById("task").remove();
}
// delete popup

// add popup
document.getElementById("plus").onclick=function(){
    document.getElementById("addelement").style.display="block";
}
document.getElementById("can").onclick=function(){
    document.getElementById("addelement").style.display="none";
}

// add element
var add=document.getElementById("addd");
var named=document.getElementById("type");
var selected=document.getElementById("select");
let selectedValue = selected.value;
var selectedText = selected.options[selected.selectedIndex].text;
var total=document.getElementById("task-container");
var format=document.getElementById("task");

add.addEventListener("click",function(){
    var div=document.createElement("div");
    div.setAttribute("class","task");
    div.innerHTML=` <div id="radio">
    <div id="on"></div>
 </div>
 <div class="line"></div>
 <div class="e">
 <p id="ex">${named.value}</p>
 <div class="ex">
    <div class="red"></div>
    <p id="cattype">${selectedText}</p>
 </div>
</div>
<i class="fa-solid fa-pen" id="pen"></i>
<i class="fa-solid fa-trash" id="trash"></i>
</div>`
    total.append(div);
    document.getElementById("addelement").style.display="none";
})
// add element

// practiceee
// var addelement=document.getElementById("addd");
// addelement.onclick=function(){
// let name=document.getElementById("type").value;


//     let allist=[];

//     allist.push({
//        taskname:name,
//        cato:selectedText
//     }
// );
// localStorage.setItem("task1",JSON.stringify(allist));

// var kkk=localStorage.getItem("task1");

// if(kkk==null){
//     allist=[];
// }
// else{
//     allist=JSON.parse("kkk");
// }
// }

// practiceee


