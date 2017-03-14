var infoOfEveryObject = document.getElementById("infoOfEveryObject");

var btnQuotes = document.getElementById("btnQuotes");

var dynamicBtTweet = document.getElementById("dynamicBtTweet");


    btnQuotes.addEventListener("click", function () {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'quotes.json');
    ourRequest.onload = function () {
        var myData = JSON.parse(ourRequest.responseText);
        renderHTML(myData);

    };
    ourRequest.send();
});
    
    function getRandomArrayElem (arr) {
        var item = arr[Math.floor(Math.random()*arr.length)];
        return item;
    }

function renderHTML(dataArray) {

    var htmlString = "",
    randElement = getRandomArrayElem(dataArray);

        htmlString += '<p> <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" ' +
        'aria-hidden="true"></i>' + randElement.quote + '<br>' + randElement.person + '<br>'+
            randElement.whereFrom + '</p>';

    document.getElementById('dynamicBtTweet').href = 'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(randElement.quote);


    infoOfEveryObject.innerHTML = htmlString;
}




