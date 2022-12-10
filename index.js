const search = () => {
  const searchBox = document.querySelector("#search-item").value.toUpperCase();
  const ibtn = document.querySelector(".btn");

  const contentName = document.querySelectorAll("h2");

  const contentPrice = document.querySelectorAll("h3");

  ibtn.addEventListener("click", () => {
    contentName.forEach((prod) => {
      // console.log(prod.textContent.toUpperCase().includes(searchBox));
      if (prod.textContent.toUpperCase().includes(searchBox)) {
        prod.parentNode.style.display = "";
      } else {
        prod.parentNode.style.display = "none";
      }
    });

    //  contentPrice.forEach(price=>{
    //     // console.log(price)
    //     if(price.textContent.toUpperCase().includes(searchBox)){
    //         price.parentNode.style.display="";
    //     }else{
    //         price.parentNode.style.display="none";
    //     }
    //  })
  });

  // document.querySelector("#search-item").addEventListener("keyup", () => {
  //   contentName.forEach((prod) => {
  //     // console.log(prod.textContent.toUpperCase().includes(searchBox));
  //     if (prod.textContent.toUpperCase().includes(searchBox)) {
  //       prod.parentNode.style.display = "";
  //     } else {
  //       prod.parentNode.style.display = "none";
  //     }
  //   });
  // });

  // contentName.forEach(prod=>{
  //     // console.log(prod.textContent.toUpperCase().includes(searchBox));
  //     if(prod.textContent.toUpperCase().includes(searchBox)){
  //         prod.parentNode.style.display="";
  //     }else{
  //         prod.parentNode.style.display = "none";
  //     }
  // })
};
