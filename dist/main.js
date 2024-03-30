(()=>{"use strict";class t{constructor(t,e,n){this.now=t,this.forecast=e,this.selectedUnit=n}renderToday(){const t=document.createElement("div"),e=document.createElement("h2"),n=document.createElement("img"),i=document.createElement("h3"),o=document.createElement("p");return t.classList.add("current-card"),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(o),e.textContent=new Date,n.src=this.now.icon,i.textContent=this.now.condition,o.textContent="farenheit"===this.selectedUnit?this.now.farenheit:this.now.celsius,t}renderFuture(){let t=[];return this.forecast.forEach((e=>{let n=function(t,e,n,i,o,c,a,r){const d=document.createElement("div"),s=document.createElement("h2"),l=document.createElement("img"),u=document.createElement("h3"),m=document.createElement("p"),h=document.createElement("p");return d.classList.add("current-card"),d.appendChild(s),d.appendChild(l),d.appendChild(u),d.appendChild(m),d.appendChild(h),s.textContent=t,l.src=e,u.textContent=n,m.textContent="farenheit"===r?c:i,h.textContent="farenheit"===r?a:o,d}(e.date,e.icon,e.condition,e.maxCelsius,e.minCelsius,e.maxFarenheit,e.minFarenheit,this.selectedUnit);t.push(n)})),t}}async function e(n,i){const o=await async function(t,e){let n,i={location:{},now:{},forecast:[]};return await async function(t,e){try{let i=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${e}&q=${t}&days=3`);if(!i.ok)throw new Error(`Server error ${i.status}: ${i.statusText}`);n=await i.json()}catch(t){console.log(t.message),i.error=t.message}}(t,"b58c63519071410d91613011243003"),i.location.country=n.location.country,i.location.city=n.location.name,i.location.time=n.location.localtime,i.now.celsius=n.current.temp_c,i.now.farenheit=n.current.temp_f,i.now.icon=n.current.condition.icon,i.now.condition=n.current.condition.text,n.forecast.forecastday.forEach((t=>{i.forecast.push({date:t.date,maxCelsius:t.day.maxtemp_c,minCelsius:t.day.mintemp_c,maxFarenheit:t.day.maxtemp_f,minFarenheit:t.day.mintemp_f,condition:t.day.condition.text,icon:t.day.condition.icon})})),i}(n),c=document.querySelector(".root-div");c.innerHTML="";const a=new t(o.now,o.forecast,i),r=a.renderFuture(),d=document.createElement("h2"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("label"),m=document.createElement("input"),h=document.createElement("button"),p=document.createElement("div"),C=document.createElement("button"),f=document.createElement("button");u.setAttribute("for","location-input"),m.setAttribute("id","location-input"),m.setAttribute("type","text"),m.setAttribute("placeholder","Enter City, Zip, etc."),h.setAttribute("value","Search"),h.classList.add("submit-btn"),h.classList.add("btn"),p.setAttribute("id","temp-swtch"),C.setAttribute("id","celsius-switch"),C.setAttribute("value","celsius"),C.classList.add("temp-switch"),f.setAttribute("id","farenheit-switch"),f.setAttribute("value","farenheit"),f.classList.add("temp-switch"),h.addEventListener("click",(()=>{m.value?e(m.value,i):m.setAttribute("placeholder","Enter a location!")})),l.appendChild(u),l.appendChild(m),l.appendChild(h),p.appendChild(C),p.appendChild(f),p.childNodes.forEach((t=>{t.addEventListener("click",(t=>{e(n,t.target.value)}))})),d.textContent=`${o.location.city}, ${o.location.country}`,u.textContent="Change Location:",C.textContent="C°",f.textContent="F°",h.textContent="Search",s.appendChild(l),s.appendChild(p),c.appendChild(s),c.appendChild(d),c.appendChild(a.renderToday()),r.forEach((t=>c.appendChild(t)))}document.querySelector(".root-div"),async function(){const t=await async function(){return(async()=>{try{let t=await new Promise(((t,e)=>navigator.geolocation.getCurrentPosition(t,e)));return{latitude:t.coords.latitude,longitude:t.coords.longitude}}catch(t){console.log(t.message)}})()}();e(`${t.latitude},${t.longitude}`,"celsius")}()})();