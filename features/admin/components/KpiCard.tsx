import { DynamicIcon } from 'lucide-react/dynamic';
import { KpiCardProps } from '../types/kpi-card';

const KPICard = ({ label, icon, color, type, value, trend }: KpiCardProps) => {
    function getBgColor(color: string) {
        switch (color) {
            case "yellow": return "bg-yellow-500/15";
            case "green": return "bg-green-500/15";
            case "red": return "bg-red-500/15";
            case "blue": return "bg-blue-500/15";
            default: return "bg-primary/15";
        }
    }

    function getTextColor(color: string) {
        switch (color) {
            case "yellow": return "text-yellow-500";
            case "green": return "text-green-500";
            case "red": return "text-red-500";
            case "blue": return "text-blue-500";
        default: return "text-primary";
      }
    }
    
    return (
        <div className='w-1/4 shadow-sm/20 h-20 items-center flex space-x-2.5 px-3.75 py-5 rounded-box truncate'>
            <div className={`relative rounded-full w-10 h-10 ${getBgColor(color)}`}>
                <DynamicIcon 
                    name={icon} 
                    className={`${getTextColor(color)} absolute inset-0 m-auto w-fit h-fit`} 
                    size={20}
                />
            </div>
            <div className='font-semibold w-full'>
                <p className='text-primary/75'>{ label }</p>
                <div className='flex justify-between'>
                    <p className=' text-primary flex items-center'>
                    { 
                        type === "money" ? `${Number(value).toLocaleString('th-TH', { minimumFractionDigits: 0, maximumFractionDigits: 2})}฿` :
                        type === "responseTime" ? `${Number(value).toLocaleString('th-TH', { minimumFractionDigits: 2})} MS` : 
                        Number(value).toLocaleString() 
                    }
                    </p>
                    {trend ? (
                        <div className='flex items-center'>
                            <p className=' text-primary me-2'>+12.2%</p>
                            <DynamicIcon name="trending-up" color="red" size={18} />
                        </div>
                    ) : null }
                </div>
            </div>
        </div>
    );
};

export default KPICard