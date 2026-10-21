import { useState, useRef, useEffect } from "react";

export default function ClicksYRenders() {
  const [clicks, setClicks] = useState(0);
  const renders = useRef(0);
  const rendersTexto = useRef(null);

  // Corre después de cada render
  useEffect(() => {
    renders.current += 1;
    rendersTexto.current.textContent = renders.current;
  });

  return (
    <div>
      <p>Clicks: {clicks}</p>
      <p>Renders: <span ref={rendersTexto}>0</span></p>
      <button onClick={() => setClicks(clicks + 1)}>Click</button>
    </div>
  );
}