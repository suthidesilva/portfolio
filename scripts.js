// Data Structure
const data = {
    projects: [
        {
            title: "YoteSwap",
            description: "A dynamic online platform for College of Idaho's 1,100 students, featuring a website and mobile app.",
            tags: ["Swift", "CSS", "Web Development"],
            link: "https://saving-striking-turtle-952.vscodeedu.app/"
        },
        {
            title: "Fine-tuning Microsoft's Phi 2",
            description: "Optimizing Microsoft's Phi-2 language model (2.7B parameters) using PEFT and QLoRA techniques.",
            tags: ["PEFT", "Python", "LLM"],
            link: "https://github.com/yourusername/phi2-project"
        },
        {
            title: "AI / LLM Integrated Microcontroller",
            description: "Research project integrating LLMs with Raspberry Pi microcontrollers for portable robot assistants.",
            tags: ["Raspberry Pi", "LLM", "Automation"],
            link: "https://github.com/suthidesilva/AI-Raspberry-Pi-Robotics-Python"
        },
        {
            title: "Python-LLM-Adventure-game",
            description: "A text-based adventure game leveraging LLMs for a dynamic and interactive narrative experience.",
            tags: ["Python", "LLM", "Game Development"],
            link: "https://github.com/suthidesilva/Python-LLM-Adventure-game"
        },
        {
            title: "Portfolio",
            description: "A personal portfolio showcasing projects and skills.",
            tags: ["Web Development", "HTML", "CSS"],
            link: "https://github.com/suthidesilva/portfolio"
        },
        {
            title: "VectorDB-lab",
            description: "PyTorch implementations of text classification models using pre-trained word embeddings.",
            tags: ["Python", "PyTorch", "Machine Learning"],
            link: "https://github.com/suthidesilva/VectorDB-lab"
        },
        {
            title: "Python-LLMs-Chatbot-test",
            description: "A Physics Helper Tool using APIs like GPT-3, Google Scholar, and Wolfram Alpha for problem-solving.",
            tags: ["Python", "Chatbot", "LLM"],
            link: "https://github.com/suthidesilva/Python-LLMs-Chatbot-test"
        },
        {
            title: "Astronomy-database-SQL",
            description: "Database schema and sample data for astronomical objects like galaxies, planets, and more.",
            tags: ["SQL", "Database", "Astronomy"],
            link: "https://github.com/suthidesilva/Astronomy-database-SQL"
        },
        {
            title: "ML-with-Python-FCC-Course",
            description: "Project files from the FreeCodeCamp Machine Learning with Python course.",
            tags: ["Python", "Machine Learning", "Education"],
            link: "https://github.com/suthidesilva/ML-with-Python-FCC-Course"
        },
        {
            title: "Specify-7",
            description: "Repository related to the Specify 7 project.",
            tags: ["DBMS", "Specify 7"],
            link: "https://github.com/suthidesilva/Specify-7"
        },
        {
            title: "Courses-database-SQL",
            description: "SQL scripts for course scheduling and management.",
            tags: ["SQL", "Database", "Education"],
            link: "https://github.com/suthidesilva/Courses-database-SQL"
        },
        {
            title: "Alcohol-Consumption-database-SQL",
            description: "Schema and data for a database tracking alcohol consumption statistics.",
            tags: ["SQL", "Database", "Data Analysis"],
            link: "https://github.com/suthidesilva/Alcohol-Consumption-database-SQL"
        },
        {
            title: "Micro-plastics-Research",
            description: "Database and machine learning development for analyzing microplastics content in water samples.",
            tags: ["Python", "SQL", "Environmental Research"],
            link: "https://github.com/suthidesilva/Micro-plastics-Research"
        }
    ],
    research: [
        {
            title: "AI / LLM Microcontroller Integration",
            description: "Independent research on integrating Large Language Models with microcontrollers and Arduino automation systems.",
            period: "Feb 2024 - Present"
        },
        {
            title: "Astronomy Research",
            description: "Investigation of stellar systems using data from BeSS database and New Mexico observatories.",
            period: "May 2023 - Present"
        }
    ],
    education: [
        {
            school: "The College of Idaho, ID, United States",
            degree: "Bachelor's degree, Computer Science",
            period: "2021 - 2025",
            details: "Specializing in Data Science and Pre-Law, Minor in Mathematics, Philosophy, and Legal Psychology"
        },
        {
            school: "Li Po Chun United World College, Wu Kai Sha, Hong Kong",
            degree: "International Baccalaureate Diploma",
            period: "2019 - 2021",
            details: "Physics HL, Economics HL, English HL"
        },
        {
            school: "Rahula College, Matara, Sri Lanka",
            degree: "GCE A/L & O/L",
            period: "2017 - 2019",
            details: "A-8, B-1"
        }
    ],
    skills: [ 
        "Large Language Models (LLM)",
        "Python",
        "SQL",
        "Scala",
        "Building Automation Systems (BAS)",
        "Data Science",
        "JavaScript",
        "Machine Learning",
        "Node.js",
        "React",
        "TensorFlow",
        "PyTorch",
        "C++",
        "HTML",
        "CSS",
        ".NET",
        "R",
        "Matlab",
        "Linux/Ubuntu Shell Scripting",
        "Git (Version Control)",
        "AWS",
        "Azure",
        "Object-Oriented Programming (OOP)",
        "JQuery",
        "JSON",
        "Problem Solving",
        "Critical Thinking",
        "Time Management",
        "Project Management",
        "Risk Management",
        "Public Speaking",
        "3D Modeling (CAD)",
        "Statistical Data Analysis"
    ],
    socials: [
        { icon: 'github', url: 'https://github.com/suthidesilva' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/desilvasuthira/' },
        { icon: 'mail', url: 'mailto:suthiradesilva@gmail.com' }
    ]
};

// Function to dynamically render projects and research
function renderProjectsAndResearch() {
    const projectsContainer = document.getElementById("projects-grid");
    const researchContainer = document.getElementById("research-content");

    data.projects.forEach((project) => {
        projectsContainer.innerHTML += `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
                <a href="${project.link}" target="_blank">View Project</a>
            </div>
        `;
    });

    data.research.forEach((research) => {
        researchContainer.innerHTML += `
            <div class="research-item">
                <h3>${research.title}</h3>
                <p>${research.description}</p>
                <a href="${research.link}" target="_blank">Learn More</a>
                <p class="period">${research.period}</p>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", renderProjectsAndResearch);


// 3D AI Being class for each instance
class AIBeing {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,
            antialias: true
        });
        
        this.particles = [];
        this.mousePosition = new THREE.Vector2(0, 0);
        this.targetRotation = new THREE.Vector2(0, 0);
        this.init();
    }

    init() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 30;

        const particleCount = 1000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 8;
            const radius = 10;
            
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = (i / particleCount) * 40 - 20;
            positions[i * 3 + 2] = Math.sin(angle) * radius;

            colors[i * 3] = 0.75;  // Silver (high brightness for red channel)
            colors[i * 3 + 1] = 0.75; // Silver (green channel)
            colors[i * 3 + 2] = 0.75; // Silver (blue channel)
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        this.particleSystem = new THREE.Points(geometry, material);
        this.scene.add(this.particleSystem);

        const ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xC0C0C0, 2, 100); // Luxury silver point light
        pointLight.position.set(10, 10, 10);
        this.scene.add(pointLight);

        window.addEventListener('resize', this.onWindowResize.bind(this));
        document.addEventListener('mousemove', this.onMouseMove.bind(this));

        this.animate();
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onMouseMove(event) {
        this.mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;

        this.targetRotation.x = this.mousePosition.y * 0.5;
        this.targetRotation.y = this.mousePosition.x * 0.5;
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.particleSystem.rotation.x += (this.targetRotation.x - this.particleSystem.rotation.x) * 0.05;
        this.particleSystem.rotation.y += (this.targetRotation.y - this.particleSystem.rotation.y) * 0.05;

        const positions = this.particleSystem.geometry.attributes.position.array;
        const time = Date.now() * 0.0001;

        for (let i = 0; i < positions.length; i += 3) {
            const x = positions[i];
            const y = positions[i + 1];
            const z = positions[i + 2];

            positions[i] = x + Math.sin(time + y * 0.1) * 0.1;
            positions[i + 2] = z + Math.cos(time + y * 0.1) * 0.1;
        }

        this.particleSystem.geometry.attributes.position.needsUpdate = true;
        this.renderer.render(this.scene, this.camera);
    }
}


// Content Rendering Functions
function renderContent() {
    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = data.projects.map(project => 
        `<div class="project-card p-6 rounded-lg enhanced-hover">
            <h3 class="text-xl font-bold mb-4 text-[#C0C0C0]">${project.title}</h3>
            <p class="text-gray-400 mb-6">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
            <a href="${project.link}" class="text-[#C0C0C0] hover:text-[#A9A9A9] inline-flex items-center">
                View Project 
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
            </a>
        </div>`
    ).join('');

    // Research
    document.getElementById('research-content').innerHTML = data.research.map(item => 
        `<div class="research-item enhanced-hover">
            <h3 class="text-xl font-bold mb-2 text-[#C0C0C0]">${item.title}</h3>
            <p class="text-gray-400 mb-4">${item.description}</p>
            <span class="text-sm text-[#C0C0C0]">${item.period}</span>
        </div>`
    ).join('');

    // Education
    document.getElementById('education-list').innerHTML = data.education.map(item => 
        `<div class="education-item">
            <h4 class="text-lg font-bold text-[#C0C0C0]">${item.school}</h4>
            <p class="text-gray-400">${item.degree}</p>
            <p class="text-sm text-[#C0C0C0]">${item.period}</p>
            <p class="text-gray-500 mt-2">${item.details}</p>
        </div>`
    ).join('');

    // Skills
    document.getElementById('skills-list').innerHTML = data.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');

    // Social Links
    document.getElementById('social-links').innerHTML = data.socials.map(social => 
        `<a href="${social.url}" target="_blank" rel="noopener noreferrer" 
            class="social-link p-3 rounded-full hover:bg-gray-800">
            <i data-feather="${social.icon}"></i>
        </a>`
    ).join('');
}


// Tab visibility handling
document.addEventListener('visibilitychange', () => {
    document.title = document.hidden ? "Come back! ✨" : "Suthira de Silva - Portfolio";
});

// Scroll Message handling
function handleScrollMessage() {
    const scrollMessage = document.querySelector('.scroll-message');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            scrollMessage.classList.add('hidden');
        } else if (scrollTop < 100) {
            scrollMessage.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
}

// Initialize multiple AI Beings
document.addEventListener('DOMContentLoaded', () => {
    const aiBeings = ['ai-being-1', 'ai-being-2', 'ai-being-3'];
    aiBeings.forEach(id => new AIBeing(id));

    initializeCursor();
    setupMobileMenu();
    renderContent();
    setupScrollAnimations();
    handleScrollMessage();
    document.getElementById('current-year').textContent = new Date().getFullYear();
    feather.replace();
});


// Cursor Effects
function initializeCursor() {
    const cursor = {
        glow: document.querySelector('.cursor-glow'),
        dot: document.querySelector('.cursor-dot'),
        canvas: document.getElementById('gradient-canvas'),
        pos: { x: 0, y: 0, dotX: 0, dotY: 0 }
    };

    if (!cursor.canvas) return;

    const ctx = cursor.canvas.getContext('2d');
    cursor.canvas.width = window.innerWidth;
    cursor.canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        cursor.canvas.width = window.innerWidth;
        cursor.canvas.height = window.innerHeight;
    });

    document.addEventListener('mousemove', (e) => {
        cursor.pos.x = e.clientX;
        cursor.pos.y = e.clientY;

        document.querySelectorAll('.project-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    function animate() {
        cursor.pos.dotX += (cursor.pos.x - cursor.pos.dotX) * 0.2;
        cursor.pos.dotY += (cursor.pos.y - cursor.pos.dotY) * 0.2;

        cursor.glow.style.transform = `translate(${cursor.pos.x}px, ${cursor.pos.y}px)`;
        cursor.dot.style.transform = `translate(${cursor.pos.dotX}px, ${cursor.pos.dotY}px)`;

        // Luxury silver gradient for cursor glow
        const gradient = ctx.createRadialGradient(
            cursor.pos.x, cursor.pos.y, 0,
            cursor.pos.x, cursor.pos.y, 400
        );

        gradient.addColorStop(0, 'rgba(192, 192, 192, 0.05)');
        gradient.addColorStop(0.5, 'rgba(192, 192, 192, 0.02)');
        gradient.addColorStop(1, 'transparent');

        ctx.clearRect(0, 0, cursor.canvas.width, cursor.canvas.height);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, cursor.canvas.width, cursor.canvas.height);

        requestAnimationFrame(animate);
    }

    animate();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.glow.style.width = '400px';
            cursor.glow.style.height = '400px';
            cursor.dot.style.width = '12px';
            cursor.dot.style.height = '12px';
        });

        element.addEventListener('mouseleave', () => {
            cursor.glow.style.width = '300px';
            cursor.glow.style.height = '300px';
            cursor.dot.style.width = '8px';
            cursor.dot.style.height = '8px';
        });
    });
}

// Mobile Menu Setup
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('mobile-menu-open');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('mobile-menu-open');
        });
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section > div, .project-card, .research-item').forEach(el => {
        observer.observe(el);
    });
}
// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById("skills-list");
    const aboutSkills = document.querySelectorAll("#about #skills-list .skill-tag");

    // Move skills from About section to Skills section
    aboutSkills.forEach(skill => {
        skillsContainer.appendChild(skill);
    });

    // Update dynamic styles for the luxury theme
    document.querySelector('.name').style.color = 'var(--primary)';
    document.querySelector('.profession').style.color = 'var(--text-secondary)';
});

document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://formsubmit.co/suthiradesilva@gmail.com', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Your message has been sent!");
            this.reset();
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
});

// Cursor Effects
function initializeCursor() {
    const cursor = {
        glow: document.querySelector('.cursor-glow'),
        dot: document.querySelector('.cursor-dot'),
        pos: { x: 0, y: 0, dotX: 0, dotY: 0 }
    };

    document.addEventListener('mousemove', (e) => {
        cursor.pos.x = e.clientX;
        cursor.pos.y = e.clientY;
    });

    function animate() {
        cursor.pos.dotX += (cursor.pos.x - cursor.pos.dotX) * 0.2;
        cursor.pos.dotY += (cursor.pos.y - cursor.pos.dotY) * 0.2;

        cursor.glow.style.transform = `translate(${cursor.pos.x}px, ${cursor.pos.y}px)`;
        cursor.dot.style.transform = `translate(${cursor.pos.dotX}px, ${cursor.pos.dotY}px)`;

        requestAnimationFrame(animate);
    }

    animate();

    // Interactive hover effects
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-tag');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.glow.style.background = `radial-gradient(circle at center, var(--primary-light), transparent 50%)`;
            cursor.glow.style.width = '400px';
            cursor.glow.style.height = '400px';
            cursor.dot.style.width = '12px';
            cursor.dot.style.height = '12px';
        });

        element.addEventListener('mouseleave', () => {
            cursor.glow.style.background = `radial-gradient(circle at center, var(--primary-light), transparent 50%)`;
            cursor.glow.style.width = '300px';
            cursor.glow.style.height = '300px';
            cursor.dot.style.width = '10px';
            cursor.dot.style.height = '10px';
        });
    });
}

// Initialize the custom cursor
initializeCursor();

// Scroll Animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section > div, .project-card, .research-item').forEach(el => {
        observer.observe(el);
    });
}

// Initialize scroll animations
setupScrollAnimations();

// Update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Feather icon replacement
feather.replace();

// Scroll Message Visibility
function handleScrollMessage() {
    const scrollMessage = document.querySelector('.scroll-message');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            scrollMessage.classList.add('hidden');
        } else if (scrollTop < 100) {
            scrollMessage.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
}

handleScrollMessage();
