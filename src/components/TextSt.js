import React, { useEffect, useRef } from "react";
import TagCloud from "TagCloud";
import "./Textst.css";

const TextSt = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJs",
      "React",
      "MongoDb",
      "MySql",
      "JAVA",
      "Express",
      "GitHub",
      "Php",
    ];
    const options = {
      radius: 300,
      maxSpeed: "normal",
      initSpeed: "normal",
      keep: true,
      loop: true,
      lockX: true,
      lockY: true,
    };

    TagCloud(container, texts, options);

    return () => {
      TagCloud(container, [], {});
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud" ref={containerRef}/>
    </div>
  );
};
export default TextSt