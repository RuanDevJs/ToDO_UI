const dayTitle = document.querySelectorAll("[data-day]");
const timeTitle = document.querySelectorAll("[data-time]");
const dataButton = document.querySelectorAll("[data-button]");
const dataForm = document.querySelectorAll("[data-toDoForm]");
dataForm[0].classList.add("active");
dataButton[0].classList.add("activeButton");


function writeDate(){
  const date = new Date();
  const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

  dayTitle.forEach(el => el.innerHTML = days[date.getDay() - 1]);
  timeTitle.forEach(el => el.innerHTML = `${date.getDate()}/${date.getMonth()}/${date.getUTCFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);

  function time(){
    setInterval(writeDate, 1000)
  }time()
  
}writeDate()


function createToDo(){
  const form = document.querySelectorAll("[data-form]");
  const input = document.querySelectorAll("input");
  const list = document.querySelectorAll("[data-list]");

  form.forEach((el, index) => el.addEventListener("submit", e => {
    e.preventDefault();

    input.forEach(el => {
      if(el.value){
        addList(el.value, index);
        input[index].value = "";
      }
    })

  }));

  function createList(text){
    const li = document.createElement("li");
    li.innerHTML = `<a href="#" class="created"> ${text} </a>`;
    return li;
  }

  function addList(text, index){
    const li = createList(text);
    list[index].appendChild(li);
  }


}createToDo();

function NavigationForm(index){
  dataForm.forEach((el) => {
     el.classList.remove('active');
  });

  dataButton.forEach((el) => {
    el.classList.remove('activeButton');
 });

  dataForm[index].classList.add("active");
  dataButton[index].classList.add("activeButton");
}

dataButton.forEach((el, index) => {
  el.addEventListener('click', e => NavigationForm(index));
});