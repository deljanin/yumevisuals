import React from "react";
export default function formatLineBreak(text) {
  return (
    <>
      {text.split("*").map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < text.split("*").length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
