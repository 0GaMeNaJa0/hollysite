export interface WebsiteTableProps {
    websites? : WebsiteData[],
};

export interface WebsiteData {
    id : string,
    websiteName: string,
    acceptedDate: Date,
    expirededDate?: Date,
    paymentStatus : string,
    rent: number
}
