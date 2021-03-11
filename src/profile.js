// Change your display name on tha landing display
const header = {
    name: " Supriya Kanade",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: " Designed, implemented and monitored web pages, plugins and functionality for continuous improvement Designed, developed and implemented software applications for websites based on analyzed requirements and understanding of industry technical standards.Wrote lines of code using HTML, CSS, JavaScript and jQuery languages."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        value: 75
    },{
        name: "CSS3",
        value: 85
    },{
        name: "Javascript",
        value: 80
    },{
        name: "React",
        value: 75
    },
    ,{
        name: "Flutter",
        value: 65
    },
    {
        name: "Node",
        value: 50
    },
]
// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Real Disk Scheduling Algorithms",
        skills: ["Project build in Java"],
        // url: "httpsthub.com/kaustubha://gii"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Jobzbuzz",
        skills: ["React Js,Node Js"],
        // url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Restuaro ",
        skills: ["React Js,Node Js"],
        // url: "https://github.com/kaustubhai"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Go-Mint ",
        skills: ["Flutter"],
        // url: "https://github.com/kaustubhai"
    },
    // {
    //     // Add image in './styles/images.css' in #project5
    //     id: "project5",
    //     name: "Project 5",
    //     skills: ["HTML, CSS, JS"],
    //     url: "https://github.com/kaustubhai"
    // },
    // {
    //     // Add image in './styles/images.css' in #project6
    //     id: "project6",
    //     name: "Project 6",
    //     skills: ["HTML, CSS, JS"],
    //     url: "https://github.com/kaustubhai"
    // },
]
// Edit your Miscellaneous Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
// const section4Title = "Miscellaneous"
// const miscellaneous = [
//     {
        // Add image in './styles/images.css' in #misc1
    //     id: "misc1",
    //     name: "Miscellaneous 1",
    //     url: "https://github.com/kaustubhai"
    // },
    // {
        // Add image in './styles/images.css' in #misc2        
    //     id: "misc2",
    //     name: "Miscellaneous 2",
    //     url: "https://github.com/kaustubhai"
    // },
    // {
        // Add image in './styles/images.css' in #misc3
//         id: "misc3",
//         name: "Miscellaneous 3",
//         url: "https://github.com/kaustubhai"
//     },
// ]
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "Ask Me anything ..",
    copyright: "supriya kanade",
    contactUrl: 'supriyakanade96@gmail.com'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/supriya-kanade',
    facebook: 'https://facebook.com',
    linkedin: 'https://www.linkedin.com/in/supriya-kanade-b8b5a1192/',
    instagram: 'https://instagram.com',
    resume: 'https://drive.google.com/file/d/1-YB-Qf5TxTInYVrymG5t0-StVaheQpxc/view?usp=drivesdk'
}
// Dont change anything here
export { header, background, about, skillsBar, projects, contact, social, section2title, section3Title,  section5Title }