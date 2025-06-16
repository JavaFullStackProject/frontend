import React from "react";
import { FaShieldAlt, FaUserSecret, FaSyncAlt, FaLock, FaGlobe, FaUserShield } from "react-icons/fa";
import { MdSecurity, MdDataUsage, MdCookie } from "react-icons/md";

const PrivacyPolicy = () => (
    <div className="container py-5" style={{ maxWidth: 1000 }}>
        <div
            className="p-4 p-md-5 shadow-lg rounded-4 bg-white"
            style={{
                background: "linear-gradient(100deg, #f9fafb 50%, #e0e7ff 100%)",
                border: "2px solid #e0e7ff",
            }}
        >
            {/* Header with Icon */}
            <div className="text-center mb-5">
                <div className="d-flex justify-content-center align-items-center mb-3">
                    <FaShieldAlt size={40} className="text-primary me-3" />
                    <FaUserSecret size={35} className="text-primary me-3" />
                    <FaLock size={40} className="text-primary" />
                </div>
                <h2 className="fw-bold text-primary">Privacy Policy</h2>
            </div>
            {/* Introductory Paragraph */}
            <p className="lead text-secondary text-center mb-5">
                At <span className="fw-semibold text-primary">TravelPlanner</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This comprehensive Privacy Policy explains our practices regarding the collection, use, disclosure, and protection of your information when you use our services.
            </p>

            {/* Section 1 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <MdDataUsage size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">1. Information We Collect</h5>
                </div>
                <p>We collect various types of information to provide and improve our services:</p>
                <ul>
                    <li><strong>Personal Identification Information:</strong> Full name, email address, phone number, date of birth, passport details (for travel bookings), and payment information.</li>
                    <li><strong>Travel Preferences:</strong> Seat preferences, meal choices, special assistance requirements, and frequent flyer numbers.</li>
                    <li><strong>Transaction Data:</strong> Booking history, payment details (processed through secure payment gateways), and billing addresses.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types, operating system, and platform.</li>
                    <li><strong>Usage Data:</strong> Information about how you use our website, products, and services including clickstream patterns, page interaction data, and feature usage.</li>
                    <li><strong>Location Data:</strong> We may collect your device's precise location if you enable location services to provide location-based recommendations.</li>
                    <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to enhance user experience, analyze trends, and track movements around our site.</li>
                </ul>
            </section>

            {/* Section 2 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <MdSecurity size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">2. How We Use Your Information</h5>
                </div>
                <p>Your information helps us provide personalized services and improve your experience:</p>
                <ul>
                    <li><strong>Service Delivery:</strong> Process bookings, send confirmations, manage your account, and provide customer support.</li>
                    <li><strong>Personalization:</strong> Tailor content, recommendations, and offers based on your preferences and travel history.</li>
                    <li><strong>Communication:</strong> Send booking confirmations, travel alerts, service updates, and marketing communications (with your consent).</li>
                    <li><strong>Analytics:</strong> Analyze usage patterns to improve our website, services, and marketing strategies.</li>
                    <li><strong>Security:</strong> Detect and prevent fraud, unauthorized activities, and security breaches.</li>
                    <li><strong>Legal Compliance:</strong> Meet regulatory requirements and respond to legal requests.</li>
                    <li><strong>Research & Development:</strong> Develop new features and improve existing services.</li>
                </ul>
            </section>

            {/* Section 3 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <FaGlobe size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">3. Data Sharing and Disclosure</h5>
                </div>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                    <li><strong>Travel Service Providers:</strong> Airlines, hotels, car rental companies, and other suppliers necessary to fulfill your bookings.</li>
                    <li><strong>Payment Processors:</strong> Secure third-party payment gateways to process transactions.</li>
                    <li><strong>Business Partners:</strong> Carefully selected partners offering complementary services, only with your explicit consent.</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to respond to legal process, protect our rights, or prevent harm.</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition.</li>
                    <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data with partners for market analysis.</li>
                </ul>
                <p className="mt-3"><strong>Important:</strong> We never sell your personal information to third parties for their marketing purposes.</p>
            </section>

            {/* New Section - International Data Transfers */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <FaGlobe size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">4. International Data Transfers</h5>
                </div>
                <p>As a global travel service, your information may be transferred to and processed in countries outside your residence:</p>
                <ul>
                    <li>We ensure all international transfers comply with applicable data protection laws.</li>
                    <li>For transfers outside the European Economic Area (EEA), we implement Standard Contractual Clauses or other approved mechanisms.</li>
                    <li>Service providers in other countries are contractually obligated to protect your data to the same standards as in your home country.</li>
                </ul>
            </section>

            {/* Section 4 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <MdCookie size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">5. Cookies and Tracking Technologies</h5>
                </div>
                <p>We use various technologies to enhance your experience:</p>
                <ul>
                    <li><strong>Essential Cookies:</strong> Necessary for core functionality like secure login and booking processes.</li>
                    <li><strong>Performance Cookies:</strong> Collect anonymous data about usage patterns to improve our site.</li>
                    <li><strong>Functionality Cookies:</strong> Remember your preferences and settings.</li>
                    <li><strong>Targeting Cookies:</strong> Used to deliver relevant advertising (with your consent).</li>
                    <li><strong>Third-Party Cookies:</strong> From analytics providers like Google Analytics to help us understand user behavior.</li>
                </ul>
                <p className="mt-3">
                    You can control cookies through your browser settings. However, disabling essential cookies may impact website functionality.
                </p>
            </section>

            {/* Section 5 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <FaSyncAlt size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">6. Data Retention</h5>
                </div>
                <p>We retain your personal data only as long as necessary:</p>
                <ul>
                    <li><strong>Active Accounts:</strong> For the duration of your account existence plus 3 years of inactivity.</li>
                    <li><strong>Booking Data:</strong> 7 years for financial and tax compliance purposes.</li>
                    <li><strong>Marketing Data:</strong> Until you unsubscribe or 3 years after last interaction.</li>
                    <li><strong>Legal Requirements:</strong> Some data may be retained longer if required by law.</li>
                </ul>
                <p className="mt-3">
                    After retention periods expire, we securely delete or anonymize your data.
                </p>
            </section>

            {/* Section 6 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <FaLock size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">7. Security Measures</h5>
                </div>
                <p>We implement robust security measures to protect your data:</p>
                <ul>
                    <li><strong>Encryption:</strong> Industry-standard TLS/SSL encryption for all data transmissions.</li>
                    <li><strong>Access Controls:</strong> Strict role-based access to personal data within our organization.</li>
                    <li><strong>Secure Storage:</strong> Data stored in secure facilities with physical and digital protections.</li>
                    <li><strong>Regular Audits:</strong> Comprehensive security assessments and penetration testing.</li>
                    <li><strong>Employee Training:</strong> Regular privacy and security training for all staff.</li>
                    <li><strong>Incident Response:</strong> Established procedures for potential data breaches.</li>
                </ul>
                <p className="mt-3">
                    While we implement these measures, no system is 100% secure. We encourage users to use strong passwords and protect their login credentials.
                </p>
            </section>

            {/* Section 7 - Expanded */}
            <section className="mb-5">
                <div className="d-flex align-items-center mb-3">
                    <FaUserShield size={24} className="text-primary me-2" />
                    <h5 className="fw-semibold text-primary mb-0">8. Your Rights and Choices</h5>
                </div>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                    <li><strong>Access:</strong> Request a copy of your personal data we hold.</li>
                    <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data under certain conditions.</li>
                    <li><strong>Restriction:</strong> Limit how we use your data in specific circumstances.</li>
                    <li><strong>Portability:</strong> Receive your data in a structured, commonly used format.</li>
                    <li><strong>Objection:</strong> Object to certain processing activities like direct marketing.</li>
                    <li><strong>Withdraw Consent:</strong> Where processing is based on consent.</li>
                    <li><strong>Lodge Complaints:</strong> With your local data protection authority.</li>
                </ul>
                <p className="mt-3">
                    To exercise these rights, please contact us at <a href="mailto:privacy@travelplanner.com" className="text-decoration-underline text-primary">privacy@travelplanner.com</a>.
                </p>
            </section>

            {/* New Section - Automated Decision Making */}
            <section className="mb-5">
                <h5 className="fw-semibold text-primary mb-2">9. Automated Decision Making</h5>
                <p>
                    We may use automated processes to personalize your experience, detect fraud, or recommend travel options. These decisions are based on algorithms analyzing your booking history, preferences, and behavior patterns. You have the right to request human intervention or challenge automated decisions.
                </p>
            </section>

            {/* Section 8 - Expanded */}
            <section className="mb-5">
                <h5 className="fw-semibold text-primary mb-2">10. User Responsibilities</h5>
                <p>While we protect your data, you also play a role in security:</p>
                <ul>
                    <li>Keep your account credentials confidential and use strong, unique passwords.</li>
                    <li>Log out after each session, especially on shared devices.</li>
                    <li>Be cautious of phishing attempts - we will never ask for passwords via email.</li>
                    <li>Update us promptly if your personal information changes.</li>
                    <li>Review your booking details carefully before submission.</li>
                </ul>
            </section>

            {/* Section 9 - Expanded */}
            <section className="mb-5">
                <h5 className="fw-semibold text-primary mb-2">11. Children's Privacy</h5>
                <p>
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children without parental consent. If we discover we've collected data from a child without proper consent, we will delete it immediately. Parents or guardians can contact us to review, delete, or restrict processing of their child's information.
                </p>
            </section>

            {/* New Section - Business Customers */}
            <section className="mb-5">
                <h5 className="fw-semibold text-primary mb-2">12. Business Customers</h5>
                <p>
                    If you use our services on behalf of a business, you confirm you have authority to bind that organization to our terms and that you've obtained necessary consents for any personal data you provide about others (employees, travelers, etc.). Business accounts may have additional privacy controls and administrator privileges.
                </p>
            </section>

            {/* Section 10 - Expanded */}
            <section className="mb-5">
                <h5 className="fw-semibold text-primary mb-2">13. Policy Updates</h5>
                <p>
                    We may update this policy periodically to reflect changes in our practices, technology, legal requirements, or services. Significant changes will be notified through our website, email, or other communication channels. We encourage regular review of this policy. Continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
                <p className="mt-3">
                    <strong>Version History:</strong> This policy replaces all previous versions. Archived versions are available upon request.
                </p>
            </section>



            {/* Closing Note */}
            <div className="mt-5 p-3 bg-light rounded-3">
                <p className="mb-0 text-center text-muted">
                    Thank you for taking the time to review our Privacy Policy. We're committed to protecting your personal information and being transparent about our practices. Safe travels!
                </p>
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;