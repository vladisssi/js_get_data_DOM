var t=document.querySelectorAll(".population"),e=0,o=0;t.forEach(function(t){var o=parseFloat(t.textContent.replace(",",""));e+=o});var n=t.length;o=Math.floor(e/n);var a=e.toLocaleString("en-US"),r=o.toLocaleString("en-US");document.querySelector(".total-population").textContent=a,document.querySelector(".average-population").textContent=r;
//# sourceMappingURL=index.ed07e1c9.js.map
