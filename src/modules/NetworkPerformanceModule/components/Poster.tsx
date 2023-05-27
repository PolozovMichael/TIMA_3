import NetworkPerformancePoster from "/images/NetworkPerformancePoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Poster = () => {
  return (
    <section>
      <BannerComponent
        image={NetworkPerformancePoster}
        title={
          <span>Network <br /> Performance</span>
        }
        subtitle="View your current Network Performance with GreenfieldLab"
      />
    </section>
  );
}

export default Poster;
