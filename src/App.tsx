import { useEffect, useRef } from "react";
import "./App.css";
import { createSwapy } from "swapy";

export default function App() {
  const swapy = useRef<ReturnType<typeof createSwapy> | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);

      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }

    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div className="app">
      <h1>Beautiful Bento Grid </h1>
      <div className="container" ref={container}>
        <div className="slot a" data-swapy-slot="a">
          <div className="item" data-swapy-item="a">
            <div>Hello</div>
          </div>
        </div>

        <div className="slot b" data-swapy-slot="b">
          <div className="item" data-swapy-item="b">
            <div>World!</div>
          </div>
        </div>

        <div className="slot c" data-swapy-slot="c">
          <div className="item" data-swapy-item="c">
            <div>I'm</div>
          </div>
        </div>

        <div className="slot d" data-swapy-slot="d">
          <div className="item" data-swapy-item="d">
            <div>👋</div>
          </div>
        </div>

        <div className="slot e" data-swapy-slot="e">
          <div className="item" data-swapy-item="e">
            <div>Marco</div>
          </div>
        </div>
      </div>
      <span>by @codedbymarco</span>
    </div>
  );
}
