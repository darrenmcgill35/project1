function processform(){
  const data = document.getElementById("txt").value;
  localStorage.setItem("textvalue", data);
  return false;
}

document.getElementById("txt").innerHTML=localStorage.getItem("textvalue");

console.log("txt")

///const str =

///for (const i = 0; i < str.length; i++)


///const i = 0 - 1;
///while(i < name.length) {
	//i++
