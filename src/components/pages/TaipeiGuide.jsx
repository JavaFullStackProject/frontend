import React from "react";

const sectionStyle = {
  background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)",
  borderRadius: "1.5rem",
  padding: "2.5rem 2rem",
  marginBottom: "2.5rem",
  boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const TaipeiGuide = () => {
  return (
    <div className="container my-5 px-2 px-md-4">
      <div
        className="text-center mb-5 py-5"
        style={{
          background: "linear-gradient(120deg, #f3e8ff 0%, #e0e7ef 100%)",
          borderRadius: "2rem",
          color: "#312e81",
          boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
        }}
      >
        <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
          Taipei Travel Guide
        </h1>
        <span className="badge bg-primary text-light fs-5 mb-3 px-4 py-2 shadow">Taipei, Taiwan</span>
        <p className="lead text-dark mb-4" style={{ fontSize: "1.3rem" }}>
          Discover the vibrant capital of Taiwan—where tradition meets modernity, and night markets buzz with flavor.<br />
          <span className="fw-semibold">From iconic skyscrapers to street food adventures, Taipei has it all!</span>
        </p>
        <img
          src="https://itin-dev.wanderlogstatic.com/freeImageSmall/s5R4r8D5VwxijbmzF0Xm5ELy2ZVZnC80"
          alt="Taipei"
          className="img-fluid rounded shadow-lg my-4"
          style={{ maxHeight: 400, objectFit: "cover", border: "6px solid #fff" }}
        />
      </div>

      {/* Top Attractions */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Top Attractions</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Taipei_101_from_the_air.jpg" alt="Taipei 101" className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold">Taipei 101</h5>
                <p className="card-text">Once the world’s tallest building, this iconic skyscraper offers breathtaking city views from its observatory.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/National_Palace_Museum_Taipei.jpg" alt="National Palace Museum" className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold">National Palace Museum</h5>
                <p className="card-text">Home to one of the world’s largest collections of Chinese imperial artifacts and artworks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Chiang_Kai-shek_Memorial_Hall_Taipei.jpg" alt="Chiang Kai-shek Memorial Hall" className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold">Chiang Kai-shek Memorial Hall</h5>
                <p className="card-text">A grand monument surrounded by beautiful gardens, dedicated to Taiwan’s former president.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-2">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Shilin_Night_Market_Taipei.jpg" alt="Shilin Night Market" className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold">Shilin Night Market</h5>
                <p className="card-text">Taipei’s largest and most famous night market—perfect for street food, shopping, and local culture.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Elephant_Mountain_Taipei.jpg" alt="Elephant Mountain" className="card-img-top" />
              <div className="card-body">
                <h5 className="fw-semibold">Elephant Mountain</h5>
                <p className="card-text">A short hike rewards you with panoramic views of Taipei’s skyline—especially stunning at sunset.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0e7ef 0%, #f3e8ff 100%)" }}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>Travel Tips</h2>
        <ul style={{ fontSize: "1.08rem" }}>
          <li>Get an <strong>EasyCard</strong> for convenient travel on the MRT and buses.</li>
          <li>Public transportation is clean, safe, and efficient.</li>
          <li>Many attractions are accessible by metro—plan your route ahead.</li>
          <li>English signage is common, but learning a few Mandarin phrases is helpful.</li>
          <li>Tap water is safe to drink, but bottled water is widely available.</li>
        </ul>
      </section>

      {/* Must-Try Foods */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>Must-Try Foods</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Taiwan_beef_noodle_soup.jpg" alt="Beef Noodle Soup" className="img-fluid rounded shadow mb-2" />
            <h5 className="fw-semibold">Beef Noodle Soup</h5>
            <p>Rich, savory broth with tender beef and chewy noodles—a Taiwanese classic.</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Xiaolongbao_Taipei.jpg" alt="Dumplings" className="img-fluid rounded shadow mb-2" />
            <h5 className="fw-semibold">Dumplings (Xiaolongbao)</h5>
            <p>Steamed soup dumplings bursting with flavor—don’t miss Din Tai Fung!</p>
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Bubble_Tea_Taiwan.jpg" alt="Bubble Tea" className="img-fluid rounded shadow mb-2" />
            <h5 className="fw-semibold">Bubble Tea</h5>
            <p>Taiwan’s most famous drink—sweet tea with chewy tapioca pearls, available everywhere.</p>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0e7ef 100%)" }}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>Best Time to Visit</h2>
        <p style={{ fontSize: "1.15rem" }}>
          The best time to visit Taipei is during the fall (September to November) when the weather is mild and pleasant. Spring (March to May) is also a great time for festivals and cherry blossoms.
        </p>
      </section>

      {/* Useful Links */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>Useful Links</h2>
        <ul style={{ fontSize: "1.08rem" }}>
          <li>
            <a href="https://www.travel.taipei/en" target="_blank" rel="noopener noreferrer">
              Taipei Official Travel Guide
            </a>
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Taipei" target="_blank" rel="noopener noreferrer">
              Wikipedia: Taipei
            </a>
          </li>
          <li>
            <a href="https://guidetotaipei.com/" target="_blank" rel="noopener noreferrer">
              Guide to Taipei.com
            </a>
          </li>
        </ul>
      </section>

      
    </div>
  );
};

export default TaipeiGuide;