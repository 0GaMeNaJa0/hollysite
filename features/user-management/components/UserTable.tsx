import { useRouter } from "next/navigation";
import { UserTableProps } from "../types/user-table";
import { EllipsisVertical, Plus } from "lucide-react";

const UserTable = ({ persons }: UserTableProps) => {
    const router = useRouter();
    const tableHeaders = ["ชื่อบัญชีผู้ใช้งาน", "อีเมล", "สิทธิ์การใช้งาน", "สถานะการใช้งาน"]

    const statusLabels: Record<string, string> = {
        Active: "เปิดใช้งาน",
        Inactive: "ปิดใช้งาน",
    };

    const roleLabels: Record<string, string> = {
        Admin: "ผู้ดูแลระบบ",
        Client: "ลูกค้า",
        Developer: "นักพัฒนา"
    };
    
    return (
        <div className={`overflow-hidden w-full bg-primary rounded-md border-primary border-x ${persons?.length === 0 ? "" : "border-b"}`}>
            <table className="table">
                <thead className="text-white">
                    <tr>
                        {tableHeaders.map((header, index) => (
                            <th key={index} className="h-[45px]" style={{ width: `${100 / (tableHeaders.length)}%`}}>{header}</th>
                        ))}
                        <th className="flex justify-end h-[45px] items-center">
                            <div className={`h-[32px] w-[32px] bg-[#55A386] border-none rounded-md flex items-center justify-center`} >
                                <Plus />
                            </div>
                        </th>
                    </tr>
                </thead>
               <tbody className="bg-white">
                    {persons?.map((person) => (
                        <tr key={person.id} className="text-primary h-[70px] border-b border-primary p-0" onClick={() => router.push(`/user-management/${person.id}`)}>
                            <td className="py-0 h-[70px] flex space-x-3.75 items-center">
                                <div className="avatar h-[50px] w-[50px]">
                                    <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                                        <img src={person.avatarUrl} alt={`Avatar of ${person.userName}`} />
                                    </div>
                                </div>
                                <p className={` font-semibold`}>
                                    {person.userName}
                                </p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <p className=" font-semibold">{person.email}</p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <p className=" font-semibold">{roleLabels[person.role]}</p>
                            </td>
                            <td className="py-0 h-[70px] align-middle">
                                <div className={`w-[120px] p-2.5 rounded-md flex justify-center ${person.status === "Active" ? "bg-primary/15" : "bg-danger/15"}`}>
                                    <p className={` font-semibold ${person.status === "Active" ? "text-primary" : "text-danger"}`}>
                                        {statusLabels[person.status]}
                                    </p>
                                </div>
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

export default UserTable;