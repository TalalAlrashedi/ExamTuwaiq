let container = document.getElementById("container-api");

const getCities = async () => {
  try {
    let res = await fetch("https://restcountries.com/v3.1/all");
    let data = await res.json();

    data.forEach((city) => {
      let card = document.createElement("div");
      let cities = document.createElement("div");

      // console.log(city.name.common);
      let commonName = document.createElement("p");
      commonName.innerText = `the common name is :  ${city.name.common};`;

      // console.log(city.name.official);
      let offName = document.createElement("p");
      offName.innerText = `the official name is : ${city.name.official};`;
      // console.log(city.population);
      let population = document.createElement("div");
      population.innerText = `population is : ${city.population};`;
      // console.log(city.flags.png);
      let image = document.createElement("img");
      image.src = city.flags.png;
      image.width = "250";
      image.height = "150";
      // it's a div
      let region = document.createElement("div");
      // console.log(city.region);
      let country = document.createElement("p");
      country.innerText = city.region;
      
      // console.log(city.languages); //it' array need for loop alone
      let langs = document.createElement("p");
      langs.innerText = city.languages;
      langs.className = ".populations img"
      // console.log(city.maps.googleMaps);
      let maps = document.createElement("p");
      maps.innerText = city.maps.googleMaps;

      //appeand child here

      cities.appendChild(commonName);

      cities.appendChild(offName);
      cities.className = "cities";
      population.appendChild(image);
      population.appendChild(region);
      population.className = "population";
      region.appendChild(country);
      region.appendChild(langs);

      region.className = "regions";
      population.appendChild(region);

      population.appendChild(image);
      population.appendChild(maps);
      card.appendChild(cities);
      card.appendChild(population);
      card.className = "card";
      container.appendChild(card);
    });
    // console.log(data);
  } catch (e) {}
};
getCities();
