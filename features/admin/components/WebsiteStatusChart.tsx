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
import { WebsiteStatusChartProps } from "../types/website-chart";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const WebsiteStatusChart = ({ time, websitesStatus } : WebsiteStatusChartProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const chartRef = useRef<any>(null);
  
    const colorPalette = {
        onlined: "#007AFF",
        cancelled: "#EE1D52",
        overdued: "#FBBC04",
    };

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
                    label: legendLabels[0],
                    data: websitesStatus.onlined,
                    borderColor: colorPalette.onlined,
                    backgroundColor: colorPalette.onlined,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    tension: 0.35
                },
                {
                    label: legendLabels[1],
                    data: websitesStatus.cancelled,
                    borderColor: colorPalette.cancelled,
                    backgroundColor: colorPalette.cancelled,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    tension: 0.35
                },
                {
                    label: legendLabels[2],
                    data: websitesStatus.overdued,
                    borderColor: colorPalette.overdued,
                    backgroundColor: colorPalette.overdued,
                    borderWidth: 3,
                    pointRadius: 0,
                    pointHoverRadius: 5,
                    tension: 0.35
                }
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
                    callback: (value: any) => value.toLocaleString()
                }
            }
            },
            plugins: {
                legend: { display: false },
            }
        }
    });

    return () => chartRef.current?.destroy();
    }, [time, websitesStatus]);

    // เพิ่ม mapping สำหรับชื่อภาษาไทย
    const legendLabels: Record<string, string> = {
        onlined: "ออนไลน์",
        cancelled: "ยกเลิก",
        overdued: "ระงับ",
    };

    return (
        <div className="w-full rounded-md shadow p-4">
            <div className="mb-4">
                <h2 className="text-primary opacity-75 m-0">การปล่อยเช่าเว็บไซต์</h2>
                <p className="text-grey mt-1">สถานะเว็บไซต์แต่ละวันในช่วง 24 ชั่วโมงที่ผ่านมา</p>
            </div>

            <div className="h-[225px]">
                <canvas ref={canvasRef}></canvas>
            </div>
    
            {/* Custom Legend */}
            <div className="flex justify-center gap-5 mt-4 flex-wrap text-sm">
                {Object.entries(colorPalette).map(([key, color]) => (
                    <div key={key} className="flex items-center gap-1">
                        <div
                            className="w-3.5 h-3.5 rounded-sm"
                            style={{ backgroundColor: color }}
                        />
                        <p style={{ color }}>{legendLabels[key]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebsiteStatusChart;
