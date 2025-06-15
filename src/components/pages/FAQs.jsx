import React, { useState, useRef } from 'react';

const faqs = [
    {
        question: "What is Travel Planner?",
        answer: "Travel Planner is an intelligent trip planning platform that generates personalized travel recommendations based on your preferences, budget, and travel history. Our AI-powered system analyzes millions of data points to create optimized itineraries that match your unique travel style.",
        extended: [
            "Customizable itineraries for any type of traveler",
            "Real-time pricing and availability updates",
            "Collaborative planning tools for group trips"
        ]
    },
    {
        question: "Is Travel Planner free to use?",
        answer:
            "Yes, Travel Planner is currently a free planning tool. The trip planner is designed to offer high-quality service without any associated costs.",
    },
    {
        question: "Does Travel Planner support international travel?",
        answer:
            "Absolutely! Travel Planner supports over 15,000 destinations worldwide with comprehensive data for international travel including visa requirements, currency information, and local customs.",
    }, {
        question: "Do I need to create an account to use Travel Planner?",
        answer:
            "No, you can plan a trip without creating an account. However, creating one lets you save and access your itineraries anytime.",
    },
    {
        question: "Can I book flights and hotels through Travel Planner?",
        answer:
            "Currently, Travel Planner provides suggestions for flights and hotels, but the actual booking is redirected to third-party platforms.",
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const answerRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const cardStyle = {
        borderRadius: '1.25rem',
        background: 'rgba(255,255,255,0.97)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: '2rem',
        marginTop: '2rem'
    };

    const questionStyle = {
        fontWeight: 600,
        fontSize: '1.1rem',
        color: '#18181b',
        background: '#f3f4f6',
        border: 'none',
        borderRadius: '0.75rem',
        width: '100%',
        textAlign: 'left',
        padding: '1rem 1.5rem',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background 0.2s'
    };

    const questionActiveStyle = {
        ...questionStyle,
        background: '#e0e7ff',
        color: '#2563eb'
    };

    const answerStyle = {
        background: '#f8fafc',
        borderRadius: '0.75rem',
        padding: '1rem 1.5rem',
        marginBottom: '1rem',
        marginTop: '-0.5rem',
        color: '#374151',
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
    };

    return (
        <div
            className="min-vh-1 d-flex flex-column"
            style={{
                background: 'linear-gradient(120deg, #f3f4f6 0%,rgb(255, 255, 255) 100%)'
            }}
        >
            <main className="container flex-grow-1 py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div style={cardStyle}>
                            <h2 className="fw-bold mb-4 text-center" style={{ color: '#2563eb' }}>Frequently Asked Questions</h2>
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <button
                                        style={activeIndex === index ? questionActiveStyle : questionStyle}
                                        onClick={() => toggle(index)}
                                        aria-expanded={activeIndex === index}
                                        aria-controls={`faq-answer-${index}`}
                                        id={`faq-question-${index}`}
                                    >
                                        {faq.question}
                                        <span style={{
                                            fontSize: '1.5rem',
                                            marginLeft: '1rem',
                                            color: activeIndex === index ? '#2563eb' : '#64748b',
                                            transition: 'color 0.2s'
                                        }}>
                                            {activeIndex === index ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                        ref={el => answerRefs.current[index] = el}
                                        style={{
                                            maxHeight: activeIndex === index
                                                ? answerRefs.current[index]?.scrollHeight + "px"
                                                : "0",
                                            opacity: activeIndex === index ? 1 : 0,
                                            overflow: 'hidden',
                                            transition: 'all 0.4s cubic-bezier(.4,0,.2,1)',
                                            marginBottom: activeIndex === index ? '1rem' : '0'
                                        }}
                                    >
                                        <div style={answerStyle}>
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FAQ;