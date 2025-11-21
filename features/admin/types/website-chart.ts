export interface WebsiteChartProps {
    categories: string[],
    amounts: number[],
}

export interface WebsiteStatusChartProps {
    time: string[],
    websitesStatus: WebsiteStatus,
}

export interface WebsiteStatus {
    onlined: number[],
    cancelled: number[],
    overdued: number[],
}

