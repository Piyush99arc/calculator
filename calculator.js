function takeresult(newvalue){
    document.getElementById("result").value += newvalue;
}
function clearresult(){
    document.getElementById("result").value = " ";
}
function equal(){
    let equal = document.getElementById("result").value;
    document.getElementById("result").value = eval(equal);
}
function deletelast(){
    let equal = document.getElementById("result").value;
    document.getElementById("result").value =equal.slice(0,-1)
}