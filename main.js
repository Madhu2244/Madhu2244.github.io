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
  let tick = 0;
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

  document.getElementById("btn1").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Software Dev Engineer Intern @ Amazon</h6>
    <h7>June 2022 - September 2022</h7>
    <br><br>
    <ul>
      <li>To be determined</li>
    </ul>`
  });

  document.getElementById("btn2").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Full Stack Developer @ Commit the Change</h6>
    <h7>October 2021 - Present</h7>
    <br><br>
    <ul>
      <li>Currently working with Abound Food Care to reduce food waste and insecurity by creating a digital registration system to better connect their volunteers and engage them in organizational events using React, PostgreSQL, Express, and Node.js</li>
      <li>Assess problems, develop, and maintain high quality software for non-profit organizations to help increase productivity and save time</li>
      <li>Aspiring to become a Technical Lead for a non-profit organization project in the upcoming year</li>
    </ul>`
  });

  document.getElementById("btn3").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Junior Software Developer @ Delta System</h6>
    <h7>June 2020 - August 2021</h7>
    <br><br>
    <ul>
      <li>Architected and programmed a prototype ticketing system to manage customer service requests for the 
      human resources department which resulted in an increase in productivity</li>
      <li>Performed responsibilities assigned by my manager for organizational purposes</li>
      <li>Helped market job openings at career fairs</li>
    </ul>`
  });

  document.getElementById("btn4").addEventListener('click', () => {
    jobDescription.innerHTML = `<h6>Teacher @ iCode</h6>
    <h7>February 2019 - August 2021</h7>
    <br><br>
    <ul>
      <li>Bridged technical concepts of Computer Science to non-technical children ages 5-12 in both weekly classes and summer camps.</li>
      <li>Helped improve children's ability to think critically and apply their skills to solve real world problems. </li>
      <li>Marketed class openings to parents leading to an increase in registered students</li>
      <li>Taught classes in areas such as Robotics, HTML, CSS, Javascript, Scratch, and basic game development</li>
    </ul>`
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
