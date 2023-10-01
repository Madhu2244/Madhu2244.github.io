function typewriter(element, text, delay = 150) 
{
  for (let i = 0; i < text.length; i++) 
  {
    // console.log(text[i])
    setTimeout(() => {
      element.innerHTML += text[i];
    }, delay * i);
  }
}

const el = document.getElementById("typewriter-name");
typewriter(el, "Madhu Sharma");

function typewriter_cycle(element, text, delay = 150) 
{
  let tick = 12;
  while (tick < 20000)
  {
    for (let j = 0; j < text.length; j++)
    {
      for (let i = 0; i < text[j].length; i++) 
      {
        setTimeout(() => {
          element.innerHTML += text[j][i];
        }, delay * tick);
        tick += 1;
      }
      tick += 1;
      setTimeout(() => {}, delay * tick);
      tick += 1;
      for (let i = text[j].length; i >= 0; i--) 
      {
        setTimeout(() => {
          element.innerHTML = "I am a " + text[j].slice(0,i);
        }, delay * tick);
        tick += 1;
      }
    }
  }
}

function run(){

  const jobDescription = document.getElementById("jobDescription");

  document.getElementById("btn2").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Software Dev Engineer Intern @ Amazon</h6>
    <p>June 2022 - September 2022</p>
    <br><br>
    <ul>
      <li>Accelerated promotion approval speed by 2400% by designing and developing features on an internal application to aid product leads across Amazon in planning and executing product discount promotions</li>
      <li>Took ownership of project through working directly with the customers and designers to identify areas for improvement, leading to an overall improvement of user experience in the final product</li>
      <li>Improved API logging to 100% coverage in methods to help developers better debug errors during development</li>
    </ul>`
  });

  document.getElementById("btn1").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Software Dev Engineer Intern @ Amazon</h6>
    <p>June 2023 - September 2023</p>
    <br><br>
    <ul>
      <li>Replacing a two-step process of adding content onto FireTV Channels involving product managers and developers with a single step, user-friendly service; saving an estimated 500 hours of time over the next 5 years with this portal</li>
      <li>Architected the full long-term solution involving decision-making about backend, frontend, and midtier service selections based on comprehensive pros and cons analysis; will enable future projects to be extended in the future</li>
    </ul>`
  });

  document.getElementById("btn4").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Junior Software Developer @ Delta System</h6>
    <p>June 2020 - August 2021</p>
    <br><br>
    <ul>
      <li>Innovated a prototype ticketing system for the Human Resources department, resulting in a significant productivity boost in handling customer service requests for hundreds of employees and clients </li>
      <li>Employed Excel for detailed analysis and evaluation of numerous resumes during recruitment events consistingof hundreds of interested applicants, facilitating efficient identification and tracking of suitable candidates</li>
    </ul>`
  });

  document.getElementById("btn3").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Technical Lead @ Commit the Change</h6>
    <p>October 2021 - Present</p>
    <br><br>
    <ul>
      <li>Migrated Cell Dogs Google Sheets spreadsheet to a website for employees to easily create, update, and find information regarding rehabilitation programs for over 300 dogs and 15 facilities across Orange County</li>
      <li>Steered strategic planning and execution of a year-long project, effectively managing a team of 12 people</li>
      <li>Implemented a digital registration system for Abound Food Care, enhancing engagement and participation for over 100 volunteers in various events through</li>
    </ul>`
  });

  document.getElementById('bonsai').addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=rN3m2eAzhJ4&ab_channel=GROUPAntrepreneurCenter";
  });

  document.getElementById('retnoscan').addEventListener('click', function() {
    window.location.href = "https://d2k.rice.edu/news/congratulations-hackrice-x-2020-winners";
  });

  document.getElementById('faceanalyzer').addEventListener('click', function() {
    window.location.href = "https://github.com/KanishkGar/FaceAnalyzer";
  });
  


}

window.onload = () => {
  run();
}


const el2 = document.getElementById("typewriter-activities");
typewriter_cycle(el2, ["Entrepreneur", "Web Developer", "Software Engineer", "IB Graduate", "Teacher"]);


// Header
(function(){

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('header');

  var checkScroll = function() {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) { 
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) { 
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function(direction, curScroll) {
    if (direction === 2 && curScroll > 52) { 

      //replace 52 with the height of your header in px

      header.classList.add('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.remove('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();
