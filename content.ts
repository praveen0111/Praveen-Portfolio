
export const content = {
  global: {
    logoText: "PE.",
    copyrightName: "Praveen Elanchezhian",
    email: "praveenchezhian1@gmail.com",
  },
  hero: {
    creative: {
      title: "Creative",
      description: "Filmmaker with a passion for visual storytelling and expertise in editing and post-production workflow.",
      buttonText: "Explore My Work"
    },
    academic: {
      title: "Digital",
      description: "MBA candidate specializing in the intersection of technology, marketing, and product design.",
      buttonText: "View My Profile"
    }
  },
  creativePage: {
    title: "Creative Projects",
    description: "A collection of narratives brought to life through direction, editing, and sound design.",
    // Add or remove projects here
    projects: [
      {
        title: "GR3Y",
        category: "Thriller Film",
        description: "An archaeologist unearths a treasure box, which leads to a turn of unexpected events. Multi-award winning short film focusing on suspense and visual storytelling.",
        images: [
          "https://m.media-amazon.com/images/M/MV5BM2YzNTgxNDgtY2M3Yi00ZTRiLTljNTctMTI3MDlkZTNjYjJiXkEyXkFqcGc@._V1_.jpg", 
          "https://placehold.co/600x400/334155/cbd5e1?text=GR3Y+Still+1",
          "https://placehold.co/600x400/0f172a/64748b?text=GR3Y+Still+2"
        ],
        link: "#" 
      },
      {
        title: "STRANGERS",
        category: "Drama Film",
        description: "A conversation between a stranger and a bystander unfolds, past and present collide. Explores themes of connection and consequence.",
        images: [
          "https://placehold.co/600x400/374151/d1d5db?text=Strangers+Poster",
          "https://placehold.co/600x400/4b5563/9ca3af?text=Strangers+Still"
        ],
        link: "#"
      },
      {
        title: "Neon Nights",
        category: "Music Video",
        description: "A cyberpunk-inspired music video featuring heavy VFX work and dynamic color grading to match the synth-wave track.",
        images: ["https://placehold.co/600x400/4c1d95/a78bfa?text=Neon+Nights"],
        link: "#"
      },
      {
        title: "Urban Echoes",
        category: "Documentary",
        description: "A look into the lives of street musicians in Chennai, capturing the raw sounds and stories of the city.",
        images: ["https://placehold.co/600x400/78350f/fcd34d?text=Urban+Echoes"],
        link: "#"
      },
      {
        title: "Product Launch X",
        category: "Commercial",
        description: "High-energy commercial editing for a new tech product launch, emphasizing speed and sleek design.",
        images: ["https://placehold.co/600x400/064e3b/34d399?text=Product+Launch"],
        link: "#"
      },
      {
        title: "VFX Breakdown Reel",
        category: "Showreel",
        description: "A compilation of visual effects work including compositing, rotoscoping, and 3D integration.",
        images: ["https://placehold.co/600x400/831843/f472b6?text=VFX+Reel"],
        link: "#"
      }
    ]
  },
  academicPage: {
    profile: {
      name: "Praveen Elanchezhian",
      role: "MBA Candidate & Product Strategist",
      description: "Bridging the gap between creative storytelling and data-driven product strategy.",
      image: "https://placehold.co/200x200/e2e8f0/64748b?text=Photo"
    },
    sectionTitles: {
      skills: "Skills",
      experience: "Experience & Projects",
      education: "Education"
    },
    skills: [
      { name: "Product Design (UI/UX)", level: "90%" },
      { name: "Marketing Strategy", level: "85%" },
      { name: "Project Management", level: "80%" },
      { name: "Video Editing (Premiere/AE)", level: "95%" },
      { name: "Data Analysis", level: "75%" },
    ],
    experience: [
      {
        role: "Product Design Consultant",
        company: "Tamizh | AR Smart Glass",
        duration: "Jul 2024 - Present",
        details: [
          "Led UI/UX design for gesture-controlled AR interface.",
          "Prototyped interaction models for voice commands.",
          "Developed product roadmap for prototype launch."
        ],
        link: "#"
      },
      {
        role: "Marketing Strategy Intern",
        company: "Madarth",
        duration: "May 2025 - Jul 2025",
        details: [
          "Executed social media campaigns for major agricultural clients.",
          "Implemented AI-driven workflow for asset generation."
        ],
        link: "#"
      }
    ],
    education: [
      {
        degree: "Master of Business Administration (MBA)",
        school: "NIT, Trichy",
        year: "2024-2026",
        color: "emerald-500" // Tailwind color name
      },
      {
        degree: "B.E. Electronics & Communication",
        school: "Loyola ICAM College of Engineering and Technology, Chennai",
        year: "2020-2024",
        color: "gray-300"
      }
    ]
  },
  contactPage: {
    title: "Hi, Let's Connect!",
    description: "Whether you have a project in mind, want to discuss tech trends, or just want to say hi, I'm always open to a chat.",
    ctaButton: "Say Hello",
    socials: [
      { icon: "mail", href: "mailto:praveenchezhian1@gmail.com", colorClass: "text-red-500", label: "Email" },
      { icon: "instagram", href: "#", colorClass: "text-pink-600", label: "Instagram" },
      { icon: "facebook", href: "#", colorClass: "text-blue-600", label: "Facebook" },
      { icon: "twitter", href: "#", colorClass: "text-sky-500", label: "X (Twitter)" },
      { icon: "linkedin", href: "#", colorClass: "text-blue-700", label: "LinkedIn" },
      { icon: "github", href: "#", colorClass: "text-gray-900", label: "GitHub" }
    ]
  },
  footer: {
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" }
    ]
  }
};
