//api key f7398bf3-e79e-4817-a92c-f0072c868dec

const getArtist = async () => {
  let res = await fetch(
    "https://api.harvardartmuseums.org/object?apikey=f7398bf3-e79e-4817-a92c-f0072c868dec"
  );
  let data = await res.json();

//   data.records.forEach((element) => {
//     // console.log(element.people);
//     let names = element.people.forEach((e) => {
//         console.log(e.name);
        
//);

};
getArtist();
