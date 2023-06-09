export interface DonationFormModel {
    id: number,
    OrganizationId: number,
    title: string,
    description: string,
    donation_amount_min:number,
    donation_amount_max:number,
}