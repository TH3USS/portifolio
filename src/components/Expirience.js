import React, { useEffect, useState, useRef } from "react";
import CustomHook from "./CustomHook.js";
import { experiencias } from "../data/ExpiriencesData.js";

const Expirience = () => {
  const refTab = useRef(null);
  const divs = useRef([]);
  CustomHook(refTab, divs);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-highlight");
            entry.target.classList.remove("timeline-faded");
          } else {
            entry.target.classList.remove("timeline-highlight");
            entry.target.classList.add("timeline-faded");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((el) => {
      el.classList.add("timeline-faded");
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const sectionRef = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = section.offsetHeight;

      const scrollMiddle = window.scrollY + window.innerHeight / 2;
      const scrollProgress = (scrollMiddle - sectionTop) / sectionHeight;

      // Garante que o valor fique entre 0% e 100%
      const heightPercent = Math.min(Math.max(scrollProgress * 100, 0), 100);

      fill.style.height = `${heightPercent}%`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Executa na carga inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div class="experience" ref={refTab}>
      <div class="section-timeline" ref={sectionRef}>
        <div
          class="timeline-container"
          ref={(el) => el && divs.current.push(el)}
        >
          <div class="timeline-component">
            <div class="timeline-progress">
              <div className="progress-fill" ref={fillRef}></div>
            </div>

          {experiencias.map((exp, index) => (
            <div class="timeline-item observe" key={index}>
              <div class="timeline-left">
                <div class="date-text">{exp.data}</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">
                    <span>{exp.name}</span>
                    <br />
                    <p>{exp.des}</p>
                  </div>
                </div>
                <div class="image">
                  <img src={exp.images} loading="lazy" width="480" />
                </div>
              </div>
            </div>
          ))}

            <div class="timeline-item observe">
              <div class="timeline-left">
                <div class="date-text">Now</div>
              </div>
              <div class="timeline-centre">
                <div class="timeline-circle"></div>
              </div>
              <div class="timeline-right">
                <div class="margin-bottom">
                  <div class="text">...</div>
                </div>
              </div>
            </div>

            <div class="fade-top"></div>
            <div class="fade-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expirience;
