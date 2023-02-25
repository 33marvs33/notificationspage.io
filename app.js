const notif = document.querySelector(".number");
const allRead = document.querySelector(".btn");
const boxData = document.querySelectorAll("li");
let allNotif = boxData.length;
allRead.addEventListener('click', () => {
    boxData.forEach(box => {
        box.classList.add('bg-change');
        allNotif = 0
        box.getElementsByClassName('icon')[0].classList.add('icon-hide')

    })
    display()
})
//pop up//
boxData.forEach((box) => {
  box.addEventListener("click", (e) => {
    const tar = e.currentTarget;
    tar.classList.add("bg-change");
    const popUp = tar.getElementsByClassName("details")[0];
    popUp.classList.add('details-bg')
    popUp.classList.toggle("pop");
  });
});

//icon //
boxData.forEach((key) => {
  key.addEventListener("click", check);
});

function check() {
    if(allNotif <= 0) {
        allNotif = 0
    }else {
         const i = this.getElementsByClassName("icon")[0];
  i.classList.add("icon-hide");
  allNotif--
  this.removeEventListener("click", check);
  display();
    }
 
}

function display() {
  notif.innerText = allNotif;
}

display();
