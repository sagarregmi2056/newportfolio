import aboutpic from "./components/Access/IMG_20230408_200539_900.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://www.facebook.com/sagar.regmi.167',
  title: 'MERN STACK DEVELOPER',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'SAGAR REGMI',
  role: 'MERN stack developer',
  description:
    'Dedicated MERN stack developer with a strong foundation in programming languages such as javascript, C++, Java, PHP, and Visual Basic. Currently pursuing a BCA degree from Oxford College of Engineering and Management in Gaidakot, Nawalpur, I am driven by my love for technology and my desire to create innovative and efficient solutions. ',
  resume: 'https://www.linkedin.com/resume-builder/insights/urn:li:digitalmediaAsset:D5625AQHSjmyKNAXG-g/?resumeAmbryUrn=%2FAAYUBAC1AAgAAQAAAAAAAHGViEmCrAImQuKZo13vU7zk6w.docx&resumeName=sagar_regmi_Resume_12-07-2023-23-29-08.docx&resumeNew=true',
  social: {
    linkedin: 'https://www.linkedin.com/in/sagar-regmi-60b377216/',
    github: 'https://github.com/sagarregmi2056',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'FILE SHARING APP',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['MARIADB','EJS','KINSTA WEB'],
    sourceCode: '',
    livePreview: 'https://academy.kinsta.com/achievement/1600813c-dcd3-4922-9d01-d7619a6cefdc?fbclid=IwAR1QY36UtB_u4KlS829PpjSB0jPdXNzoBvGTqQ85MJNb8uP-3PXUKmajHMI',
  },
  // {
  //   // name: 'loremepsem',
  //   // description:
  //   //  'lorem '
   
  // },
  {
    name: 'Mind Luster Mern stack E degree',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    
    livePreview: 'https://www.mindluster.com/student/certificate/6475613258?fbclid=IwAR23uaiLMwmWNEcyHC1CeftRd4a_xEiswslWeQHUt-2C87YKaFswmh-qp9c',
  },
  {
    name: 'Jobportal Rojgar nepal(back end + frontend)',
    description:
      'Jobportal is able to let user search and apply for the new job from website , based on its year and category',
    stack: ['Nodejs', 'Mongodb', 'React','Material UI'],
    sourceCode: 'https://github.com/sagarregmi2056/jobportalbackend',
    
  },
  {
    name: 'AI GENERATED Resume builder(back end +frontend)',
    description:
      'Resume builder is able to generate auto generated resume based on input field .',
    stack: ['html-css-javascript', 'openAi Api', 'React'],
    sourceCode: 'https://github.com/sagarregmi2056/AIresumeBuilderfrontend',
   
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'MySQL',
  'MongoDB',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
  'Microservices',
  'Aws'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sagarregmi2057@gmail.com',
  
}

export { header, about, projects, skills, contact }
