export interface FundRaiserTeamModel {
    id: number,
    CampaignId: number,
    target: number,
    supporters: string,
    raisedAmount: number,
    teamName: string,
    teamStory: string,
    profile: string,
    allowToJoinTeam: 'public' | 'closed'
}