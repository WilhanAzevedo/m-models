(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8a78b3ac"],{"1dde":function(t,e,r){var o=r("d039"),a=r("b622"),n=r("2d00"),s=a("species");t.exports=function(t){return n>=51||!o((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"3d88":function(t,e,r){},"784d":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"job-details"},[o("Menu"),t.job?o("div",{staticClass:"job-header"},[o("div",{staticClass:"header-details"},[o("div",{staticClass:"image"},[o("img",{attrs:{src:t.job.foto_servico,alt:t.job.nome_servico}})]),o("div",{staticClass:"details"},[o("div",{staticClass:"top"},[o("div",{staticClass:"top-details"},[o("div",{staticClass:"title"},[o("span",{domProps:{textContent:t._s(t.job.nome_servico)}},[t._v("Editorial de revista")])]),o("div",{staticClass:"location"},[t._m(0),o("div",{staticClass:"city"},[o("span",{domProps:{textContent:t._s(t.job.lugar_divulgacao)}},[t._v("Brasília")])]),o("div",{domProps:{textContent:t._s(t.formatDate(t.job.data_cadastro))}})])]),o("div",{staticClass:"close-button",on:{click:function(e){return t.$router.go(-1)}}},[o("img",{attrs:{src:r("f817"),alt:""}})])]),o("div",{staticClass:"image-responsive"},[o("img",{attrs:{src:t.job.foto_servico,alt:t.job.nome_servico}})]),o("div",{staticClass:"description"},[o("span",{domProps:{textContent:t._s(t.job.descricao)}})]),o("div",{staticClass:"button-apply"},[o("Button",{attrs:{textButton:"Candidatar-se",backgroundButton:"primary",router:t.setJobModel}})],1)])])]):t._e()],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{attrs:{src:r("ba13"),alt:""}})])}],n=r("1da1"),s=(r("fb6a"),r("96cf"),r("fb62")),i=r("2a7d"),c=r("a8d3"),u={components:{Menu:s["a"],Button:i["a"]},mounted:function(){this.getJob()},data:function(){return{job:null}},methods:{getJob:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getJob(t.$route.params.id);case 2:r=e.sent,t.job=r.data[0];case 4:case"end":return e.stop()}}),e)})))()},formatDate:function(t){var e=new Date(t),r=e.toISOString().slice(0,10);return new Date(r).toLocaleString()},setJobModel:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,JSON.parse(localStorage.getItem("usuario"));case 2:if(r=e.sent,!r){e.next=7;break}return o={id_modelo:r.modelo.id,id_servico:t.job.id},e.next=7,c["a"].setJobModel(o).then((function(e){e.data&&t.$vToastify.success({body:"Candidatado com sucesso",title:"Tudo certo!"})})).catch((function(){t.$vToastify.error({body:"Você ja é um candidato para esse trabalho",title:"Epa!"})}));case 7:case"end":return e.stop()}}),e)})))()}}},d=u,l=(r("cf1f"),r("2877")),f=Object(l["a"])(d,o,a,!1,null,null,null);e["default"]=f.exports},8418:function(t,e,r){"use strict";var o=r("c04e"),a=r("9bf2"),n=r("5c6c");t.exports=function(t,e,r){var s=o(e);s in t?a.f(t,s,n(0,r)):t[s]=r}},a8d3:function(t,e,r){"use strict";var o=r("e4f4");e["a"]={getAlbum:function(t,e){return Object(o["a"])({method:"GET",url:"/modelo/album/listarmodeloalbuns/"+t,headers:{Authorization:e?"Bearer "+e:""}})},getJobs:function(t){return Object(o["a"])({method:"GET",url:"/servicos/listar",headers:{Authorization:t?"Bearer "+t:""}})},getJobsRecents:function(t){return Object(o["a"])({method:"GET",url:"/servicos/listar/servicosnovos/",headers:{Authorization:t?"Bearer "+t:""}})},getJob:function(t){return Object(o["a"])({method:"GET",url:"/servicos/listarporid/"+t})},getJobUser:function(t){return Object(o["a"])({method:"GET",url:"/user/listarporid/modeloservico/"+t})},setJobModel:function(t){return Object(o["a"])({method:"POST",url:"/user/vincular/modeloservico",data:t})}}},cf1f:function(t,e,r){"use strict";r("3d88")},e8b5:function(t,e,r){var o=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},fb6a:function(t,e,r){"use strict";var o=r("23e7"),a=r("861d"),n=r("e8b5"),s=r("23cb"),i=r("50c4"),c=r("fc6a"),u=r("8418"),d=r("b622"),l=r("1dde"),f=l("slice"),v=d("species"),b=[].slice,m=Math.max;o({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var r,o,d,l=c(this),f=i(l.length),p=s(t,f),h=s(void 0===e?f:e,f);if(n(l)&&(r=l.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(l,p,h);for(o=new(void 0===r?Array:r)(m(h-p,0)),d=0;p<h;p++,d++)p in l&&u(o,d,l[p]);return o.length=d,o}})}}]);
//# sourceMappingURL=chunk-8a78b3ac.9636482a.js.map