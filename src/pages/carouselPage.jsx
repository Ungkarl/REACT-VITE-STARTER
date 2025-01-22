import { useState } from "react";
import styles from "./Carousel.module.css";


const Carousel = () => {
    const items = [
        { id: 1, text: "Præcisions Landbrug" },
        { id: 2, text: "Nummer 2" },
        { id: 3, text: "Nummer 3" },
        { id: 4, text: "Nummer 4" },
        { id: 5, text: "Nummer 5" },
      ];

      const [activeIndex, setActiveIndex] = useState(0); // Holder styr på den aktive cirkel
      const [animating, setAnimating] = useState(false);
    
      const handleNext = () => {
        if (animating) return;
    
        setAnimating(true);
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
          setAnimating(false);
        }, 300); // Matcher CSS-animationens varighed
      };
    
      const handlePrev = () => {
        if (animating) return;
    
        setAnimating(true);
        setTimeout(() => {
          setActiveIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
          );
          setAnimating(false);
        }, 300); // Matcher CSS-animationens varighed
      };
    
      // Dynamisk beregning af positioner for hvert element
      const getPosition = (index) => {
        const total = items.length;
        const relativeIndex = (index - activeIndex + total) % total;
    
        if (relativeIndex === 0) return "center"; // Aktiv cirkel
        if (relativeIndex === 1) return "right"; // Næste cirkel
        if (relativeIndex === total - 1) return "left"; // Forrige cirkel
        return "hidden"; // Alle andre cirkler
      };
    
      return (
        <div className={styles.carousel}>
          <div className={styles.circleContainer}>
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.circle} ${styles[getPosition(index)]} ${
                  animating ? styles.animating : ""
                }`}
              >
                {item.text}
              </div>
            ))}
          </div>
          <button onClick={handlePrev} className={styles.navButton}>
            &lt;
          </button>
          <button onClick={handleNext} className={styles.navButton}>
            &gt;
          </button>
        </div>
      );
    };
    
    export default Carousel;