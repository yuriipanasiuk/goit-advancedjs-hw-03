import{a as f,i as n,S as m}from"./assets/vendor-MGgXYDI6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="29525266-43f22ff86b92049909965975c",u="https://pixabay.com/api/",g=o=>f.get(u,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data);n.settings({messageSize:"20",position:"topRight",progressBar:!1,messageColor:"white",messageLineHeight:"24",close:!1,maxWidth:400});const i={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},p=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=o=>{const r=o.reduce((a,s)=>a+`<li class="gallery-item">
      <a href="${s.largeImageURL}">
      <img class ="gallery-image"  src="${s.webformatURL}" alt="${s.tags}" loading="lazy"/></a>
    <div class="info">
      <p class="info-item">
        <b>Likes: </b>${s.likes}
      </p>
      <p class="info-item">
        <b>Views: </b>${s.views}
      </p>
      <p class="info-item">
        <b>Comments: </b>${s.comments}
      </p>
      <p class="info-item">
        <b>Downloads: </b>${s.downloads}
      </p>
    </div>
  </li>`,"");i.gallery.insertAdjacentHTML("beforeend",r),p.refresh()},c=()=>{i.gallery.innerHTML=""},h=()=>{i.loader.classList.add("isActive")},b=()=>{i.loader.classList.remove("isActive")},L=o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a search query!"});return}c(),h(),g(r).then(({hits:a})=>{if(a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}y(a),o.target.reset()}).catch(()=>n.error({message:"Something went wrong!"})).finally(()=>{b()})};i.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
