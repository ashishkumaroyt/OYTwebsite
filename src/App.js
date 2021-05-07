import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import MainNav from "./Components/mainNav";
import SmallNav from "./Components/smallNav";
import Footer from "./Components/footer";
import Services from "./Pages/Services";
import ComingSoon from "./Pages/ComingSoon";
import CareerPage from "./Pages/Career";
import NotFound from "./Pages/notFound";
import BlogList from "./Components/blogListView";
import BlogDetail from "./Components/blogDetailView";
import IdeaSubmission from "./Pages/IdeaSubmissionForm";
import JobApplicationForm from "./Components/jobApplicationForm";
import IotPage from "./Pages/IOTPage";
import IdeationPage from "./Pages/IdeationPage";
import IndustryVisit from "./Pages/Industry_visit.js";
import PCBDesignPage from "./Pages/PCBDesign";
import PortfolioPage from "./Pages/PortfolioPage";
import privacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <SmallNav />
      <MainNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/ourServices" component={Services} />
        <Route exact path="/OurServices/IOT" component={IotPage} />
        <Route exact path="/OurServices/Ideation" component={IdeationPage} />
        <Route exact path="/OurServices/PCBdesign" component={PCBDesignPage} />

        <Route
          exact
          path="/OurServices/IdustryVisit"
          component={IndustryVisit}
        />
        <Route exact path="/careers" component={CareerPage} />
        <Route exact path="/blogs" component={BlogList} />
        <Route exact path="/blogs/:blogId" component={BlogDetail} />
        <Route exact path="/ideaSubmission" component={IdeaSubmission} />
        <Route
          exact
          path="/jobApplication/:jobId"
          component={JobApplicationForm}
        />
        <Route exact path="/Portfolio" component={PortfolioPage} />
        <Route exact path="/Privacy-policy" component={privacyPolicy} />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
