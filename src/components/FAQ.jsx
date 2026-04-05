"use client";

import React, { useState, createContext, useContext } from "react";
import styles from "./FAQ.module.css";
import { HiChevronDown } from "react-icons/hi";

// --- Animate UI Headless Accordion Implementation ---
const AccordionContext = createContext();
const AccordionGroupContext = createContext();

export const Accordion = ({ children, className }) => {
  const [activeValue, setActiveValue] = useState(null);
  
  return (
    <AccordionGroupContext.Provider value={{ activeValue, setActiveValue }}>
      <div className={`${styles.faqList} ${className || ''}`}>
        {children}
      </div>
    </AccordionGroupContext.Provider>
  );
};

export const AccordionItem = ({ children, value }) => {
  const defaultId = React.useId();
  const itemValue = value ?? defaultId;
  const { activeValue, setActiveValue } = useContext(AccordionGroupContext);
  
  const isOpen = activeValue === itemValue;
  
  const toggle = () => {
    setActiveValue(isOpen ? null : itemValue);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen: toggle }}>
      <div className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionButton = ({ children, showArrow = true }) => {
  const { isOpen, setIsOpen } = useContext(AccordionContext);
  return (
    <button 
      className={styles.questionButton} 
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      <h4 className={styles.questionText}>{children}</h4>
      {showArrow && (
        <HiChevronDown 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} 
        />
      )}
    </button>
  );
};

export const AccordionPanel = ({ children, keepRendered = false }) => {
  const { isOpen } = useContext(AccordionContext);
  return (
    <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
      <div className={styles.answerInner}>
        <p>{children}</p>
      </div>
    </div>
  );
};


// --- User Provided Data & Demo Component ---
const ITEMS = [
  {
    title: 'What is Animate UI?',
    content: 'Animate UI is an open-source distribution of React components built with TypeScript, Tailwind CSS, and Motion.',
  },
  {
    title: 'How is it different from other libraries?',
    content: 'Instead of installing via NPM, you copy and paste the components directly. This gives you full control to modify or customize them as needed.',
  },
  {
    title: 'Is Animate UI free to use?',
    content: 'Absolutely! Animate UI is fully open-source. You can use, modify, and adapt it to fit your needs.',
  },
];

export const HeadlessAccordionDemo = ({
  keepRendered = false,
  showArrow = true,
}) => {
  return (
    <Accordion className="max-w-[400px] w-full">
      {ITEMS.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionButton showArrow={showArrow}>{item.title}</AccordionButton>
          <AccordionPanel keepRendered={keepRendered}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};


// --- Main FAQ Component ---
const faqData = [
  {
    id: 1,
    question: "Why is a strong brand identity important?",
    answer: "A robust brand identity and website serve as the face of your business, shaping how it is perceived by potential customers. They not only convey professionalism but also establish trust and credibility, vital factors in today's competitive market."
  },
  {
    id: 2,
    question: "How long before I see results?",
    answer: "The timeline for seeing results can vary based on your specific industry, strategy, and goals. Generally, you can expect to see initial engagement within the first few weeks, with more significant, sustainable growth appearing over several months of consistent implementation."
  },
  {
    id: 3,
    question: "Can I cancel anytime?",
    answer: "Yes, we believe in providing flexible options for our clients. Depending on your chosen plan, you can cancel your subscription or service at any time. We also offer a clear transition period to ensure all your data and assets are handled properly during the process."
  },
  {
    id: 4,
    question: "Do you work with international clients?",
    answer: "Absolutely! We pride prides ourselves on being a global-first agency or platform. We've worked with diverse clients across multiple continents and are well-equipped to handle different time zones, cultural nuances, and international payment methods seamlessly."
  },
  {
    id: 5,
    question: "What industries do you specialize in?",
    answer: "Our expertise spans across several high-growth sectors including technology startups, e-commerce, fintech, and professional services. However, our core methodology is adaptable, and we've successfully helped brand and grow businesses in dozens of different niche industries."
  }
];

export default function FAQ() {
  return (
    <div className={styles.faqContainer}>
      <header className={styles.header}>
        <h3 className={styles.title}>Questions?</h3>
        <h2 className={styles.subtitle}>We're here to assist!</h2>
      </header>

      {/* Using the new Animate UI patterned Accordion for original data */}
      <Accordion>
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionButton showArrow={true}>{faq.question}</AccordionButton>
            <AccordionPanel keepRendered={true}>
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Optionally, you can also render HeadlessAccordionDemo() here if needed, 
          but usually users just want the pattern applied. */}
    </div>
  );
}
