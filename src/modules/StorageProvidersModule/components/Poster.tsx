import StorageProvidersPoster from "/images/StorageProvidersPoster.png";
import BannerComponent from "../../../components/BannerComponent";

const Poster = () => {
  return (
    <section>
      <BannerComponent
        image={StorageProvidersPoster}
        title={
          <span>Storage <br />Providers</span>
        }
        subtitle="Track the SP accounts on Greenfield with GreenfieldLab."
      />
    </section>
  );
}

export default Poster;
