/** EDIT THIS FILE to personalize content, dates, links, education and profile. */
export type Project = {
    id: string;
    number: string;
    title: string;
    category: string;
    description: string;
    stack: string[];
    demoUrl: string | null;
    githubUrl: string | null;
    preview: 'signage' | 'cricket' | 'dashboard';
};
export const profile = {
    name: 'Mathan Raja',
    role: 'Full Stack Developer',
    eyebrow: 'FULL STACK DEVELOPER · CHENNAI · OPEN TO OPPORTUNITIES',
    headline: 'I build digital\nexperiences that',
    highlight: 'make an impact.',
    intro: 'React, Node.js, PHP/Laravel & React Native developer building web and mobile products—from APIs to AWS deployment.',
    about: "I’m a Chennai-based Full Stack Developer with professional experience since 2024, building web and mobile applications with React.js, Angular, Node.js, Express.js, PHP, Laravel, and React Native. My work spans REST APIs, MySQL and MongoDB, third-party integrations, production deployments, server configuration, and troubleshooting.",
    experienceYears: '02+',
    projectCount: '03', // Featured projects shown on this site, not total lifetime projects.
    focusAreas: '04',
    location: 'Chennai, Tamil Nadu, India', // Edit or remove
    availability: 'Available for new opportunities', // Update when needed
    email: 'mathanrajapatchamuthu15@gmail.com', // REPLACE before launching
    // githubUrl: 'https://github.com/Mathan1515/', // ADD REAL URL
    linkedinUrl: 'https://www.linkedin.com/in/mathan-raja-2838132a3/', // ADD REAL URL
    resumeUrl: '/Mathanraja-P-Resume.pdf', // Replace with your final resume in /public.
    portraitUrl: '', // Path to your own portrait, e.g. /profile.jpg
};
export const navLinks = [
    { label: 'Home', href: '#home' }, { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' }, { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }, { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
];
export const skills = [
    { title: 'Frontend', description: 'Interfaces that feel as good as they look.', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular', 'Next.js', 'Bootstrap', 'Tailwind CSS', 'Material UI'], code: '01' },
    { title: 'Backend', description: 'Resilient architecture behind every interaction.', items: ['Node.js', 'Express.js', 'PHP', 'Laravel'], code: '02' },
    { title: 'Database', description: 'Structured, reliable data at every scale.', items: ['MongoDB', 'MySQL'], code: '03' },
    { title: 'Cloud & DevOps', description: 'From first commit to production.', items: ['AWS', 'Hostinger', 'VPS', 'DNS & SSL', 'Docker', 'Git', 'GitHub', 'Postman', 'Server Management'], code: '04' },
];
export const experience = [
    {
        role: 'Software Developer', company: 'Infinity Kiosk Technologies . Maraimalai Nagar, Chennai .',
        period: '2025 – Present', type: 'FULL STACK + MOBILE + CLOUD',
        description: 'Developing and maintaining web and mobile applications, API integrations, data services, and production infrastructure.',
        responsibilities: [
            'Develop MERN stack applications with React.js, Node.js, Express.js and MongoDB',
            'Build React Native mobile apps integrated with REST APIs',
            'Integrate authentication, third-party services, and backend functionality',
            'Manage MongoDB operations and troubleshoot application performance',
            'Deploy and maintain applications with AWS, Hostinger, VPS, DNS and SSL',
            'Use Git and GitHub for code management and collaboration'
        ]
    },
    {
        role: 'Full Stack Developer', company: 'Software Development and Graphic Design . Sembakkam , Chennai',
        period: '2024 – 2025', type: 'WEB APPLICATION DEVELOPMENT',
        description: 'Developed and enhanced database-backed applications, APIs, and responsive frontend experiences.',
        responsibilities: [
            'Develop web applications with PHP, Laravel, React.js, and Angular',
            'Design and integrate REST APIs for frontend-to-backend communication',
            'Build MySQL-backed application features and optimize SQL queries',
            'Test APIs in Postman and resolve integration and application bugs',
            'Maintain existing applications with Git/GitHub and performance improvements'
        ]
    }
];
export const projects: Project[] = [
    { id: 'digital-signage', number: '01', title: 'Digital Signage CMS', category: 'CLOUD PLATFORM / CONTENT MANAGEMENT', preview: 'signage', description: 'Cloud-based advertisement management system for multiple digital standee displays. Upload media, organize campaigns, and remotely control screen content from a centralized dashboard.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS'], demoUrl: null, githubUrl: null },
    { id: 'crickfit', number: '02', title: 'CrickFit Pro', category: 'MOBILE APPLICATION / SPORTS TECH', preview: 'cricket', description: 'Cricket fitness and nutrition management application designed to track hydration, sleep, workouts, nutrition, and cricket performance in one connected experience.', stack: ['React Native', 'PHP', 'MySQL', 'REST APIs'], demoUrl: null, githubUrl: null },
    { id: 'web-apps', number: '03', title: 'Full Stack Web Applications', category: 'WEB APPLICATIONS / FULL STACK', preview: 'dashboard', description: 'Modern, responsive web applications with backend integrations, secure authentication flows, database management, and clean user experiences.', stack: ['React.js', 'PHP', 'MySQL', 'JavaScript'], demoUrl: null, githubUrl: null },
];
export const services = [
    { title: 'Full Stack Development', copy: 'End-to-end web applications, thoughtfully engineered.' },
    { title: 'MERN Stack Solutions', copy: 'Modern JavaScript applications built for growth.' },
    // { title: 'Frontend Engineering', copy: 'Responsive interfaces with meticulous attention to detail.' },
    { title: 'Backend & REST APIs', copy: 'Secure, organized services and reliable integrations.' },
    { title: 'Database Integration', copy: 'Efficient data models, queries, and persistence.' },
    { title: 'Cloud Deployment', copy: 'Deployments, hosting, and production environments.' },
    { title: 'Website Maintenance', copy: 'Troubleshooting, improvements, and ongoing support.' },
];
export const education = [
    { label: 'Postgraduate', value: 'Master of Computer Applications (MCA)', detail: 'Bharathidasan University, Trichy · GPA 8.1/10', year: '2021 – 2023' },
    { label: 'Undergraduate', value: 'Bachelor of Computer Applications (BCA)', detail: 'Thiruvalluvar University, Vellore · GPA 7.2/10', year: '2017 – 2020' },
];
