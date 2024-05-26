const button=document.getElementById("search-button");
const name=document.getElementById("name");

const cityName=document.getElementById("city-name");
const cityTemp=document.getElementById("city-temp");
const cityTime=document.getElementById("city-time");



async function getData(city){
    const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=key&q=${city}&aqi=no`);
    // console.log(data);
    return await data.json();
}

button.addEventListener('click',async()=>{
    const value=name.value;
    const result= await getData(value);
   //console.log(result);
   cityName.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country}`;
   cityTime.innerText=result.location.localtime;
   cityTemp.innerText=result.current.temp_c;
})