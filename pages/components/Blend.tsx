import React from "react";
import { Property } from "csstype";

Blend.defaultProps = {
  width: "100%",
};

export default function Blend({
  mode,
  children,
  background,
}: {
  mode: Property.MixBlendMode;
  children: React.ReactElement;
  background: Property.Background;
}) {
  return (
    <div
      style={{
        // display: "table",
        // alignItems: "stretch",
        display: "table-cell",
        position: "relative",
        border: `12px solid red`,
      }}
    >
      <div
        style={
          {
            // width: "100%",
            // height: "100%",
          }
        }
      >
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          mixBlendMode: mode,
          background,
        }}
      ></div>
    </div>
  );
}
