export interface PermissionModel {
    id?: number,
    userId: number,
    roleId: number,
    module: 'Roles' | 'Permissions' | 'OrganizationTypes' | 'Organizations' | 'Messages' | 'Groups' | 'Funds' | 'FundRaiserTeams' | 'FundRaisers' | 'Donors' | 'DonationForms' | 'Campaigns',
    create: boolean,
    write: boolean,
    read: boolean,
    edit: boolean,
    delete: boolean
}