const submitbtn = document.getElementById("submitbtn");
const city = document.getElementById("city");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_data");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".mid_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityval = city.value;
  //console.log(cityval);
  if (cityval === "") {
    city_name.innerText = "Plz write city Name before search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=b46be93288268115eac55542dc82bb05`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

      let tempStatus = arrData[0].weather[0].main;
      console.log(arrData[0].weather[0].main);
      //condition to check sunny or cloudy
      if (tempStatus == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else if (tempStatus == "smoke") {
        temp_status.innerHTML =
          "<i class='fa-regular fa-smoke' style='color: #a4b0be;'></i>";
      } else if (tempStatus == "Haze" || tempStatus == "haze") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-smog' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
      datahide.classList.remove("data_hide");
      console.log(arrData[0]);
    } catch {
      city_name.innerText = "Error";
      datahide.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", getInfo);
