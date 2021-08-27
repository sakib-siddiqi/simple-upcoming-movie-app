async function movie() {
    let fetching= await fetch('https://www.whenisthenextmcufilm.com/api');
    let convertToJson= await fetching.json();
    let response = await convertToJson;
    console.log(response);
    recent(response)
}
movie();
function recent(res) {
    document.querySelector('p').style.display = "none";
    document.querySelector('.poster').src=res.poster_url;
    document.querySelector('.movieTitle').innerText=res.title;
    document.querySelector('.movieOverview').innerText=res.overview;
    document.querySelector('.release').innerText=res.release_date;
    document.querySelector('.days_untile').innerText=res.days_until + " days left";
    document.querySelector('.next-previous').innerText="next Movie";
    document.querySelector('.next-previous').addEventListener('click',()=>{upComing(res)})
}
function upComing(res) {
    document.querySelector('p').style.display = "none";
    document.querySelector('.poster').src=res.following_production.poster_url;
    document.querySelector('.movieTitle').innerText=res.following_production.title;
    document.querySelector('.movieOverview').innerText=res.following_production.overview;
    document.querySelector('.release').innerText=res.following_production.release_date;
    document.querySelector('.days_untile').innerText=res.following_production.days_until + " days left";
    document.querySelector('.next-previous').innerText="previous Movie";
    document.querySelector('.next-previous').addEventListener('click',()=>{recent(res)})
}