import React, { useRef } from "react";
import CustomHook from "./CustomHook";

const About = () => {

    const refTab = useRef(null);
      const divs = useRef([]);
      CustomHook(refTab, divs);

  return (
    <div className="about" ref={refTab}>
      <div className="about-content" ref={(el) => el && divs.current.push(el)}>
        <h2>Mais <span className="about-span">Sobre</span> Mim!</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <div class="flag_tag tag1">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

    <div class="flag_tag tag2">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag3">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag4">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

      <div class="flag_tag tag5">
        <div class="marquee">
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
          <span class="marquee-text">
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
            PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO - PORTIFÓLIO -
          </span>
        </div>
      </div>

    </div>
  );
};

export default About;
