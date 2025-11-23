export const HIDDEN_PATHS = ["/auth/login", "/auth/register"];

export const FOOTER_LINKS = {
  info: {
    title: "ข้อมูลเพิ่มเติม",
    links: [
      { label: "เกี่ยวกับเรา", href: "#" },
      { label: "บริการต่างๆ", href: "#" },
      { label: "ชุมชน", href: "#" },
      { label: "ข่าวสาร", href: "#" },
    ],
  },
  help: {
    title: "ช่วยเหลือ",
    links: [
      { label: "คำถามที่พบบ่อย", href: "#" },
      { label: "ติดต่อเรา", href: "#" },
      { label: "ข้อกำหนดและเงื่อนไข", href: "#" },
      { label: "นโยบายความเป็นส่วนตัว", href: "#" },
    ],
  },
} as const;

export const NAV_LINKS = [
  { href: "/work-board/owner", label: "เว็ปไซต์สำเร็จรูป" },
  { href: "/work-board/owner/1", label: "คำถามที่พบบ่อย" },
  { href: "/help", label: "เว็ปไซต์ของฉัน" },
  { href: "/blog", label: "บทความ" },
] as const;

export const ACTION_BUTTONS = [
  { href: "/work-board", label: "บอร์ดงาน" },
  { href: "/work-board/owner/create-work", label: "สร้างงาน" },
] as const;
