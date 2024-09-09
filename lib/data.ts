import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import beddingRoyal from "@/public/beddingroyal.png";
import vankarFoundation from "@/public/vankarfoundation.png";
import overseas from "@/public/overseas_website.png";
import telegramBot from "@/public/telegram_bot.jpg";
import balKrishnaGarba from "@/public/balkrishnagarba.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Clicxia Web Technology",
    description:
      "Proficient in developing dynamic websites using PHP and WordPress, creating custom themes and plugins, and optimizing WooCommerce platforms, while implementing on-site SEO strategies to enhance website visibility.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - January 2024",
  },
  {
    title: "IT Trainee",
    location: "Inox India Limited",
    description:
      "Skilled in managing Windows Server environments, including Active Directory, DNS, DHCP, and Group Policy, with a solid understanding of IoT system architecture and management.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2024 - Present",
  },
  // {
  //   title: "Software Engineer",
  //   location: "The University of Queensland",
  //   description:
  //     "Full-stack software engineer in the Application Development and Support team. Worked on web applications such as CAHP (Casual Academic Hire and Payment), UQ Maps, UQ Donations, and Programs and Courses.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "November 2022 - January 2024",
  // },
  // {
  //   title: "Web Developer",
  //   location: "Vadodara",
  //   description:
  //     "Software engineer in the intelliHR platform team. We are a feature enablement team dedicated to developing features for developers, ensuring they are easier to create. We also look after issues of scale and technical debt for developers and the platform.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "January 2024 - Present",
  // },
] as const;

export const projectsData = [
  {
    title: "Bedding Royal",
    description:
      "Developed and managed a complete e-commerce website for a bedding business in the UK, focusing on a user-friendly design. Leveraged Elementor and WPBakery to build the site, incorporating SEO-friendly strategies to boost visibility and improve search engine rankings. The site enabled smooth product browsing and purchasing experiences for customers.",
    tags: ["Wordpress", "Elementor", "Woocommerce"],
    icons: [
      "logos:wordpress",
      "logos:elementor",
    ],
    imageUrl: beddingRoyal,
    // githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    urlLink: "https://beddingroyal.co.uk/",
  },
  {
    title: "Vankar Foundation",
    description:
      "Created a WordPress-based matrimonial platform by migrating HTML templates to WordPress for a seamless user experience. Developed custom plugins to handle user memberships and content access, while also implementing QR code payment integration to facilitate easy and secure payments. This platform simplifies the process of finding and connecting with potential life partners.",
    tags: ["Wordpress","PHP", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:wordpress",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: vankarFoundation,
    urlLink: "https://vankarfoundation.co.in/new/",
  },
  {
    title: "Bal Krishna Garba",
    description:
      "Designed and developed a Garba pass and stall booking website to streamline the booking process for event attendees. Implemented features that allowed users to book passes and stalls online, along with creating an online photo gallery for users to view event photos. This made the overall event management more accessible and organized for participants.",
    tags: ["bootstrap", "php", "javascript"],
    icons: ["logos:bootstrap", "logos:php", "logos:javascript"],
    imageUrl: balKrishnaGarba,
    urlLink: "https://balkrishnagarba.org.in/",
  },
  {
    title: "File Provider Bot",
    description:
      "Developed a Telegram bot designed to securely provide files while avoiding the risk of getting banned. The bot leverages short URLs to safeguard links and ensure smooth file distribution. By incorporating smart link management and secure practices, the bot effectively handles file requests, making it reliable and efficient for users.",
    tags: ["Python", "Pyrogram"],
    icons: ["logos:python"],
    imageUrl: telegramBot,
    // githubLink: "https://github.com/ben04rogers/cab230assignment1",
  },
  {
    title: "Oversea Courier Website",
    description:
      "Developed the Over Sears Courier website, a comprehensive platform offering IT consultancy and web solutions for businesses. The website provides a clear showcase of services such as web development, software consulting, and digital solutions to help clients enhance their online presence. Designed with a professional interface, it includes detailed service pages, an integrated contact system for consultations, and a secure client portal for managing ongoing projects. The platform was built to be responsive, SEO-optimized, and easily navigable, offering a streamlined experience for potential clients in need of web solutions and IT support.",
    tags: ["Wordpress", "Javascript", "MySQL"],
    icons: ["logos:javascript", "logos:wordpress", "cib:mysql"],
    imageUrl: overseas,
    githubLink: "https://himanshumore.great-site.net/",
  },
  // {
  //   title: "Techprowl Computer Auction",
  //   description:
  //     "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
  //   tags: ["Python", "Flask", "Bootstrap", "SQLite"],
  //   icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
  //   imageUrl: techprowlImg,
  //   githubLink: "https://github.com/ben04rogers/computer-auction",
  //   urlLink: "https://techprowl.herokuapp.com",
  // },
  // {
  //   title: "Task Manager Console App",
  //   description:
  //     "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
  //   tags: ["C#"],
  //   icons: ["devicon:csharp"],
  //   imageUrl: taskManagerImg,
  //   githubLink: "https://github.com/ben04rogers/task-manager",
  // },
  // {
  //   title: "Family Tree Shortest Path",
  //   description:
  //     "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
  //   tags: ["Python"],
  //   icons: ["logos:python"],
  //   imageUrl: familyTreeImg,
  //   githubLink: "https://github.com/ben04rogers/breadth-first-search",
  //   demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  // },
  // {
  //   title: "Arduino Binary Game",
  //   description:
  //     "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
  //   tags: ["C"],
  //   icons: ["devicon:c"],
  //   imageUrl: binaryGameImg,
  //   githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
  //   demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
  // },
] as const;

export const skillsData = [
  {
    name: "Wordpress",
    icon: "logos:wordpress",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
] as const;
