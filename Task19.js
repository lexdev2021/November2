const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
  }

function changeStatus(a, b) {
  list[a] = b;
}

function addTask(a) {
  list[a] = "To Do";
}

function deleteTask(a) {
  delete list[a];
}

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
addTask("have a walk");
addTask("read english");
addTask("make a meal");
changeStatus("write a post", "Done");
changeStatus("read english", "Done");
changeStatus("make a meal", "Done");
deleteTask("have a walk");
showList();