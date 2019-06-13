$(document).ready(function() {

    $("#clear").click(function(){
        $("#result").empty();
        $("#image").empty();
    });

    $("#search").click(function () {

        $.ajax({
            url: "https://api.nasa.gov/planetary/apod?api_key=9ZZ9sv36ltM6ep3swRllmiCD8oq99Phr1XHV6Mgq",
            dataType: "json",
            success: callBack
        })
    });





        $("#others").click(function () {

        var alternate = $("#date").val();

        var goodDate =  alternate.substring(0,4) +"-"+ alternate.substring(5,7)  + "-" + alternate.substring(8,10);



        console.log(goodDate);


        $.ajax({
            url: "https://api.nasa.gov/planetary/apod?api_key=9ZZ9sv36ltM6ep3swRllmiCD8oq99Phr1XHV6Mgq&date=" + goodDate,
            dataType: "json",
            success: callBack
        })
    });

});

    function callBack(data) {

            console.log(data);
            var author = data.copyright;
            var date = data.date;
            var picture="<img  width=\"500\"src=" + data.hdurl + ">";
            var description= data.explanation;
            var title= data.title;
            var str= "  Learn more about this photo";

            var link= str.link();

            console.log(author);
            console.log(date);

        $("#result").append("Title: " + title  + "<br><br>");

        $("#result").append("Today's date: " + date + "<br><br>");

        $("#result").append("Brief Description: " + description +"<br><br>");


        $("#result").append( "Artist: " + author + "<br><br>");

        $("#image").append(picture);




    }




