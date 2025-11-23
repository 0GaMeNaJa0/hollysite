"use client";
import KPICard from "@/features/admin/components/KpiCard";
import TimeFilterButton from "@/features/admin/components/TimeFilterButton";
import UserProfileCard from "@/features/user-management/components/UserProfileCard";
import WebsiteTable from "@/features/user-management/components/WebsiteTable";
import { useUserStore } from "@/features/user-management/stores/users";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 50 50">
    <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.7 37 28.1 35.8 30.9 33.8 L 44.1 46.9 L 46.9 44.1 L 33.9 31.1 C 36.5 28.1 38 24.2 38 20 C 38 10.6 30.4 3 21 3 Z M 21 5 C 29.3 5 36 11.7 36 20 C 36 28.3 29.3 35 21 35 C 12.7 35 6 28.3 6 20 C 6 11.7 12.7 5 21 5 Z" />
  </svg>
);

const UserDetail = () => {
    const params = useParams();

    const userId = params?.id?.toString();

    const { user, getUserById } = useUserStore();

    useEffect(() => {
        if (userId) {
            getUserById(userId);
        }
    }, [userId, getUserById]);

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
        <div className="flex flex-col gap-5">
            <UserProfileCard 
                avatarUrl={user.avatarUrl}
                userName={user.userName}
                surName={user.surName}
                role={user.role}
                email={user.email}
                status={user.status}
                telephone={user.telephone}
                createDate={new Date(user.createDate)}
                lastAction={new Date(user.lastAction)}
            />

            <div className="flex space-x-5">
                {user.role === "Client" ? ( 
                    <>
                        <KPICard label="จำนวนเว็ปไซต์ทั้งหมด" icon="panels-top-left" type="normal" value={12} color="" trend />
                        <KPICard label="ยอดชำระเงินทั้งหมด" icon="banknote" type="payment" value={25000} color="green" trend />
                        <KPICard label="ยอดค้างชำระทั้งหมด" icon="banknote-x" type="paid" value={2500} color="red" trend />
                    </>
                ) : (
                   null
                )}
            </div> 

            <div className="flex justify-between">
                <TimeFilterButton/>
                {/* Search + Filter */}
                <div className=" flex items-center gap-5">
                    <div className="flex items-center gap-2 min-w-fit">
                    <p className="text-primary max-xs:hidden">ตัวกรอง</p>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9355 7.06229H2.06078C1.81214 7.06229 1.57369 6.96349 1.39787 6.7877C1.22207 6.61187 1.12329 6.37341 1.12329 6.12479C1.12329 5.87616 1.22207 5.63766 1.39787 5.46187C1.57369 5.28608 1.81214 5.18729 2.06078 5.18729H18.9355C19.1842 5.18729 19.4227 5.28608 19.5985 5.46187C19.7743 5.63766 19.873 5.87616 19.873 6.12479C19.873 6.37341 19.7743 6.61187 19.5985 6.7877C19.4227 6.96349 19.1842 7.06229 18.9355 7.06229Z" fill="#4A7766" />
                        <path d="M15.8106 11.4373H5.1858C4.93717 11.4373 4.69867 11.3385 4.52286 11.1627C4.34707 10.9869 4.24829 10.7484 4.24829 10.4998C4.24829 10.2512 4.34707 10.0127 4.52286 9.83687C4.69867 9.66108 4.93717 9.56229 5.1858 9.56229H15.8106C16.0593 9.56229 16.2978 9.66108 16.4735 9.83687C16.6493 10.0127 16.7481 10.2512 16.7481 10.4998C16.7481 10.7484 16.6493 10.9869 16.4735 11.1627C16.2978 11.3385 16.0593 11.4373 15.8106 11.4373Z" fill="#4A7766" />
                        <path d="M12.0602 15.812H8.93567C8.68704 15.812 8.44862 15.7132 8.27283 15.5375C8.09708 15.3617 7.99829 15.1232 7.99829 14.8747C7.99829 14.626 8.09708 14.3876 8.27283 14.2118C8.44862 14.0361 8.68704 13.9373 8.93567 13.9373H12.0602C12.3087 13.9373 12.5472 14.0361 12.723 14.2118C12.8987 14.3876 12.9975 14.626 12.9975 14.8747C12.9975 15.1232 12.8987 15.3617 12.723 15.5375C12.5472 15.7132 12.3087 15.812 12.0602 15.812Z" fill="#4A7766" />
                    </svg>

                    </div>
                </div>
            </div>

            <WebsiteTable websites={websiteData}/>  
        </div>
    );
}

export default UserDetail;