import{S as u,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=new u(".gallery a",{captionsData:"alt"}),g={render:h};function h(r){const o=r.hits.map(s=>`<div>
        <a href="${s.largeImageURL}" class="image-link">
                <img src="${s.webformatURL}" class="image" alt="${s.tags}" title="${s.tags}" />
                <div class="data">
                    <div>
                        <h2 class="data-image">Likes</h2>
                        <span class="data-quantity">${s.likes}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Views</h2>
                        <span class="data-quantity">${s.views}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Comments</h2>
                        <span class="data-quantity">${s.comments}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Downloads</h2>
                        <span class="data-quantity">${s.downloads}</span>
                    </div>
                </div>
        </a></div>
    `).join("");m.innerHTML=o,p.classList.remove("visible"),f.refresh()}const n=document.querySelector(".loader");function y(r){n.classList.add("visible");const o="https://pixabay.com/api/",s="46290930-3746f5b7b54e4eb8c1145cc43",i=`&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true`,t=`${o}?key=${s}${i}`;fetch(t).then(e=>e.json()).then(e=>{console.log(e),e.hits.length===0?(d.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.classList.remove("visible")):(console.log(e),g.render(e))}).catch(e=>{console.error("Ошибка:",e)})}const v={getImages:y},c=document.querySelector(".form"),l=document.querySelector(".form-input");c.addEventListener("submit",r=>{if(r.preventDefault(),l.value.trim()==="")d.show({color:"white",message:"Please fill the input",position:"topRight"});else{const o=l.value;console.log(o),v.getImages(o)}c.reset()});
//# sourceMappingURL=index.js.map
