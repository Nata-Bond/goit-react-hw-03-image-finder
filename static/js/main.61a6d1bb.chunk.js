(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Overlay:"modal_Overlay__3OvOh",Modal:"modal_Modal__3f0Pl"}},12:function(e,t,a){e.exports={ImageGalleryItem:"imageGalleryItem_ImageGalleryItem__3Urnk",ImageGalleryItemImage:"imageGalleryItem_ImageGalleryItemImage__2_SVf"}},24:function(e,t,a){e.exports={loader:"spinner_loader__3OODL"}},25:function(e,t,a){e.exports={ImageGallery:"imageGallery_ImageGallery__1sC4k"}},27:function(e,t,a){e.exports={App:"app_App__3ALCk"}},28:function(e,t,a){e.exports={Button:"button_Button__xIdqa"}},34:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(22),l=a.n(o),s=(a(34),a(13)),i=a(9),u=a(4),h=a(5),m=a(7),g=a(6),d=a(8),p=a.n(d),b=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{className:p.a.Searchbar,children:Object(n.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(n.jsx)("span",{className:p.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:p.a.SearchFormInput,value:this.state.inputValue,onChange:this.handleChange,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),j=(a(35),a(23)),f=a.n(j),O=a(24),y=a.n(O),v=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(f.a,{className:y.a.loader,type:"Puff",color:"#00BFFF",height:50,width:100})}}]),a}(c.a.Component),_=a(25),I=a.n(_),S=a(11),x=a.n(S),w=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&(console.log("escape pushing"),e.props.closeModal())},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.closeModal,a=e.largeImageURL,r=e.tags;return Object(n.jsx)("div",{className:x.a.Overlay,onClick:t,children:Object(n.jsx)("div",{className:x.a.Modal,children:Object(n.jsx)("img",{src:a,alt:r})})})}}]),a}(r.Component),k=a(12),F=a.n(k),L=function(e){var t=e.tags,a=e.webformatURL,r=e.largeImageURL,c=e.handleOpenModal;return Object(n.jsx)("li",{className:F.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:a,alt:t,className:F.a.ImageGalleryItemImage,"data-largeimg":r,onClick:c})})},C=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={largeImg:null},e.handleOpenModal=function(t){e.setState({largeImg:t.target.dataset.largeimg})},e.closeModal=function(){e.setState({largeImg:null})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{className:I.a.ImageGallery,children:this.props.images.map((function(t){var a=t.id,r=t.tags,c=t.webformatURL,o=t.largeImageURL;return Object(n.jsx)(L,{alt:r,webformatURL:c,largeImageURL:o,handleOpenModal:e.handleOpenModal},a)}))}),this.state.largeImg&&Object(n.jsx)(w,{largeImageURL:this.state.largeImg,closeModal:this.closeModal})]})}}]),a}(r.Component),M=a(26),N=a.n(M),G=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=19012539-7c0dd5e15fe1ddd8f8e676462&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},B=a(27),U=a.n(B),A=a(28),R=a.n(A),D=function(e){var t=e.fetchImages;return Object(n.jsx)("button",{className:R.a.Button,type:"button",onClick:t,children:"Load more"})},V=function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={images:[],searchQuery:"",page:1,error:null,loading:!1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!0})})),G(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{loading:!1})}))}))},e.handleSearchbarSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=t.searchQuery,n=this.state.searchQuery;a!==n&&this.fetchImages(),n.length>0&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.images;return Object(n.jsxs)(n.Fragment,{children:[this.state.loading&&Object(n.jsx)(v,{}),Object(n.jsxs)("div",{className:U.a.App,children:[Object(n.jsx)(b,{onSubmit:this.handleSearchbarSubmit}),e.length>0&&Object(n.jsx)(C,{images:e}),e.length>0&&Object(n.jsx)(D,{fetchImages:this.fetchImages})]})]})}}]),a}(r.Component);l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"searchbar_Searchbar__3h2jc",SearchForm:"searchbar_SearchForm__300ts",SearchFormButton:"searchbar_SearchFormButton__1bdZl",SearchFormButtonLabel:"searchbar_SearchFormButtonLabel__33FuL",SearchFormInput:"searchbar_SearchFormInput__1Czqp"}}},[[74,1,2]]]);
//# sourceMappingURL=main.61a6d1bb.chunk.js.map