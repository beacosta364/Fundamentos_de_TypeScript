import type { GiphyRandomResponse } from "../data/giphy.respone";

const API_KEY = "Q0WcCszvvloMAJBuLAhXaK0UbKSzwlc4";

const myRequest = fetch(
`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=animal`
);

const createImageInsideDOM = (imageUrl: string) => {
const img = document.createElement('img');
img.src = imageUrl;
document.body.append(img);
};

myRequest
.then((response) => response.json())
.then(({ data }: GiphyRandomResponse) => {
const imageUrl = data.images.original.url;
createImageInsideDOM(imageUrl);
})
.catch((error) => {
console.error('Error obteniendo el GIF del animal:', error);
});