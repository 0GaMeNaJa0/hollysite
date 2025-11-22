"use client"
import WebsiteCategoryChart from "@/features/admin/components/WebsiteCategoryChart";
import KPICard from "@/features/admin/components/KpiCard";
import TimeFilterButton from "@/features/admin/components/TimeFilterButton";
import WebsiteStatusChart from "@/features/admin/components/WebsiteStatusChart";
import RevenueChart from "@/features/admin/components/RevenueChart";
import PaymentChart from "@/features/admin/components/PaymentChart";
import WebsitesTable from "@/features/user-management/components/WebsiteTable";

const page = () => {
  const filterDateTime = [
    { time: '00:00' },
    { time: '01:00' },
    { time: '02:00' },
    { time: '03:00' },
    { time: '04:00' },
    { time: '05:00' },
  ]

  const websiteCategories = [
    { categorie: 'Blogs', value: 35 },
    { categorie: 'E-Commerce', value: 25 },
    { categorie: 'Posfolio', value: 20 },
    { categorie: 'Stock Management', value: 12 },
    { categorie: 'Other', value: 5 },
  ];

  const websitesStatus = {
    onlined: [0, 5, 4, 6, 2, 7],
    cancelled: [0, 0, 2, 1, 3, 1],
    overdued: [0, 4, 6, 7, 5, 6]
  };

  const revenueGrowthData = [ 1000, 2800, 4300, 3800, 8300, 12000];

  const paymentGrowthData = [
    {  payment: 83000, overdue: 82000 },
    {  payment: 84000, overdue: 83000 },
    {  payment: 84000, overdue: 84000 },
    {  payment: 85000, overdue: 84000 },
    {  payment: 85000, overdue: 82000 },
    {  payment: 85000, overdue: 84000 },
  ];

  const websiteData = [
    {
      id: "ws-001",
      websiteName: "Kiho Restaurant",
      acceptedDate: new Date("2024-11-01"),
      expirededDate: new Date("2025-11-01"),
      paymentStatus: "Paymented",
      rent: 1200,
    },
    {
      id: "ws-002",
      websiteName: "Cargo Express",
      acceptedDate: new Date("2024-12-15"),
      expirededDate: new Date("2025-12-15"),
      paymentStatus: "Cancelled",
      rent: 1500,
    },
    {
      id: "ws-003",
      websiteName: "VR Event Booking",
      acceptedDate: new Date("2025-01-10"),
      expirededDate: new Date("2026-01-10"),
      paymentStatus: "Overdued",
      rent: 900,
    },
    {
      id: "ws-004",
      websiteName: "Smart Tech Review",
      acceptedDate: new Date("2025-02-01"),
      expirededDate: new Date("2026-02-01"),
      paymentStatus: "Paymented",
      rent: 2200,
    },
    {
      id: "ws-005",
      websiteName: "Thai Travel Hub",
      acceptedDate: new Date("2024-09-20"),
      expirededDate: new Date("2025-09-20"),
      paymentStatus: "Overdued",
      rent: 1800,
    },
  ];

  return (
    <div className="w-full items-center flex flex-col py-5 gap-5">
      <div className="w-full justify-items-end">
        <TimeFilterButton/>
      </div>

      <div className="flex space-x-5 w-full">
        <KPICard label="จำนวนเว็ปไซต์ทั้งหมด" icon="panels-top-left" type="normal" value={97} color="" trend />
        <KPICard label="ยอดรายได้ทั้งหมด" icon="chart-column" type="trend" value={15785} color="yellow" trend />
        <KPICard label="ยอดชำระเงินทั้งหมด" icon="banknote" type="payment" value={209715} color="green" trend />
        <KPICard label="ยอดค้างชำระทั้งหมด" icon="banknote-x" type="paid" value={225500} color="red" trend />
      </div> 

      <div className="flex gap-x-5 w-full justify-center">
        <WebsiteStatusChart time={filterDateTime.map(item => item.time)} websitesStatus={websitesStatus}/>
        <RevenueChart time={filterDateTime.map(item => item.time)} revenue={revenueGrowthData}/>
      </div>

      <div className="flex gap-x-5 w-full justify-center">
        <PaymentChart 
          time={filterDateTime.map(item => item.time)} 
          payment={paymentGrowthData.map(item => item.payment)} 
          overdue={paymentGrowthData.map(item => item.overdue)}
        />
        <WebsiteCategoryChart 
          categories={websiteCategories.map(item => item.categorie)} 
          amounts={websiteCategories.map(item => item.value)}
        />
      </div>
      
      <WebsitesTable websites={websiteData}/>
    </div>
  )
}
export default page;
