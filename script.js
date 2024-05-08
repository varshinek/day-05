var myresume = {
    "basics" : 
    {
        
        "name" : "VARSHINE K",
        "email" : "varshinek212@gmail.com",
        "phone no" : 9361114193 ,
        "degree" : "B.E" ,
        "location" : {
            "address" : "27/1,palaniyappa nagar,ellis nagar post",
            "city" : "Dharapuram" ,
            "pincode" : 638657 ,
            "sate" : "Tamilnadu" ,
            "country" : "India"
        }, 
        "profiles" :
        [
            {
                "linkedIn" : "www.linkedin.com/in/varshine-k-05251a1a6" ,
                "github" : "https://github.com/varshinek"
            }
        ],
    },
    "education" : [
        {
            "institute" : "Bannari amman institute of Technology",
            "department" : "EEE",
            "study_type" : "Fulltime",
            "cgpa" : 8.61,
            "batch_start_year" : 2019,
            "batch_end_year" : 2023
        }
    ],
    "skills" : {
        "technical" : ["Python","C","MySql","HTML/CSS","JavaScript"],
        "language_known":["English","Tamil","Telugu"],
        "soft_skill":["Problem Solving","Communication"]
    },
    "hobbies" : [ "Crafting , travelling , Watching Movies"],
    "publications" : [
        {
            "name" : "smarrt Way To Ambulance and Traffic Control Monitoring Using Wireless Transceivers and Sound sensor",
            "release date" : "April 2021"
        }
    ],
    "project" : [
        {
            "title" : "IoT enabled smart energy management system...",
            "tools_technologies" :["Proteus","Javascript","HTML/CSS","Sensors"],
            "outcome":"Focus on lowering electricity bills by utilizing solar energy generated from the solar panels using IoT and Embedded System..."
        }
    ],
}
console.log(myresume);

console.log("****************************************************************");

console.log("Iterating over the education array for loop:")
var education = myresume.education;
for(var i = 0;i<education.length;i++)
{
    console.log("1.INSTITUTE",education[i].institute);
    console.log("2.DEPARTMENT",education[i].department);
    console.log("3.STUDY TYPE",education[i].study_type);
    console.log("4.CGPA",education[i].cgpa);
    console.log("5.BATCH START YEAR",education[i].batch_start_year);
    console.log("6.BATCH END YEAR",education[i].batch_end_year);
}    
console.log("****************************************************************");

console.log("Iterating over the technicl skil using forEach loop:")
var res = myresume.skills.technical
res.forEach((ele) => console.log(ele))
console.log("****************************************************************");

console.log("b.Iterating over Contact details using for...in loop:")
var res = myresume.basics;
for(let key in res)
    console.log(key,": ",res[key])
console.log("***************************************************************")