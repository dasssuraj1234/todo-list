
let dom = document;
let mycontain = dom.querySelector("#mylist");

const mymaindiv = dom.querySelector(".mylist")

function mylist() {

  // localStorage.strinfy()

  const inputtodo = document.getElementById("myinput");
  const myinputvalue = inputtodo.value;
  if (myinputvalue === "") {
    alert("plase enter some text")
    return
  }


  const input = dom.querySelector("#myinput");
  const value = input.value;
  console.log(value)



  const Carddiv = dom.createElement("div");
  Carddiv.classList.add("mainCard", "alert", "alert-info", "d-flex", "align-items-center", "gap-1", "text-center")
  Carddiv.innerHTML = ` <input class="myrealinput w-100" type="text" value="${value}" disabled>
            <i type="button" onclick="edit(this)"  class="edit fa-regular fa-pen-to-square"></i>
            <i type="button" onclick="save(this)" class="save fa-regular fa-floppy-disk"></i>
            <i type="button" onclick="deleteIcon(this)" class="delete fa-regular fa-trash"></i>
`


  const card = dom.createElement("div");
  card.classList.add("mainCard", "borde-primary", "gap-3")


  const h3 = dom.createElement("h3");
  h3.innerText = value;


  Carddiv.append(card)
  mymaindiv.append(Carddiv)



}


function edit(currElement) {
  const Cardiv = currElement.parentElement;
  const inputvalue = Cardiv.querySelector("input");


  Cardiv.innerHTML = `<input class="myrealinput w-100" type="text" value="${inputvalue.value} ">
                <i type="button" onclick="edit(this)"  class="edit fa-regular fa-pen-to-square"></i>
                <i type="button" onclick="save(this)" class="save fa-regular fa-floppy-disk"></i>
                <i type="button" onclick="deleteIcon(this)" class="delete fa-regular fa-trash"></i>
 
    
    `

  console.log(Cardiv)
  console.log(inputvalue)
}

function save(currElement) {
  const Cardiv = currElement.parentElement;
  const inputvalue = Cardiv.querySelector("input")

  Cardiv.innerHTML = `<input class="myrealinput w-100" type="text"  value="${inputvalue.value}" disabled  >
                <i type="button" onclick="edit(this)"  class="edit fa-regular fa-pen-to-square"></i>
                <i type="button" onclick="save(this)" class="save fa-regular fa-floppy-disk"></i>
                <i type="button" onclick="deleteIcon(this)" class="delete fa-regular fa-trash"></i>
    `
  console.log(Cardiv)
  console.log(inputvalue)
  console.log(inputvalue.value)

}

function deleteIcon(currElement) {
  console.log(currElement)
  const Cardiv = currElement.parentElement;
  Cardiv.remove();



  console.log(currElement)
}