// create a porxy to handle Cross-Origin Resource Sharing (CORS) for // my end data point 
// userDataLondonUrl https://bpdts-test-app.herokuapp.com/city/London/users
//SendRequestbyproxyUrl =  'https://cors-anywhere.herokuapp.com/',

fetchData = () => {
  const SendRequestbyproxyUrl = "https://cors-anywhere.herokuapp.com/",
    userDataLondonUrl = "https://bpdts-test-app.herokuapp.com/city/London/users";
  console.log("Lets get some data");
  fetch(SendRequestbyproxyUrl + userDataLondonUrl)
    .then((blobData) => blobData.json())
    .then((data) => {
      console.table(data); 

      

    

      const makeMarkup = data
        .map((userData) => {
            //  the array is iterated into this card component markup
          return `  
            <div class="card">
                <div class="card__content">
                    <p><span class="card__content__label">First Name:</span> ${userData.first_name}</p> 
                    <p><span class="card__content__label">Last Name:</span> ${userData.last_name}</p> 
                    <p><span class="card__content__label">Email:</span> ${userData.email}</p> 
                    <p><span class="card__content__label">IP:</span> ${userData.ip_address}</p>
                </div>
            </div>
        `;
        }) 
        .join("");          
      
        // select our output Element on the page 
      const dataPlacement = document.querySelector("#appData"); 
       // basic UI test  we could  create some more HTML elements to guide and inform the user experiance on what to do next  if it fails
      const dataLoader = document.querySelector("#loader");  
        if ( dataPlacement.childElementCount !== 0 ){
          dataLoader.innerHTML="No data to load :( ";  
        } else {
          dataLoader.innerHTML="Our data has loaded"; 
          } 

          //add our array to the DOM
      dataPlacement.insertAdjacentHTML("beforeend", makeMarkup); 
        
    }) 
    // simple error test that prints to console for development
      .catch((error) => {
      if(error == true)
        console.log(error);
      return error;
    });
};

fetchData();
