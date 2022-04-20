const savedSchedule = JSON.parse(localStorage.getItem("schedule"));
const scheduleElement = document.getElementById("savedSchedule");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressBar = document.getElementById("progress");
let currentIndex = 0;
let progress = 100 / savedSchedule.length;
progressBar.style.width = progress + "%";
progressBar.textContent = `${currentIndex + 1} / ${savedSchedule.length}`;
nextBtn.addEventListener("click", function () {
   if (currentIndex !== savedSchedule.length - 1) {
      currentIndex += 1;
      scheduleElement.style.transform = `translateX(${currentIndex * -100}vw)`;
      progress += 100 / savedSchedule.length;
      progressBar.style.width = progress + "%";
      progressBar.textContent = `${currentIndex + 1} / ${savedSchedule.length}`;
   }
});
prevBtn.addEventListener("click", function () {
   if (currentIndex !== 0) {
      currentIndex -= 1;
      scheduleElement.style.transform = `translateX(${currentIndex * -100}vw)`;
      scheduleElement.style.opacity = 1;
      progress -= 100 / savedSchedule.length;
      progressBar.style.width = progress + "%";
      progressBar.textContent = `${currentIndex + 1} / ${savedSchedule.length}`;
   }
});
let output = "";
savedSchedule.map((e, i) => {
   output += "<div class='schedule-item'>";
   output += "<div class='item'>";
   for (props in e) {
      output += `
      <div class="mb-1">
      <label for="formItem" class="form-label"
         >${props}</label
      >
      <input
         type="text"
         class="form-control"
         id="formItem"
         value='${e[props]}'
      />
   </div>
      `;
   }
   output += "</div>";
   output += "</div>";
});

scheduleElement.innerHTML = output;
