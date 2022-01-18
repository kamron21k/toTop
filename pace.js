   
   let topBtn=document.querySelector('.toTop')
   

    window.addEventListener('scroll',()=>{
      if(window.pageYOffset>100){
        topBtn.classList.add('active')
      }
      else{
        topBtn.classList.remove('active')
      }
    })

    topBtn.addEventListener('click',()=>{
      window.scrollTo(0,0)
    })