import React, { useRef, useEffect } from "react";

const SpiderChart = ({ data }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxRadius = Math.min(width, height) / 2 - 10; // Максимальный радиус
    const numPoints = data.length;


    ctx.clearRect(0, 0, width, height);


    ctx.strokeStyle = "#ddd";
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath();
      const radius = (maxRadius / 5) * i;
      for (let j = 0; j <= numPoints; j++) {
        const angle = (Math.PI * 2 * j) / numPoints;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }


    ctx.strokeStyle = "#aaa";
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 * i) / numPoints;
      const x = centerX + maxRadius * Math.cos(angle);
      const y = centerY + maxRadius * Math.sin(angle);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "#007BFF";
    ctx.fillStyle = "rgba(0, 123, 255, 0.4)";
    ctx.beginPath();
    for (let i = 0; i < numPoints; i++) {
      const angle = (Math.PI * 2 * i) / numPoints;
      const radius = (data[i] / 100) * maxRadius; 
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }, [data]);

  return <canvas ref={canvasRef} width="500" height="500" style={{ border: "1px solid black" }} />;
};

export default SpiderChart;