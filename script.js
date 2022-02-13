function myFunction() {
     var element = document.body;
     element.classList.toggle("dark-theme");
}
const start_btn = document.querySelector(".start button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
// const next_btn = quiz_box.querySelector(".buttons .next");
const result_box = document.querySelector(".result_box");

start_btn.onclick = ()=>{
     info_box.classList.add("activeInfo"); //show
 }
 
 exit_btn.onclick = ()=>{
     info_box.classList.remove("activeInfo"); //hide
 }

 continue_btn.onclick = ()=>{
     info_box.classList.remove("activeInfo"); //hide
     quiz_box.classList.add("activeQuiz"); //show
     show_timer(); //start timer
 }

 // next_btn.onclick = ()=>{
 //     quiz_box.classList.remove("activeQuiz"); //hide
 //     result_box.classList.add("activeResult"); //show
 // }

function replay() {
    if (confirm("Are you sure, want to replay?")) {
        location.reload();
    }
}

function quit() {
     var quit = confirm("Are you sure, you want to quit this random quiz application ? ");
     if (quit == true) {
         close();
     }
 }


