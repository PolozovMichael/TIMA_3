import RiskAnalysisPoster from "/images/RiskAnalysisPoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Poster = () => {
  return (
    <section>
      <BannerComponent
        image={RiskAnalysisPoster}
        title={
          <span>Risk <br /> Analysis</span>
        }
        subtitle="Manage your risks with GreenfieldLab"
      />
    </section>
  );
}

export default Poster;
