/*
This is empty on purpose! Your code to build the resume will go here.
*/

//object with details of Rohan Sunki
var bio = {
    name : "Rohan Sunki",
    role : "Front-End Developer",
    contacts : {
        mobile : "8978787881",
        email : "rohanro74@gmail.com",
        github : "https://github.com/rohan74",
        location :"Bengaluru",
    },
    biopic : "images\\fry.jpg",
    welcomeMessage : 'Hey! I\'m Front-End Developer fascinated by Web ,digital magic and believe in improving user experience to a higher level.',
    skills : ["HTML","CSS","Javascript ", "Being awesome"],
};

// object with work details
var work ={
    jobs : [{
        employer : "TCS",
        title : "Sytems Engineer",
        dates : "June 2016 - present",
        location : "Bengaluru",
        description : "-Moved a legacy code from Single Browser to cross browser compatible with modern web browsers like Chrome, Firefox and IE11 using HTML5, CSS3 and JavaScript.</br>-Cascading multiple Backend REST APIs and displaying all of them as one. This GUI is developed using React JS, CSS3 & HTML5.</br>-Displayed charts using React d3 charts on the data obtained from API's. This Application is intended to work as Reusable widge."
    }]
};

//object with education details - majors and online courses
var education = {
    schools : [{
        name : "Gitam University",
        dates : "2012-2016",
        degree : "B.Tech",
        majors : "Electronic and Communication",
        location : "Visakhapatnam",
        url : "http://www.gitam.edu/",
    }],
    onlineCourses : [{
        title :"Front-End nanodegree",
        school :"udacity",
        date :"2017",
        url : "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/",
    }]
};

//object with project details
var projects = {
    projects : [{
        title : "Sample Project",
        dates : "2017",
        description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        images :['http://via.placeholder.com/350x150','http://via.placeholder.com/350x150'],
    }]
};

//display functions to append data to helper.js

bio.display = function() {
    var formatedname = HTMLheaderName.replace("%data%", bio.name);
    var formatedrole = HTMLheaderRole.replace("%data%", bio.role);
    var formatedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formatedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formatedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formatedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formatedpic = HTMLbioPic.replace("%data%", bio.biopic);
    var formatedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $('#header').prepend(formatedrole)
    .prepend(formatedname)
    .append(formatedpic)
    .append(formatedmsg)
    .append(HTMLskillsStart);
    $('#topContacts, #footerContacts').append(formatedmobile)
    .append(formatedemail)
    .append(formatedgithub)
    .append(formatedlocation);

    bio.skills.forEach(function(skill){
    var formatedskill = HTMLskills.replace("%data%", skill);
        $('#skills').append(formatedskill);
    });
};

bio.display();


work.display = function (){

        work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);
            var formattedworkEmployeer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedworktitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedjobTitle = formattedworkEmployeer + formattedworktitle;
            $(".work-entry:last").append(formattedjobTitle);
            $(".work-entry:last").append(HTMLworkDates.replace("%data%",job.dates));
            $(".work-entry:last").append(HTMLworkLocation.replace("%data%",job.location));
            $(".work-entry:last").append(HTMLworkDescription.replace("%data%",job.description));
        });
    };


work.display();


education.display = function (){

    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree) );
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates) );
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.majors));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
    });

    $(".education-entry:last").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(onl){
     $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", onl.title) + HTMLonlineSchool.replace("%data%", onl.school) );
     $(".education-entry:last").append(HTMLonlineDates.replace("%data%",onl.date));
     $(".education-entry:last").append(HTMLonlineURL.replace("%data%", onl.url));
 });
};

education.display();


projects.display = function(){
      for( i=0;i<projects.projects.length;i=i+1){
            $("#projects").append(HTMLprojectStart);
         $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
        projects.projects[i].images.forEach(function(image){
            var formatProjectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formatProjectImage); });
    };
    
};


projects.display();


//to change bio.name to international style.
// $("#main").append(internationalizeButton);

function inName(name){
    var nameArray = name.split(" ");
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() +  nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    return nameArray.join(" ");
}

// inName(bio.name);


//add maps to the portfolio
$("#mapDiv").append(googleMap);













