import { getThaiMonthAbbreviation } from '@/utils/date';
import { UserProfileCardProps } from '../types/user-profile-card';

const DropdownIcon = () => (
  <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.91 0.589844L6.5 5.16984L11.09 0.589844L12.5 1.99984L6.5 7.99984L0.5 1.99984L1.91 0.589844Z" fill="#7A5CFA"/>
  </svg>
);

const UserProfileCard = ({ avatarUrl, surName, status, role, userName, email, telephone, createDate, lastAction} : UserProfileCardProps) => {
  //format abbreviation date
  function getFormatDate(date?: Date) {
      if (!date || !(date instanceof Date) || isNaN(date.getTime())) {
        return "-";
      }
      return `${date.getDate()} ${getThaiMonthAbbreviation(date.getMonth())} ${date.getFullYear()}`
  }

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
    <div className="w-full mx-auto border-2 border-primary/50 rounded-lg overflow-hidden">
      <div className="border-b-2 border-primary/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
             <div className="avatar h-[50px] w-[50px]">
                <div className="rounded-full w-[50px] h-[50px] overflow-hidden">
                  <img src={avatarUrl} alt={`Avatar of ${userName}`} />
                </div>
              </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className=" font-semibold text-primary">{ role !== "client" ? surName : userName }</h2>
                <span className={`px-2 py-1 font-medium rounded-md min-w-[120px] flex justify-center ${status === "Active" ? "bg-primary/15 text-primary" : "bg-danger/15 text-danger"}`}>
                  { statusLabels[status] }
                </span>
              </div>
              <p className=" text-primary">{ roleLabels[role] }</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 px-3 py-2 text-primary border-2 border-gray-50 hover:bg-gray-100 rounded-md transition-colors">
            <span>เมนูเพิ่มเติม</span>
            <DropdownIcon/>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-5 border-primary/50">
          {role !== "client" ? (
            <div className="flex flex-col px-4 py-3 border-r-2 border-primary/50">
              <span className=" font-medium text-primary/75">ชื่อผู้ใช้งาน</span>
              <span className=" font-semibold text-primary">{ userName }</span>
            </div>
          ) : null}
          <div className="flex flex-col px-4 py-3 border-r-2 border-primary/50">
            <span className=" font-medium text-primary/75">อีเมล</span>
            <span className=" font-semibold text-primary">{ email }</span>
          </div>
          <div className="flex flex-col px-4 py-3 border-r-2 border-primary/50">
            <span className=" font-medium text-primary/75">หมายเลขโทรศัพท์</span>
            <span className=" font-semibold text-primary">{ telephone }</span>
          </div>
          <div className="flex flex-col px-4 py-3 border-r-2 border-primary/50">
            <span className=" font-medium text-primary/75">วันที่สร้างบัญชี</span>
            <span className=" font-semibold text-primary">{ getFormatDate(createDate) }</span>
          </div>
          <div className="flex flex-col px-4 py-3">
            <span className=" font-medium text-primary/75">การกระทำล่าสุด</span>
            <span className=" font-semibold text-primary">{ getFormatDate(lastAction) }</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;