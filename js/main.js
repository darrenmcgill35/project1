function processform(){
  const data = document.getElementById("txt").value;
  localStorage.setItem("textvalue", data);
  return false;
}

document.getElementById("txt").innerHTML=localStorage.getItem("textvalue");

console.log("txt")


