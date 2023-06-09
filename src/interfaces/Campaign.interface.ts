export interface CampaignModel {
    id: number,
    OrganizationId: number,
    targate: number,
    supporters: string,
    raisedAmount: number,
    DonationFormId:number,
    sortDescription: string,
    longDescription: string,
    campaignLogo: string,
    primaryColor: string,
    fundraisingGoal: string,
    goalBarColor:string,
    teamApproval: 'enable' | 'disable',
    teamRegistration: 'enable' | 'disable',
    teamGoal: number,
    teamStory: string,
    teamRanking:  'enable' | 'disable',
    fundraiserApproval: 'enable' | 'disable',
    fundraiserGoal: number,
    fundraiserStoryPlaceholder: string,
    sponsor: 'enable' | 'disable',
    campaignTitle: string, 
    video: string,
    campaignEndMethod: string,
    startDate: Date,
    endDate: Date
}