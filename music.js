//api key f7398bf3-e79e-4817-a92c-f0072c868dec

const getArtist = async () => {
  try {
    let res = await fetch(
      "https://api.harvardartmuseums.org/object?apikey=f7398bf3-e79e-4817-a92c-f0072c868dec"
    );
    let data = await res.json();
    // let names = data.people

    // names.forEach(name => {
    //     console.log(name);
        
    // });
    console.log(data.people.name);
    
    // data.forEach(art => {
    //     console.log(art.info);
        
    // });;
    
  } catch {}
};
getArtist();
