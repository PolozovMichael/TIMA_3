import { FC, ReactNode } from "react";

interface BannerComponentProps {
  image: string;
  title: ReactNode;
  subtitle: string;
  children?: ReactNode;
}

const BannerComponent: FC<BannerComponentProps> = ({
  image,
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="banner">
      <img
        className="banner__background"
        src={image}
        alt="poster bg"
      />

      <div className="banner__block">
        <div className="banner__text">
          <p className="banner__title">{title}</p>
          <br /><br />
          <p className="banner__subtitle">{subtitle}</p>

          {children && (
            <>
              <br /><br />
              <br /><br />
              {children}
            </>
          )}
        </div>
        <div />
      </div>
    </div>
  );
}

export default BannerComponent;
