function typeSingleText(targetElement, textToType, typingDelay = 150, onCompletionCallback) {
  for (let i = 0; i < textToType.length; i++) {
    setTimeout(() => {
      targetElement.innerHTML += textToType[i];
      if (i === textToType.length - 1 && onCompletionCallback) {
        onCompletionCallback();
      }
    }, typingDelay * i);
  }
}

function typeLoopingTexts(targetElement, textsToCycle, typingDelay = 150) {
  let currentTextIndex = 0;
  let isDeleting = false;
  let charIndex = 0;

  function cycle() {
    if (currentTextIndex >= textsToCycle.length) {
      currentTextIndex = 0;
    }

    const fullText = textsToCycle[currentTextIndex];
    let displayText = fullText.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;
      if (charIndex === fullText.length + 1) {
        isDeleting = true;
      }
    } else {
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        currentTextIndex++;
      }
    }

    targetElement.innerHTML = "I am a " + displayText;
  }

  setInterval(cycle, typingDelay);
}

function showDetails(detailsId) {
  // Hide all company details
  document.querySelectorAll('.company-details').forEach(function(detail) {
    detail.style.display = 'none';
    detail.classList.remove('active-detail');
  });

  // Highlight the active company item
  document.querySelectorAll('.company-item').forEach(function(item) {
    item.classList.remove('active-item');
  });

  // Add 'active-item' class to the clicked item and 'active-detail' to the corresponding details
  const activeItem = document.querySelector(`[onclick="showDetails('${detailsId}')"]`);
  if (activeItem) {
    activeItem.classList.add('active-item');
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement) {
      detailsElement.style.display = 'block';
      detailsElement.classList.add('active-detail');
    }
  }
}


function handleScroll() {
  const header = document.getElementById('header');
  let lastScrollPosition = 0;
  let currentScrollPosition = 0;

  window.addEventListener('scroll', function() {
    currentScrollPosition = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollPosition > lastScrollPosition) {
      // Scrolled down
      header.classList.add('hide');
    } else {
      // Scrolled up
      header.classList.remove('hide');
    }

    // Update the last scroll position to the current position
    lastScrollPosition = currentScrollPosition;
  });
}

window.onload = () => {
  const nameElement = document.getElementById("typewriter-name");
  const activitiesElement = document.getElementById("typewriter-activities");

  // Typewriter effect functions
  typeSingleText(nameElement, "Madhu Sharma", 150, () => {
    typeLoopingTexts(activitiesElement, ["Entrepreneur", "AI Enthusiast", "Web Developer", "Software Engineer", "IB Graduate", "Teacher"]);
  });

  // Initialize the details for "Amazon"
  showDetails('ctc-details');

  // Call the handleScroll function to set up the scroll event listener
  handleScroll();
};