"use strict";(globalThis.webpackChunkgrass_website=globalThis.webpackChunkgrass_website||[]).push([[8867],{8867:(o,e,t)=>{t.r(e),t.d(e,{default:()=>n});var s=t(6884);class n extends s.Z{constructor(){super(...arguments),this.data=this.state({open:!1})}async create(){this.handlers.buttonClick=this.onButtonClick.bind(this),this.handlers.documentClick=this.onDocumentClick.bind(this)}async mount(){window.document.addEventListener("click",this.handlers.documentClick),this.references.button.addEventListener("click",this.handlers.buttonClick)}open(){return!this.data.open&&this.dispatch("localizer.open")?this.doOpen():!1}close(){return this.data.open&&this.dispatch("localizer.close")?this.doClose():!1}render(){this.data.open?this.element.classList.add("is-open"):this.element.classList.remove("is-open")}onButtonClick(){this.data.open?this.close():this.open()}onDocumentClick(i){this.element.contains(i.target)||this.close()}doOpen(){return this.data.open=!0,!0}doClose(){return this.data.open=!1,!0}}}}]);
