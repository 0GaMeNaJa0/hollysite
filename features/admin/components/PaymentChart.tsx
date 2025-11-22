import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { PaymentChartProps } from "../types/payment-chart";

const PaymentChart = ({ time, payment, overdue }: PaymentChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any>(null);

  const colorPalette = {
    payment: "#4A7766",
    overdue: "#007AFF",
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: time,
        datasets: [
          {
            label: "Payments from Clients",
            data: payment,
            backgroundColor: colorPalette.payment,
            borderRadius: 4,
            barThickness: 18,
          },
          {
            label: "Payouts to Developers",
            data: overdue,
            backgroundColor: colorPalette.overdue,
            borderRadius: 4,
            barThickness: 18,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
                label: (ctx) => {
                    const value = ctx.parsed.y ?? 0;
                    return `฿${value.toLocaleString()}`;
                },
            },
          },
        },

        scales: {
          x: {
            ticks: {
              font: { size: 12, weight: 600 },
              color: "#6b7280",
            },
            grid: { display: false },
          },
          y: {
            ticks: {
              font: { size: 14, weight: 600 },
              color: "#6b7280",
              callback: (value) => `฿${value.toLocaleString()}`,
            },
            grid: {
                lineWidth: 1,
                tickBorderDash: [5, 3],
            },
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [time, payment, overdue]);

  return (
    <div className="w-full rounded-md shadow p-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-primary opacity-75 m-0">การเติบโตของยอดการชำระเงิน</h2>
        <p className="text-gray mt-1">การเติบโตของยอดการชำระเงินแต่ละวันในช่วง 24 ชั่วโมงที่ผ่านมา</p>
      </div>

      {/* Chart */}
      <div className="w-full h-[255px]">
        <canvas ref={canvasRef}></canvas>
      </div>

      {/* Custom Legend */}
      <div className="flex justify-center gap-8 mt-2 flex-wrap">
        <div className="flex items-center gap-1">
          <div
            className="w-3.5 h-3.5 rounded-sm"
            style={{ backgroundColor: colorPalette.payment }}
          />
          <p style={{ color: colorPalette.payment }}>ยอดการชำระ</p>
        </div>

        <div className="flex items-center gap-1">
          <div
            className="w-3.5 h-3.5 rounded-sm"
            style={{ backgroundColor: colorPalette.overdue }}
          />
          <p style={{ color: colorPalette.overdue }}>ยอดค้างชำระ</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentChart;
