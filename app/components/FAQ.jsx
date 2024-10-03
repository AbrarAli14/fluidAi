"use client";

import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        "Does Fluid AI increase wellbeing and meaning in life?",
        "What can curiosity, wonder, and awe do for you?",
        "Does Fluid AI increase wellbeing and meaning in life?",
        "What can curiosity, wonder, and awe do for you?",
        "Does Fluid AI increase wellbeing and meaning in life?",
        "What can curiosity, wonder, and awe do for you?",
    ];

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqText}>
                <h1>What can curiosity, wonder, and awe do for you?</h1>
                <p>
                    Research shows that experiencing curiosity and awe can immensely benefit
                    our mental, physical, and professional health. Here’s a brief overview of
                    what curiosity and awe can do for you.
                </p>
            </div>

            <div className={styles.faqList}>
                {faqData.map((question, index) => (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.faqQuestion}>
                            {question}
                            <span className={styles.faqIcon}>
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className={styles.faqAnswer}>
                                <p>Here’s the answer to this question. It will reveal when clicked.</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
