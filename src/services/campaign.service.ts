import { AxiosResponse } from "axios";
import { ICampaign } from "../types/campaign.types";
import apiInstance from "./api.service";

class CampaignService {
  createCampaign(data: ICampaign): Promise<AxiosResponse<any>> {
    return apiInstance.post("/Campaign", {
      ...data,
      digestCampaign: data.digestCampaign === "Yes",
    });
  }

  async getAllCampaigns(): Promise<ICampaign[]> {
    const res: AxiosResponse<ICampaign[]> = await apiInstance.get("/Campaign");
    return res.data;
  }

  async getCampaign(id: number): Promise<ICampaign> {
    const res: AxiosResponse<ICampaign> = await apiInstance.get(
      `/Campaign/${id}`
    );
    return res.data;
  }

  updateCampaign(data: ICampaign): Promise<AxiosResponse<any>> {
    return apiInstance.put(`/Campaign/${data.id}`, {
      ...data,
      digestCampaign: data.digestCampaign === "Yes",
    });
  }

  deleteCampaign(id: number): Promise<AxiosResponse<any>> {
    return apiInstance.delete(`/Campaign/${id}`);
  }

  setCampaignStatus(id: number, status: boolean) {
    return apiInstance.put(`/CampaignStatus/${id}`, {
      id: id,
      campaignStatus: status,
    });
  }
}

const campaignService = new CampaignService();
export default campaignService;
