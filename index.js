const anime = document.getElementById('listAnime');
let tamplate = document.getElementById('data');

fetch('https://api.jikan.moe/v4/top/anime')
.then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
.then(res => {
    const dataAnime = res.data;

    dataAnime.forEach(Anime => {
      const { images, title } = Anime;
      const { jpg } = images;
      const getData = document.importNode(tamplate.content, true);

    getData.querySelector('img').src = jpg.image_url;
    getData.querySelector('img').alt = title;

    getData.querySelector('h3').textContent = Anime.title;

    anime.appendChild(getData);
    })
}).catch((error) => {
    console.error('Error fetching data:', error);
});