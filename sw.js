if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"87fff59c760c77ba20dc0be6083cd238"},{url:"assets/index-CHxfkJGw.js",revision:null},{url:"assets/index-CQj8pJa9.css",revision:null},{url:"index.html",revision:"33e970e8b15d0cf44487e07521e982e9"},{url:"registerSW.js",revision:"db3a422ec8223534542a1b2456fe46dd"},{url:"manifest.webmanifest",revision:"e41737c2f3f8e863a5093593ea8c6b08"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
