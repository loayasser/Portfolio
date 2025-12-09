import { Code, Cpu, Folder, Briefcase, Mail, Github, Linkedin, MapPin, Zap } from 'lucide-react';

// --- Global Sections for Navbar ---
export const SECTIONS = [
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'experience', title: 'Experience' },
    { id: 'contact', title: 'Contact' },
];

// --- Skills Data ---
export const SKILLS_DATA = [
    {
        icon: <Code className="w-6 h-6 text-electric-blue" />,
        title: 'Frontend & AI/ML',
        items: ['React.js (Hooks, Context)', 'Tailwind CSS, Styled Components', 'Python (Pandas, Scikit-learn)', 'Machine Learning / RAG'],
    },
    {
        icon: <Cpu className="w-6 h-6 text-electric-blue" />,
        title: 'Embedded & Hardware',
        items: ['C/C++', 'Infineon AURIX TriCore MCUs', 'CAN/CAN-FD Communication Stacks', 'Hardware Debugging & Flashing'],
    },
];

// --- Projects Data ---
export const PROJECTS_DATA = [
    { title: 'Embedded CAN Gateway', tech: ['C', 'AURIX', 'iwpCAN', 'Embedded'], description: 'Developed a robust CAN-to-Ethernet gateway using Infineon TriCore MCUs for automotive data transfer.' },
    { title: 'Full-Stack Document Uploader', tech: ['React', 'Node.js', 'AWS S3', 'Frontend'], description: 'Built a secure web application for large file upload, storage, and retrieval with a modern, responsive interface.' },
    { title: 'RAG Chatbot Prototype', tech: ['Python', 'LLMs', 'NLP', 'AI'], description: 'Created a conversational AI using Retrieval-Augmented Generation (RAG) for querying custom knowledge bases.' },
];

// --- Experience Data ---
export const EXPERIENCE_DATA = [
    { 
        title: 'Embedded Systems Intern', 
        company: 'Automotive Project, Deggendorf', 
        dates: '2023 (6 Months)', 
        description: 'Focused on microcontroller programming, real-time operating systems (RTOS), and debugging communication protocols.' 
    },
    { 
        title: 'Teaching & Lab Assistant', 
        company: 'Electrical & Electronics Engineering Dept.', 
        dates: '2022 – 2023', 
        description: 'Assisted students with C programming assignments, embedded hardware labs, and project finalization.' 
    },
    { 
        title: 'Freelance Frontend Developer', 
        company: 'Remote', 
        dates: '2024 – Present', 
        description: 'Building custom websites and web applications for clients using modern stack including React, TypeScript, and Tailwind.' 
    },
];

// --- Contact Data ---
export const CONTACT_DATA = {
    email: 'loay.berzan@example.com',
    github: 'https://github.com/loayberzan',
    linkedin: 'https://linkedin.com/in/loayberzan',
    location: 'Deggendorf, Germany',
    icons: { Mail, Github, Linkedin, MapPin }
};