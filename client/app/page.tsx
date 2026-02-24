import { Color } from "@/enum/color";
import Button from "@/features/layout/components/Button";
import { Heart, Play, Sparkles } from "lucide-react";


export default function Home() {
  return (
    <div className="mx-15">
      <div className="hero-section pt-15 text-center relative mx-auto">

        <div className=" bg-primary  w-12 h-12 rounded-full justify-center flex items-center -rotate-15 absolute right-10">
          <Heart fill={Color.SECONDARY} strokeWidth={0} />
        </div>
        <div className=" bg-primary  w-12 h-12 rounded-full justify-center flex items-center rotate-15 absolute left-10">
          <Play fill={Color.SECONDARY} strokeWidth={0} />
        </div>
        <div className="space-y-5">
          <div className=" bg-primary  w-12 h-12 rounded-full justify-center flex items-center rotate-15 absolute left-10">
            <Play fill={Color.SECONDARY} strokeWidth={0} />
          </div>
<div className="w-32 h-0.5 bg-black rotate-45 origin-left"></div>
          <Sparkles fill={Color.PRIMARY} strokeWidth={0} size={50} className="absolute right-15 bottom-0" />
          <h1 className="text-5xl">ไม่ต้องรอสร้างเว็บไซต์แค่เลือก <br />แบบที่<span className="text-5xl text-primary">ชอบ</span> ก็พร้อมใช้งานทันที</h1>
          <p>เลือกเว็ปไซต์ที่ช่วยแก้ปัญหาของคุณ ในแบบที่คุณต้องการ</p>
          <Button>ดูเว็ปไซต์สำเร็จรูป</Button>
          <p>Pair Extraordinaire Commit</p>
        </div>
      </div>
    </div>
  );
}
