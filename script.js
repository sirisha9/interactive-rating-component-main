
    const num = document.querySelectorAll(".num");
    const btn = document.getElementById("subBtn");
    const thankyou = document.querySelector(".thank-you");
    const rating= document.querySelector(".userValue");
    const mainContainer = document.querySelector("#main-container");
 
    for(let i=0;i<num.length;i++){
        num[i].addEventListener("click",()=>{
            let ratings = num[i].innerHTML;

            /*for(let i=0;i<num.length;i++){
               num[i].classList.contains('selected');
               num[i].classList.remove('selected');

            }
            num[i].classList.add('selected');*/
            btn.addEventListener('click',()=>{
                mainContainer.style.display = 'none';
                thankyou.style.display = 'block';
                rating.innerHTML = ratings;
            })
        })
    }
