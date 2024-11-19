console.log("hello");



var quotes=[
    { quote: 'Be yourself; everyone else is already taken.' ,author:' ― Oscar Wilde' },
    { quote: `I'm selfish, impatient and a little insecure.I make mistakes,
         I am out of control and at times hard to handle.But
          if you can't handle me at my worst, then you sure as hell don't deserve me at my best.` , author: '― Marilyn Monroe'}
          ,
    { quote: 'So many books, so little time.', author:'― Frank Zappa'},
    { quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`, author:'― Albert Einstein'},
    { quote: 'A room without books is like a body without a soul.', author:'― Marcus Tullius Cicero'},
    {
    quote: `You've gotta dance like there's nobody watching,
          Love like you'll never be hurt,
          Sing like there's nobody listening,
          And live like it's heaven on earth.`, author:'― William W. Purkey'},
    { quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`, author:'― Dr. Seuss'},
    { quote: `You only live once, but if you do it right, once is enough.`, author:'― Mae West'},
    { quote: `Be the change that you wish to see in the world.`, author:'― Mahatma Gandhi'},
    { quote: `In three words I can sum up everything I've learned about life: it goes on.`, author:'― Robert Frost'}

]
 var availableIndices = [0, 1, 2, 3,4,5,6,7,8,9];

 function getNewQuote(){


   //make sure index is unique by removing elemnets from array of index and reseting it again
     if (availableIndices.length === 0) {
        
         availableIndices = [0, 1, 2, 3,4,5,6,7,8,9];  
     }

    var randomIndex= Math.floor(Math.random()*availableIndices.length);
    var selectedIndex=availableIndices.splice(randomIndex,1)[0];


    displayRandomQuote(selectedIndex);
}


function displayRandomQuote(selectedIndex){
    var QuoteCard='';
    console.log(quotes[selectedIndex])
    QuoteCard+=`
            <div class="col col-12 col-sm-10 col-md-8 col-lg-6 mx-auto ">
            <div class="card text-center shadow-lg m-5 d-flex flex-column justify-content-center align-items-center  m-auto">
                <p class="quote fs-4"> <q>${quotes[selectedIndex].quote}</q></p>
                <h3 class="author">${quotes[selectedIndex].author}</h3>
            </div>
            </div>

            <style>
            .card{
                   max-width: 500px; /* Constrain max width */
                width: 100%;      /* Full width for smaller devices */
              padding: 20px;
             background-color: #ffedbca8;
          word-wrap: break-word;
             background-color: #ffedbca8;
            
            }
             .card .quote{
             font-family:italic;}
             .card .author{
             color:rgb(255, 128, 128);}
            
            
           .quote q {
            quotes: "«" "»";
           }

          .quote q:before {
           content: open-quote;
           color: rgb(255, 128, 128); 
           font-size:40px;
            }

        .quote q:after {
         content: close-quote;
          font-size:40px;
        color: rgb(255, 128, 128); 
         }
            </style>
            
   
    `;

document .getElementById('rowData').innerHTML=QuoteCard;

    
}
