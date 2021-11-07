const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  "read english": "To Do",
  "make a meal": "To Do",
 }

 function changeStatus(a, b) {
  for (let key in list) {
    if (key == a) {
      list[key] = b;
    }
  }
}
changeStatus("write a post", "Done");

function addTask(a) {
  list[a] = "To Do";
}
addTask("have a walk");

function deleteTask(a) {
  for (let key in list) {
    if (key == a) {
      delete list[key];
    }
  }
}
deleteTask("have a walk");

let c = 0;
let d = 0;
let e = 0;
function showList() {
  console.log('To Do:');
  for(let key in list) {
    if (list[key] == "To Do") {
      console.log(key);
      c++;
      }
  }
  if (c == 0) {
    console.log('-');
  }
  console.log('In Progress:');
  for(let key in list) {
    if (list[key] == "In Progress") {
      console.log(key);
      d++;
    }
  } 
  if (d == 0) {
    console.log('-');
  }
  console.log('Done:'); 
  for(let key in list) {
    if (list[key] == "Done") {
      console.log(key);
      e++;
    }
  } 
  if (e == 0) {
    console.log('-');
  }

}
showList();
   