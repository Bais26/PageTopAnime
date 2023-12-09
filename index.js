// fetch('https://api.jikan.moe/v4/top/anime')
// .then(response => response.json())
// .then(json => json.data.map(data => {
//     console.log(data.title);
// }))

//   const animeList = document.getElementById("listAnime");

//   fetch('https://api.jikan.moe/v4/top/anime')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Memproses data yang diterima dari API
//       const topAnime = data.data; // Sesuaikan dengan struktur data API

//       // Menampilkan data anime dalam elemen HTML
//       topAnime.forEach(anime => {
//         const animeElement = document.createElement('section');
//         animeElement.innerHTML = `
//           <img src="${anime.images.jpg.image_url}" alt="${anime.title} Poster">
//           <h2>${anime.title}</h2>
//         `;
//         animeList.appendChild(animeElement);
//       });
//     })
//     .catch(error => {
//       console.error('There was a problem fetching the data:', error);
//     });
const anime = document.getElementById('listAnime');
let tamplate = document.getElementById('data');

fetch('https://api.jikan.moe/v4/top/anime')
.then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
.then(data => {
    const dataAnime = data.data;

    dataAnime.forEach(Anime => {
    const getData = document.importNode(tamplate.content, true);

    getData.querySelector('img').src = Anime.images.jpg.image_url;
    getData.querySelector('img').alt = Anime.title;

    getData.querySelector('h3').textContent = Anime.title;

    anime.appendChild(getData);
    })
}).catch((error) => {
    console.error('Error fetching data:', error);
   
});