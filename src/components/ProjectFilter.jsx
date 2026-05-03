import { useState } from "react";

export default function ProjectFilter() {

  // =========================
  //      PROJECT JSON DATA
  // =========================
  const projectsData = [
    { id: 1, title: "Prosjektbørsen", description: "A Product Listing Platform for MENA Startups.", technologies: ["Laravel", "Nuxt.js"], type: "Ecommerce", domain: "Web", country: "India", image: "/images/p1.png" },
    { id: 2, title: "Brivora", description: "Online learning platform.", technologies: ["Laravel", "Flutter"], type: "Education", domain: "Mobile", country: "India", image: "/images/p2.png" },
    { id: 3, title: "Slara.ai", description: "AI personas platform.", technologies: ["React"], type: "AI", domain: "Web", country: "United States", image: "/images/p3.png" },
    { id: 4, title: "FoodoraX", description: "Food ordering solution.", technologies: ["React", "Node.js"], type: "Ecommerce", domain: "Mobile", country: "India", image: "/images/p4.png" },
    { id: 5, title: "EduSphere", description: "Virtual classroom LMS.", technologies: ["Vue", "Laravel"], type: "Education", domain: "Web", country: "UAE", image: "/images/p5.png" },
    { id: 6, title: "MarketAI", description: "AI market analyzer.", technologies: ["Python", "React"], type: "AI", domain: "Web", country: "United Kingdom", image: "/images/p6.png" },
    { id: 7, title: "TravelGo", description: "Travel booking system.", technologies: ["Next.js", "Node.js"], type: "Travel", domain: "Web", country: "India", image: "/images/p7.png" },
    { id: 8, title: "ShopifyClone", description: "Ecommerce site builder.", technologies: ["React", "Express"], type: "Ecommerce", domain: "Web", country: "Canada", image: "/images/p8.png" },
    { id: 9, title: "Finomore", description: "Finance & budgeting.", technologies: ["Flutter", "Firebase"], type: "Finance", domain: "Mobile", country: "India", image: "/images/p9.png" },
    { id: 10, title: "HealthSync", description: "Doctor appointment app.", technologies: ["React Native"], type: "Healthcare", domain: "Mobile", country: "Australia", image: "/images/p10.png" },
    { id: 11, title: "BlogPilot", description: "AI blog writer.", technologies: ["Next.js", "AI"], type: "AI", domain: "Web", country: "United States", image: "/images/p11.png" },
    { id: 12, title: "TaskBuddy", description: "Team task manager.", technologies: ["React", "Node.js"], type: "Productivity", domain: "Web", country: "India", image: "/images/p12.png" },
    { id: 13, title: "Bookmarx", description: "Online book store.", technologies: ["Vue"], type: "Ecommerce", domain: "Web", country: "Germany", image: "/images/p13.png" },
    { id: 14, title: "SmartPay", description: "QR payment wallet.", technologies: ["Flutter"], type: "Finance", domain: "Mobile", country: "Singapore", image: "/images/p14.png" },
    { id: 15, title: "Newsify", description: "Live news aggregator.", technologies: ["React"], type: "Media", domain: "Web", country: "India", image: "/images/p15.png" },
    { id: 16, title: "GymTrack", description: "Workout tracking app.", technologies: ["React Native"], type: "Health", domain: "Mobile", country: "Brazil", image: "/images/p16.png" },
    { id: 17, title: "Artify", description: "Artist portfolio app.", technologies: ["Next.js"], type: "Portfolio", domain: "Web", country: "France", image: "/images/p17.png" },
    { id: 18, title: "AutoCRM", description: "CRM for businesses.", technologies: ["Laravel"], type: "Business", domain: "Web", country: "India", image: "/images/p18.png" },
    { id: 19, title: "LogiTrack", description: "Logistics analytics.", technologies: ["React"], type: "Logistics", domain: "Web", country: "United States", image: "/images/p19.png" },
    { id: 20, title: "SkillUp", description: "Learning app with quizzes.", technologies: ["Flutter"], type: "Education", domain: "Mobile", country: "India", image: "/images/p20.png" },
    { id: 21, title: "Prosjektbørsen", description: "A Product Listing Platform for MENA Startups.", technologies: ["Laravel", "Nuxt.js"], type: "Ecommerce", domain: "Web", country: "India", image: "/images/p1.png" },
    { id: 22, title: "Brivora", description: "Online learning platform.", technologies: ["Laravel", "Flutter"], type: "Education", domain: "Mobile", country: "India", image: "/images/p2.png" },
    { id: 23, title: "Slara.ai", description: "AI personas platform.", technologies: ["React"], type: "AI", domain: "Web", country: "United States", image: "/images/p3.png" },
    { id: 24, title: "FoodoraX", description: "Food ordering solution.", technologies: ["React", "Node.js"], type: "Ecommerce", domain: "Mobile", country: "India", image: "/images/p4.png" },
    { id: 25, title: "EduSphere", description: "Virtual classroom LMS.", technologies: ["Vue", "Laravel"], type: "Education", domain: "Web", country: "UAE", image: "/images/p5.png" },
    { id: 26, title: "MarketAI", description: "AI market analyzer.", technologies: ["Python", "React"], type: "AI", domain: "Web", country: "United Kingdom", image: "/images/p6.png" },
    { id: 27, title: "TravelGo", description: "Travel booking system.", technologies: ["Next.js", "Node.js"], type: "Travel", domain: "Web", country: "India", image: "/images/p7.png" },
    { id: 28, title: "ShopifyClone", description: "Ecommerce site builder.", technologies: ["React", "Express"], type: "Ecommerce", domain: "Web", country: "Canada", image: "/images/p8.png" },
    { id: 29, title: "Finomore", description: "Finance & budgeting.", technologies: ["Flutter", "Firebase"], type: "Finance", domain: "Mobile", country: "India", image: "/images/p9.png" },
    { id: 30, title: "HealthSync", description: "Doctor appointment app.", technologies: ["React Native"], type: "Healthcare", domain: "Mobile", country: "Australia", image: "/images/p10.png" },
    { id: 31, title: "BlogPilot", description: "AI blog writer.", technologies: ["Next.js", "AI"], type: "AI", domain: "Web", country: "United States", image: "/images/p11.png" },
    { id: 32, title: "TaskBuddy", description: "Team task manager.", technologies: ["React", "Node.js"], type: "Productivity", domain: "Web", country: "India", image: "/images/p12.png" },
    { id: 33, title: "Bookmarx", description: "Online book store.", technologies: ["Vue"], type: "Ecommerce", domain: "Web", country: "Germany", image: "/images/p13.png" },
    { id: 34, title: "SmartPay", description: "QR payment wallet.", technologies: ["Flutter"], type: "Finance", domain: "Mobile", country: "Singapore", image: "/images/p14.png" },
    { id: 35, title: "Newsify", description: "Live news aggregator.", technologies: ["React"], type: "Media", domain: "Web", country: "India", image: "/images/p15.png" },
    { id: 36, title: "GymTrack", description: "Workout tracking app.", technologies: ["React Native"], type: "Health", domain: "Mobile", country: "Brazil", image: "/images/p16.png" },
    { id: 37, title: "Artify", description: "Artist portfolio app.", technologies: ["Next.js"], type: "Portfolio", domain: "Web", country: "France", image: "/images/p17.png" },
    { id: 38, title: "AutoCRM", description: "CRM for businesses.", technologies: ["Laravel"], type: "Business", domain: "Web", country: "India", image: "/images/p18.png" },
    { id: 39, title: "LogiTrack", description: "Logistics analytics.", technologies: ["React"], type: "Logistics", domain: "Web", country: "United States", image: "/images/p19.png" },
    { id: 40, title: "SkillUp", description: "Learning app with quizzes.", technologies: ["Flutter"], type: "Education", domain: "Mobile", country: "India", image: "/images/p20.png" }
  ];

  // =========================
  //      FILTER STATES
  // =========================
  const [tech, setTech] = useState("All");
  const [type, setType] = useState("All");
  const [domain, setDomain] = useState("All");
  const [country, setCountry] = useState("All");

  // =========================
  //      FILTER LOGIC
  // =========================
  const filtered = projectsData.filter(project => {
    return (
      (tech === "All" || project.technologies.includes(tech)) &&
      (type === "All" || project.type === type) &&
      (domain === "All" || project.domain === domain) &&
      (country === "All" || project.country === country)
    );
  });

  // =========================
  //      PAGINATION
  // =========================
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;

  const lastIndex = currentPage * cardsPerPage;
  const firstIndex = lastIndex - cardsPerPage;

  const currentCards = filtered.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filtered.length / cardsPerPage);

  // Reset to page 1 whenever filters change
  const handleFilterChange = (setter, value) => {
    setter(value);
    setCurrentPage(1);
  };

  // =========================
  //      UI RENDER
  // =========================
  return (
    <div className="custom-container pb-[100px]">
      {/* FILTERS */}
      <div className="grid grid-cols-4 gap-4 mb-6">

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange(setTech, e.target.value)}>
          <option>All</option>
          <option>Laravel</option>
          <option>Nuxt.js</option>
          <option>Flutter</option>
          <option>React</option>
          <option>Node.js</option>
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange(setType, e.target.value)}>
          <option>All</option>
          <option>Ecommerce</option>
          <option>Education</option>
          <option>AI</option>
          <option>Finance</option>
          <option>Travel</option>
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange(setDomain, e.target.value)}>
          <option>All</option>
          <option>Web</option>
          <option>Mobile</option>
        </select>

        <select className="border p-2 rounded" onChange={(e) => handleFilterChange(setCountry, e.target.value)}>
          <option>All</option>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </div>

      {/* CARD LIST */}
      <div className="grid grid-cols-3 gap-6">
        {currentCards.map(item => (
          <div key={item.id} className="border border-[#f1f1f1] rounded-xl shadow p-4">
            <img src={item.image} className="rounded-xl mb-3" alt="" />

            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {item.technologies.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-xs">{t}</span>
              ))}
            </div>

            <div className="flex justify-between mt-3 text-sm">
              <span>{item.country}</span>
              <span>{item.domain}</span>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-10 gap-2">
        <button disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200"}`}>
            {index + 1}
          </button>
        ))}

        <button disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
          Next
        </button>
      </div>

    </div>
  );
}
