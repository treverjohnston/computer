(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e8be2"],{"8b24":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"row justify-center header text-center home-header desktop-only"},[a("div",{staticClass:"col-xs-12 vh_75"},[a("h1",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:500,delay:300},translateY:{value:["-200px","0px"],duration:1e3},easing:"linear",delay:100},expression:"{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-200px', '0px'], duration: 1000},  easing: 'linear', delay:100 }"}],staticClass:"text-accent text-weight-bolder header-text"},[e._v("\n                Computer Repair Co.\n            ")])])]),a("div",{staticClass:"row justify-center second-header text-center header-padding desktop-only q-gutter-md shadow-24"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:500,delay:300},translateY:{value:["100px","-75px"],duration:1e3},easing:"linear",delay:100},expression:"{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['100px', '-75px'], duration: 1000},  easing: 'linear', delay:100 }"}],staticClass:"col-xs-10 col-sm-9 col-md-8 text-center white-background text-padding shadow-12 self-center home-border"},[a("div",{staticClass:"text-h2"},[e._v("\n                Service, Sales, Repair\n            ")]),a("hr"),a("div",{staticClass:"text-h4 q-mt-lg"},[e._v("\n                We will match or beat any competitor's pricing*\n            ")]),a("div",{staticClass:"text-h4 q-mt-lg"},[e._v("\n                FREE DIAGNOSTIC computer repair, sales, and service in Boise, Idaho*\n            ")]),a("div",{directives:[{name:"scroll-fire",rawName:"v-scroll-fire",value:e.fadeInImage,expression:"fadeInImage"}],staticClass:"text-h6 q-mt-lg"},[e._v("\n                *Not really. This is just a mock up site.\n            ")])])]),a("div",{staticClass:"row justify-center text-center mobile-only"},[a("div",{staticClass:"col-xs-12 vh_60"},[a("h1",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:500,delay:300},translateY:{value:["-200px","0px"],duration:1e3},easing:"linear",delay:100},expression:"{opacity: { value: ['0', '1'], duration: 500,delay:300 }, translateY: { value: ['-200px', '0px'], duration: 1000},  easing: 'linear', delay:100 }"}],staticClass:"text-weight-bolder text-h3 text-accent"},[e._v("\n                Computer Repair Co.\n            ")])])]),a("div",{staticClass:"row justify-center second-header text-center header-padding mobile-only"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{opacity:{value:["0","1"],duration:8e3}},expression:"{  opacity: { value: ['0', '1'], duration: 8000 }}"}],staticClass:"col-xs-10 col-sm-9 col-md-8 text-justify white-background text-padding shadow-12 mobile-margin border-background"},[a("div",{staticClass:"text-h5"},[e._v("\n                Service, Sales, Repair\n            ")]),a("hr"),a("div",{staticClass:"text-body1 q-mt-lg"},[e._v("\n                We will match or beat any competitor's pricing*\n            ")]),a("div",{staticClass:"text-body1 q-mt-lg"},[e._v("\n                FREE DIAGNOSTIC computer repair, sales, and service in Boise, Idaho*\n            ")]),a("div",{directives:[{name:"scroll-fire",rawName:"v-scroll-fire",value:e.fadeInImage,expression:"fadeInImage"}],staticClass:"text-body1 q-mt-lg"},[e._v("\n                *Not really. This is just a mock up site.\n            ")])])]),a("div",{staticClass:"row justify-center header text-center "},e._l(e.services,(function(t){return a("q-card",{directives:[{name:"anime",rawName:"v-anime",value:{translateY:{value:["0px","-150px"],duration:4e3}},expression:"{ translateY: {value: ['0px', '-150px'], duration: 4000, }}"}],staticClass:"col-xs-10 col-sm-4 col-md-5 col-lg-4 col-xl-2 bg-primary text-white card-ind not-loaded grow",attrs:{id:t.id},on:{click:function(a){return e.setSelectedService(t)}}},[a("q-card-section",[a("div",{staticClass:"text-h6 text-accent"},[e._v(e._s(t.display))])]),a("q-separator",{attrs:{dark:"",color:"accent"}}),a("q-card-section",[a("q-icon",{staticClass:"icon-ind grow",attrs:{color:"accent",name:""!=t.img?t.img:e.fallbackIcon}})],1),a("q-separator",{staticClass:"desktop-only",attrs:{dark:"",color:"accent"}}),a("q-card-section",{staticClass:"desktop-only"},[a("div",{staticClass:"text-body2 text-black"},[e._v(e._s(t.description))])])],1)})),1),a("q-dialog",{attrs:{minimized:""},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("q-card",{},[a("q-img",{attrs:{src:"../statics/computer.png"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",round:"",dense:""}}),a("div",{staticClass:"absolute-bottom"},[a("div",{staticClass:"text-h4 text-center"},[e._v("\n                        "+e._s(e.selectedService.display)+"\n                    ")])])],1),a("q-card-section",{staticClass:"q-display-4 text-center"},[a("div",{staticClass:"row justify-center"},[a("div",{staticClass:"col-xs-10 q-body-1 text-justify q-mt-lg"},[e._v("\n                        "+e._s(e.selectedService.description)+"\n                    ")])])]),a("q-card-section",{staticClass:"q-display-4 text-center q-mt-md"},[a("q-btn",{staticClass:"q-mr-sm heading shadow-1",attrs:{to:"/contact",outline:"",rounded:"","no-caps":""}},[e._v("\n                    Request\n                    a\n                    Quote\n                ")]),a("q-btn",{attrs:{outline:"",rounded:"","no-caps":"",label:"Close"},on:{click:function(t){e.modal=!1}}})],1)],1)],1)],1)},i=[],n={name:"Home",data:function(){return{fallbackIcon:"fa fa-desktop",modal:!1,selectedService:""}},computed:{services:function(){return this.$store.state.services.services}},methods:{push:function(e){this.$router.push(e)},fadeInImage:function(){this.services.forEach((function(e){var t=document.getElementById(e.id);t.classList.add("loaded")}))},setSelectedService:function(e){this.selectedService=e,this.modal=!0}}},r=n,c=a("2877"),l=Object(c["a"])(r,s,i,!1,null,"6eb3901e",null);t["default"]=l.exports}}]);