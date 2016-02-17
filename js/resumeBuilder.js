//Bio start

var bio = {
	"name": "Helen Yirga",
	"role": "Front-End Web Developer",
		"contacts":{ 
			"mobile": "777 55 44 99",
			"email": "helen@yahoo.com",
			"github": "helen",
			"location": "Gent, Belgium",
	},
	"biopic": "images/helen.jpg",
	"welcomeMessage" : "HI, I am Helen a Front-End Developer based in Gent, Belgium. Welcome...!",
	"skills" : [
	"Visual Designer","Interaction Designer","HTML / CSS","JavaScript"
	]
};

bio.display = function() {
		var name = bio.name;
		var formattedName = HTMLheaderName.replace("%data%", name);
		$("#header").append(formattedName);
		
		var role = bio.role;
		var formattedRole = HTMLheaderRole .replace("%data%", role);
		$("#header").append(formattedRole);
		
		var welcomeMessage = bio.welcomeMessage;
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		
		var biopic = bio.biopic;
		var formattedPic = HTMLbioPic.replace("%data%", biopic);
		$("#header").append(formattedPic);
		
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		
	}//if 
	
		var email = bio.contacts.email;
		var formattedEmail = HTMLemail.replace("%data%", email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		
		var mobile = bio.contacts.mobile;
		var formattedMobile = HTMLmobile.replace("%data%", mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		
		var github = bio.contacts.github;
		var formattedGithub = HTMLgithub.replace("%data%", github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		
		var presentlocation = bio.contacts.location;
		var formattedPresentlocation = HTMLlocation.replace("%data%", presentlocation);
		$("#topContacts").append(formattedPresentlocation);
		$("#footerContacts").append(formattedPresentlocation);
};

bio.display();

//Bio end

//Work start

var work = {
	"jobs": [
		{
		"employer": "Go Be Creative",
		"title": "Freelance Designer",
		"location": "Gent, Belgium",
		"dates": "2014 - present",
		"description" : " Creating Print, Graphic and Web design for small and medium businesses in Middle East, Africa and Europe. Providing logo design, brochures, newsletters, trade show displays and marketing promotions and more... "
		},
		{
		"employer": "Nederlandse School In Bangkok",
		"title": "Freelance Designer",
		"location": "Bangkok, Thailand",
		"dates": "2013 -2015",
		"description" : "Redesigned their existing Brand, built user-friendly customized Wordpress web site and created marketing concepts and all other communication material such as brochures and business cards."
		},
		{
		"employer": "TigerTMS",
		"title": "Visual communicator",
		"location": "Dubai, UAE",
		"dates": "2009 -2012",
		"description" : "Apart from classic print media such as newsletters and brochures,  provididing and implementing a wide selection of digital media such as websites, apps with interactive illustration, DTP (Desktop Publishing), marketing, branding, corporate design as a section of corporate identity."
 
		}
	]
};
work.display = function() {
	for ( job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
	
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);	
		
		var formattedLocation = HTMLworkLocation .replace("%data%", work.jobs[job].location);
			$(".work-entry:last").prepend(formattedLocation);	
	}//for
};

work.display();

//Work end

//Project start

var projects = {
  "projects": [
    {
      "title": "Web Applecation Projects",
      "dates": "2013",
      "description": "A customized Wordpress web sites and an app designed with Photoshop and Dreamweaver",
      "images": ["images/mywork_1.jpg", "images/mywork_2.jpg", "images/mywork_3.jpg"]
    },
    {
      "title": "Web Projects",
      "dates": "2016",
      "description": "An assignment project for Front-End Web Developer program at Udacity.",
      "images": ["images/mywork_4.jpg", "images/mywork_5.jpg","images/mywork_6.jpg" ]
    }
  ]
};
		
projects.display = function() {
	if(projects.projects.length >0){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			
		for(image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
			
			}//for	
		}//if
	}
};

projects.display();

//Project end

//Education start

var education = {
	"schools": [
	{
		"name" : "International University of Fundamental Studies",
		"location" : "Dubai, UAE",
		"degree": "BA",
		"major": ["Art and Design"],
		"dates": " 2007 - 2010",
		"url": "http://www.kv.ae/",
	},
	{
		"name" : "Syntra Midden-Vlaanderen campus Sint-Niklaas",
		"location" : "Sint-Niklaas, Belgium",
		"degree": "BA",
		"major": ["Cross media publishing and Management"],
		"dates": "2011 - 2013",
		"url": "http://www.syntra.be/"
	},
],
"onlineCourses": [
		{
		"title" : "Front-End Web Developer Nanodegree",
		"school" : "Udacity",
		"dates": 2015,
		"url": "http://udacity.com"
		}
	]
};

education.display = function() {
	if(education.schools.length > 0){
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedSchoolName);
			
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
			
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			}
	
	if(education.onlineCourses.length > 0){
			$("#education").append(HTMLonlineClasses);
		for(onlinecourse in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
		
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);	
			
		var formattedonlineTitle = HTMLonlineTitle .replace("%data%", education.onlineCourses[onlinecourse].title);	
			$(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
		
		var formattedonlineDates = HTMLonlineDates .replace("%data%", education.onlineCourses[onlinecourse].dates);	
			$(".education-entry:last").append(formattedonlineDates);
		
		var formattedonlineUrl = HTMLonlineURL .replace("%data%", education.onlineCourses[onlinecourse].url);	
			$(".education-entry:last").append(formattedonlineUrl);
			}//for
		}//if
	}//if
};

education.display();

//Education end


//D3.js Force-Directed Graph start

var   w = 800,
      h = 300;

var circleWidth = 8;

var palette = {
      "lightgray": "#BEB9B9",
      "gray": "#708284",
      
	  "darkblue": "#0A2933",
      "darkerblue": "#042029",

      "paleryellow": "#FCF4DC",
      "orange": "#BD3613"
 };

var nodes = [
      { name: "My Skills"},
      { name: "CSS"},
      { name: "Visual Designer", target: [0]},
      { name: "Interaction Designer", target: [0]},
      { name: "JavaScript", target: [1]},
      { name: "HTML", target: [0, 1, 2, 3]}
];

var links = [];

for (var i = 0; i< nodes.length; i++) {
      if (nodes[i].target !== undefined) {
            for (var x = 0; x< nodes[i].target.length; x++ ) {
                  links.push({
                        source: nodes[i],
                        target: nodes[nodes[i].target[x]]
                  })
            }
      }
}

var myChart = d3.select(".skill-chart")
		.append("svg")
		.attr("viewBox", "0 0 " + w + " " + h )
        .attr("preserveAspectRatio", "xMidYMid meet");

var force = d3.layout.force()
	.nodes(nodes)
	.links([])
	.gravity(0.3)
	.charge(-1000)
	.size([w, h])

var link = myChart.selectAll("line")
	.data(links).enter().append("line")
	.attr("stroke", palette.darkblue)

var node = myChart.selectAll("circle")
	.data(nodes).enter()
	.append("g")
	.call(force.drag);

node.append("circle")
	.attr("cx", function(d) { return d.x; })
	.attr("cy", function(d) { return d.y; })
	.attr("r", circleWidth )
	.attr("fill", function(d, i) {
		if (i>0) { return palette.lightgray}
		else { return palette.darkblue }
	})

node.append("text")
	.text(function(d) { return d.name})
	.attr("font-family", "Roboto")
	.attr("fill", function(d, i) {
		if (i>0) { return palette.darkblue}
		else { return palette.orange}
	})
	.attr('x', function(d, i) {
		if (i>0) { return circleWidth + 6 }
		else { return circleWidth -18 }
	})
	.attr('y', function(d, i) {
		if (i>0) { return circleWidth }
		else { return 8 }
	})
	.attr('text-anchor', function(d, i) {
		if (i>0) { return 'beginning' }
		else { return 'end'}
	})
	.attr('font-size',  function(d, i) {
		if (i>0) { return '0.9em' }
		else { return '1.7em'}
	})

force.on('tick', function(e) {
	node.attr('transform', function(d, i) {
		return 'translate('+ d.x +', '+ d.y +')';
	})

	link
		.attr('x1', function(d) { return d.source.x })
		.attr('y1', function(d) { return d.source.y })
		.attr('x2', function(d) { return d.target.x })
		.attr('y2', function(d) { return d.target.y })
})

force.start();

//D3.js Force-Directed Graph end



$("#main").append(internationalizeButton); //Internationalize Button

$("#mapDiv").append(googleMap); //Google Map







