// alert("faef00");

const today = new Date();
const formattedDate = today.toLocaleDateString("en-GB");

document.querySelectorAll('.noti_1_date_time').forEach(el => {
    el.innerText = formattedDate;
});


let count_student = document.getElementById("count_student");
let student = 0;

let student_interval = setInterval(() => {
  count_student.innerText = student+"+";
  student++;

  if (student > 2500) {
    clearInterval(student_interval); 
  }
}, 1);

let count_faculty = document.getElementById("count_faculty");
let faculty = 0;

let interval_faculty = setInterval(() => {
  count_faculty.innerText = faculty+"+";
  faculty++;

  if (faculty > 100) {
    clearInterval(interval_faculty);
  }
}, 100);

let count_courses = document.getElementById("count_courses");
let courses = 0;

let interval_courses = setInterval(() => {
  count_courses.innerText = courses+"+";
  courses++;

  if (courses > 50) {
    clearInterval(interval_courses);
  }
},100);

let count_department = document.getElementById("count_department");
let department = 0;

let interval_department = setInterval(() => {
  count_department.innerText = department+"+";
  department++;

  if (department > 10) {
    clearInterval(interval_department);
  }
}, 500);


