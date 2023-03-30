import React from "react";

class YtFrame extends React.Component {
  render() {
    return (
        <div>
<h1 style={{ color: "red", margin: "50px", fontSize: "50px", fontWeight: "bolder", textAlign: "center" }}>
  <span style={{ color: "white" }}>THEME REVEAL:</span> UNLEASH YOUR PASSION
</h1>

       
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <iframe
    title="TEDxIIITV 2023 | Theme Reveal - 'Unleash your Passion'"
    width="634"
    height="385"
    style={{ margin: "50px" }}
    src="https://www.youtube.com/embed/SpfcvJL-bIA"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

       </div>
    );
  }
}

export default YtFrame;
