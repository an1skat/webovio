!function(){var e=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",(function(){window.scrollY>100?e.style.display="flex":e.style.display="none"}));e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("playLink1"),t=document.getElementById("playLink2"),n=document.getElementById("playLink3"),o=document.getElementById("audioPlayer"),d=document.getElementById("megalodonImage"),l=function(e){e.preventDefault(),o.volume=.7,o.play(),d.classList.add("active"),setTimeout((function(){o.pause(),o.currentTime=0,d.classList.remove("active")}),7900)};e.addEventListener("click",l),t.addEventListener("click",l),n.addEventListener("click",l)}))}();
//# sourceMappingURL=index.6bacb371.js.map
