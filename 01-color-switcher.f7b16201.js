const t={body:document.querySelector("body"),buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]")};t.buttonStart.addEventListener("click",(function(e){o=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log("change color"),t.buttonStart.disabled=!0,t.buttonStop.disabled=!1})),t.buttonStop.addEventListener("click",(function(e){console.log("stop changes"),clearInterval(o),t.buttonStop.disabled=!0,t.buttonStart.disabled=!1}));let o=null;
//# sourceMappingURL=01-color-switcher.f7b16201.js.map