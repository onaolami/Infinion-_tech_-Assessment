export interface ICampaign {
  id?: number;
  campaignName: string;
  campaignDescription: string;
  startDate: Date;
  endDate: Date;
  digestCampaign: boolean | "Yes" | "No";
  linkedKeywords: string[];
  dailyDigest: string;
}
