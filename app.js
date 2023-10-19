const getAnime = document.getElementById('getAnime')
const getReuslt = document.querySelector('.getReuslt')




getReuslt.addEventListener("click", getAnimeforUser)


async function getAnimeforUser(){
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${getAnime.value}&key=AIzaSyDAb7ooIuLwQTz_f6b3R2mBbJ_ektNZBx4&maxResults=40`);
    const data = await res.json()
    console.log(data)
}