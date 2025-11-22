"use client"
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { useEffect, useRef } from "react";
import { RevenueChartProps } from "../types/revenue-chart";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const RevenueChart = ({ time, revenue }: RevenueChartProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<any>(null);
  
    const revenueColor = "#FBBC04";

    useEffect(() => {
        if (!canvasRef.current) return;

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(canvasRef.current, {
            type: "line",
            data: {
                labels: time,
                datasets: [
                {
                    data: revenue,
                    borderColor: revenueColor,
                    backgroundColor: revenueColor,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    tension: 0.35
                },
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
            x: {
                    ticks: {
                    color: "#6b7280",
                    font: { size: 12, weight: 600 }
                }
            },
            y: {
                ticks: {
                    color: "#6b7280",
                    font: { size: 12, weight: 600 },
                    callback: (value: any) => `฿${value.toLocaleString()}`
                }
            }
            },
            plugins: {
                legend: { display: false },
            }
        }
    });

    return () => chartRef.current?.destroy();
    }, [time, revenue]);

    return (
        <div className="w-full rounded-md shadow p-4">
            <div className="mb-4">
                <h2 className="text-primary opacity-75 m-0">การเติบโตของรายได้</h2>
                <p className="text-grey mt-1">การเติบโตของรายได้แต่ละวันในช่วง 24 ชั่วโมงที่ผ่านมา</p>
            </div>

            <div className="h-[225px]">
                <canvas ref={canvasRef}></canvas>
            </div>
    
            {/* Custom Legend */}
            <div className="flex justify-center gap-5 mt-4 flex-wrap text-sm">
                <div className="flex items-center gap-1">
                    <div
                        className="w-3.5 h-3.5 rounded-sm"
                        style={{ backgroundColor: revenueColor }}
                    />
                    <p style={{ color: revenueColor }}>รายได้</p>
                </div>
            </div>
        </div>
    );
};

export default RevenueChart;
