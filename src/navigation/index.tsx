import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/Layout";
import OverviewPage from "../pages/overviewpage";
import CampaignPage from "../pages/campaignpage";
import NewCampaign from "../pages/newcampaign";
import CampaignInfo from "../pages/campaigninfo";

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<OverviewPage />} />
          <Route path="campaigns" element={<CampaignPage />} />
          <Route path="campaigns/new" element={<NewCampaign />} />
          <Route path="campaigns/:id" element={<CampaignInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
