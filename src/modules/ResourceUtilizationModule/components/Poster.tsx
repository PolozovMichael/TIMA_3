import ResourceUtilizationPoster from "/images/ResourceUtilizationPoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Poster = () => {
  return (
    <section>
      <BannerComponent
        image={ResourceUtilizationPoster}
        title={
          <span>Resource <br />Utilization</span>
        }
        subtitle="View your current Resource  Utilization with GreenfieldLab"
      />
    </section>
  );
}

export default Poster;
