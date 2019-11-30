function processform(){
  const data = document.getElementById("txt").value;
  localStorage.setItem("textvalue", data);
  return false;
}


