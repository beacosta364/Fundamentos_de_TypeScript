import type { GiphyRandomResponse } from "../data/giphy.respone";

const API_KEY = "Q0WcCszvvloMAJBuLAhXaK0UbKSzwlc4"; // Replace with your actual Giphy API key

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (imageUrl: string) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    document.body.append(img);
};

myRequest
    .then((response) => {return response.json();})
    .then (({data}: GiphyRandomResponse) => {
        console.log(data);
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((error) => {
        console.error('Error fetching data from Giphy API:', error);
    });