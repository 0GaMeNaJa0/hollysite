import WebsiteCategoryChart from "@/features/admin/components/WebsiteCategoryChart";
import KPICard from "@/features/admin/components/KpiCard";
import TimeFilterButton from "@/features/admin/components/TimeFilterButton";
import WebsiteStatusChart from "@/features/admin/components/WebsiteStatusChart";
import RevenueChart from "@/features/admin/components/RevenueChart";

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
        <WebsiteCategoryChart 
          categories={websiteCategories.map(item => item.categorie)} 
          amounts={websiteCategories.map(item => item.value)}
        />
      </div>

    </div>
  )
}
export default page;
