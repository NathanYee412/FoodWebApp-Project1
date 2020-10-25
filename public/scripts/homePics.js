var id1 = "public/img/1.jpg";
var id2 = "/img/2.jpg";
var id3 = "/img/3.jpg";
var id4 = "/img/4.jpg";
var id5 = "/img/5.jpg";
var id6 = "/img/6.jpg";
var id7 = "/img/7.jpg";
var id8 = "/img/8.jpg";
var counter = 0;


function addVoteLeft() {
    var leftPics = [id1, id3, id5, id7];
    var rightPics =[id2, id4, id6, id8];
    var i = counter + 1;

    console.log("Added vote for Left side " + leftPics[i]);
    counter += 1;

    document.getElementById("left").src = leftPics[i];
    document.getElementById("right").src = rightPics[i];

    if (counter === 4) {
        console.log("send to leaderboard page");
        window.open("/home/leaderboard", "_self");
    }
    if (counter === 4){
        counter = 0;
    }
}

function addVoteRight() {
    var leftPics = [id1, id3, id5, id7];
    var rightPics =[id2, id4, id6, id8];
    var i = counter + 1;

    console.log("Added vote for Right side " + rightPics[i]);
    counter += 1;

    document.getElementById("left").src = leftPics[i];
    document.getElementById("right").src = rightPics[i];

    if (counter === 4) {
        console.log("send to leaderboard page");
        window.open("/home/leaderboard","_self");
    }
    if (counter === 4){
        counter = 0;
    }
}