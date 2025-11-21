"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { WebsiteChartProps } from "../types/website-chart";

const WebsiteCategoryChart = ({ categories, amounts }: WebsiteChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  const colorPalette = ["#ef4444", "#8b5cf6", "#f97316", "#3b82f6", "#6b7280"];
  const total = amounts.reduce((a, b) => a + b, 0);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: "doughnut",
      data: {
        labels: categories,
        datasets: [
          {
            data: amounts,
            backgroundColor: colorPalette,
            borderWidth: 0,
            spacing: 8,        
            borderRadius: 10,    
            offset: 8,           
          },
        ],
      },
      options: {
        cutout: "60%",        
        rotation: -90,         
        circumference: 360,      
        plugins: {
          legend: { display: false },
        },
        animation: {
          animateRotate: true,
          animateScale: true,
        },
        maintainAspectRatio: false,
      },
    });
  }, [categories, amounts]);

  return (
    <div className="w-full rounded-md shadow p-4">
      <div className="mb-4">
        <h2 className="text-primary opacity-75 m-0">
          Jobs Category by Payments
        </h2>
      </div>

      <div className="relative w-full h-[250px] flex items-center justify-center">
        <canvas ref={canvasRef}></canvas>
        <div className="absolute text-[#5f7f75] font-bold text-4xl pointer-events-none">
          {total}
        </div>
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center gap-5 mt-4 flex-wrap text-sm">
        {categories.map((name, index) => (
          <div key={index} className="flex items-center gap-1">
            <div
              className="w-3.5 h-3.5 rounded-sm"
              style={{ backgroundColor: colorPalette[index] }}
            />
            <p style={{ color: colorPalette[index] }}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteCategoryChart;
