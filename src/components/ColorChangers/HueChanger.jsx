import React from "react";
import { useEffect, useState } from "react";

// Icons
import { BsPaletteFill, BsXLg } from "react-icons/bs";

// Hooks
import useLocalStorage from "../../hooks/useLocalStorage";

// Styles
import "./HueChanger.css";

export default function HueChanger() {
  const [hue, setHue] = useLocalStorage("_pageHue", "263");
  const [picking, setPicking] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", hue);
  }, [hue]);

  return (
    <div
      className="huePickerBox"
      style={{
        backgroundColor: picking ? "hsl(var(--muted) / .6)" : "transparent",
      }}
    >
      {picking ? (
        <>
          <button className="btn close" onClick={() => setPicking(false)}>
            <BsXLg fill="hsl(var(--acceColor)" />
          </button>
          <input
            className="huePickerBar"
            type="range"
            min="0"
            max="360"
            value={hue}
            onInput={(e) => setHue(e.target.value)}
          />
        </>
      ) : (
        <div>
          <button className="btn" onClick={() => setPicking(true)}>
            <BsPaletteFill fill="hsl(var(--acceColor)" />
          </button>
        </div>
      )}
    </div>
  );
}
