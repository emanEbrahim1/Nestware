
import Home from "./imports/Home";
import "./styles/interactions.css";
import { useEffect } from 'react';

export default function App() {
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: "0px 0px -100px 0px"
        };

        const animatedSections = new Set();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !entry.target.classList.contains("animate-in")) {
                    const element = entry.target as HTMLElement;

                    if (element.hasAttribute('data-section-heading')) {
                        const sectionId = element.getAttribute('data-section-heading');

                        if (!animatedSections.has(sectionId)) {
                            animatedSections.add(sectionId);
                            element.classList.add("animate-in");

                            if (sectionId === 'vision-mission') {
                                const visionMissionSection = element.closest('[data-section="vision-mission"]');
                                if (visionMissionSection) {
                                    const helpers = visionMissionSection.querySelectorAll('[class*="Helper"]');
                                    helpers.forEach((helper, index) => {
                                        setTimeout(() => {
                                            helper.classList.add("animate-in");
                                        }, (index + 1) * 400);
                                    });
                                }
                            } else if (sectionId === 'design-build-grow') {
                                setTimeout(() => {
                                    const cards = document.querySelectorAll('[data-name="Background+Border+Shadow"]');
                                    let cardIndex = 0;
                                    cards.forEach((card) => {
                                        const cardText = card.textContent;
                                        if (cardText?.includes('Discover') || cardText?.includes('Build') || cardText?.includes('Grow')) {
                                            setTimeout(() => {
                                                card.classList.add("animate-in");
                                            }, cardIndex * 300);
                                            cardIndex++;
                                        }
                                    });
                                }, 300);
                            } else if (sectionId === 'testimonials') {
                                setTimeout(() => {
                                    const testimonialsSection = element.closest('[data-section="testimonials"]');
                                    if (testimonialsSection) {
                                        const cards = testimonialsSection.querySelectorAll('.carousel-slide');
                                        cards.forEach((card, index) => {
                                            setTimeout(() => {
                                                card.classList.add("animate-in");
                                            }, index * 300);
                                        });
                                    }
                                }, 300);
                            }
                        }
                    } else {
                        entry.target.classList.add("animate-in");
                    }
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const headings = document.querySelectorAll('[data-section-heading]');
            headings.forEach((heading) => observer.observe(heading));

            const sections = document.querySelectorAll(
                '[data-name="Background+Border+Shadow"], [data-name="Frame"]'
            );
            sections.forEach((section) => observer.observe(section));
        }, 100);

        document.documentElement.style.scrollBehavior = "smooth";

        // Add cursor pointer to interactive elements
        const addCursorPointer = () => {
            const buttons = document.querySelectorAll('.inline-grid.place-items-start, button');
            const navItems = document.querySelectorAll('[data-name="Container"] p');

            buttons.forEach(btn => {
                if (btn instanceof HTMLElement) {
                    btn.style.cursor = 'pointer';
                }
            });

            navItems.forEach(item => {
                if (item instanceof HTMLElement && item.textContent?.match(/About|Services|Vision|Process|Testimonials/)) {
                    item.style.cursor = 'pointer';
                }
            });
        };

        setTimeout(addCursorPointer, 100);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="app-wrapper">
            <Home />
        </div>
    );
}