// Data Structure
const data = {
    projects : [
        {
            title: "Senate Voting System",
            description: "Secure real-time web-based voting system built for the College of Idaho Senate, enabling instant result displays and reducing vote processing time by 75%.",
            tags: ["Node.js", "Socket.io", "PostgreSQL", "Bootstrap", "Authentication"],
            link: "https://github.com/suthidesilva/Senate-Voting-App"
        },
        {
            title: "Textbook Assistant (Python NLP Tool)",
            description: "Python-based intelligent study assistant leveraging NLP and OpenAI GPT to extract, summarize, and interpret textbook content with context-aware retrieval.",
            tags: ["Python", "NLP", "spaCy", "NLTK", "OpenAI API"],
            link: "https://github.com/suthidesilva/Textbook-assistant-python"
        },
        {
            title: "Fine-Tuning Microsoft’s Phi-2 (QLoRA)",
            description: "Optimized Microsoft’s Phi-2 (2.7B) language model using PEFT and QLoRA, improving accuracy by 14% while reducing compute requirements by 22%.",
            tags: ["LLM", "PEFT", "QLoRA", "PyTorch", "Model Optimization"],
            link: "https://github.com/suthidesilva/Finetuning-Microsoft-s-Phi-2-using-QLoRA"
        },
        {
            title: "Transformer-Based Language Model (GPT-2 Optimization)",
            description: "Fine-tuned GPT-2 to reduce response latency by 20% and improve downstream NLP task accuracy, including summarization and sentiment analysis.",
            tags: ["Transformer", "GPT-2", "PyTorch", "Hugging Face", "NLP"],
            link: "https://github.com/suthidesilva/Transformer-based-Language-Model-GPT2"
        },
        {
            title: "VectorDB Framework",
            description: "Custom vector database framework for efficient storage, indexing, and retrieval of high-dimensional embeddings using FAISS and Annoy.",
            tags: ["Vector Databases", "FAISS", "Annoy", "Python", "Machine Learning"],
            link: "https://github.com/suthidesilva/VectorDB-lab"
        },
        {
            title: "Culinary Bot (AI Cooking Assistant)",
            description: "AI-powered culinary assistant providing recipes, substitutions, and short YouTube tutorials using LangChain, OpenAI API, and Spoonacular.",
            tags: ["LangChain", "OpenAI API", "Python", "Chatbot", "AI Agents"],
            link: "https://github.com/suthidesilva/project-2"
        },
        {
            title: "Physics Helper Tool (LLM Evaluation Framework)",
            description: "Chatbot framework for benchmarking LLMs in real-time conversations, comparing response quality, latency, and contextual understanding.",
            tags: ["LLM", "Benchmarking", "Python", "Chatbots", "NLP"],
            link: "https://github.com/suthidesilva/Python-LLMs-Chatbot-test"
        },
        {
            title: "Astronomy Classification Database",
            description: "SQL-based database system for classifying over 50,000 cosmic objects, improving astrophysical data accessibility by 63%.",
            tags: ["SQL", "Databases", "Astronomy", "Data Engineering"],
            link: "https://github.com/suthidesilva/Astronomy-database-SQL"
        },
        {
            title: "Cricket World Cup 2023 Data Visualization",
            description: "Large-scale sports analytics project transforming raw tournament data into actionable insights using R, MATLAB, and advanced visualizations.",
            tags: ["Data Visualization", "R", "MATLAB", "Data Analysis"],
            link: "https://github.com/suthidesilva/CWC23-data-cleanup-R"
        },
        {
            title: "Orma J. Smith Museum Database Optimization",
            description: "Modernized museum database using Specify 7 architecture, improving data retrieval by 30% and streamlining cataloging workflows.",
            tags: ["SQL", "Database Optimization", "Specify 7", "Data Management"],
            link: "https://github.com/suthidesilva/Specify-7"
        },
        {
            title: "YoteSwap (iOS Peer-to-Peer Exchange App)",
            description: "iOS peer-to-peer exchange platform built for 1,100+ students, reducing transaction errors by 98% and improving campus resource accessibility.",
            tags: ["Swift", "iOS", "Mobile Development", "Backend Systems"],
            link: "https://github.com/suthidesilva/YoteSwap"
        }
    ],
    research : [
        {
            title: "Machine Learning Researcher – Multiple Sclerosis Progression Modeling",
            description: "Developing machine learning models to predict disease progression in Multiple Sclerosis using concatenated 16S microbiome and transcriptomic data. Applied PCA for dimensionality reduction and evaluated models including XGBoost and random forests under strict data leakage constraints.",
            period: "Dec 2025 – Present | Boise State University"
        },
        {
            title: "Software Engineer – Conversational AI & RAG Systems",
            description: "Architected and deployed a conversational AI agent using LangChain and Qdrant, processing 10k+ XML documents with high semantic accuracy. Built scalable ETL pipelines and REST APIs with sub-second query latency in an Agile environment.",
            period: "Jun 2025 – Nov 2025 | In Time Tec"
        },
        {
            title: "Business Intelligence Developer – Government Systems",
            description: "Developed C# plugins and Power BI dashboards for a $4M+ Microsoft Dynamics 365 modernization project, improving operational workflows and enabling real-time data-driven decision-making.",
            period: "Jun 2025 – Nov 2025 | Idaho Industrial Commission"
        },
        {
            title: "Machine Learning Researcher – Microplastics Identification",
            description: "Built a TensorFlow-based image classification pipeline for microplastics detection, reducing inspection time from hours to minutes. Integrated fluorescence imaging and clustering techniques; presented findings at ICUR and Murdock conferences.",
            period: "May 2024 – May 2025 | M.J. Murdock Charitable Trust"
        },
        {
            title: "AI / LLM Integrated Microcontroller Researcher",
            description: "Integrated LLMs such as Phi-2 and Llama with Raspberry Pi hardware to build a portable AI assistant with conversational and GUI capabilities, significantly improving response rate and system efficiency.",
            period: "Feb 2024 – May 2024 | College of Idaho"
        },
        {
            title: "Astronomy Researcher – Stellar Spectroscopy",
            description: "Conducted spectroscopic analysis of Be-class stars using high-resolution instrumentation, developing Python pipelines to reduce processing time and contributing data to the BeSS database. Presented research at APS 2023.",
            period: "May 2023 – Aug 2024 | College of Idaho"
        },
        {
            title: "Control Systems & Arduino Automation Researcher",
            description: "Designed web-based and embedded automation systems for telescope control using Arduino, ESP modules, WebSockets, and C++. Automated calibration workflows and improved system reliability for long-duration observations.",
            period: "May 2023 – Aug 2024 | College of Idaho"
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
    // Programming Languages
    "C/C++",
    "C#",
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "SQLite",
    "HTML",
    "CSS",
    "R",
    "Assembly",

    // Frameworks & Full Stack
    "ASP.NET Core",
    "Angular.js",
    "React.js",
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "RESTful API",
    "Bootstrap",
    "jQuery",

    // Data Science & ML Tools
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Tidyverse",
    "Tidymodels",
    "RStudio",
    "Tableau",
    "Ggplot2",
    "Altair",

    // Machine Learning Concepts
    "Logistic Regression",
    "Classification",
    "K-Nearest Neighbors (KNN)",
    "Random Forest",
    "Gradient Descent",
    "Model Building",
    "Model Tuning & Evaluation",
    "Cross Validation",

    // DevOps & Cloud
    "Git",
    "AWS",
    "CI/CD Pipelines",
    "Agile/Scrum",
    "SDLC",
    "Bash/Shell scripting",
    "Code Review",
    "Debugging & Troubleshooting",
    "Unit Testing (Pytest)",

    // Computer Science Fundamentals
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (OOP)",

    // Other Tools
    "Kali Linux (VirtualBox)",
    "Jira",

    // Hardware & Systems
    "Arduino",
    "Raspberry Pi",
    "CAD (Onshape/Logisim)",
    "Linux",

    // Soft Skills
    "Collaborative Problem Solving",
    "Communication",
    "Cross-Level Communication",
    "Adaptive Learning",
    "Critical Thinking",
    "Detail-Oriented",
    "Time Management"
    ],

    socials: [
        { icon: 'github', url: 'https://github.com/suthidesilva' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/in/desilvasuthira/' },
        { icon: 'mail', url: 'mailto:suthiradesilva@gmail.com' }
    ]
};

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

        const particleCount = 700;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            const angle = (i / particleCount) * Math.PI * 8;
            const radius = 10;
            
            positions[i * 3] = Math.cos(angle) * radius;
            positions[i * 3 + 1] = (i / particleCount) * 40 - 20;
            positions[i * 3 + 2] = Math.sin(angle) * radius;

            colors[i * 3] = 0.0;     // No red
            colors[i * 3 + 1] = 0.87; // Green for blue hue
            colors[i * 3 + 2] = 1.0; // Full blue
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

        const pointLight = new THREE.PointLight(0x00DFFF, 2, 100);
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
        const time = Date.now() * 0.0002;

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

    /* ================= PROJECTS ================= */
    const projectsGrid = document.getElementById('projects-grid');

    projectsGrid.innerHTML = data.projects.map(project => `
        <a href="${project.link}"
           target="_blank"
           rel="noopener noreferrer"
           class="block">

            <div class="project-card p-6 rounded-lg enhanced-hover cursor-pointer">
                <h3 class="text-xl font-bold mb-4 text-[#00DFFF]">
                    ${project.title}
                </h3>

                <p class="text-gray-300 mb-6">
                    ${project.description}
                </p>

                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.tags.map(tag => `
                        <span class="skill-tag">${tag}</span>
                    `).join('')}
                </div>

                <div class="text-[#00DFFF] inline-flex items-center">
                    View Project
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                </div>
            </div>
        </a>
    `).join('');


    /* ================= RESEARCH ================= */
    const researchContent = document.getElementById('research-content');

    researchContent.innerHTML = data.research.map(item => 
        `<div class="research-item p-6 rounded-lg enhanced-hover cursor-pointer">
            <h3 class="text-xl font-bold mb-2 text-[#00DFFF]">
                ${item.title}
            </h3>

            <p class="text-gray-300 mb-4">
                ${item.description}
            </p>

            <span class="text-sm text-[#00DFFF]">
                ${item.period}
            </span>
        </div>`
    ).join('');

    // Education
    document.getElementById('education-list').innerHTML = data.education.map(item => 
        `<div class="education-item">
            <h4 class="text-lg font-bold text-[#00DFFF]">${item.school}</h4>
            <p class="text-gray-300">${item.degree}</p>
            <p class="text-sm text-[#00DFFF]">${item.period}</p>
            <p class="text-gray-400 mt-2">${item.details}</p>
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
    document.title = document.hidden ? "Come back! 😌" : "Suthira de Silva - Portfolio";
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


const fadeTexts = [
    "Hi there!",
    "How are you?",
    "Welcome to my Web Portfolio!",
    "By the way...",
    "Do you see something moving around?",
    "Yes...",
    "It is an RNA molecule floating around in a 3D space.",
    "I find RNA molecules to be incredibly UNIQUE.",
    "Hover around to see how it reacts to you.",
];

let currentIndex = 0;

function updateFadeText() {
    const fadeTextElement = document.getElementById('fade-text');

    fadeTextElement.classList.remove('active');

    setTimeout(() => {
        fadeTextElement.textContent = fadeTexts[currentIndex];
        currentIndex = (currentIndex + 1) % fadeTexts.length;

        fadeTextElement.classList.add('active');
    }, 1000);
}

// Smooth appearance and disappearance on scroll
function handleScroll() {
    const fadeContainer = document.getElementById('fade-text-container');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Trigger smooth hide/reappear based on scroll position
    if (scrollY > windowHeight / 4) {
        fadeContainer.classList.add('hidden');
    } else {
        fadeContainer.classList.remove('hidden');
    }
}


updateFadeText(); 
setInterval(updateFadeText, 5000); 
window.addEventListener('scroll', handleScroll);



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

        // Blue gradient for cursor glow
        const gradient = ctx.createRadialGradient(
            cursor.pos.x, cursor.pos.y, 0,
            cursor.pos.x, cursor.pos.y, 400
        );
        
        gradient.addColorStop(0, 'rgba(0, 223, 255, 0.03)');
        gradient.addColorStop(0.5, 'rgba(0, 223, 255, 0.01)');
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
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const skillsContainer = document.getElementById("skills-list");
    const aboutSkills = document.querySelectorAll("#about #skills-list .skill-tag");

    // Move skills from About section to Skills section
    aboutSkills.forEach(skill => {
        skillsContainer.appendChild(skill);
    });
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

document.querySelector('.name').textContent = 'Suthira de Silva';
document.querySelector('.profession').textContent = 'ML Researcher';


let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('nav-hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('nav-hidden');
    }
    lastScrollY = window.scrollY;
});

