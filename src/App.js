import Dashboard from "./pages/dashboard";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createContext, useState } from "react";
import TrendingNews from "./pages/TrendingNews";
import AddNewsPage from "./pages/AddNewsPage";
import ShowReport from "./pages/ShowReport"; 
import ManangeContent from "./pages/ManageContend";

const NewsDataContext = createContext();

function App() {
  const rows = [
    {
      "id": 1,
      "no": 1,
      "title": "India's Growing Economy",
      "content": "India's economy has witnessed significant growth in recent years, fueled by a rise in technology and manufacturing.",
      "views": 25480,
      "options": 100,
      "comment": 30,
      "media": "https://relevant-image-link-economy.jpg", 
      "category": "tech"
    },
    {
      "id": 2,
      "no": 2,
      "title": "Climate Change Summit Results",
      "content": "The recent climate change summit yielded mixed results, with some nations pledging ambitious goals and others lagging behind.",
      "views": 12879,
      "options": 50,
      "comment": 15,
      "media": "https://relevant-image-link-climate.jpg", 
      "category": "political"
    },
    {
      "id": 3,
      "no": 3,
      "title": "New Medical Breakthrough",
      "content": "Researchers have discovered a potential new treatment for a rare genetic disease, offering hope to patients worldwide.",
      "views": 8960,
      "options": 75,
      "comment": 5,
      "media": "https://relevant-image-link-medicine.jpg", 
      "category": "science" 
    },
    {
      "id": 4,
      "no": 4,
      "title": "India's Rising Start-up Ecosystem",
      "content": "India's start-up ecosystem is flourishing, with a surge in entrepreneurial activities across various sectors.",
      "views": 40250,
      "options": 150,
      "comment": 55,
      "media": "https://relevant-image-link-startup.jpg", 
      "category": "business"
    },
    {
      "id": 5,
      "no": 5,
      "title": "Infrastructure Development in India",
      "content": "India is investing heavily in infrastructure development, laying the foundation for sustained economic growth.",
      "views": 31200,
      "options": 90,
      "comment": 35,
       "media": "https://relevant-image-link-infrastructure.jpg", 
      "category": "development"
    },
    {
      "id": 6,
      "no": 6,
      "title": "Tourism Boost in India",
      "content": "India's tourism industry is experiencing a significant boost, attracting both domestic and international travelers.",
      "views": 27800,
      "options": 110,
      "comment": 40,
      "media": "https://relevant-image-link-tourism.jpg", 
      "category": "travel"
    },
    {
      "id": 7,
      "no": 7,
      "title": "E-commerce Revolution in India",
      "content": "India's e-commerce sector is undergoing a revolution, with increasing internet penetration and digital payments.",
      "views": 38700,
      "options": 130,
      "comment": 50,
      "media": "https://relevant-image-link-ecommerce.jpg", 
      "category": "tech"
    },
    {
      "id": 8,
      "no": 8,
      "title": "Renewable Energy Growth in India",
      "content": "India's renewable energy sector is growing rapidly, with ambitious targets for solar and wind power generation.",
      "views": 32100,
      "options": 100,
      "comment": 35,
      "media": "https://relevant-image-link-renewableenergy.jpg", 
      "category": "environment" 
    },
    {
      "id": 9,
      "no": 9,
      "title": "Education Sector Expansion",
      "content": "India's education sector is expanding, with initiatives to improve access to quality education and skill development programs.",
      "views": 29850,
      "options": 95,
      "comment": 30,
      "media": "https://relevant-image-link-education.jpg", 
      "category": "education"
    }, 
    {
      "id": 10,
      "no": 10,
      "title": "Healthcare Industry Growth",
      "content": "India's healthcare industry is witnessing steady growth, driven by advancements in medical technology and increased healthcare spending.",
      "views": 33200,
      "options": 120,
      "comment": 45,
      "media": "https://relevant-image-link-healthcare.jpg", 
      "category": "health" 
    },
     {
      "id": 11,
      "no": 11,
      "title": "Agricultural Modernization",
      "content": "India's agricultural sector is undergoing modernization, with the adoption of technology and sustainable farming practices.",
      "views": 30500,
      "options": 85,
      "comment": 25,
      "media": "https://relevant-image-link-agriculture.jpg", 
      "category": "agriculture" 
    },  
    {
      "id": 12,
      "no": 12,
      "title": "Financial Inclusion Initiatives",
      "content": "India is promoting financial inclusion through initiatives like Jan Dhan Yojana, aiming to bring banking services to every household.",
      "views": 27600,
      "options": 90,
      "comment": 30,
      "media": "https://relevant-image-link-finance.jpg", 
      "category": "finance" 
    },
    {
      "id": 13,
      "no": 13,
      "title": "Smart Cities Development",
      "content": "India is developing smart cities equipped with advanced infrastructure and sustainable amenities to drive urban growth.",
      "views": 29750,
      "options": 105,
      "comment": 40,
      "media": "https://relevant-image-link-smartcity.jpg", 
      "category": "development" 
    }, 
    {
      "id": 14,
      "no": 14,
      "title": "Digital Transformation in Governance",
      "content": "India is undergoing a digital transformation in governance, leveraging technology to improve public service delivery and transparency.",
      "views": 31900,
      "options": 110,
      "comment": 45,
      "media": "https://relevant-image-link-governance.jpg", 
      "category": "political" 
    },  
     {
      "id": 15,
      "no": 15,
      "title": "Rise of Fintech Startups",
      "content": "India is witnessing a surge in fintech startups, revolutionizing the financial services sector with innovative solutions.",
      "views": 32850,
      "options": 115,
      "comment": 50,
      "media": "https://relevant-image-link-fintech.jpg", 
      "category": "finance" 
    }, 
    {
      "id": 16,
      "no": 16,
      "title": "Investment in Research and Development",
      "content": "India is increasing investment in research and development across sectors to foster innovation and technological advancement.",
      "views": 28400,
      "options": 95,
      "comment": 35,
      "media": "https://relevant-image-link-research.jpg", 
      "category": "science" 
    },  
     {
      "id": 17,
      "no": 17,
      "title": "Rapid Urbanization Challenges",
      "content": "India faces challenges due to rapid urbanization, including infrastructure strain, environmental degradation, and social disparities.",
      "views": 30200,
      "options": 100,
      "comment": 40,
      "media": "https://relevant-image-link-urbanization"},
      {
        "id": 18,
        "no": 18,
        "title": "Gender Equality Initiatives",
        "content": "India is implementing initiatives to promote gender equality in education, employment, and decision-making roles for inclusive growth.",
        "views": 29400,
        "options": 95,
        "comment": 35,
        "media": "https://relevant-image-link-genderequality.jpg" ,
        "category": "social" 
      },
      {
        "id": 19,
        "no": 19,
        "title": "Sustainable Development Goals Progress",
        "content": "India is making progress towards achieving the Sustainable Development Goals, focusing on poverty eradication, education, and healthcare.",
        "views": 31250,
        "options": 105,
        "comment": 45,
        "media": "https://relevant-image-link-sdgs.jpg", 
        "category": "development" 
      },
      {
        "id": 20,
        "no": 20,
        "title": "Emergence of AI and Automation",
        "content": "India is witnessing the emergence of AI and automation technologies, transforming industries and enhancing productivity.",
        "views": 33700,
        "options": 115,
        "comment": 50,
        "media": "https://relevant-image-link-ai.jpg", 
        "category": "tech" 
      },
      {
        "id": 21,
        "no": 21,
        "title": "Revival of Traditional Crafts",
        "content": "India is experiencing a revival of traditional crafts and artisanal skills, driven by a growing appreciation for handmade products.",
        "views": 29200,
        "options": 100,
        "comment": 40,
        "media": "https://relevant-image-link-craftsmanship.jpg", 
        "category": "culture" 
      },
      {
        "id": 22,
        "no": 22,
        "title": "Youth Entrepreneurship Movement",
        "content": "India is witnessing a youth entrepreneurship movement, with young innovators driving economic growth and job creation.",
        "views": 31950,
        "options": 110,
        "comment": 45,
        "media": "https://relevant-image-link-youthentrepreneurs.jpg", 
        "category": "business" 
      },
      {
        "id": 23,
        "no": 23,
        "title": "Revolution in Electric Vehicles",
        "content": "India is undergoing a revolution in electric vehicles, with government incentives and infrastructure development driving adoption.",
        "views": 30300,
        "options": 105,
        "comment": 40,
        "media": "https://relevant-image-link-electricvehicles.jpg", 
        "category": "environment" 
      },
      {
        "id": 24,
        "no": 24,
        "title": "Space Exploration Initiatives",
        "content": "India is expanding its space exploration initiatives, with successful satellite launches and plans for lunar and interplanetary missions.",
        "views": 29650,
        "options": 100,
        "comment": 35,
        "media": "https://relevant-image-link-spaceexploration.jpg", 
        "category": "science" 
      },
      {
        "id": 25,
        "no": 25,
        "title": "Expansion of Entertainment Industry",
        "content": "India's entertainment industry is expanding, with growth in film, television, and digital content production.",
        "views": 32500,
        "options": 110,
        "comment": 45,
        "media": "https://relevant-image-link-entertainment.jpg", 
        "category": "entertainment" 
      }
  ];

  const [rowsArray, setRowsArray] = useState(rows);

  const updateArray = (newArray) => {
    setRowsArray(newArray);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NewsDataContext.Provider value={{ rowsArray, updateArray }}>
              <Dashboard />
            </NewsDataContext.Provider>
          }
        />
        <Route path="/trending-news" element={
        <NewsDataContext.Provider value={{ rowsArray, updateArray }}>
        <TrendingNews />
        </NewsDataContext.Provider>
        } />
    
       <Route path="/add-news" element={
         <NewsDataContext.Provider value={{ rowsArray, updateArray }}> 
         <AddNewsPage />
         </NewsDataContext.Provider>} />
      
      <Route path="/show-report" element={
         <NewsDataContext.Provider value={{ rowsArray, updateArray }}> 
         <ShowReport />
         </NewsDataContext.Provider>} />

      <Route path="/manage-content" element={
        <NewsDataContext.Provider value={{ rowsArray, updateArray }}> 
         <ManangeContent />
         </NewsDataContext.Provider>} />  
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
export { NewsDataContext };