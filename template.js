function toggle(id){
    let divToToggle=document.getElementById(id);
    if(divToToggle.style.display=="none"){
        divToToggle.style.display="block"
    } else {
        divToToggle.style.display="none"
    }
}

(() => {
  
     renderCatTemplate();

   async function renderCatTemplate() {
       
      let source= await fetch("http://127.0.0.1:5500/cat.hbs")
        .then(res=>res.text())        
        const template=Handlebars.compile(source);
        const context= {cats:window.cats} //always an object!why though??
        const catsHtml=template(context);
        let contentSection=document.getElementById("allCats");
        contentSection.innerHTML=catsHtml;
         
     }
 
})()
