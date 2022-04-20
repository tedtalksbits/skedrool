const sunday = document.getElementById("sunday");
const monday = document.getElementById("monday");
const tuesday = document.getElementById("tuesday");
const wednesday = document.getElementById("wednesday");
const thursday = document.getElementById("thursday");
const friday = document.getElementById("friday");
const saturday = document.getElementById("saturday");
const dayElement = {
   sunday: sunday,
   monday: monday,
   tuesday: tuesday,
   wednesday: wednesday,
   thursday: thursday,
   friday: friday,
   saturday: saturday,
};

const buildSchedule = (schedule) => {
   schedule.map((e) => {
      for (let i = 0; i < e.days.length; i++) {
         //  create containing element with class of class
         const newClass = document.createElement("div");
         newClass.classList.add("class", e.bgColor);

         // create inner elements
         const classTitle = document.createElement("h3");
         const details = document.createElement("details");
         const classDesc = document.createElement("p");
         details.appendChild(classDesc);
         const classClassroom = document.createElement("p");
         const classTime = document.createElement("small");
         const link = document.createElement("a");
         link.innerText = "Blackboard";
         link.classList.add(e.bgColor);
         link.setAttribute("href", e.link);
         link.setAttribute("target", "_blank");

         // set text content of each inner element
         classTitle.textContent = e.title;
         classClassroom.textContent = e.classroom;
         classDesc.textContent = e.desc;
         classTime.textContent = e.time;

         // append inner elements to containing element
         newClass.appendChild(classTitle);
         newClass.appendChild(classClassroom);
         newClass.appendChild(classTime);
         newClass.appendChild(details);
         details.appendChild(link);

         // append containing element to day
         dayElement[e.days[i]].appendChild(newClass);
      }
   });
};

/************************** datetime **************************/

setInterval(() => {
   const date = new Date().toLocaleDateString();
   const dateElement = document.getElementById("date");
   dateElement.textContent = date;
   const today = new Date().toLocaleTimeString();
   const time = document.getElementById("time");
   time.textContent = today;
}, 1000);

/************************** highligh current day **************************/
const weekday = [
   "sunday",
   "monday",
   "tuesday",
   "wednesday",
   "thursday",
   "friday",
   "saturday",
];
const today = new Date();
console.log(weekday[today.getDay()]);

switch (weekday[today.getDay()]) {
   case "sunday":
      sunday.classList.add("currentDay");
      break;
   case "monday":
      monday.classList.add("currentDay");
      break;
   case "tuesday":
      tuesday.classList.add("currentDay");
      break;
   case "wednesday":
      wednesday.classList.add("currentDay");
      break;
   case "thursday":
      thursday.classList.add("currentDay");
      break;
   case "friday":
      friday.classList.add("currentDay");
      break;

   default:
      saturday.classList.add("currentDay");
      break;
}

// expand datetime

const datetime = document.getElementById("datetime");
datetime.addEventListener("click", function () {
   datetime.classList.toggle("expand");
});

// file upload

const fileInput = document.getElementById("fileInput");
fileInput.onchange = () => {
   const selectedFile = fileInput.files[0];
   const reader = new FileReader();
   reader.onload = function () {
      let res = JSON.parse(reader.result);
      const schedule = res.schedule;
      localStorage.setItem("schedule", JSON.stringify(schedule));
   };
   reader.readAsText(selectedFile);
   window.location.reload(true);
};

const savedSchedule = JSON.parse(localStorage.getItem("schedule"));
buildSchedule(savedSchedule);

/************************** TODO **************************/

// user should be able to edit links
// light theme
