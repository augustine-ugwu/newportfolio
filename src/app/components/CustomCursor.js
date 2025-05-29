"use client";
import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(true);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleClick = () => {
      setClicking(true);
      setTimeout(() => setClicking(false), 300);
      spawnRipple(mouse.current.x, mouse.current.y);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) {
        setHovering(false);
      }
    };

    const handleVisibility = () => {
      setVisible(window.innerWidth > 768);
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${
          pos.current.x - 24
        }px, ${pos.current.y - 24}px, 0)`;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${
          mouse.current.x - 5
        }px, ${mouse.current.y - 5}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("resize", handleVisibility);
    handleVisibility();

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  const spawnRipple = (x, y) => {
    const ripple = document.createElement("div");
    ripple.className =
      "fixed z-[9997] w-8 h-8 bg-white/20 rounded-full pointer-events-none animate-ripple";
    ripple.style.left = `${x - 16}px`;
    ripple.style.top = `${y - 16}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  };

  if (!visible) return null;

  return (
    <>
      <div
        ref={outerRef}
        className={`fixed z-[9998] w-12 h-12 rounded-full pointer-events-none transition-all duration-200 ease-out border ${
          clicking
            ? "scale-75 border-white/50"
            : hovering
            ? "scale-125 border-white"
            : "border-white/30"
        } mix-blend-difference`}></div>

      <div
        ref={innerRef}
        className={`fixed z-[9999] w-2.5 h-2.5 rounded-full pointer-events-none transition-transform duration-100 ease-out ${
          clicking ? "scale-150 bg-white/50" : "bg-white"
        } mix-blend-difference`}></div>

      {/* Tailwind animation class */}
      <style jsx global>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(3);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
