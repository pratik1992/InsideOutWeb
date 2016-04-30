/**
 * Created by pratikkulkarni on 4/27/16.
 */



// [Trying to help someone on forum](http://css-tricks.com/forums/topic/show-a-hidden-div-when-hover-an-image/)

// window.onload = function () {

// }
// be a good boy/girl: avoid inline event-handlers:


var aboutKavitha = {
    name: "Kavitha NagaRaju",
    name: "CEO",
    link: "https://github.com/KavithaBN",
    title:"Ceo",
    bio: "Kavitha is leading woman in industry with strong management skills and prefers a Full Stack development .An all rounder may follow",
    image: "public/img/kavitha.jpeg",
    website: "https://www.linkedin.com/in/kavithabnagaraju",
    email: "kavitha.bangalorenagaraju@gmail.com"
};

var aboutSarthak = {
    name: "Sarthak Limbachia",
    name: "Managing Director",
    link: "https://github.com/sarthaklimbachia",
    bio: "Sarthak is a hardcore game developer uses various graphics engine .Also playes games on his console during free time",
    image: "public/img/sarthak.jpeg",
    website: "https://www.linkedin.com/in/sarthaklimbachia",
    email: "sarthak.limbachia@sjsu.edu"
};

var aboutPratik = {
    name: "Pratik Kulkarni",
    name: "Chairman",
    link: "http://designwithpc.com/",
    bio: "Pratik Kulkarni  is a Web Developer (Javascript) with strong interest in backend. He loves to talk about AngularJS, HTML5, jQuery. Leader in making! You can see his work on ",
    image: "public/img/pratik.jpg",
    website: "http://designwithpc.com",
    email: "pratik.kulkarni@sjsu.edu"
};


var aboutRavi = {
    name: "Ravi Limbodiya",
    name: "Senior VP",
    link: "http://designwithpc.com/",
    bio: "Ravi Limbodia  is a Web Developer (.net) with strong interest in UI. He loves to talk about CSS3, HTML5, jQuery. Entrepreneur in making! See his skills @ ",
    image: "public/img/ravi.jpeg",
    website: "https://www.linkedin.com/in/ravi-limbodiya-7093702a",
    email: "ravi.limbodiya@sjsu.edu"
};

var aboutRaj = {
    name: "Raj ",
    name: "CTO",
    link: "https://github.com/RajuC",
    bio: "Raj is profession Java developer .His interests lie in Developing Backend Web Services.A Strong Backend Architect in making",
    image: "public/img/raj.jpeg",
    website: "https://www.linkedin.com/in/ravi-limbodiya-7093702a",
    email: "hello@callmepc.com"
};


$('#kavitaprofile').hovercard({
    showCustomCard: true,
    customCardJSON: aboutKavitha
});

$('#sarthakprofile').hovercard({
    showCustomCard: true,
    customCardJSON: aboutSarthak
});

$('#raviprofile').hovercard({
    showCustomCard: true,
    customCardJSON: aboutRavi
});

$('#pratikprofile').hovercard({
    showCustomCard: true,
    customCardJSON: aboutPratik
});

$('#rajprofile').hovercard({
    showCustomCard: true,
    customCardJSON: aboutRaj
});


    
    
    
   
