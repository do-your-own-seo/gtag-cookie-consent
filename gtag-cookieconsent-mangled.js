/*!
 * Olya Vo & ChatGPT for https://do-your-own-seo.com
 * Released under the MIT License
 */
var modal=document.querySelector("#modal");function chCt(){var e=gtC("cookie_consent");return!(!e||"granted"!==e)||(e?void 0:(shM(),!1))}function shM(){modal.classList.contains("hidden")&&modal.classList.remove("hidden"),document.getElementById("accept-all").addEventListener("click",function(){stC("cookie_consent","granted",90),gtag("consent","update",{analytics_storage:"granted"}),clM()}),document.getElementById("accept-necessary").addEventListener("click",function(){rCSW("_ga"),stC("cookie_consent","denied",90),clM()})}function clM(){modal.classList.add("hidden"),modal.replaceWith(modal.cloneNode(!0))}function gtC(e){var o=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return o?o[2]:null}function stC(e,o,t){var n=new Date;n.setTime(n.getTime()+24*t*60*60*1e3);t="expires="+n.toUTCString();document.cookie=e+"="+o+";"+t+";path=/"}function rCSW(e){for(var o=document.cookie.split(";"),t=0;t<o.length;t++){var n=o[t].trim();0===n.indexOf(e)&&(document.cookie=n.split("=")[0]+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")}}chCt();