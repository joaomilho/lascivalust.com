import React from "react";
import Marquee from "react-fast-marquee";

export function SectionMarquee({
  speed,
  text,
}: {
  speed?: number;
  text?: string;
}) {
  return (
    <Marquee
      style={{
        // fontFamily: "FreightDispProBlack",
        fontFamily: "freight-display-pro",
        fontWeight: 900,
        fontSize: 66,
        background: "#000",
        color: "white",
        lineHeight: 4,
      }}
      speed={speed || 50}
      gradientColor={[0, 0, 0]}
    >
      {text ? <TextChildren text={text} /> : <DefaultChildren />}
    </Marquee>
  );
}

function TextChildren({ text }: { text: string }) {
  return (
    <>
      {text}
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>{text}</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic", fontFamily: "FreightDispProLight" }}>
        {text}
      </span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>{text}</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: "red", fontStyle: "italic" }}>{text}</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic", fontFamily: "FreightDispProLight" }}>
        {text}
      </span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>{text}</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
    </>
  );
}

function DefaultChildren() {
  return (
    <>
      <span>Ðarkness</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontFamily: "FreightDispProLight" }}>Lŭst</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ color: "red", fontStyle: "italic" }}>Şedųctrixx</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic", fontFamily: "FreightDispProLight" }}>
        Dominatrix
      </span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{}}>Lŭst</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>Ląscïvïous</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span>Ðark</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontFamily: "FreightDispProLight" }}>Lŭst</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>Şedųctrixx</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic", fontFamily: "FreightDispProLight" }}>
        Pain
      </span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span>Şedųctrixx</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
      <span style={{ fontStyle: "italic" }}>Ląscïvïous</span>
      <span style={{ color: `rgba(255,255,255,0.1)` }}>𖤐</span>
    </>
  );
}
