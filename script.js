const projects = [
    {
        title: "Simple Todo List App",
        description: "A basic todo list application built using HTML, CSS, and JavaScript. Users can add, edit, and delete tasks.",
        image: "./images/to-do-list.png",
        link: "https://github.com/Eliina0/To-do-list-project",
        category: "front-end",
        details: "This application features a user-friendly interface where users can manage their tasks efficiently. Implemented local storage to persist tasks between sessions and utilized JavaScript for DOM manipulation."
    },
    {
        title: "Weather App",
        description: "A weather application built with HTML, CSS, and JavaScript, which fetches real-time weather data using the OpenWeather API.",
        image: "./images/weather-app.png",
        link: "https://github.com/Eliina0/Weather-app",
        category: "front-end",
        details: "The app allows users to search for weather information by city. It includes features like temperature display in Celsius and Fahrenheit, dynamic background changes based on weather conditions, and error handling for invalid inputs."
    },
    {
        title: "Item List App",
        description: "A full-stack application built with React and PHP that allows users to add items to a list, as well as delete multiple items at once.",
        image: "./images/item-list-app.png",
        link: "https://github.com/Eliina0/scandiwebProject",
        category: "full-stack",
        details: "This application utilizes a RESTful API for managing items and incorporates user authentication. It features a responsive design and implements state management using React hooks, ensuring a seamless user experience."
    },
    {
        title: "CV Builder App",
        description: "A web application that allows users to create and customize their CVs. Built using React for the frontend and PHP for backend processing.",
        image: "./images/cv-app.png",
        link: "#",
        category: "full-stack",
        details: "The CV Builder App provides templates and customization options for users to create professional CVs. Users can download their CVs in PDF format and the application uses form validation to ensure completeness."
    },
    {
        title: "BiteBuzz - Restaurant Reservation & Food Ordering App",
        description: "An app that allows users to reserve a table at a restaurant or order food for delivery. Built using React for the frontend and PHP for the backend.",
        image: "./images/restaurant-app.png",
        link: "#",
        category: "full-stack",
        details: "BiteBuzz includes features for searching restaurants, viewing menus, and placing orders. It also offers user authentication and a dashboard for restaurant owners to manage reservations and orders."
    },
    {
        title: "StyleHub - Clothing & Accessories E-commerce App",
        description: "An e-commerce platform for buying clothes and accessories, built using React for the frontend and Express.js for the backend.",
        image: "./images/clothing-app.png",
        link: "#",
        category: "full-stack",
        details: "StyleHub provides a comprehensive shopping experience with product filtering, user reviews, and a secure checkout process. The app implements Redux for state management and includes payment integration for a seamless transaction experience."
    }
];

const skills = [
    {
        name: "HTML",
        icon: "./images/html.png",
        progress: "90%"
    },
    {
        name: "CSS",
        icon: "./images/css.png",
        progress: "85%"
    },
    {
        name: "JavaScript",
        icon: "./images/js.webp",
        progress: "80%"
    },
    {
        name: "React",
        icon: "./images/react.png",
        progress: "80%"
    },
    {
        name: "Java",
        icon: "./images/java.png",
        progress: "80%"
    },
    {
        name: "PHP",
        icon: "./images/php.png",
        progress: "80%"
    }
];

document.getElementById('switch-theme').addEventListener('change', function() {
    document.body.classList.toggle('light-mode');
});

const renderProjects = (filteredProjects = projects) => {
    const projectGrid = document.querySelector('.project-grid');
    projectGrid.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.classList.add('project');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" class="hero-btn">View Project</a>
        `;
        projectCard.addEventListener('click', () => {
            showProjectDetails(project);
        })
        projectGrid.appendChild(projectCard);
    });
};
renderProjects();

const renderSkills = () => {
    const skillsContainer = document.getElementById('skills-container');

    skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');

        skillDiv.innerHTML = `
                    <h3>${skill.name}</h3>
            <div class="icon">
                <img src="${skill.icon}" alt="${skill.name} Icon">
            </div>
            <div class="progress">
                <div class="progress-bar" style="width: ${skill.progress};"></div>
            </div>
            `;
            skillsContainer.appendChild(skillDiv);
    })
}
renderSkills();

let menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px"
function toggleMenu() {
    if(menuList.style.maxHeight == '0px') {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}

document.getElementById('contact-btn').addEventListener('click', () => {
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.style.display = 'none'; 
    });
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = "Name is required!"; 
        document.getElementById('nameError').style.display = 'block'; 
    }
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = "Email is required!";
        document.getElementById('emailError').style.display = 'block';
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.trim())) {
        document.getElementById('emailError').textContent = "Please enter a valid email!";
        document.getElementById('emailError').style.display = 'block';
    }
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = "Message is required!";
        document.getElementById('messageError').style.display = 'block';
    }
    if (isValid) {
        console.log(name, email, message);
    }
});


window.onscroll = function() {
    scrollFunction();
}
const topBtn = document.getElementById('go-to-top');
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = 'block';
    } else {
        topBtn.style.display = 'none';
    }
}

function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.getElementById('year').textContent = new Date().getFullYear();

//Project Filtering:
const filterButtons = document.querySelectorAll('.filter-btn'); 
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active')); 
        button.classList.add('active'); 
        const category = button.getAttribute('data-filter'); 
        filterProjects(category);
    });
});
function filterProjects(category) {
    let filteredProjects;
    
    if (category === 'all') {
        filteredProjects = projects; 
    } else {
        filteredProjects = projects.filter(project => {
            return project.category === category; 
        });
    }
    renderProjects(filteredProjects); 
}
const searchBar = document.getElementById('search-bar');
const searchProjects = () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredProjects = projects.filter(project => {
        return project.title.toLowerCase().includes(searchTerm) ||
               project.description.toLowerCase().includes(searchTerm);
    });
    renderProjects(filteredProjects);
}
searchBar.addEventListener('keydown', function(event) {
    if(event.key === 'Enter'){
        event.preventDefault();
        searchProjects();
    }
})

//Modal for Project Details
const modal = document.getElementById('project-modal'); 
const closeButton = document.querySelector('.close-button');
const showProjectDetails = (project) => {
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-details').textContent = project.details;
    document.getElementById('modal-link').href = project.link;

    modal.style.display = 'block';
};
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

//calendar
const monthNameElement = document.getElementById("month-name");
const calendarDaysElement = document.getElementById("calendar-days");
const prevMonthButton = document.getElementById("prev-month");
const nextMonthButton = document.getElementById("next-month");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date().getDate();

function generateCalendar(month, year) {
    calendarDaysElement.innerHTML = "";
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    monthNameElement.textContent = `${monthNames[month]} ${year}`;
    const firstDay = new Date(year, month, 1).getDay();
    console.log(firstDay);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for(let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("day");
        calendarDaysElement.appendChild(emptyDay);
    }
    for(let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = i;
        dayElement.addEventListener("click", () => {
            console.log(`You clicked on ${i} ${monthNames[month]} ${year}`);
            const selectedDate = new Date(year, month, i)
            eventsOnDate(selectedDate);
        });
        
        calendarDaysElement.appendChild(dayElement);
    }
}
prevMonthButton.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11; 
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentMonth, currentYear);
});
nextMonthButton.addEventListener('click', () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear ++;
    } else {
        currentMonth ++;
    }
    generateCalendar(currentMonth, currentYear);
})
generateCalendar(currentMonth, currentYear);

document.getElementById('add-event').addEventListener('click', () => {
    const eventTitle = document.getElementById('event-title').value.trim();
    const eventDescription = document.getElementById('event-description').value.trim();
    const eventDate = document.getElementById('event-date').value.trim();
    const errorElement = document.getElementById('error-event');
    errorElement.textContent = '';
    
    if (!validateEventFields(eventTitle, eventDescription, eventDate)) {
        errorElement.textContent = 'All fields are required!';
        return; 
    }
    
    const newEvent = {
        title: eventTitle,
        description: eventDescription,
        date: eventDate
    };
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(newEvent);
    localStorage.setItem('events', JSON.stringify(events));
    console.log('Event Added:', newEvent);
    document.getElementById('event-form').reset();
    addEventList(events);
});
const  validateEventFields = (title, description, date) => {
    if (title === '' || description === '' || date === '') {
        return false;
    }
    return true;
}


let events = JSON.parse(localStorage.getItem('events')) || [];
const addEventList = (eventsToDisplay = events) => {
    const listElement = document.getElementById('events-list');
    listElement.innerHTML = '';
    console.log(eventsToDisplay);
    if (eventsToDisplay.length === 0) {
        const noEventsItem = document.createElement('div'); 
        noEventsItem.innerHTML = "<span> There are no events on this date. </span>";
        listElement.appendChild(noEventsItem); 
        return; 
    }
    
    eventsToDisplay.forEach((event, index) => {
        const listItem = document.createElement('div'); 
        listItem.classList.add('event');
        listItem.innerHTML = `
            <div class="event-content">
                <span class="event-title">${event.title} - ${event.date}</span>
                <p class="event-description">${event.description}</p>
            </div>
            <button class="delete-btn" onClick="deleteEvent(${index})">
                <i class='bx bx-trash'></i>
            </button>
        `;
        listElement.appendChild(listItem);
    });
};

const deleteEvent = (index) => {
    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    addEventList(events);
};
const eventsOnDate = (selectedDate) => {
    const storedEvents = localStorage.getItem("events");
    if (!storedEvents) {
        console.log("No events found in local storage.");
        return;
    }
    
    const events = JSON.parse(storedEvents);
    const selectedDateString = selectedDate.toISOString().split('T')[0]; 

    const eventsForTheDay = events.filter(event => event.date === selectedDateString);
    if (eventsForTheDay.length > 0) {
        console.log(`Events on ${selectedDateString}:`, eventsForTheDay);
        addEventList(eventsForTheDay);
    } else {
        console.log(`No events on ${selectedDateString}`);
        addEventList([]); 
    }
};
addEventList();
