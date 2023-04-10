import StartupsDisplayFull from "./Display/Full";
import StartupsDisplayBase from "./Display/Base";

const StartupsDisplay = (props) => {
  const { startup, index, websiteAccess, setWebsiteAccess } = props;

  return (
    <>
      <StartupsDisplayFull
        startup={startup}
        index={index}
        websiteAccess={websiteAccess}
        setWebsiteAccess={setWebsiteAccess}
        display={{
          xxl: "flex",
          xl: "none",
          lg: "none",
          md: "none",
          sm: "none",
          base: "none",
        }}
      />

      <StartupsDisplayBase
        startup={startup}
        index={index}
        websiteAccess={websiteAccess}
        setWebsiteAccess={setWebsiteAccess}
        display={{
          xxl: "none",
          xl: "flex",
          lg: "flex",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
      />
    </>
  );
};

export default StartupsDisplay;
