import React from "react";
const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <p>Copyright {year}</p>
    </div>
  );
}
