import React from "react";

// Custom styles for gradient backgrounds and cards
const sectionStyle = {
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  borderRadius: "1.5rem",
  padding: "2.5rem 2rem",
  marginBottom: "2.5rem",
  boxShadow: "0 4px 24px rgba(80,80,120,0.08)",
};

const cardStyle = {
  borderRadius: "1rem",
  overflow: "hidden",
  boxShadow: "0 2px 16px rgba(80,80,120,0.10)",
  border: "none",
};

const HampiRuinsGuide = () => {
  return (
    <div className="container my-5 px-2 px-md-4">
      <div
        className="text-center mb-5 py-5"
        style={{
          background: "linear-gradient(120deg,rgb(245, 231, 197) 0%,rgb(204, 198, 192) 100%)",
          borderRadius: "2rem",
          color: "#2d2d2d",
          boxShadow: "0 6px 32px rgba(80,80,120,0.10)",
        }}
      >
        <h1 className="display-3 fw-bold mb-3" style={{ letterSpacing: "2px" }}>
          Hampi Ruins Guide
        </h1>
        <p className="lead text-dark mb-4" style={{ fontSize: "1.4rem" }}>
          Discover the timeless beauty, history, and wonders of Hampi, the jewel of Karnataka.<br />
          <span className="fw-semibold">A UNESCO World Heritage Site</span>
        </p>
        <img
          src="https://images.timesnownews.com/thumb/msid-96494386,thumbsize-76418,width-900,height-400,resizemode-75/96494386.jpg?quality=80"
          alt="Hampi Ruins"
          className="img-fluid rounded shadow-lg my-4"
          style={{ maxHeight: "400px", objectFit: "cover", border: "6px solid #fff" }}
        />
      </div>

      {/* Historical Context */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#b45309" }}>
          Historical Context
        </h2>
        <p style={{ fontSize: "1.15rem" }}>
          Hampi, a <strong>UNESCO World Heritage Site</strong>, was the glorious capital of the Vijayanagara Empire in the 14th century.
          Once a thriving metropolis, Hampi was renowned for its architectural marvels, bustling bazaars, and vibrant culture.
          The city flourished as a center of trade, religion, and art until its fall in the 16th century. Today, its evocative ruins—sprawling across a surreal landscape of giant boulders—offer a glimpse into a bygone era of grandeur and innovation.
        </p>
        <ul className="mb-4" style={{ fontSize: "1.08rem" }}>
          <li><strong>Founded:</strong> 1336 CE by Harihara I and Bukka Raya I</li>
          <li><strong>Peak:</strong> 15th–16th centuries, one of the world’s largest cities</li>
          <li><strong>Decline:</strong> 1565 CE after the Battle of Talikota</li>
        </ul>
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-semibold">Legacy</h5>
            <p>
              Hampi was famed for its advanced urban planning, water management, and cosmopolitan society. The city attracted traders from Persia, Portugal, and beyond, and its temples and monuments remain a testament to its golden age.
            </p>
          </div>
          <div className="col-md-6">
            <h5 className="fw-semibold">UNESCO Recognition</h5>
            <p>
              In 1986, Hampi was inscribed as a World Heritage Site for its outstanding universal value, representing the zenith of South Indian architecture and culture.
            </p>
          </div>
        </div>
      </section>

      {/* Key Attractions */}
      <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #fef6e4 0%, #f3e8ff 100%)" }}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#7c3aed" }}>
          Key Attractions
        </h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Virupaksha_Temple%2C_Hampi.jpg" className="card-img-top" alt="Virupaksha Temple" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Virupaksha Temple</h5>
                <p className="card-text">
                  The oldest functioning temple in India, dedicated to Lord Shiva. Its towering gopuram and intricate carvings are a testament to Dravidian architecture.
                </p>
                <ul>
                  <li>Annual chariot festival in February</li>
                  <li>Stunning riverside location</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Vittala_Temple%2C_Hampi.jpg" className="card-img-top" alt="Vijaya Vittala Temple" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Vijaya Vittala Temple</h5>
                <p className="card-text">
                  Famous for its iconic stone chariot and musical pillars, this temple complex is an architectural masterpiece and a must-visit in Hampi.
                </p>
                <ul>
                  <li>Stone Chariot: Symbol of Karnataka</li>
                  <li>Musical Pillars: Emit musical notes when tapped</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Lotus_Mahal_Hampi.jpg" className="card-img-top" alt="Lotus Mahal" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Lotus Mahal</h5>
                <p className="card-text">
                  An elegant palace with a unique blend of Hindu and Islamic styles, known for its lotus-shaped arches and cooling system.
                </p>
                <ul>
                  <li>Royal Zenana enclosure</li>
                  <li>Beautifully landscaped gardens</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Elephant_Stables%2C_Hampi.jpg" className="card-img-top" alt="Elephant Stables" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Elephant Stables</h5>
                <p className="card-text">
                  A grand structure with domed chambers that once housed the royal elephants, showcasing Indo-Islamic architecture.
                </p>
                <ul>
                  <li>11 interconnected domes</li>
                  <li>Picturesque lawns</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Hampi_Bazaar.jpg" className="card-img-top" alt="Hampi Bazaar" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Hampi Bazaar</h5>
                <p className="card-text">
                  Once a bustling market street, now lined with ruins, shops, and cafes. Perfect for soaking in the local vibe and picking up souvenirs.
                </p>
                <ul>
                  <li>Street food & handicrafts</li>
                  <li>View of Virupaksha Temple</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card h-100" style={cardStyle}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Matanga_Hill_Hampi.jpg" className="card-img-top" alt="Matanga Hill" />
              <div className="card-body">
                <h5 className="card-title fw-semibold">Matanga Hill</h5>
                <p className="card-text">
                  The highest point in Hampi, offering panoramic views of the ruins and the Tungabhadra River. A must for sunrise and sunset lovers.
                </p>
                <ul>
                  <li>Popular trekking spot</li>
                  <li>360° views of Hampi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Things to Do */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#059669" }}>
          Things to Do in Hampi
        </h2>
        <div className="row">
          <div className="col-md-7">
            <ul style={{ fontSize: "1.08rem" }}>
              <li>Take a <strong>guided heritage walk</strong> to uncover hidden stories of the ruins.</li>
              <li>Climb <strong>Matanga Hill</strong> for a breathtaking sunrise or sunset view.</li>
              <li>Explore the <strong>ancient bazaar streets</strong> and local handicraft shops.</li>
              <li>Enjoy <strong>coracle rides</strong> on the Tungabhadra River.</li>
              <li>Attend the <strong>Hampi Utsav</strong>, a vibrant cultural festival (usually in November).</li>
              <li>Try <strong>rock climbing</strong> and bouldering on Hampi’s famous granite rocks.</li>
              <li>Visit <strong>local cafes</strong> for South Indian cuisine and global flavors.</li>
              <li>Photography: Capture the surreal landscapes and golden hour magic.</li>
            </ul>
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <img
              src="https://www.karnataka.com/wp-content/uploads/2010/06/hampi-utsav.jpg"
              alt="Hampi Utsav"
              className="img-fluid rounded shadow"
              style={{ border: "4px solid #fff" }}
            />
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #e0f2fe 0%, #f1f5f9 100%)" }}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#0ea5e9" }}>
          Visitor Information
        </h2>
        <div className="row">
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">Best Time to Visit</h5>
            <p>
              <strong>November to February</strong> is ideal, with pleasant weather for sightseeing and outdoor activities. Summers can be extremely hot, while monsoons bring lush greenery but may hamper exploration.
            </p>
            <h5 className="fw-semibold">Getting There</h5>
            <ul>
              <li><strong>By Air:</strong> Nearest airport is Hubli (160 km), Bengaluru (350 km)</li>
              <li><strong>By Train:</strong> Hospet Junction (13 km from Hampi)</li>
              <li><strong>By Road:</strong> Well-connected by buses and taxis from major cities</li>
              <li><strong>By Bike:</strong> Popular among backpackers for scenic rides</li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5 className="fw-semibold">Tips for Visitors</h5>
            <ul>
              <li>Wear comfortable shoes and carry water—exploring involves a lot of walking.</li>
              <li>Respect local customs and dress modestly, especially in temple areas.</li>
              <li>Hire a certified guide for a richer experience.</li>
              <li>Carry cash, as digital payments may not be accepted everywhere.</li>
              <li>Protect yourself from the sun—carry hats, sunglasses, and sunscreen.</li>
              <li>Start early to avoid crowds and heat.</li>
              <li>Beware of monkeys near temples—keep food and valuables secure.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Food & Stay */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#d97706" }}>
          Food & Accommodation
        </h2>
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-semibold">Where to Eat</h5>
            <ul>
              <li><strong>Mango Tree Restaurant:</strong> Iconic riverside eatery with Indian and continental fare.</li>
              <li><strong>Laughing Buddha Café:</strong> Relaxed vibe, global menu, and river views.</li>
              <li><strong>Gouthami Guest House Café:</strong> Great for breakfast and fresh juices.</li>
              <li>Try local delicacies like <em>Ragi Mudde</em> and <em>Bisi Bele Bath</em>.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="fw-semibold">Where to Stay</h5>
            <ul>
              <li><strong>Budget:</strong> Hostels and guesthouses in Hampi Bazaar and Virupapur Gadde.</li>
              <li><strong>Mid-range:</strong> Heritage resorts and boutique hotels in Hospet.</li>
              <li><strong>Luxury:</strong> Evolve Back Kamalapura Palace, Hyatt Place Hampi.</li>
              <li>Book in advance during festival season.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section style={{ ...sectionStyle, background: "linear-gradient(135deg, #f3e8ff 0%, #e0f2fe 100%)" }}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#a21caf" }}>
          Nearby Attractions
        </h2>
        <ul style={{ fontSize: "1.08rem" }}>
          <li>
            <strong>Anegundi:</strong> An ancient village across the river, believed to be the mythical Kishkindha from the Ramayana. Explore its forts, caves, and paddy fields.
          </li>
          <li>
            <strong>Daroji Bear Sanctuary:</strong> Home to the Indian sloth bear, located about 15 km from Hampi. Best visited in the evening.
          </li>
          <li>
            <strong>Badami, Pattadakal & Aihole:</strong> Famous for their Chalukyan temples and rock-cut caves, a day trip away.
          </li>
          <li>
            <strong>Tungabhadra Dam:</strong> Scenic spot for picnics and sunset views, near Hospet.
          </li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section style={sectionStyle}>
        <h2 className="fw-bold border-bottom pb-2 mb-4" style={{ color: "#2563eb" }}>
          Frequently Asked Questions
        </h2>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq1">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                Is Hampi safe for solo travelers and women?
              </button>
            </h2>
            <div id="collapse1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, Hampi is generally safe for solo travelers and women. Exercise standard precautions, avoid isolated areas after dark, and respect local customs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                How many days are enough to explore Hampi?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Ideally, 2–3 days are sufficient to explore the main ruins, temples, and nearby attractions at a relaxed pace.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                Are guides available at Hampi?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, certified guides are available at the main entrance points. Hiring a guide is highly recommended for a deeper understanding of the history and legends.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-muted mt-5">
        <hr />
        <small>
          &copy; {new Date().getFullYear()} Hampi Ruins Guide. All rights reserved.
        </small>
      </footer>
    </div>
  );
};

export default HampiRuinsGuide;