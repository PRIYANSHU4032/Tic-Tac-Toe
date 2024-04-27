const URL = "https://cat-fact.herokuapp.com/facts";
const getFacts = async ()=>{
    let res = await fetch(URL);
    let data = await res.json();
    console.log(data[0].text);
    console.log(data[1].text);
    console.log(data[2].text);
    console.log(data[3].text);
    console.log(data[4].text);
};