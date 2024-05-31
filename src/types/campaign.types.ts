export interface ICampaign {
  id?: number;
  campaignName: string;
  campaignDescription: string;
  campaignStatus?: "Active" | "Inactive";
  startDate?: Date;
  endDate?: Date;
  digestCampaign: boolean | "Yes" | "No";
  linkedKeywords: string[];
  dailyDigest: string;
}
