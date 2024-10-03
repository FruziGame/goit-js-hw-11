import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderHTML } from './render-functions';
const loader = document.querySelector(".loader");


function getImages(inputText) {

    loader.classList.add("visible");
    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = '46290930-3746f5b7b54e4eb8c1145cc43';
    const END_POINT = `&q=${encodeURIComponent(inputText)}&image_type=photo&orientation=horizontal&safesearch=true`

    const url = `${BASE_URL}?key=${API_KEY}${END_POINT}`;

    fetch(url).then(res => res.json())
    .then(data => {
        console.log(data);  
            if (data.hits.length === 0) {

                iziToast.show({
                    color: 'red',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                })

                loader.classList.remove("visible");


            } else {
                console.log(data); 
                renderHTML.render(data)
            }
    })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}








export const imageFetcher = {
    getImages
};

