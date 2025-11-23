
import { useRouter } from "next/navigation";
import { WebsiteTableProps } from "../types/website-table";
import { getThaiMonthName } from "@/utils/date";
import { EllipsisVertical } from "lucide-react";

const WebsitesTable = ({ websites }: WebsiteTableProps) => {
    const router = useRouter();
    const tableHeaders = ["ชื่อเว็ปไซต์", "วันเริ่มต้นการทำสัญญาเช่า", "วันสิ้นสุดการทำสัญญาเช่า", "สถานะการชำระเงิน", "จำนวน (บาท)"]
      function getBgColor(status: string) {
      switch (status) {
        case "Paymented":
          return "bg-primary/15";
        case "Overdued":
          return "bg-yellow-500/15";
        case "Cancelled":
          return "bg-danger/15";
        default : 
          return "bg-gray-200/15";
      }
    }

    function getTextColor(status: string) {
      switch (status) {
        case "Paymented":
          return "text-primary";
        case "Overdued":
          return "text-yellow-500";
        case "Cancelled":
          return "text-danger";
        default : 
          return "text-gray-200";
      }
    }
    
    // format date
    function getFormatDate(input?: Date | string) {
        const date = typeof input === "string" ? new Date(input) : input;
        if (!date || isNaN(date.getTime())) return "-";

        return `${date.getDate()} ${getThaiMonthName(date.getMonth())} ${date.getFullYear()}`;
    }

    const paymentStatusLabels: Record<string, string> = {
      Paymented: "ชำระเงินแล้ว",
      Overdued: "เกินกำหนด",
      Cancelled: "ยกเลิกแล้ว",
    };

    return (
        <div className={`overflow-hidden w-full bg-primary rounded-md border-primary border-x ${websites?.length === 0 ? "" : "border-b"}`}>
            <table className="table">
                <thead className="text-white">
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index} className="h-[45px]" style={{ width: `${100 / (tableHeaders.length)}%` }}>{header}</th>
                        ))}
                    </tr>
                </thead>
               <tbody className="bg-white">
                    {websites?.map((web) => (
                        <tr key={web.id} className="text-primary h-[70px] border-b border-primary p-0" onClick={() => router.push(`/user-management/${web.id}`)}>
                            <td className="py-0 h-[70px] align-middle">
                                <p className=" font-semibold">{web.websiteName}</p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <p className=" font-semibold">{getFormatDate(web.acceptedDate)}</p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <p className=" font-semibold">{getFormatDate(web.expirededDate)}</p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <div className={`w-[120px] p-2.5 rounded-md flex justify-center ${getBgColor(web.paymentStatus)}`}>
                                    <p className={` font-semibold ${getTextColor(web.paymentStatus)}`}>
                                        {paymentStatusLabels[web.paymentStatus]}
                                    </p>
                                </div>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                               <p className=" font-semibold">
                                    {Number(web.rent).toLocaleString("th-TH", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}฿
                                </p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <div className="flex justify-end items-center h-full">
                                   <EllipsisVertical />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WebsitesTable;