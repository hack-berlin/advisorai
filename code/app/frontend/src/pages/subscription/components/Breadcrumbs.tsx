const breadcrumb = ["Contact details", "Investor profile", "Contract", "Finalization"];

const BreadcrumbItem = ({ step, item, currentStep }: { step: number, item: string; currentStep: number }) => {
  console.log({ step, item, currentStep })
  const isInProgress = (step + 1) === currentStep;

  const color = isInProgress ? "rgb(27, 67, 172) " : "rgb(146, 146, 146)";
  const backgroundColor = isInProgress ? "rgb(27, 67, 172)" : "rgb(229, 231, 235)";
  const textColor = isInProgress ? "rgb(255, 255, 255)" : "rgb(27, 67, 172)";
  // Add your logic for displaying breadcrumb item here
  // Use the isInProgress variable to determine if the step is in progress or not
  return <li
    className={isInProgress ? "is-inProgress alone" : "alone"}
    style={{
      borderWidth: "0px",
      borderStyle: "solid",
      borderColor: "rgba(229, 231, 235, 1)",
      boxSizing: "inherit",
      WebkitFontSmoothing: "antialiased",
      margin: "0px",
      padding: "0px",
      flexBasis: "0px",
      flexGrow: 1,
      maxWidth: "100%",
      textAlign: "center",
      position: "relative",
    }}
  >
    <div
      className="bread"
      style={{
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "rgba(229, 231, 235, 1)",
        boxSizing: "inherit",
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <span
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgba(229, 231, 235, 1)",
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          display: "block",
          fontWeight: 400,
          fontStretch: "normal",
          fontStyle: "normal",
          lineHeight: 1.13,
          color: "rgb(27, 67, 172)",
          fontSize: "16px",
          position: "relative",
        }}
      >
        <span
          className="rounded"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgba(229, 231, 235, 1)",
            boxSizing: "inherit",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            fontWeight: 400,
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.13,
            color: textColor,
            fontSize: "16px",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            backgroundColor: backgroundColor,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <a
            className={isInProgress ? "nuxt-link-exact-active nuxt-link-active" : ""}
            href="https://souscrire.placement-direct.fr/?produit=placement-direct-vie#/souscription/profil-investisseur"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgba(229, 231, 235, 1)",
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              textDecoration: "none",
              pointerEvents: "none",
              cursor: "pointer",
              width: "34px",
              height: "34px",
              textAlign: "center",
              color: textColor,
              lineHeight: "36px",
              fontSize: "16px",
              fontWeight: 500,
              position: "relative",
              zIndex: 2,
              display: "block",
            }}
          >
            {step + 1}
          </a>
        </span>
      </span>{" "}
      <a
        className={isInProgress ? "nuxt-link-exact-active nuxt-link-active" : ""}
        href="https://souscrire.placement-direct.fr/?produit=placement-direct-vie#/souscription/profil-investisseur"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgba(229, 231, 235, 1)",
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          textDecoration: "none",
          color: color,
          pointerEvents: "none",
          cursor: "pointer",
        }}
      >
        <span
          className="txt is-hidden-mobile"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgba(229, 231, 235, 1)",
            boxSizing: "inherit",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            fontWeight: 400,
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.13,
            fontSize: "16px",
            position: "relative",
            marginTop: "10px",
            color: color,
          }}
        >
          {item}
        </span>
      </a>
    </div>{" "}
  </li>;
};

export default function Breadcrumbs({ currentStep }: { currentStep: number }) {
  return (
    <>
      <section
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgba(229, 231, 235, 1)",
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          display: "block",
        }}
      >
        <nav
          className="breadcrumb-pld container"
          aria-label="breadcrumbs"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgba(229, 231, 235, 1)",
            boxSizing: "inherit",
            WebkitFontSmoothing: "antialiased",
            margin: "0px auto",
            flexGrow: 1,
            position: "relative",
            width: "auto",
            marginBottom: "50px",
            maxWidth: "1344px",
          }}
        >
          <ul
            className="is-flex"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgba(229, 231, 235, 1)",
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              padding: "0px",
              listStyle: "none",
              overflow: "hidden",
              margin: "0px -25px",
              display: "flex",
            }}
          >
            {breadcrumb.map((item, index) => <BreadcrumbItem step={index} item={item} currentStep={currentStep ?? 1} />)}
          </ul>
        </nav>
      </section>
    </>
  );
}