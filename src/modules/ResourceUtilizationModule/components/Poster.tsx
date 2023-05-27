import ResourceUtilizationPoster from "/images/ResourceUtilizationPoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Poster = () => {
  return (
    <section>
      <BannerComponent
        image={ResourceUtilizationPoster}
        title={
          <span>Storage <br />Providers</span>
        }
        subtitle="Track the SP accounts on Greenfield with GreenfieldLab."
      />
    </section>
  );
}

export default Poster;
