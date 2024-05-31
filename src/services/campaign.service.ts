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

  getCampaign(id: number): Promise<AxiosResponse<ICampaign>> {
    return apiInstance.get(`/Campaign/${id}`);
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
}

const campaignService = new CampaignService();
export default campaignService;
