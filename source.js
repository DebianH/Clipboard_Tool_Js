//Button 01
let btn1 = document.querySelector("#btn1");

btn1.querySelector("button").addEventListener("click", () => {
    let input = btn1.querySelector("input[type=text]");
    let chanceBtn = btn1.querySelector("button")

      navigator.clipboard
          .writeText(input.value)
          .then(() => localStorage.setItem("btn1", input.value))

      chanceBtn.classList.add("rounded-pill");
      window.getSelection().removeAllRanges();
      setTimeout(() => {
        chanceBtn.classList.remove("rounded-pill");
      },1000);
})
document.getElementById('po1').value=window.localStorage.getItem("btn1");

//Button 02
let btn2 = document.querySelector("#btn2");

 btn2.querySelector("button").addEventListener("click", () => {
     let input = btn2.querySelector("input[type=text]");
     let chanceBtn = btn2.querySelector("button")

       navigator.clipboard
           .writeText(input.value)
           .then(() => localStorage.setItem("btn2", input.value))

       chanceBtn.classList.add("rounded-pill");
       window.getSelection().removeAllRanges();
       setTimeout(() => {
         chanceBtn.classList.remove("rounded-pill");
       },1000);
 })
document.getElementById('po2').value=window.localStorage.getItem("btn2");

//Button 03
let btn3 = document.querySelector("#btn3");

btn3.querySelector("button").addEventListener("click", () => {
      let input = btn3.querySelector("input[type=text]");
      let chanceBtn = btn3.querySelector("button")

      navigator.clipboard
          .writeText(input.value)
          .then(() => localStorage.setItem("btn3", input.value))

      chanceBtn.classList.add("rounded-pill");
      window.getSelection().removeAllRanges();
      setTimeout(() => {
        chanceBtn.classList.remove("rounded-pill");
      },1000);
})
document.getElementById('po3').value=window.localStorage.getItem("btn3");

//Button 04
let btn4 = document.querySelector("#btn4");

btn4.querySelector("button").addEventListener("click", () => {
      let input = btn4.querySelector("input[type=text]");
      let chanceBtn = btn4.querySelector("button")

      navigator.clipboard
          .writeText(input.value)
          .then(() => localStorage.setItem("btn4", input.value))

      chanceBtn.classList.add("rounded-pill");
      window.getSelection().removeAllRanges();
      setTimeout(() => {
        chanceBtn.classList.remove("rounded-pill");
      },1000);
})
document.getElementById('po4').value=window.localStorage.getItem("btn4")

//Button 05
let btn5 = document.querySelector("#btn5");

btn5.querySelector("button").addEventListener("click", () => {
      let input = btn5.querySelector("input[type=text]");
      let chanceBtn = btn5.querySelector("button")

      navigator.clipboard
          .writeText(input.value)
          .then(() => localStorage.setItem("btn5", input.value))

      chanceBtn.classList.add("rounded-pill");
      window.getSelection().removeAllRanges();
      setTimeout(() => {
        chanceBtn.classList.remove("rounded-pill");
      },1000);
})
document.getElementById('po5').value=window.localStorage.getItem("btn5")


//Button 06
let textarea = document.querySelector("#btn6");

textarea.querySelector("button").addEventListener("click", () => {
       let texta = textarea.querySelector("textarea");
       let chanceBtn = textarea.querySelector("button")

       navigator.clipboard
           .writeText(texta.value)
           .then(() => localStorage.setItem("textarea1", texta.value))

       chanceBtn.classList.add("rounded-pill");
       window.getSelection().removeAllRanges();
       setTimeout(() => {
         chanceBtn.classList.remove("rounded-pill");
       },1000);
 })
document.getElementById('po6').value=window.localStorage.getItem("textarea1")

//Button 7
let textarea2 = document.querySelector("#btn7");

textarea2.querySelector("button").addEventListener("click", () => {
       let texta = textarea2.querySelector("textarea");
       let chanceBtn = textarea2.querySelector("button")

       navigator.clipboard
           .writeText(texta.value)
           .then(() => localStorage.setItem("textarea2", texta.value))

       chanceBtn.classList.add("rounded-pill");
       window.getSelection().removeAllRanges();
       setTimeout(() => {
         chanceBtn.classList.remove("rounded-pill");
       },1000);
 })
document.getElementById('po7').value=window.localStorage.getItem("textarea2")


//POPUP
let img = new Image()
const canvas = document.getElementById('imgResize')
let ctx = canvas.getContext("2d");

canvas.width = 150;
canvas.height = 150;

const addLocalPlaceholder = (e) => {
  let file = e.target.files
  let reader = new FileReader();

  reader.onload = (function(e){
    document.getElementById('grid').style.backgroundImage = "url("+e.target.result+")";
    img.src = e.target.result
  })

  reader.readAsDataURL(file[0])
  img.onload = (function(){
    ctx.drawImage(img, 0, 0, 150, 150);
  })
}
document.getElementById('fileInput').addEventListener('change', addLocalPlaceholder, false)

let download = document.getElementById("download");
download.querySelector("button").addEventListener("click", () => {
let image = document.getElementById("imgResize").toDataURL("image/png")
              .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
  
});
//POP-UP2
document.getElementById("butt").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "flex";
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".popup").style.display = "none";
})