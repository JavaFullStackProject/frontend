import React, { useState } from 'react';
import './FAQ.css'; // updated CSS below

const faqs = [
    {
        question: "What is Travel planner?",
        answer:
            "Travel Planner is a trip planner that generates personalized travel recommendations based on your preferences and budget.",
    },
    {
        question: "Is Travel Planner free to use?",
        answer:
            "Yes, travel Planner is currently a free planning tool. The trip planner is designed to offer high-quality service without any associated costs.",
    },
    {
        question: "Does Travel Planner support international travel?",
        answer:
            "Yes, Travel Planner supports both domestic and international destinations depending on availability and travel data.",
    },
    {
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

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                    <button
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggle(index)}
                    >
                        {faq.question}
                        <span className="arrow">{activeIndex === index ? '−' : '+'}</span>
                    </button>
                    <div
                        className="faq-answer"
                        style={{
                            maxHeight: activeIndex === index ? '200px' : '0',
                            opacity: activeIndex === index ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'all 0.4s ease',
                        }}
                    >
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default FAQ;