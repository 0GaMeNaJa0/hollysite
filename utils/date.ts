export function changeAdToBdYear(year : number){
    return year + 543;
}

// Convert a Date (or ISO string) to "D MonthName YYYY" in Thai
export const formatDateToThaiDateString = (input: Date | string): string => {
  if (!input) return "";

  const date = typeof input === "string" ? new Date(input) : input;

  const day = date.getDate();
  const month = date.getMonth(); // 0-indexed
  const year = date.getFullYear();

  const monthName = getThaiMonthName(month);

  return `${day} ${monthName} ${year}`;
}

// Convert a Date (or ISO string) to "HH : MM"
export const formatTimeString = (input: Date | string): string => {
  if (!input) return "";

  const date = typeof input === "string" ? new Date(input) : input;

  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minute} น.`;
}

// Convert timestamp (in milliseconds) to "X ชั่วโมงที่แล้ว" or "X วันที่แล้ว"
export const getTimeAgoFromTimestamp = (timestamp: number): string => {
  const hoursAgo = Math.floor((Date.now() - timestamp) / (1000 * 60 * 60));

  return hoursAgo > 24
    ? `${Math.floor(hoursAgo / 24)} วันที่แล้ว`
    : `${hoursAgo} ชั่วโมงที่แล้ว`;
}

// Convert month index (0–11) to Thai month name
export const getThaiMonthName = (monthIndex: number): string => {
  const monthNames = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  return monthNames[monthIndex] ?? "เดือนผิดพลาด";
}

// Check Status is Date still in range
export const checkStatusDate = (originalTime: Date, estimatedTime: Date) => {
    const diff = originalTime.getDate() - estimatedTime.getDate()
    if (diff > 0) return { text: `เร็วกว่าที่กำหนดไว้ ${diff} วัน`, color: 'primary' }
    if (diff < 0) return { text: `ช้ากว่าที่กำหนดไว้ ${Math.abs(diff)} วัน`, color: 'danger' }
    return { text: 'อยู่ในช่วงวันที่กำหนด', color: 'grey' }
  }

// Convert month index (0–11) to Thai Abbreviation month name
export function getThaiMonthAbbreviation(monthIndex : number) {
  if (monthIndex < 1 || monthIndex > 12) {
    return "Invalid Month Number";
  }

  const monthAbbreviation = [
    "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.",
    "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."
  ];

  return monthAbbreviation[monthIndex] ?? "เดือนผิดพลาด";
}

export function changeNumberToMonthAbbreviationEng(monthNumber : number) {
      if (monthNumber < 1 || monthNumber > 12) {
    return "Invalid Month Number";
  }

  const monthAbbreviation = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return monthAbbreviation[monthNumber - 1];
}