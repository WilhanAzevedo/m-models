(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-478bafe9"],{1248:function(e,t,a){"use strict";a("c9dc")},"1dde":function(e,t,a){var n=a("d039"),r=a("b622"),s=a("2d00"),o=r("species");e.exports=function(e){return s>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"9e8f":function(e,t,a){},bd1b:function(e,t,a){"use strict";a("9e8f")},c9dc:function(e,t,a){},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},f4c2:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-select"},[a("select",{staticClass:"input-select",on:{input:function(t){return e.$emit("input",t.target.value)}}},e._l(e.values,(function(t,n){return a("option",{key:n,domProps:{value:JSON.stringify(t),selected:e.value.nome===t.nome}},[e._v(" "+e._s(t.nome)+" ")])})),0)])},r=[],s={props:{placeholder:{type:String},type:{type:String},value:Object,values:Array}},o=s,i=(a("bd1b"),a("2877")),u=Object(i["a"])(o,n,r,!1,null,null,null);t["a"]=u.exports},fb5e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit-profile"},[a("Menu"),a("div",{staticClass:"edit-infos"},[a("div",{staticClass:"tab"},[a("div",{class:e.tab1?"tab-active":"tab-off",on:{click:function(t){return e.openSection("infoUser")}}},[a("span",[e._v("Usúario")])]),a("div",{class:e.tab2?"tab-active":"tab-off",on:{click:function(t){return e.openSection("features")}}},[a("span",[e._v("Caracteristicas")])])]),a("div",{class:e.tab1?"tabcontent active-tab":"tabcontent",attrs:{id:"infoUser"}},[a("div",{staticClass:"change-photo"},[a("div",{staticClass:"personal-image"},[a("label",{staticClass:"label"},[a("input",{attrs:{type:"file"},on:{change:e.onFileChange}}),a("figure",{staticClass:"personal-figure"},[a("img",{staticClass:"personal-avatar",attrs:{src:e.urlImg,alt:"avatar"}}),e._m(0)])])])]),a("div",{staticClass:"info-personal"},[e.user?a("div",{staticClass:"form"},[a("div",{staticClass:"input"},[a("span",[e._v("Nome")]),a("Input",{attrs:{type:"text",placeholder:"Nome",value:e.user.nome},on:{input:e.onName}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Sobrenome")]),a("Input",{attrs:{type:"text",placeholder:"Sobrenome",value:e.user.sobre_nome},on:{input:e.onAboutName}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Data de nascimento")]),a("Input",{attrs:{type:"date",placeholder:"2017-01-17",data:"2017-01-17",value:e.formatDate(e.user.data_nascimento)},on:{input:e.onDateBirthday}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Idade")]),a("Input",{attrs:{type:"number",placeholder:"Idade",value:e.user.idade,disabled:""},on:{input:e.onAge}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Gênero")]),e._v(" "+e._s(e.user.genero)+" "),a("InputSelect",{attrs:{type:"select",placeholder:"Gênero",value:{nome:e.user.genero},values:e.gender},on:{input:e.onGender}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Celular")]),a("Input",{attrs:{type:"text",placeholder:"Celular",value:e.user.numero_whats},on:{input:e.onWhats}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Estado")]),a("Input",{attrs:{type:"text",placeholder:"Estado",value:e.user.estado},on:{input:e.onState}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Cidade")]),a("Input",{attrs:{type:"text",placeholder:"Cidade",value:e.user.cidade},on:{input:e.onCity}})],1),a("div",{staticClass:"button-save"},[a("div",[a("Button",{attrs:{textButton:"Salvar",backgroundButton:"primary",router:e.saveInfoUser}})],1)])]):e._e()])]),a("div",{class:e.tab2?"tabcontent active-tab":"tabcontent",attrs:{id:"features"}},[e.feature?a("div",{staticClass:"about-input"},[a("span",[e._v("Sobre mim:")]),a("Input",{attrs:{type:"text",placeholder:"Irracionais nas horas vagas",value:e.feature.caracteristicas_adcionais},on:{input:e.onAbout}})],1):e._e(),e._m(1),e.feature?a("div",{staticClass:"form-features"},[a("div",{staticClass:"input"},[a("span",[e._v("Cor do cabelo")]),a("InputSelect",{attrs:{type:"select",placeholder:"Cor do cabelo",value:e.feature.cor_cabelo,values:e.colorHair},on:{input:e.onColorHair}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Cor dos olhos")]),a("InputSelect",{attrs:{type:"select",placeholder:"Cor dos Olhos",value:e.feature.cor_olho,values:e.colorEyes},on:{input:e.onColorEyes}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Cor da pele")]),a("InputSelect",{attrs:{type:"select",placeholder:"Cor da pele",value:e.feature.cor_pele,values:e.colorSkin},on:{input:e.onColorSkin}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Manequim")]),a("InputSelect",{attrs:{type:"select",placeholder:"Tamanho manequim",value:e.feature.manequim,values:e.manequimOptions},on:{input:e.onManequim}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Altura")]),a("Input",{attrs:{type:"number",value:e.feature.altura,placeholder:"Altura"},on:{input:e.onHeight}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Peso")]),a("Input",{attrs:{type:"number",value:e.feature.peso,placeholder:"Peso"},on:{input:e.onWeight}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Quadril")]),a("Input",{attrs:{type:"numupload ber",value:e.feature.quadril,placeholder:"Quadril"},on:{input:e.onHip}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Busto torax")]),a("Input",{attrs:{type:"number",value:e.feature.busto_torax,placeholder:"Busto torax"},on:{input:e.onBust}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Calçado")]),a("Input",{attrs:{type:"number",value:e.feature.calcado,placeholder:"Calçado"},on:{input:e.onShoe}})],1),a("div",{staticClass:"input"},[a("span",[e._v("Cintura")]),a("Input",{attrs:{type:"number",value:e.feature.cintura,placeholder:"Cintura"},on:{input:e.onWaist}})],1)]):e._e(),a("div",{staticClass:"button-save"},[a("div",[a("Button",{attrs:{textButton:"Salvar",backgroundButton:"primary",router:e.saveFeatures}})],1)])])])],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("figcaption",{staticClass:"personal-figcaption"},[a("img",{attrs:{src:"https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info-title"},[a("span",[e._v("Detalhes")])])}],s=a("1da1"),o=(a("fb6a"),a("ac1f"),a("5319"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("fb62")),i=a("1270"),u=a("f4c2"),c=a("2a7d"),l=a("ddd3"),d={components:{Menu:o["a"],Input:i["a"],Button:c["a"],InputSelect:u["a"]},data:function(){return{feature:null,user:null,tab1:!0,tab2:!1,urlImg:null,changeImg:!1,userImg:null,formFeatures:{id:null},gender:[{nome:"Masculino"},{nome:"Feminino"},{nome:"Prefiro não informar"}],colorHair:null,colorEyes:null,colorSkin:null,manequimOptions:null}},mounted:function(){this.getUser(),this.getFeatures()},methods:{getFeatures:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["a"].getFeaturesForm();case 2:a=t.sent,e.colorHair=a.data[0].predefinidas,e.colorEyes=a.data[1].predefinidas,e.colorSkin=a.data[2].predefinidas,e.manequimOptions=a.data[3].predefinidas;case 7:case"end":return t.stop()}}),t)})))()},formatDate:function(e){var t=new Date(e),a=t.toISOString().slice(0,10);return a},getUser:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,JSON.parse(localStorage.getItem("usuario"));case 2:if(a=t.sent,a||e.$router.replace({name:"login"}),!a){t.next=9;break}return t.next=7,l["a"].getFeaturesModel(a.modelo.id);case 7:n=t.sent,200===n.status&&(e.feature=n.data.caracteristicas[0],e.user=n.data.modelo[0],e.urlImg=e.user.foto_perfil,e.formFeatures.id=n.data.modelo[0].id);case 9:case"end":return t.stop()}}),t)})))()},onName:function(e){this.user.nome=e},onAboutName:function(e){this.user.sobre_nome=e},onDateBirthday:function(e){this.user.idade=this.getAge(e),this.user.data_nascimento=e},onAge:function(e){this.user.idade=e},onGender:function(e){this.user.genero=e},onWhats:function(e){this.user.numero_whats=e},onState:function(e){this.user.estado=e},onCity:function(e){this.user.cidade=e},onAbout:function(e){this.feature.caracteristicas_adcionais=e},onColorHair:function(e){this.feature.cor_cabelo=JSON.parse(e)},onColorEyes:function(e){this.feature.cor_olho=JSON.parse(e)},onColorSkin:function(e){this.feature.cor_pele=JSON.parse(e)},onManequim:function(e){this.feature.manequim=JSON.parse(e)},onHeight:function(e){this.feature.altura=JSON.parse(e)},onWeight:function(e){this.feature.peso=JSON.parse(e)},onHip:function(e){this.feature.quadril=JSON.parse(e)},onBust:function(e){this.feature.busto_torax=JSON.parse(e)},onShoe:function(e){this.feature.calcado=JSON.parse(e)},onWaist:function(e){this.feature.cintura=JSON.parse(e)},getAge:function(e){var t=new Date,a=new Date(e),n=t.getFullYear()-a.getFullYear(),r=t.getMonth()-a.getMonth();return(r<0||0===r&&t.getDate()<a.getDate())&&n--,n},saveInfoUser:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.changeImg&&e.handleProfileImg(),a={nome:e.user.nome,sobre_nome:e.user.sobre_nome,idade:e.user.idade,numero_whats:e.user.numero_whats,data_nascimento:e.formatDate(e.user.data_nascimento)+" 00:00:00",cidade:e.user.cidade,estado:e.user.estado,id:e.user.id},t.next=4,l["a"].changeUser(a);case 4:n=t.sent,n.data&&e.$vToastify.success({body:"Alterado com sucesso",title:"Tudo certo!"});case 6:case"end":return t.stop()}}),t)})))()},saveFeatures:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={altura:e.feature.altura,peso:e.feature.peso,manequim:e.feature.manequim.id,busto_torax:e.feature.busto_torax,quadril:e.feature.quadril,calcado:e.feature.calcado,cor_olho:e.feature.cor_olho.id,cor_cabelo:e.feature.cor_cabelo.id,cor_pele:e.feature.cor_pele.id,cintura:e.feature.cintura,id_modelo:e.user.id,update_at:null,caracteristicas_adcionais:e.feature.caracteristicas_adcionais,id:e.user.id},t.next=3,l["a"].changeFeatures(a);case 3:n=t.sent,n.data&&e.$vToastify.success({body:"Alterado com sucesso",title:"Tudo certo!"});case 5:case"end":return t.stop()}}),t)})))()},openSection:function(e){"infoUser"===e&&(this.tab1=!0,this.tab2=!1),"features"===e&&(this.tab1=!1,this.tab2=!0)},onFileChange:function(e){var t=e.target.files[0];this.urlImg=URL.createObjectURL(t),this.changeImg=!0,this.userImg=t},handleProfileImg:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("imagemmm",e.userImg),a=new FormData,a.append("foto_perfil",e.userImg),t.next=5,l["a"].handleProfileImg(e.user.id,a);case 5:n=t.sent,n.data&&e.$vToastify.success({body:"Alterado com sucesso",title:"Tudo certo!"});case 7:case"end":return t.stop()}}),t)})))()}}},p=d,f=(a("1248"),a("2877")),v=Object(f["a"])(p,n,r,!1,null,null,null);t["default"]=v.exports},fb6a:function(e,t,a){"use strict";var n=a("23e7"),r=a("861d"),s=a("e8b5"),o=a("23cb"),i=a("50c4"),u=a("fc6a"),c=a("8418"),l=a("b622"),d=a("1dde"),p=d("slice"),f=l("species"),v=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var a,n,l,d=u(this),p=i(d.length),h=o(e,p),b=o(void 0===t?p:t,p);if(s(d)&&(a=d.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?r(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return v.call(d,h,b);for(n=new(void 0===a?Array:a)(m(b-h,0)),l=0;h<b;h++,l++)h in d&&c(n,l,d[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-478bafe9.ecac3aee.js.map