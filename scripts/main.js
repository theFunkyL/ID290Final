// $('#getButton').click(function(){
// 	$('.wordContainer').html('');
var getButton = document.querySelector('#getButton');
var wordContainer = document.querySelector('.wordContainer');
var openContainer = document.querySelector('.openContainer');
//$('#searchResults').val();
// 	$('.openContainer').toggleClass(".wordContainer");
var resultsTest;
getButton.onclick = function () {
    var search = document.querySelector('#searchResults').value;
    fetch("https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=da548e54a4034fb1b2446c4ec786cfbd&query= " + search)
        .then(function (response) { return response.json(); })
        .then(function (data) {
        var _this = this;
        resultsTest = data;
        //console.log(data);
        // openContainer.addClass('wordContainer');
        // openContainer.classList.toggle('wordContainer'); // To toggle
        for (var i_1 = 0; i_1 < data.results.length; i_1++) {
            //var newText = document.createTextNode('trr4rfr4');
            wordContainer.innerHTML += "<h1 class=\"button\">  \n\t\t\t\t\t" + data.results[i_1].display_title + " <br>\n\t\t\t\t\t" + data.results[i_1].summary_short + " <br>\n\t\t\t\t</h1>";
            //console.log(data);
        }
        var button = document.querySelectorAll('.button');
        for (var i = 0; i < button.length; i++) {
            (function (i) {
                button[i].addEventListener('click', function () {
                    document.querySelector('#modalH1').innerHTML = '';
                    document.querySelector('#modal').style.marginTop = '0px';
                    document.querySelector('#modalH1').setAttribute('class', 'open');
                    console.log(_this.innerHTML);
                    document.querySelector('#modalH1').innerHTML = button[i].innerHTML;
                });
            })(i);
        }
        var close = document.querySelector('#close');
        close.onclick = function () {
            document.querySelector('#modal').style.marginTop = '-315px';
        };
    });
};
// });
