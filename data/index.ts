export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Actively enhancing my logical thinking and problem-solving skills.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2 ",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    }
];



// export const gridItems = [
//     {
//         id: 1,
//         title: "I prioritize client collaboration, fostering open communication ",
//         description: "",
//         className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[100vh]",
//         imgClassName: "w-full h-full",
//         titleClassName: "justify-end",
//         img: "/b1.svg",
//         spareImg: "",
//     },
//     {
//         id: 2,
//         title: "I'm very flexible with time zone communications",
//         description: "",
//         className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//         imgClassName: "",
//         titleClassName: "justify-start",
//         img: "",
//         spareImg: "",
//     },
//     {
//         id: 3,
//         title: "My tech stack",
//         description: "I constantly try to improve",
//         className: "lg:col-span-2 md:col-span-3 md:row-span-2",
//         imgClassName: "",
//         titleClassName: "justify-center",
//         img: "",
//         spareImg: "",
//     },
//     {
//         id: 4,
//         title: "Tech enthusiast with a passion for development.",
//         description: "",
//         className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//         imgClassName: "",
//         titleClassName: "justify-start",
//         img: "/grid.svg",
//         spareImg: "/b4.svg",
//     },

//     {
//         id: 5,
//         title: "Currently building a JS Animation library",
//         description: "The Inside Scoop",
//         className: "md:col-span-3 md:row-span-2",
//         imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
//         titleClassName: "justify-center md:justify-start lg:justify-center",
//         img: "/b5.svg",
//         spareImg: "/grid.svg",
//     },
//     {
//         id: 6,
//         title: "Do you want to start a project together?",
//         description: "",
//         className: "lg:col-span-2 md:col-span-3 md:row-span-1",
//         imgClassName: "",
//         titleClassName: "justify-center md:max-w-full max-w-60 text-center",
//         img: "",
//         spareImg: "",
//     },
// ];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "Get Me A Chai - Fund your projects with chai",
        des: "Get Me A Chai is a fun, lightweight platform that lets creators receive support for their projects through small contributions—just like buying them a chai!",
        img: "/p2.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/Kartikey-Gehra4994/GetMeAChai",
    },
    {
        id: 3,
        title: "Hotel Booking – Find and Book Your Perfect Stay Instantly",
        des: "Hotel Booking is a fast and easy-to-use platform to find, compare, and book hotels at the best prices—anytime, anywhere.",
        img: "/p3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/Kartikey-Gehra4994/Hotel-Booking",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/adrianhajdin/iphone",
    },
];

export const testimonials = [
    {
        quote:
            "I'm truly grateful to everyone who supported me in my web development journey. Your guidance and encouragement helped me grow, both technically and personally. This path wouldn’t have been the same without you. Thank you so much! 🙏",
        name: "CodeWithHarry",
        title: "YouTybe",
        link: "https://www.youtube.com/@CodeWithHarry",
        img: "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        quote:
            "I'm truly grateful to everyone who supported me in my web development journey. Your guidance and encouragement helped me grow, both technically and personally. This path wouldn’t have been the same without you. Thank you so much! 🙏",
        name: "Apna College",
        title: "YouTybe",
        link: "https://www.youtube.com/@ApnaCollegeOfficial",
        img: "https://yt3.googleusercontent.com/FEcjRtez5od8UowDo6tTt9WlE-MrIFEmcwPMTORmK9Swk6KCklOmA3xfIG9WuLWfNYfNThQE=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        quote:
            "I'm truly grateful to everyone who supported me in my web development journey. Your guidance and encouragement helped me grow, both technically and personally. This path wouldn’t have been the same without you. Thank you so much! 🙏",
        name: "Technical Suneja",
        title: "YouTybe",
        link: "https://www.youtube.com/@TechnicalSuneja",
        img: "https://yt3.googleusercontent.com/xdl4qDbVG9y3yb5l6_jUiIAPDjm5Bmk60y0rXYyR-J2L4uZhGXNurdBF9NL7ZAVOSYwavC0A4s8=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        quote:
            "I'm truly grateful to everyone who supported me in my web development journey. Your guidance and encouragement helped me grow, both technically and personally. This path wouldn’t have been the same without you. Thank you so much! 🙏",
        name: "Sheryians Coding School",
        title: "YouTybe",
        link: "https://www.youtube.com/@sheryians",
        img: "https://yt3.googleusercontent.com/14Nf520-HXNdCmvBnCJMZm2NxCgmD-skHJvutlO3Zd6FjyNf8rXHzz9RHf7A44pLDY7z63s8=s160-c-k-c0x00ffffff-no-rj"
    },
    {
        quote:
            "I'm truly grateful to everyone who supported me in my web development journey. Your guidance and encouragement helped me grow, both technically and personally. This path wouldn’t have been the same without you. Thank you so much! 🙏",
        name: "GreatStack",
        title: "YouTybe",
        link: "https://www.youtube.com/@GreatStackDev",
        img: "https://yt3.googleusercontent.com/SxtxAT2eoNsERZyC-2Q9t3YhFC0IPhlaYOFA8rciY3BkhfoR9VPAx5n8A8L6QNG3vjFXSsB7rQ=s160-c-k-c0x00ffffff-no-rj"
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Kartikey-Gehra4994"
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/kartik4994"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/kartikey-gehra-11b259344/"
    },
];

export const ytChannel = [
    {
        id: 1,
        img: "https://yt3.googleusercontent.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s160-c-k-c0x00ffffff-no-rj",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];