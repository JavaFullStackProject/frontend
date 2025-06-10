import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TravelGuides = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterGuidesBySearchTerm = (guides, searchTerm) => {
    return guides.filter((guide) => {
      const searchableFields = [
        guide.name,
        guide.title,
        guide.location,
        guide.description,
        guide.author,
      ];
      return searchableFields.some(
        (field) =>
          field && field.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const guides = [
    {
      id: 1,
      name: "Tirupati Balaji Temple, Andhra Pradesh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8QHC-LNJwtDHB2JoxDZPIoRNOfVZ71G0Eyg&s",
      description:
        "One of the richest and most visited temples in the world, dedicated to Lord Venkateswara. Famous for its Dravidian architecture and spiritual significance.",
      location: "Tirupati, Andhra Pradesh",
      bestTime: "October to February",
      views: "100,130+",
      likes: "3192,000+",
      link: "tirupati-balaji-guide",
    },
    {
      id: 2,
      name: "Golden Temple, Amritsar",
      image:
        "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVuJTIwdGVtcGxlJTIwYW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D",
      description:
        "The holiest Gurdwara of Sikhism, known for its stunning golden façade and serene water body surrounding it.",
      location: "Amritsar, Punjab",
      bestTime: "November to March",
      views: "100,000+",
      likes: "100,000+",
      link: "golden-temple-guide",
    },
    {
      id: 3,
      name: "Meenakshi Temple, Madurai",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlwjPEnZZEP5DaglAd1g7Xkx8_OfDNxTI0w&s",
      description:
        "A historic Hindu temple famous for its intricate carvings, massive gopurams (gateway towers), and vibrant festivals.",
      location: "Madurai, Tamil Nadu",
      bestTime: "October to March",
      views: "100,000+",
      likes: "100,000+",
      link: "meenakshi-temple-guide",
    },
    {
      id: 4,
      name: "Hampi Ruins, Karnataka",
      image:
        "https://images.timesnownews.com/thumb/msid-96494386,thumbsize-76418,width-400,height-225,resizemode-75/96494386.jpg?quality=20",
      description:
        "A UNESCO World Heritage Site, this ancient city offers remarkable ruins of the Vijayanagara Empire with stunning temples and landscapes.",
      location: "Hampi, Karnataka",
      bestTime: "November to February",
      views: "100,000+",
      likes: "100,000+",
      link: "hampi-ruins-guide",
    },
    {
      id: 5,
      name: "Khajuraho Temples, Madhya Pradesh",
      image:
        "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Khajuraho_600.jpg",
      description:
        "Famous for its exquisite erotic sculptures and architectural excellence, representing medieval Indian art and culture.",
      location: "Khajuraho, Madhya Pradesh",
      bestTime: "October to March",
      views: "100,000+",
      likes: "100,000+",
      link: "khajuraho-temples-guide",
    },
    {
      id: 6,
      name: "Vaishno Devi Shrine, Jammu & Kashmir",
      image:
        "https://www.newsonair.gov.in/wp-content/uploads/2025/05/cats-403.jpg",
      description:
        "A highly revered Hindu pilgrimage site located in the Trikuta Mountains. The trek to the shrine is an experience in itself.",
      location: "Katra, Jammu & Kashmir",
      bestTime: "April to November",
      views: "100,000+",
      likes: "100,000+",
      link: "vaishno-devi-guide",
    },
    // Foreign places...
    {
      title: "Maui Guide - 4 days in Hawaii",
      description:
        "Maui is our FAVORITE place, we've visited every year since 2013! Since we live in Los Angeles, we take a long weekend and get 4 full days in paradise...",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/yitfaNaah1Cxyrnht6TDK7dxn2U1EtMW",
      author: "Kathleen Sheets Cregg",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/Vlp9auuKUEkRrlRR",
      likes: 144,
      views: 32305,
      link: "maui-guide",
    },
    {
      title: "New York City Food Guide",
      description:
        "This is my personal list of NYC restaurants that I like, so I decided to make it public. I regularly add and update...",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/t6MAZM6HfsSws1oz5YEAaOTDsE1rbHKs",
      author: "Marcus Glyptis",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/1PXdq8f3PzrjRcyU",
      likes: 10,
      views: 797,
      link: "nyc-food",
    },
    {
      title: "Dar es Salaam Guide",
      description:
        "Visited Dar es Salaam in 2020, 2022, and 2024. Solo travel exploring different sides of the city.",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/Fh1HNpnXOjsv6bUK8NFe5zuQczp4CSpv",
      author: "Biola oladeji",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/zPdga9pqGIpFtDuF",
      likes: 0,
      views: 11,
      link: "dar-es-salaam",
    },
    {
      title: "Lisbon - Alfama Vintage Market",
      description:
        "This is an itinerary for the Saturday and Tuesday vintage market. Best of Alfama combined!",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/pq7gPYEYR2ngeYzpk5V7YTmA6V6tWJfT",
      author: "lisboaporfavor.com",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/7kUqrJy87yyO2GDg",
      likes: 4,
      views: 641,
      link: "lisbon-market",
    },
    {
      title: "Taipei 6 Days Guide",
      description:
        "Visited Taiwan from 13-18 May 2025. Singaporean. Short trips only! Would visit Taichung if longer.",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/s5R4r8D5VwxijbmzF0Xm5ELy2ZVZnC80",
      author: "Mehendhar",
      authorImage:
        "https://avatars.githubusercontent.com/u/193203271?v=4&size=64",
      likes: 0,
      views: 7,
      link: "taipei-guide",
    },
    {
      title: "Regina's London Guide",
      description:
        "Been to London 10+ times since 2022. Now living in London as of June 2025!",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/pK2eQJGiZbhZLwxcQg4quHRSLrDI5IRG",
      author: "Regina Scott",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/qoEAE5ULGAiIRS6C",
      likes: 0,
      views: 17,
      link: "london-guide",
    },
    {
      title: "Belgium Guide (2025)",
      description: "Traveling to Belgium in Summer 2025.",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/2xQ5yR7Bs9doqYZPKPrkvN2KVpln6Wns",
      author: "Deanna Metz",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/yvGfHj2oWvXF4I0m",
      likes: 1,
      views: 46,
      link: "belgium-guide",
    },
    {
      title: "Itinéraire 6 jours en Martinique",
      description:
        "Moi c’est Léa, Travel Planner experte de la Martinique. Voyages 100 % personnalisés avec conseils d’une vraie locale.",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/5dDCJlIelMCkm0WSPJ07xhUXhkOeIDM8",
      author: "Madinina Travel",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/ljWgeXyJgNJIecvl",
      likes: 1,
      views: 10,
      link: "martinique-6-days",
    },
    {
      title: "Itinéraire 13 jours en Martinique",
      description:
        "Moi c’est Léa, Travel Planner experte de la Martinique. 13 jours d’exploration avec des souvenirs inoubliables.",
      image:
        "https://itin-dev.wanderlogstatic.com/freeImageSmall/fk6kjrH9KLd0ea5oaNDYIzEgRdpXbcl2",
      author: "Madinina Travel",
      authorImage:
        "https://itin-dev.wanderlogstatic.com/profilePicture/ljWgeXyJgNJIecvl",
      likes: 1,
      views: 10,
      link: "martinique-13-days",
    },
  ];

  const filteredGuides = filterGuidesBySearchTerm(guides, searchTerm);

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-1 p-5">Explore travel guides and itineraries</h2>
      <input
        type="text"
        className="form-control mx-auto mb-3"
        style={{ maxWidth: "400px" }}
        placeholder="Search guides..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div
        className="scrollable-container"
        style={{ maxHeight: "vh", overflowY: "auto", paddingRight: "8px" }}
      >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-5">
          {filteredGuides.map((guide, index) => (
            <div className="col" key={index}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.classList.add("shadow-lg");
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.classList.remove("shadow-lg");
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  role="button"
                  onClick={() => {
                    if (guide.link) navigate(`/${guide.link}`);
                  }}
                >
                  <img
                    src={guide.image}
                    className="card-img-top"
                    alt={guide.name || guide.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{guide.name || guide.title}</h5>
                  <p className="card-text">{guide.description}</p>
                </div>
                {!guide.name && (
                  <div className="card-footer bg-white d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        src={guide.authorImage}
                        className="rounded-circle me-2"
                        alt={guide.author}
                        width="32"
                        height="32"
                      />
                      <small className="text-muted">{guide.author}</small>
                    </div>
                    <div className="text-muted small">
                      ❤️ {guide.likes} • 👁️ {guide.views}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelGuides;
