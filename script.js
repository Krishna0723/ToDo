let id1 = "task1";
let btnId = "btn1";

function add() {
  const val = document.getElementById("inp").value;
  if (val.length === 0) {
    alert("Task should not be empty");
    return;
  }

  let para = `${val} <button id=${btnId} onclick="progress(this.id)">IP</button>`;
  btnId = btnId + 1;
  document.getElementById(id1).innerHTML = para;
  let addPara = document.createElement("p");
  addPara.id = id1 + 1;
  document.getElementById("box1").appendChild(addPara);
  id1 = id1 + 1;
  document.getElementById("inp").value = "";
}

let id2 = "prog1";
let doneId = "done1";
function progress(idd) {
  let parentId = document.getElementById(idd).parentNode.id;
  let content = document.getElementById(parentId).textContent;
  content = content.slice(0, -1);
  content = content.slice(0, -1);
  content = content.slice(0, -1);
  // console.log(content);
  let progressContent = `${content} <button id=${doneId} onclick="donee(this.id)">Done</button>`;
  doneId = doneId + 1;
  document.getElementById(id2).innerHTML = progressContent;
  let addProgress = document.createElement("p");
  addProgress.id = id2 + 1;
  document.getElementById("box2").appendChild(addProgress);
  id2 = id2 + 1;
  document.getElementById(parentId).remove();
}

id3 = "d1";
function donee(proId) {
  // console.log(proId);
  let prooId = document.getElementById(proId).parentNode.id;
  let doneCont = document.getElementById(prooId).textContent;
  console.log(prooId);
  doneCont = doneCont.slice(0, -4);
  console.log(doneCont);
  let dneCont = `${doneCont}`;
  document.getElementById(id3).innerHTML = dneCont;
  let addDone = document.createElement("p");
  addDone.id = id3 + 1;
  document.getElementById("box3").appendChild(addDone);
  id3 = id3 + 1;
  document.getElementById(prooId).remove();
}
