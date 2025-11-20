import KPICard from "@/features/package/components/KpiCard";
import TimeFilterButton from "@/features/package/components/TimeFilterButton";

const page = () => {
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

    </div>
  )
}
export default page;
