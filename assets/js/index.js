
let apiCard = "https://script.google.com/macros/s/AKfycbz-4yQxkeQ-2ksMd-B1WTUpIt9MQ_by_M0E2WSV81KhToxGIVABIFyy_1_y8N5yx2h9/exec";



const postContainer1= document.querySelector('#testid');
const postMethod1 =()=>{
    // Use fetch to make a GET request to the API endpoint and parse the JSON response
    fetch(apiCard)
    .then(response => response.json())
    .then(data => {
        // Extract the todo data from the response
        // let cardData1 = data.card;

        // Map each todo item to a string of table row HTML
        let data1=data.cardData;
     
        for(let i=0;i<=data.cardData.length;i++){
            console.log(data1[0]);
        const postElement1= document.createElement('div');
        postElement1.classList.add('.cards1');
        postElement1.innerHTML=`    
                                <div class="col-lg-4 col-md-6 mb-4">
                                <div class="serv-cove shadow-md rounded bg-white p-3">
                                     <div class="prf row mb-3">
                                         <div class="col-md-3">
                                             <img class="rounded-pill" src="${data.cardData[i][0]}" alt="not available">
                                         </div>
                                         <div class="col-md-9 align-self-center">
                                             <h6 class="mb-0 fw-bolder">${data.cardData[i][1]}</h6>
                                             <span>${data.cardData[i][2]}</span>
                                         </div>
                                     </div>
                                     <div class="det text-center">
                                         <p class="fs-7 fst-italic">${data.cardData[i][3]}</p>
                                             <div class="col-md-3 text-center align-self-center d-flex">
                                                 <div class="col-md-9 align-self-center px-2">
                                                     <i class="bi fs-1 bi-envelope"></i>
                                                 </div>
                                                 
                                                 <div class="col-md-9 align-self-center px-2">
                                                     <ul>
                                                       <li><a class="col-md-9 align-self-center px-2" href="mailto:${data.cardData[i][4]}" class="links" id="emailLink">${data.cardData[i][4]}</a></li> 
                                                 </ul>
                                                 </div> 
                                             </div>
                                     </div>
                                </div>
                             </div>
                             </div>`
                             postContainer1.appendChild(postElement1);

                    }
        });
}
postMethod1();
