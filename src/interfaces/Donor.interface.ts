export interface DonorModel {
    id: number,
    DonationFormId: number,
    CampaignId: number,
    email: string,
    firstName:string,
    lastName:string,
    comment: string,
    phone: string,
    country: string,
    address: string,
    city: string,
    postCode: string,
    amount: number,
    paymentType: string
}