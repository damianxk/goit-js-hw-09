!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("6JpON"),i=document.querySelector('[name="delay"]'),c=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]'),a=document.querySelector('[type="submit"]'),d=function(n,t,o){var u,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;i>n||((u=o,new Promise(function(e,n){Math.random()>.3?e("\uD83D\uDC4D Fulfilled promise ".concat(i," in ").concat(u,"ms")):n("\uD83D\uDC4E Rejected promise ".concat(i," in ").concat(u,"ms"))})).then(function(n){return e(r).Notify.success(n)}).catch(function(n){return e(r).Notify.failure(n)}),o+=t,setTimeout(function(){return d(n,t,o,i+1)},t))};a.addEventListener("click",function(e){e.preventDefault(),setTimeout(function(){return d(+l.value,+c.value,+i.value)},+i.value)})}();
//# sourceMappingURL=03-promises.17ba345d.js.map
