import{a as f,i as n,S as m}from"./assets/vendor-MGgXYDI6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d="29525266-43f22ff86b92049909965975c",u=`https://pixabay.com/api/?key=${d}&q=`,g=o=>f.get(u,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}});n.settings({messageSize:"20",position:"topRight",progressBar:!1,messageColor:"white",messageLineHeight:"24",close:!1,maxWidth:400});const i={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")},p=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),y=o=>{const s=o.reduce((a,t)=>a+`<li class="gallery-item">
      <a href="${t.largeImageURL}">
      <img class ="gallery-image"  src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/></a>
    <div class="info">
      <p class="info-item">
        <b>Likes: </b>${t.likes}
      </p>
      <p class="info-item">
        <b>Views: </b>${t.views}
      </p>
      <p class="info-item">
        <b>Comments: </b>${t.comments}
      </p>
      <p class="info-item">
        <b>Downloads: </b>${t.downloads}
      </p>
    </div>
  </li>`,"");i.gallery.insertAdjacentHTML("beforeend",s),p.refresh()},c=()=>{i.gallery.innerHTML=""},h=()=>{i.loader.classList.add("isActive")},b=()=>{i.loader.classList.remove("isActive")},L=o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(!s){n.error({message:"Please enter a search query!"});return}c(),h(),g(s).then(a=>{const t=a.data;if(t.hits.length===0){n.show({backgroundColor:"red",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}y(t.hits),o.target.reset()}).catch(()=>n.show({backgroundColor:"#EF4040",message:"Something went wrong!"})).finally(()=>{b()})};i.form.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
