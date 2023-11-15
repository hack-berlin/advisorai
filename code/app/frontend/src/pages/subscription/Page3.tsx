import React, { MouseEventHandler } from "react";
import Breadcrumbs from './components/Breadcrumbs';

export default function Component({ onNextClick }: { onNextClick: MouseEventHandler<HTMLButtonElement> }) {
  return (
    <>
      <div
        className="section"
        style={{
          borderWidth: "0px",
          borderStyle: "solid",
          borderColor: "rgba(229, 231, 235, 1)",
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          padding: "3rem",
        }}
      >
        <Breadcrumbs currentStep={3}></Breadcrumbs>

        <div
          className="container"
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
            maxWidth: "1344px",
          }}
        >
          <section
            id="main-content"
            style={{
              borderWidth: "0px",
              borderStyle: "solid",
              borderColor: "rgba(229, 231, 235, 1)",
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              display: "block",
            }}
          >
            <div
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgba(229, 231, 235, 1)",
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
              }}
            >
              <div
                className="columns relative form-container"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgba(229, 231, 235, 1)",
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  marginLeft: "-15px",
                  marginRight: "-15px",
                  marginTop: "-15px",
                  position: "relative",
                  marginBottom: "-15px",
                  display: "flex",
                }}
              >
                <div
                  className="column"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgba(229, 231, 235, 1)",
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    flex: "1 1 0px",
                    padding: "15px",
                    display: "block",
                  }}
                >
                  <h1
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      fontWeight: 700,
                      fontSize: "44px",
                      lineHeight: "52px",
                      textAlign: "center",
                      marginBottom: "28px",
                      letterSpacing: "normal",
                      color: "rgb(27, 67, 172)",
                    }}
                  >
                    Votre choix d’allocation financière
                  </h1>{" "}
                  <div
                    className="legend is-flex is-flex-wrap-wrap is-align-items-center has-text-grey"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      fontSize: "87%",
                      color: "rgb(122, 122, 122)",
                      flexWrap: "wrap",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div
                      className="is-flex is-align-items-start pld-mb-6 pld-mr-6"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        marginBottom: "1.5rem",
                        marginRight: "1.5rem",
                        alignItems: "start",
                        display: "flex",
                      }}
                    >
                      <img
                        className="mr-10 is-flex-shrink-0"
                        height={23}
                        width={19}
                        src="https://souscrire.placement-direct.fr/images/shield.svg"
                        style={{
                          borderWidth: "0px",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          borderStyle: "solid",
                          display: "block",
                          verticalAlign: "middle",
                          height: "auto",
                          maxWidth: "100%",
                          flexShrink: 0,
                          marginRight: "10px",
                        }}
                      />{" "}
                      <span
                        className="my-auto"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          fontStyle: "inherit",
                          fontWeight: "inherit",
                          marginTop: "auto",
                          marginBottom: "auto",
                        }}
                      >
                        Toutes les informations que vous nous communiquez
                        resteront confidentielles.
                      </span>
                    </div>{" "}
                    <div
                      className="required pld-mb-6 ml-auto"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        marginBottom: "1.5rem",
                        marginLeft: "auto",
                      }}
                    >
                      {"informations obligatoires"}
                    </div>
                  </div>{" "}
                  <div
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                    }}
                  >
                    <div
                      id="pi-accordion-0"
                      className="card collapse open"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        borderRadius: "0.25rem",
                        backgroundColor: "rgb(255, 255, 255)",
                        maxWidth: "100%",
                        marginBottom: "28px",
                        color: "rgb(10, 10, 10)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 15px",
                        position: "static",
                      }}
                    >
                      <div
                        className="accordion-trigger"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                        }}
                      >
                        <div
                          aria-controls="contentIdForA11y3"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                          }}
                        />
                      </div>{" "}
                      <div
                        id="contentIdForA11y3"
                        className="accordion-content"
                        aria-expanded="true"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          padding: "0px 30px 30px",
                        }}
                      >
                        {" "}
                        <h2
                          className="heading-2 pld-my-0 pld-py-8"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            letterSpacing: "normal",
                            color: "rgb(27, 67, 172)",
                            fontStretch: "normal",
                            fontStyle: "normal",
                            marginTop: "0px",
                            marginBottom: "0px",
                            paddingTop: "2rem",
                            paddingBottom: "2rem",
                            fontWeight: 700,
                            fontSize: "26px",
                            lineHeight: "34px",
                          }}
                        >
                          Comment souhaitez-vous répartir votre investissement ?
                        </h2>{" "}
                        <section
                          id="TypeRepartition"
                          className="full-select"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            display: "block",
                          }}
                        >
                          <div
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          >
                            {" "}
                            <div
                              id="TypeRepartition"
                              className="field"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            >
                              {" "}
                              <div
                                className="is-centered"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                }}
                              >
                                {" "}
                                <div
                                  className="columns is-multiline with-default-border is-mobile gap-y-10 is-variable is-2 is-centered"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    display: "flex",
                                    marginLeft: "calc(.5rem*-1)",
                                    marginRight: "calc(.5rem*-1)",
                                    marginTop: "-10px",
                                    marginBottom: "-10px",
                                  }}
                                >
                                  <div
                                    className="is-flex is-flex-wrap-wrap column is-12-mobile is-6-tablet is-4-desktop"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      padding: "15px",
                                      flex: "0 0 auto",
                                      width: "33.3333%",
                                      paddingLeft: ".5rem",
                                      paddingRight: ".5rem",
                                      paddingTop: "10px",
                                      paddingBottom: "10px",
                                      flexWrap: "wrap",
                                      display: "flex",
                                    }}
                                  >
                                    <button
                                      className="button is-radio-checkbox is-size-6 is-active has-text-weight-medium !pld-shadow-md w-full"
                                      type="button"
                                      style={{
                                        borderStyle: "solid",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        textTransform: "none",
                                        margin: "0px",
                                        fontFamily: "Roboto, sans-serif",
                                        appearance: "none",
                                        alignItems: "center",
                                        display: "inline-flex",
                                        lineHeight: 1.5,
                                        position: "relative",
                                        verticalAlign: "top",
                                        userSelect: "none",
                                        cursor: "pointer",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        borderRadius: "10px",
                                        whiteSpace: "unset",
                                        height: "auto",
                                        outline: "none",
                                        width: "100%",
                                        background: "none",
                                        textDecoration: "none",
                                        backgroundImage: "none",
                                        padding: "23px",
                                        boxShadow:
                                          "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        backgroundColor: "rgb(255, 255, 255)",
                                        border: "2px solid rgb(122, 122, 122)",
                                        borderColor: "rgb(27, 67, 172)",
                                        borderWidth: "3px",
                                        color: "rgb(27, 67, 172)",
                                      }}
                                    >
                                      {" "}
                                      <label
                                        className="b-radio radio is-hidden"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          cursor: "pointer",
                                          lineHeight: 1.25,
                                          position: "relative",
                                          userSelect: "none",
                                          outline: "none",
                                          alignItems: "center",
                                          marginBottom: "0px",
                                          marginLeft: "0px",
                                          color: "rgb(0, 0, 0)",
                                          fontSize: "16px",
                                          display: "none",
                                          marginRight: "60px",
                                        }}
                                      >
                                        <input
                                          type="radio"
                                          value="602"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontSize: "100%",
                                            padding: "0px",
                                            lineHeight: "inherit",
                                            color: "inherit",
                                            margin: "0px",
                                            fontFamily: "Roboto, sans-serif",
                                            verticalAlign: "baseline",
                                            cursor: "pointer",
                                            outline: "none",
                                            position: "absolute",
                                            left: "0px",
                                            opacity: 0,
                                            zIndex: -1,
                                          }}
                                        />
                                        <span
                                          className="check"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            transition:
                                              "background 0.15s ease-out 0s",
                                            borderRadius: "50%",
                                            display: "flex",
                                            flexShrink: 0,
                                            position: "relative",
                                            cursor: "pointer",
                                            borderColor: "rgb(27, 67, 172)",
                                            border: "2px solid rgb(10, 10, 10)",
                                            width: "20px",
                                            height: "20px",
                                          }}
                                        />
                                        <span
                                          className="control-label"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            paddingLeft: "6px",
                                          }}
                                        />
                                      </label>{" "}
                                      <div
                                        className="is-flex-grow-1 has-text-weight-normal has-text-center is-active has-text-weight-medium"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          flexGrow: 1,
                                          fontWeight: 500,
                                        }}
                                      >
                                        <div
                                          className="fs-16 has-text-weight-semibold"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          }}
                                        >
                                          Allocation sur-mesure
                                        </div>{" "}
                                        <div
                                          className="fs-16"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontSize: "16px",
                                          }}
                                        >
                                          Vous choisissez votre répartition
                                        </div>
                                      </div>
                                    </button>{" "}
                                    <div
                                      className="pld-mt-4"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        marginTop: "1rem",
                                      }}
                                    />
                                  </div>
                                  <div
                                    className="is-flex is-flex-wrap-wrap column is-12-mobile is-6-tablet is-4-desktop"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      padding: "15px",
                                      flex: "0 0 auto",
                                      width: "33.3333%",
                                      paddingLeft: ".5rem",
                                      paddingRight: ".5rem",
                                      paddingTop: "10px",
                                      paddingBottom: "10px",
                                      flexWrap: "wrap",
                                      display: "flex",
                                    }}
                                  >
                                    <button
                                      className="button is-radio-checkbox is-size-6 w-full"
                                      type="button"
                                      style={{
                                        borderStyle: "solid",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        textTransform: "none",
                                        margin: "0px",
                                        fontFamily: "Roboto, sans-serif",
                                        appearance: "none",
                                        alignItems: "center",
                                        boxShadow: "none",
                                        display: "inline-flex",
                                        lineHeight: 1.5,
                                        position: "relative",
                                        verticalAlign: "top",
                                        userSelect: "none",
                                        borderWidth: "1px",
                                        cursor: "pointer",
                                        justifyContent: "center",
                                        textAlign: "center",
                                        padding: "24px",
                                        borderRadius: "10px",
                                        whiteSpace: "unset",
                                        height: "auto",
                                        width: "100%",
                                        background: "none",
                                        borderColor: "transparent",
                                        textDecoration: "none",
                                        backgroundImage: "none",
                                        fontSize: "1rem",
                                        backgroundColor: "rgb(255, 255, 255)",
                                        border: "2px solid rgb(122, 122, 122)",
                                        color: "rgb(74, 74, 74)",
                                      }}
                                    >
                                      {" "}
                                      <label
                                        className="b-radio radio is-hidden"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          cursor: "pointer",
                                          lineHeight: 1.25,
                                          position: "relative",
                                          userSelect: "none",
                                          outline: "none",
                                          alignItems: "center",
                                          marginBottom: "0px",
                                          marginLeft: "0px",
                                          color: "rgb(0, 0, 0)",
                                          fontSize: "16px",
                                          display: "none",
                                          marginRight: "60px",
                                        }}
                                      >
                                        <input
                                          type="radio"
                                          value="601"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontSize: "100%",
                                            padding: "0px",
                                            lineHeight: "inherit",
                                            color: "inherit",
                                            margin: "0px",
                                            fontFamily: "Roboto, sans-serif",
                                            verticalAlign: "baseline",
                                            cursor: "pointer",
                                            outline: "none",
                                            position: "absolute",
                                            left: "0px",
                                            opacity: 0,
                                            zIndex: -1,
                                          }}
                                        />
                                        <span
                                          className="check"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            transition:
                                              "background 0.15s ease-out 0s",
                                            borderRadius: "50%",
                                            display: "flex",
                                            flexShrink: 0,
                                            position: "relative",
                                            cursor: "pointer",
                                            border: "2px solid rgb(10, 10, 10)",
                                            width: "20px",
                                            height: "20px",
                                          }}
                                        />
                                        <span
                                          className="control-label"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            paddingLeft: "6px",
                                          }}
                                        />
                                      </label>{" "}
                                      <div
                                        className="is-flex-grow-1 has-text-weight-normal has-text-center"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          flexGrow: 1,
                                          fontWeight: 400,
                                        }}
                                      >
                                        <div
                                          className="fs-16 has-text-weight-semibold"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontWeight: 600,
                                            fontSize: "16px",
                                          }}
                                        >
                                          Allocation prédéfinie
                                        </div>{" "}
                                        <div
                                          className="fs-16"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontSize: "16px",
                                          }}
                                        >
                                          Nous vous proposons une répartition
                                        </div>
                                      </div>
                                    </button>{" "}
                                    <div
                                      className="pld-mt-4"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        marginTop: "1rem",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                              <p
                                className="help"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  margin: "0px",
                                  padding: "0px",
                                  display: "block",
                                  paddingTop: "0px",
                                  marginTop: "10px",
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  fontStretch: "normal",
                                  fontStyle: "normal",
                                  lineHeight: 1.36,
                                  letterSpacing: "normal",
                                }}
                              >
                                <ul
                                  className="is-italic"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    margin: "0px",
                                    padding: "0px",
                                    listStyle: "none",
                                    fontStyle: "italic",
                                    marginBottom: "10px",
                                  }}
                                >
                                  <li
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      margin: "0px",
                                      padding: "0px",
                                      marginBottom: "10px",
                                    }}
                                  />
                                </ul>
                              </p>
                            </div>
                          </div>{" "}
                          <div
                            className="pld-my-8"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              marginTop: "2rem",
                              marginBottom: "2rem",
                            }}
                          >
                            <div
                              className="form-container full-select"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            >
                              <span
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  fontStyle: "inherit",
                                  fontWeight: "inherit",
                                }}
                              >
                                <div
                                  className="is-flex pld-p-[16px] md:pld-p-[30px] !pld-cursor-pointer pld-border pld-border-solid pld-border-black pld-border-b-0 pld-rounded-b-none"
                                  role="button"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    borderBottomRightRadius: "0px",
                                    borderBottomLeftRadius: "0px",
                                    borderWidth: "1px",
                                    borderBottomWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    padding: "30px",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                >
                                  <p
                                    className="card-header-title pld-p-0 pld-text-[18px]"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      margin: "0px",
                                      lineHeight: "24px",
                                      fontSize: "18px",
                                      padding: "0.75rem 1rem",
                                      alignItems: "center",
                                      color: "rgb(54, 54, 54)",
                                      display: "flex",
                                      flexGrow: 1,
                                      fontWeight: 700,
                                    }}
                                  >
                                    {"Répartition de votre versement"}
                                    <span
                                      className="is-uppercase has-text-success"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        color: "rgb(72, 199, 142)",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      Initial
                                    </span>
                                  </p>{" "}
                                  <a
                                    className="card-header-icon"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      background: "none",
                                      border: "none",
                                      margin: "0px",
                                      appearance: "none",
                                      color: "currentcolor",
                                      fontFamily: "inherit",
                                      fontSize: "1em",
                                      alignItems: "center",
                                      cursor: "pointer",
                                      display: "flex",
                                      padding: "0px",
                                      width: "40px",
                                      height: "40px",
                                    }}
                                  >
                                    <span
                                      className="icon"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        alignItems: "center",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        height: "1.5rem",
                                        width: "1.5rem",
                                        userSelect: "none",
                                        cursor: "inherit",
                                      }}
                                    >
                                      <i
                                        className="mdi mdi-chevron-down mdi-24px"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      />
                                    </span>
                                  </a>
                                </div>{" "}
                                <div
                                  className="collapse card !pld-border-black !pld-mb-4 !pld-border-t-0 !pld-rounded-t-none"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    borderRadius: "0.25rem",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    maxWidth: "100%",
                                    boxShadow: "none",
                                    color: "rgb(10, 10, 10)",
                                    border: "1px solid rgb(224, 222, 222)",
                                    marginBottom: "1rem",
                                    borderTopLeftRadius: "0px",
                                    borderTopRightRadius: "0px",
                                    borderTopWidth: "0px",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    position: "static",
                                  }}
                                >
                                  <div
                                    className="collapse-trigger"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <div
                                    className="collapse-content"
                                    aria-expanded="true"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inherit",
                                    }}
                                  >
                                    <div
                                      className="card-content !pld-pt-0 !pld-px-16 pld-space-y-[30px]"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        padding: "1.5rem",
                                        backgroundColor: "transparent",
                                        borderTopLeftRadius: "0.25rem",
                                        borderTopRightRadius: "0.25rem",
                                        borderBottomLeftRadius: "0.25rem",
                                        borderBottomRightRadius: "0.25rem",
                                        paddingLeft: "4rem",
                                        paddingRight: "4rem",
                                        paddingTop: "0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      >
                                        <section
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            display: "block",
                                          }}
                                        >
                                          <div
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                            }}
                                          >
                                            {" "}
                                            <div
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                              }}
                                            >
                                              <span
                                                className="scroll-to-if-validation-error"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                }}
                                              >
                                                {" "}
                                                <input
                                                  type="hidden"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                  }}
                                                />{" "}
                                              </span>{" "}
                                              <div
                                                className="is-flex is-align-items-baseline is-justify-content-space-between pld-mb-5 md:pld-mb-4"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  marginBottom: "1rem",
                                                  justifyContent:
                                                    "space-between",
                                                  alignItems: "baseline",
                                                  display: "flex",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                  }}
                                                >
                                                  Supports
                                                </div>{" "}
                                                <div
                                                  className="pld-space-x-2"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      fontStyle: "inherit",
                                                      fontWeight: "inherit",
                                                    }}
                                                  >
                                                    En %
                                                  </span>{" "}
                                                  <label
                                                    className="switch is-rounded"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      userSelect: "none",
                                                      cursor: "pointer",
                                                      display: "inline-flex",
                                                      alignItems: "center",
                                                      position: "relative",
                                                      marginRight:
                                                        "calc(0.5rem * 0)",
                                                      marginLeft:
                                                        "calc(0.5rem * calc(1 - 0))",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      value="false"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontSize: "100%",
                                                        padding: "0px",
                                                        lineHeight: "inherit",
                                                        color: "inherit",
                                                        margin: "0px",
                                                        fontFamily:
                                                          "Roboto, sans-serif",
                                                        verticalAlign:
                                                          "baseline",
                                                        outline: "none",
                                                        position: "absolute",
                                                        left: "0px",
                                                        opacity: 0,
                                                        zIndex: -1,
                                                      }}
                                                    />
                                                    <span
                                                      className="check is-primary-passive is-primary"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontStyle: "inherit",
                                                        fontWeight: "inherit",
                                                        padding: "0.2em",
                                                        transition:
                                                          "background 0.15s ease-out 0s, box-shadow 0.15s ease-out 0s",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        flexShrink: 0,
                                                        width: "2.75em",
                                                        height: "1.575em",
                                                        borderRadius: "9999px",
                                                        background:
                                                          "rgb(27, 67, 172)",
                                                      }}
                                                    />
                                                  </label>{" "}
                                                  <span
                                                    className="has-text-weight-bold"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      fontStyle: "inherit",
                                                      marginRight:
                                                        "calc(0.5rem * 0)",
                                                      marginLeft:
                                                        "calc(0.5rem * calc(1 - 0))",
                                                      fontWeight: 700,
                                                    }}
                                                  >
                                                    En €
                                                  </span>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className="b-table supports"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  transition:
                                                    "opacity 86ms ease-out 0s",
                                                }}
                                              >
                                                {" "}
                                                <div
                                                  className="table-wrapper"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    position: "relative",
                                                  }}
                                                >
                                                  <table
                                                    className="table"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      borderColor: "inherit",
                                                      textIndent: "0px",
                                                      borderSpacing: "0px",
                                                      backgroundColor:
                                                        "rgb(255, 255, 255)",
                                                      color: "rgb(54, 54, 54)",
                                                      marginBottom: "0px",
                                                      border:
                                                        "1px solid transparent",
                                                      borderRadius: "4px",
                                                      width: "100%",
                                                      borderCollapse:
                                                        "collapse",
                                                    }}
                                                  >
                                                    <tbody
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        backgroundColor:
                                                          "transparent",
                                                      }}
                                                    >
                                                      <tr
                                                        className="is-empty"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                        }}
                                                      >
                                                        <td
                                                          colSpan={4}
                                                          style={{
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgb(224, 222, 222)",
                                                            borderImage:
                                                              "initial",
                                                            verticalAlign:
                                                              "top",
                                                            textAlign:
                                                              "inherit",
                                                            borderWidth:
                                                              "1px 0px",
                                                            padding: "0px",
                                                            borderBottomWidth:
                                                              "1px",
                                                          }}
                                                        />
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className="pld-flex pld-flex-row pld-items-center pld-border-b-2 pld-border-[#e0dede] pld-py-2 pld-cursor-pointer"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  borderBottomWidth: "2px",
                                                  borderColor:
                                                    "rgba(224, 222, 222, 1)",
                                                  paddingTop: "0.5rem",
                                                  paddingBottom: "0.5rem",
                                                }}
                                              >
                                                <img
                                                  className="pld-h-8 pld-mr-2 pld-ml-4"
                                                  src="https://souscrire.placement-direct.fr/images/add.svg"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    display: "block",
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    marginLeft: "1rem",
                                                    marginRight: "0.5rem",
                                                    height: "2rem",
                                                  }}
                                                />{" "}
                                                <span
                                                  className="has-text-primary has-text-weight-semibold"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Sélectionner un ou plusieurs
                                                  supports en GESTION LIBRE
                                                </span>
                                              </div>{" "}
                                              <div
                                                className="pld-flex pld-flex-row pld-items-center pld-border-b-2 pld-border-[#e0dede] pld-py-2 pld-cursor-pointer"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  borderBottomWidth: "2px",
                                                  borderColor:
                                                    "rgba(224, 222, 222, 1)",
                                                  paddingTop: "0.5rem",
                                                  paddingBottom: "0.5rem",
                                                }}
                                              >
                                                <img
                                                  className="pld-h-8 pld-mr-2 pld-ml-4"
                                                  src="https://souscrire.placement-direct.fr/images/add.svg"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    display: "block",
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    marginLeft: "1rem",
                                                    marginRight: "0.5rem",
                                                    height: "2rem",
                                                  }}
                                                />{" "}
                                                <span
                                                  className="has-text-primary has-text-weight-semibold"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Sélectionner un profil de
                                                  GESTION DÉLÉGUÉE
                                                </span>
                                              </div>{" "}
                                              <div
                                                className="pld-flex pld-justify-between pld-py-3 pld-bg-[#1C43AD20]"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                  backgroundColor:
                                                    "rgba(28, 67, 173, 0.125)",
                                                  paddingTop: "0.75rem",
                                                  paddingBottom: "0.75rem",
                                                }}
                                              >
                                                <span
                                                  className="has-text-primary has-text-weight-semibold pld-ml-6"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    marginLeft: "1.5rem",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Reste à répartir
                                                </span>{" "}
                                                <span
                                                  className="has-text-primary has-text-weight-semibold pld-mr-8"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    marginRight: "2rem",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  1 000 €
                                                </span>
                                              </div>{" "}
                                              <span
                                                className="column is-12 !pld-p-0 scroll-to-if-validation-error"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  display: "block",
                                                  flex: "0 0 auto",
                                                  width: "100%",
                                                  padding: "0px",
                                                }}
                                              >
                                                {" "}
                                                <input
                                                  type="hidden"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                  }}
                                                />{" "}
                                              </span>
                                            </div>
                                          </div>{" "}
                                          <div
                                            className="pld-space-y-2 pld-mt-4"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              marginTop: "1rem",
                                            }}
                                          >
                                            {" "}
                                          </div>
                                        </section>
                                      </div>{" "}
                                      <label
                                        className="b-checkbox checkbox"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          cursor: "pointer",
                                          lineHeight: 1.25,
                                          position: "relative",
                                          userSelect: "none",
                                          outline: "none",
                                          display: "inline-flex",
                                          alignItems: "center",
                                          color: "rgb(0, 0, 0)",
                                          fontSize: "16px",
                                          marginTop: "calc(30px * calc(1 - 0))",
                                          marginBottom: "calc(30px * 0)",
                                          marginRight: "0.5em",
                                        }}
                                      >
                                        <input
                                          type="checkbox"
                                          autoComplete="on"
                                          value="false"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontSize: "100%",
                                            padding: "0px",
                                            lineHeight: "inherit",
                                            color: "inherit",
                                            margin: "0px",
                                            fontFamily: "Roboto, sans-serif",
                                            verticalAlign: "baseline",
                                            cursor: "pointer",
                                            outline: "none",
                                            position: "absolute",
                                            left: "0px",
                                            opacity: 0,
                                            zIndex: -1,
                                          }}
                                        />
                                        <span
                                          className="check"
                                          style={{
                                            borderStyle: "solid",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            borderRadius: "4px",
                                            border:
                                              "2px solid rgb(122, 122, 122)",
                                            transition:
                                              "background 0.15s ease-out 0s",
                                            background: "transparent",
                                            flexShrink: 0,
                                            borderWidth: "2px",
                                            borderColor: "rgb(54, 54, 54)",
                                            height: "20px",
                                            width: "20px",
                                          }}
                                        />
                                        <span
                                          className="control-label"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            paddingLeft: "calc(0.75em - 1px)",
                                          }}
                                        >
                                          {
                                            "Utiliser cette répartition pour mes versements programmés"
                                          }
                                        </span>
                                      </label>{" "}
                                      <button
                                        className="btn_1P7x4 block_1Jg7s outlined_3xSXE yellow_sJHfv pld-mx-auto"
                                        aria-label="Suivant"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          appearance: "button",
                                          lineHeight: "inherit",
                                          margin: "0px",
                                          fontFamily: "Roboto, sans-serif",
                                          outline: "none",
                                          border: "none",
                                          background: "unset",
                                          transition:
                                            "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          textTransform: "uppercase",
                                          userSelect: "none",
                                          cursor: "pointer",
                                          fontWeight: 700,
                                          backgroundImage: "unset",
                                          fontSize: "17px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          display: "flex",
                                          borderRadius: "40px",
                                          padding: "0px 40px",
                                          height: "60px",
                                          color: "rgb(10, 10, 10)",
                                          backgroundColor: "rgb(255, 255, 255)",
                                          marginTop: "calc(30px * calc(1 - 0))",
                                          marginBottom: "calc(30px * 0)",
                                          boxShadow:
                                            "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 1px #ffd100",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            pointerEvents: "none",
                                          }}
                                        >
                                          Suivant
                                        </span>{" "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </span>{" "}
                              <span
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  fontStyle: "inherit",
                                  fontWeight: "inherit",
                                }}
                              >
                                <div
                                  className="is-flex pld-p-[16px] md:pld-p-[30px] !pld-cursor-pointer pld-border pld-border-solid pld-border-black pld-mt-4 pld-border-b-0 pld-rounded-b-none"
                                  role="button"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    marginTop: "1rem",
                                    borderBottomRightRadius: "0px",
                                    borderBottomLeftRadius: "0px",
                                    borderWidth: "1px",
                                    borderBottomWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    padding: "30px",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                >
                                  <p
                                    className="card-header-title pld-p-0 pld-text-[18px]"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      margin: "0px",
                                      lineHeight: "24px",
                                      fontSize: "18px",
                                      padding: "0.75rem 1rem",
                                      alignItems: "center",
                                      color: "rgb(54, 54, 54)",
                                      display: "flex",
                                      flexGrow: 1,
                                      fontWeight: 700,
                                    }}
                                  >
                                    {"Répartition de votre versement"}
                                    <span
                                      className="is-uppercase has-text-success"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        color: "rgb(72, 199, 142)",
                                        textTransform: "uppercase",
                                      }}
                                    >
                                      Programmé
                                    </span>
                                  </p>{" "}
                                  <a
                                    className="card-header-icon"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      background: "none",
                                      border: "none",
                                      margin: "0px",
                                      appearance: "none",
                                      color: "currentcolor",
                                      fontFamily: "inherit",
                                      fontSize: "1em",
                                      alignItems: "center",
                                      cursor: "pointer",
                                      display: "flex",
                                      padding: "0px",
                                      width: "40px",
                                      height: "40px",
                                    }}
                                  >
                                    <span
                                      className="icon"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        alignItems: "center",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        height: "1.5rem",
                                        width: "1.5rem",
                                        userSelect: "none",
                                        cursor: "inherit",
                                      }}
                                    >
                                      <i
                                        className="mdi mdi-chevron-down mdi-24px"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      />
                                    </span>
                                  </a>
                                </div>{" "}
                                <div
                                  className="collapse card !pld-border-black !pld-mb-4 !pld-border-t-0 !pld-rounded-t-none"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    borderRadius: "0.25rem",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    maxWidth: "100%",
                                    boxShadow: "none",
                                    color: "rgb(10, 10, 10)",
                                    border: "1px solid rgb(224, 222, 222)",
                                    marginBottom: "1rem",
                                    borderTopLeftRadius: "0px",
                                    borderTopRightRadius: "0px",
                                    borderTopWidth: "0px",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    position: "static",
                                  }}
                                >
                                  <div
                                    className="collapse-trigger"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <div
                                    className="collapse-content"
                                    aria-expanded="true"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inherit",
                                    }}
                                  >
                                    <div
                                      className="card-content !pld-pt-0 !pld-px-16 pld-space-y-[30px]"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        padding: "1.5rem",
                                        backgroundColor: "transparent",
                                        borderTopLeftRadius: "0.25rem",
                                        borderTopRightRadius: "0.25rem",
                                        borderBottomLeftRadius: "0.25rem",
                                        borderBottomRightRadius: "0.25rem",
                                        paddingLeft: "4rem",
                                        paddingRight: "4rem",
                                        paddingTop: "0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      >
                                        <section
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            display: "block",
                                          }}
                                        >
                                          <div
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                            }}
                                          >
                                            {" "}
                                            <div
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                              }}
                                            >
                                              <span
                                                className="scroll-to-if-validation-error"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                }}
                                              >
                                                {" "}
                                                <input
                                                  type="hidden"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                  }}
                                                />{" "}
                                              </span>{" "}
                                              <div
                                                className="is-flex is-align-items-baseline is-justify-content-space-between pld-mb-5 md:pld-mb-4"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  marginBottom: "1rem",
                                                  justifyContent:
                                                    "space-between",
                                                  alignItems: "baseline",
                                                  display: "flex",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                  }}
                                                >
                                                  Supports
                                                </div>{" "}
                                                <div
                                                  className="pld-space-x-2"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                  }}
                                                >
                                                  <span
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      fontStyle: "inherit",
                                                      fontWeight: "inherit",
                                                    }}
                                                  >
                                                    En %
                                                  </span>{" "}
                                                  <label
                                                    className="switch is-rounded"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      userSelect: "none",
                                                      cursor: "pointer",
                                                      display: "inline-flex",
                                                      alignItems: "center",
                                                      position: "relative",
                                                      marginRight:
                                                        "calc(0.5rem * 0)",
                                                      marginLeft:
                                                        "calc(0.5rem * calc(1 - 0))",
                                                    }}
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      value="false"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontSize: "100%",
                                                        padding: "0px",
                                                        lineHeight: "inherit",
                                                        color: "inherit",
                                                        margin: "0px",
                                                        fontFamily:
                                                          "Roboto, sans-serif",
                                                        verticalAlign:
                                                          "baseline",
                                                        outline: "none",
                                                        position: "absolute",
                                                        left: "0px",
                                                        opacity: 0,
                                                        zIndex: -1,
                                                      }}
                                                    />
                                                    <span
                                                      className="check is-primary-passive is-primary"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontStyle: "inherit",
                                                        fontWeight: "inherit",
                                                        padding: "0.2em",
                                                        transition:
                                                          "background 0.15s ease-out 0s, box-shadow 0.15s ease-out 0s",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        flexShrink: 0,
                                                        width: "2.75em",
                                                        height: "1.575em",
                                                        borderRadius: "9999px",
                                                        background:
                                                          "rgb(27, 67, 172)",
                                                      }}
                                                    />
                                                  </label>{" "}
                                                  <span
                                                    className="has-text-weight-bold"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      fontStyle: "inherit",
                                                      marginRight:
                                                        "calc(0.5rem * 0)",
                                                      marginLeft:
                                                        "calc(0.5rem * calc(1 - 0))",
                                                      fontWeight: 700,
                                                    }}
                                                  >
                                                    En €
                                                  </span>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className="b-table supports"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  transition:
                                                    "opacity 86ms ease-out 0s",
                                                }}
                                              >
                                                {" "}
                                                <div
                                                  className="table-wrapper"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    position: "relative",
                                                  }}
                                                >
                                                  <table
                                                    className="table"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      borderColor: "inherit",
                                                      textIndent: "0px",
                                                      borderSpacing: "0px",
                                                      backgroundColor:
                                                        "rgb(255, 255, 255)",
                                                      color: "rgb(54, 54, 54)",
                                                      marginBottom: "0px",
                                                      border:
                                                        "1px solid transparent",
                                                      borderRadius: "4px",
                                                      width: "100%",
                                                      borderCollapse:
                                                        "collapse",
                                                    }}
                                                  >
                                                    <tbody
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        backgroundColor:
                                                          "transparent",
                                                      }}
                                                    >
                                                      <tr
                                                        className="is-empty"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                        }}
                                                      >
                                                        <td
                                                          colSpan={4}
                                                          style={{
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgb(224, 222, 222)",
                                                            borderImage:
                                                              "initial",
                                                            verticalAlign:
                                                              "top",
                                                            textAlign:
                                                              "inherit",
                                                            borderWidth:
                                                              "1px 0px",
                                                            padding: "0px",
                                                            borderBottomWidth:
                                                              "1px",
                                                          }}
                                                        />
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>{" "}
                                              <div
                                                className="pld-flex pld-flex-row pld-items-center pld-border-b-2 pld-border-[#e0dede] pld-py-2 pld-cursor-pointer"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  borderBottomWidth: "2px",
                                                  borderColor:
                                                    "rgba(224, 222, 222, 1)",
                                                  paddingTop: "0.5rem",
                                                  paddingBottom: "0.5rem",
                                                }}
                                              >
                                                <img
                                                  className="pld-h-8 pld-mr-2 pld-ml-4"
                                                  src="https://souscrire.placement-direct.fr/images/add.svg"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    display: "block",
                                                    verticalAlign: "middle",
                                                    maxWidth: "100%",
                                                    marginLeft: "1rem",
                                                    marginRight: "0.5rem",
                                                    height: "2rem",
                                                  }}
                                                />{" "}
                                                <span
                                                  className="has-text-primary has-text-weight-semibold"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Sélectionner un ou plusieurs
                                                  supports en GESTION LIBRE
                                                </span>
                                              </div>{" "}
                                              <div
                                                className="pld-flex pld-justify-between pld-py-3 pld-bg-[#1C43AD20]"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  justifyContent:
                                                    "space-between",
                                                  backgroundColor:
                                                    "rgba(28, 67, 173, 0.125)",
                                                  paddingTop: "0.75rem",
                                                  paddingBottom: "0.75rem",
                                                }}
                                              >
                                                <span
                                                  className="has-text-primary has-text-weight-semibold pld-ml-6"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    marginLeft: "1.5rem",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  Reste à répartir
                                                </span>{" "}
                                                <span
                                                  className="has-text-primary has-text-weight-semibold pld-mr-8"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontStyle: "inherit",
                                                    marginRight: "2rem",
                                                    color: "rgb(27, 67, 172)",
                                                    fontWeight: 600,
                                                  }}
                                                >
                                                  1 000 €
                                                </span>
                                              </div>{" "}
                                              <span
                                                className="column is-12 !pld-p-0 scroll-to-if-validation-error"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  display: "block",
                                                  flex: "0 0 auto",
                                                  width: "100%",
                                                  padding: "0px",
                                                }}
                                              >
                                                {" "}
                                                <input
                                                  type="hidden"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                  }}
                                                />{" "}
                                              </span>
                                            </div>
                                          </div>{" "}
                                          <div
                                            className="pld-space-y-2 pld-mt-4"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              marginTop: "1rem",
                                            }}
                                          >
                                            {" "}
                                          </div>
                                        </section>
                                      </div>{" "}
                                      <button
                                        className="btn_1P7x4 block_1Jg7s outlined_3xSXE yellow_sJHfv pld-mx-auto"
                                        aria-label="Suivant"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          appearance: "button",
                                          lineHeight: "inherit",
                                          margin: "0px",
                                          fontFamily: "Roboto, sans-serif",
                                          outline: "none",
                                          border: "none",
                                          background: "unset",
                                          transition:
                                            "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          textTransform: "uppercase",
                                          userSelect: "none",
                                          cursor: "pointer",
                                          fontWeight: 700,
                                          backgroundImage: "unset",
                                          fontSize: "17px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          display: "flex",
                                          borderRadius: "40px",
                                          padding: "0px 40px",
                                          height: "60px",
                                          color: "rgb(10, 10, 10)",
                                          backgroundColor: "rgb(255, 255, 255)",
                                          marginTop: "calc(30px * calc(1 - 0))",
                                          marginBottom: "calc(30px * 0)",
                                          boxShadow:
                                            "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 1px #ffd100",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            pointerEvents: "none",
                                          }}
                                        >
                                          Suivant
                                        </span>{" "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </span>{" "}
                              <span
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  fontStyle: "inherit",
                                  fontWeight: "inherit",
                                }}
                              >
                                <div
                                  className="is-flex pld-p-[16px] md:pld-p-[30px] !pld-cursor-pointer pld-border pld-border-solid pld-border-black pld-mt-4 pld-border-b-0 pld-rounded-b-none"
                                  role="button"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    marginTop: "1rem",
                                    borderBottomRightRadius: "0px",
                                    borderBottomLeftRadius: "0px",
                                    borderWidth: "1px",
                                    borderBottomWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    padding: "30px",
                                    cursor: "pointer",
                                    display: "flex",
                                  }}
                                >
                                  <p
                                    className="card-header-title pld-p-0 pld-text-[18px]"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      margin: "0px",
                                      lineHeight: "24px",
                                      fontSize: "18px",
                                      padding: "0.75rem 1rem",
                                      alignItems: "center",
                                      color: "rgb(54, 54, 54)",
                                      display: "flex",
                                      flexGrow: 1,
                                      fontWeight: 700,
                                    }}
                                  >
                                    {"Options d’arbitrages automatiques"}
                                  </p>{" "}
                                  <a
                                    className="card-header-icon"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      background: "none",
                                      border: "none",
                                      margin: "0px",
                                      appearance: "none",
                                      color: "currentcolor",
                                      fontFamily: "inherit",
                                      fontSize: "1em",
                                      alignItems: "center",
                                      cursor: "pointer",
                                      display: "flex",
                                      padding: "0px",
                                      width: "40px",
                                      height: "40px",
                                    }}
                                  >
                                    <span
                                      className="icon"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        alignItems: "center",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        height: "1.5rem",
                                        width: "1.5rem",
                                        userSelect: "none",
                                        cursor: "inherit",
                                      }}
                                    >
                                      <i
                                        className="mdi mdi-chevron-down mdi-24px"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      />
                                    </span>
                                  </a>
                                </div>{" "}
                                <div
                                  className="collapse card !pld-border-black !pld-mb-4 !pld-border-t-0 !pld-rounded-t-none"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    borderRadius: "0.25rem",
                                    backgroundColor: "rgb(255, 255, 255)",
                                    maxWidth: "100%",
                                    boxShadow: "none",
                                    color: "rgb(10, 10, 10)",
                                    border: "1px solid rgb(224, 222, 222)",
                                    marginBottom: "1rem",
                                    borderTopLeftRadius: "0px",
                                    borderTopRightRadius: "0px",
                                    borderTopWidth: "0px",
                                    borderColor: "rgba(0, 0, 0, 1)",
                                    position: "static",
                                  }}
                                >
                                  <div
                                    className="collapse-trigger"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inline",
                                      cursor: "pointer",
                                    }}
                                  />
                                  <div
                                    className="collapse-content"
                                    aria-expanded="true"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "inherit",
                                    }}
                                  >
                                    <div
                                      className="card-content !pld-pt-0 !pld-px-16 pld-space-y-[30px]"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        padding: "1.5rem",
                                        backgroundColor: "transparent",
                                        borderTopLeftRadius: "0.25rem",
                                        borderTopRightRadius: "0.25rem",
                                        borderBottomLeftRadius: "0.25rem",
                                        borderBottomRightRadius: "0.25rem",
                                        paddingLeft: "4rem",
                                        paddingRight: "4rem",
                                        paddingTop: "0px",
                                      }}
                                    >
                                      <div
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                        }}
                                      >
                                        <div
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                          }}
                                        >
                                          <p
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              padding: "0px",
                                              fontSize: "16px",
                                              lineHeight: "24px",
                                            }}
                                          >
                                            {
                                              "Ces options vous permettent de définir à l’avance des modalités spécifiques d’investissement concernant votre épargne investie en allocation libre."
                                            }
                                          </p>{" "}
                                          <br
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                            }}
                                          />{" "}
                                          <div
                                            className="mt-10"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              marginTop: "10px",
                                            }}
                                          >
                                            {" "}
                                            <div
                                              className="input_multi_3yJTI primary_2b9y7 ticks-2_3nyVR multiple_1wmoq"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                display: "flex",
                                                flexWrap: "wrap",
                                                userSelect: "none",
                                                margin: "-8px -24px",
                                              }}
                                            >
                                              <div
                                                className="item_1LCcP active_2i7Mk"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  lineHeight: 1.5,
                                                  margin: "8px 24px",
                                                  width: "100%",
                                                  color: "rgb(74, 74, 74)",
                                                  borderRadius: "6px",
                                                }}
                                              >
                                                <input
                                                  className="hidden_3MT6Q"
                                                  type="checkbox"
                                                  value="733"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                    verticalAlign: "baseline",
                                                    display: "none",
                                                  }}
                                                />{" "}
                                                <div
                                                  className="check_1BKTb"
                                                  style={{
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    transition:
                                                      "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                                    display: "block",
                                                    flexShrink: 0,
                                                    marginRight: "12px",
                                                    width: "20px",
                                                    height: "20px",
                                                    fill: "currentcolor",
                                                    boxShadow:
                                                      "0 3px 10px rgb(0 0 0/0%)",
                                                    borderRadius: "4px",
                                                    borderWidth: "1px",
                                                    padding: "2px",
                                                    borderColor: "#1b43ac",
                                                    color: "rgb(255, 255, 255)",
                                                    backgroundColor: "#1b43ac",
                                                  }}
                                                >
                                                  <svg
                                                    viewBox="0 0 1 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      display: "block",
                                                      verticalAlign: "middle",
                                                    }}
                                                  >
                                                    <path
                                                      d="M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                      }}
                                                    />
                                                  </svg>
                                                </div>{" "}
                                                <div
                                                  className="item_container_39Yko"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    width: "100%",
                                                  }}
                                                >
                                                  <div
                                                    className="item_text_2h4uY"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      color: "rgb(74, 74, 74)",
                                                    }}
                                                  >
                                                    <span
                                                      className="fs-18 has-text-weight-semibold"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontStyle: "inherit",
                                                        fontWeight: 600,
                                                        fontSize: "18px",
                                                      }}
                                                    >
                                                      Investissement progressif
                                                      sur les supports en unité
                                                      de compte
                                                    </span>
                                                  </div>{" "}
                                                  <div
                                                    className="item_content_kaXrj"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      width: "100%",
                                                    }}
                                                  />{" "}
                                                  <div
                                                    className="item_content_kaXrj"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    <div
                                                      className="mt-20"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        marginTop: "20px",
                                                      }}
                                                    >
                                                      {
                                                        "Elle permet d’investir progressivement, chaque mois, sur des unités de compte choisies, une certaine portion du capital versé sur le Fonds en Euros."
                                                      }
                                                      <br
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                        }}
                                                      />{" "}
                                                      <button
                                                        className="button is-uppercase has-text-weight-bold intern is-size-7 bg-pld-unset pld-text-left"
                                                        type="button"
                                                        style={{
                                                          borderStyle: "solid",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          backgroundImage:
                                                            "none",
                                                          margin: "0px",
                                                          fontFamily:
                                                            "Roboto, sans-serif",
                                                          borderRadius: "4px",
                                                          appearance: "none",
                                                          alignItems: "center",
                                                          boxShadow: "none",
                                                          display:
                                                            "inline-flex",
                                                          verticalAlign: "top",
                                                          userSelect: "none",
                                                          borderColor:
                                                            "rgb(224, 222, 222)",
                                                          borderWidth: "1px",
                                                          cursor: "pointer",
                                                          justifyContent:
                                                            "center",
                                                          textAlign: "center",
                                                          border: "unset",
                                                          padding: "0px",
                                                          whiteSpace: "inherit",
                                                          textDecoration:
                                                            "underline 3px solid rgb(255, 209, 0)",
                                                          color: "rgb(0, 0, 0)",
                                                          backgroundColor:
                                                            "unset",
                                                          position: "relative",
                                                          height: "unset",
                                                          lineHeight: 2,
                                                          textUnderlineOffset:
                                                            "3px",
                                                          fontSize: "0.75rem",
                                                          textTransform:
                                                            "uppercase",
                                                          fontWeight: 700,
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            fontStyle:
                                                              "inherit",
                                                            fontWeight:
                                                              "inherit",
                                                          }}
                                                        >
                                                          {"En savoir plus"}
                                                        </span>
                                                      </button>{" "}
                                                      <div
                                                        className="collapse pld-mt-3"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          marginTop: "0.75rem",
                                                        }}
                                                      >
                                                        <div
                                                          className="collapse-trigger"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            display: "inline",
                                                            cursor: "pointer",
                                                          }}
                                                        />
                                                        <div
                                                          className="collapse-content"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            display: "none",
                                                          }}
                                                        >
                                                          <p
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              margin: "0px",
                                                              padding: "0px",
                                                              fontSize: "16px",
                                                              lineHeight:
                                                                "24px",
                                                            }}
                                                          >
                                                            L’objet de cette
                                                            option est le
                                                            transfert
                                                            automatique et sans
                                                            frais, en plusieurs
                                                            fractions mensuelles
                                                            successives, de
                                                            l’épargne investie
                                                            dans le Fonds en
                                                            Euros vers un ou
                                                            plusieurs supports
                                                            en unités de compte.
                                                            <br
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                              }}
                                                            />
                                                            À la mise en place
                                                            de cette option,
                                                            vous choisissez :
                                                            <br
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                              }}
                                                            />
                                                            - le montant de la
                                                            fraction mensuelle
                                                            de l’épargne à
                                                            transférer depuis le
                                                            Fonds en Euros ;
                                                            <br
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                              }}
                                                            />
                                                            - le nombre de
                                                            fractions mensuelles
                                                            selon lequel le
                                                            transfert sera
                                                            effectué : 6, 9, 12,
                                                            18 ou 24 fractions
                                                            mensuelles
                                                            successives ;
                                                            <br
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                              }}
                                                            />
                                                            - les supports vers
                                                            lesquels sera
                                                            transférée
                                                            automatiquement
                                                            cette épargne.
                                                            <br
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                              }}
                                                            />
                                                            À l’issue du délai
                                                            de renonciation, le
                                                            premier mardi de
                                                            chaque mois,
                                                            l’assureur effectue
                                                            automatiquement les
                                                            arbitrages résultant
                                                            de vos choix :
                                                            désinvestissement du
                                                            fonds en euros du
                                                            montant de la
                                                            fraction mensuelle
                                                            choisie vers les
                                                            supports
                                                            sélectionnés.
                                                          </p>
                                                        </div>
                                                      </div>{" "}
                                                      <span
                                                        className="scroll-to-if-validation-error"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          fontStyle: "inherit",
                                                          fontWeight: "inherit",
                                                        }}
                                                      >
                                                        {" "}
                                                        <input
                                                          type="hidden"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            fontSize: "100%",
                                                            padding: "0px",
                                                            lineHeight:
                                                              "inherit",
                                                            color: "inherit",
                                                            margin: "0px",
                                                            fontFamily:
                                                              "Roboto, sans-serif",
                                                          }}
                                                        />{" "}
                                                      </span>{" "}
                                                      <article
                                                        className="message mt-20 is-danger"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          display: "block",
                                                          borderRadius: "4px",
                                                          fontSize: "1rem",
                                                          fontFamily:
                                                            "Arial, sans-serif",
                                                          marginBottom:
                                                            "1.5rem",
                                                          backgroundColor:
                                                            "rgb(254, 246, 246)",
                                                          marginTop: "20px",
                                                        }}
                                                      >
                                                        <section
                                                          className="message-body"
                                                          style={{
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            display: "block",
                                                            borderRadius: "4px",
                                                            borderStyle:
                                                              "solid",
                                                            borderImage:
                                                              "initial",
                                                            borderWidth:
                                                              "0px 0px 0px 4px",
                                                            padding:
                                                              "1.25em 1.5em",
                                                            color:
                                                              "rgb(74, 74, 74)",
                                                            borderColor:
                                                              "rgb(209, 24, 24)",
                                                          }}
                                                        >
                                                          <div
                                                            className="media"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              alignItems:
                                                                "flex-start",
                                                              display: "flex",
                                                              textAlign:
                                                                "inherit",
                                                              border: "0px",
                                                              paddingTop: "0px",
                                                            }}
                                                          >
                                                            <div
                                                              className="media-content"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                flex: "1 1 auto",
                                                                textAlign:
                                                                  "inherit",
                                                              }}
                                                            >
                                                              <p
                                                                style={{
                                                                  borderWidth:
                                                                    "0px",
                                                                  borderStyle:
                                                                    "solid",
                                                                  borderColor:
                                                                    "rgba(229, 231, 235, 1)",
                                                                  boxSizing:
                                                                    "inherit",
                                                                  WebkitFontSmoothing:
                                                                    "antialiased",
                                                                  margin: "0px",
                                                                  padding:
                                                                    "0px",
                                                                  fontSize:
                                                                    "16px",
                                                                  lineHeight:
                                                                    "24px",
                                                                }}
                                                              >
                                                                L’option
                                                                investissement
                                                                progressif ne
                                                                peut être
                                                                sélectionnée que
                                                                si des fonds ont
                                                                été placés sur
                                                                le Fonds en
                                                                Euros
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </section>
                                                      </article>
                                                      <article
                                                        className="message mt-20 is-danger"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          display: "block",
                                                          borderRadius: "4px",
                                                          fontSize: "1rem",
                                                          fontFamily:
                                                            "Arial, sans-serif",
                                                          backgroundColor:
                                                            "rgb(254, 246, 246)",
                                                          marginTop: "20px",
                                                        }}
                                                      >
                                                        <section
                                                          className="message-body"
                                                          style={{
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            display: "block",
                                                            borderRadius: "4px",
                                                            borderStyle:
                                                              "solid",
                                                            borderImage:
                                                              "initial",
                                                            borderWidth:
                                                              "0px 0px 0px 4px",
                                                            padding:
                                                              "1.25em 1.5em",
                                                            color:
                                                              "rgb(74, 74, 74)",
                                                            borderColor:
                                                              "rgb(209, 24, 24)",
                                                          }}
                                                        >
                                                          <div
                                                            className="media"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              alignItems:
                                                                "flex-start",
                                                              display: "flex",
                                                              textAlign:
                                                                "inherit",
                                                              border: "0px",
                                                              paddingTop: "0px",
                                                            }}
                                                          >
                                                            <div
                                                              className="media-content"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                flex: "1 1 auto",
                                                                textAlign:
                                                                  "inherit",
                                                              }}
                                                            >
                                                              <p
                                                                style={{
                                                                  borderWidth:
                                                                    "0px",
                                                                  borderStyle:
                                                                    "solid",
                                                                  borderColor:
                                                                    "rgba(229, 231, 235, 1)",
                                                                  boxSizing:
                                                                    "inherit",
                                                                  WebkitFontSmoothing:
                                                                    "antialiased",
                                                                  margin: "0px",
                                                                  padding:
                                                                    "0px",
                                                                  fontSize:
                                                                    "16px",
                                                                  lineHeight:
                                                                    "24px",
                                                                }}
                                                              >
                                                                Cette option
                                                                nécessite
                                                                d’avoir un Fonds
                                                                Euros dans le
                                                                versement
                                                                initial avec un
                                                                montant
                                                                supérieur ou
                                                                égal à 1 800 €
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </section>
                                                      </article>
                                                    </div>{" "}
                                                    <div
                                                      className="columns is-multiline mt-20"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        marginLeft: "-15px",
                                                        marginRight: "-15px",
                                                        flexWrap: "wrap",
                                                        display: "flex",
                                                        marginBottom: "0px",
                                                        marginTop: "20px",
                                                      }}
                                                    >
                                                      <div
                                                        id="ArbitrageMontant"
                                                        className="column is-12"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          padding: "15px",
                                                          display: "block",
                                                          flex: "0 0 auto",
                                                          width: "100%",
                                                          paddingTop: "0px",
                                                          paddingBottom: "10px",
                                                        }}
                                                      >
                                                        {" "}
                                                        <div
                                                          className="pld-flex pld-items-center pld-space-x-3 pld-mb-3"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            marginBottom:
                                                              "0.75rem",
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                          }}
                                                        >
                                                          <label
                                                            className="input_label_mqESs !pld-text-base !pld-font-normal"
                                                            htmlFor="ArbitrageMontant"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              fontSize: "1rem",
                                                              lineHeight:
                                                                "1.5rem",
                                                              fontWeight: 400,
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                fontStyle:
                                                                  "inherit",
                                                                fontWeight:
                                                                  "inherit",
                                                              }}
                                                            >
                                                              Montant de la
                                                              fraction mensuelle
                                                              à transférer
                                                              depuis le Fonds
                                                              Euros
                                                            </span>

                                                            <span
                                                              className="required_1oOjx"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                fontStyle:
                                                                  "inherit",
                                                                fontWeight:
                                                                  "inherit",
                                                                color:
                                                                  "rgb(255, 209, 0)",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </label>{" "}
                                                        </div>{" "}
                                                        <div
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                          }}
                                                        >
                                                          {" "}
                                                          <div
                                                            className="field-body w-input"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              flex: "5 1 0px",
                                                              display: "flex",
                                                              width: "35%",
                                                            }}
                                                          >
                                                            <div
                                                              className="field has-addons"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                display: "flex",
                                                                justifyContent:
                                                                  "flex-start",
                                                                marginBottom:
                                                                  "0px",
                                                                flexShrink: 1,
                                                                flexGrow: 1,
                                                              }}
                                                            >
                                                              <p
                                                                className="control is-h-full has-1-z-index"
                                                                style={{
                                                                  borderWidth:
                                                                    "0px",
                                                                  borderStyle:
                                                                    "solid",
                                                                  borderColor:
                                                                    "rgba(229, 231, 235, 1)",
                                                                  WebkitFontSmoothing:
                                                                    "antialiased",
                                                                  margin: "0px",
                                                                  padding:
                                                                    "0px",
                                                                  lineHeight:
                                                                    "24px",
                                                                  boxSizing:
                                                                    "border-box",
                                                                  clear: "both",
                                                                  fontSize:
                                                                    "1rem",
                                                                  position:
                                                                    "relative",
                                                                  textAlign:
                                                                    "inherit",
                                                                  zIndex: 1,
                                                                  height:
                                                                    "100%",
                                                                  marginRight:
                                                                    "-1px",
                                                                }}
                                                              >
                                                                <button
                                                                  className="button is-h-full is-static is-rounded"
                                                                  type="button"
                                                                  tabIndex={-1}
                                                                  style={{
                                                                    borderStyle:
                                                                      "solid",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    textTransform:
                                                                      "none",
                                                                    backgroundImage:
                                                                      "none",
                                                                    margin:
                                                                      "0px",
                                                                    fontFamily:
                                                                      "Roboto, sans-serif",
                                                                    border:
                                                                      "1px solid transparent",
                                                                    appearance:
                                                                      "none",
                                                                    alignItems:
                                                                      "center",
                                                                    display:
                                                                      "inline-flex",
                                                                    fontSize:
                                                                      "1rem",
                                                                    lineHeight: 1.5,
                                                                    position:
                                                                      "relative",
                                                                    verticalAlign:
                                                                      "top",
                                                                    userSelect:
                                                                      "none",
                                                                    borderWidth:
                                                                      "1px",
                                                                    padding:
                                                                      "calc(0.5em - 1px) 1em",
                                                                    whiteSpace:
                                                                      "nowrap",
                                                                    cursor:
                                                                      "pointer",
                                                                    justifyContent:
                                                                      "center",
                                                                    textAlign:
                                                                      "center",
                                                                    height:
                                                                      "100%",
                                                                    borderColor:
                                                                      "rgb(224, 222, 222)",
                                                                    backgroundColor:
                                                                      "rgb(245, 245, 245)",
                                                                    color:
                                                                      "rgb(122, 122, 122)",
                                                                    boxShadow:
                                                                      "none",
                                                                    pointerEvents:
                                                                      "none",
                                                                    borderRadius:
                                                                      "9999px",
                                                                    paddingLeft:
                                                                      "1.25em",
                                                                    paddingRight:
                                                                      "1.25em",
                                                                    borderBottomRightRadius:
                                                                      "0px",
                                                                    borderTopRightRadius:
                                                                      "0px",
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      borderWidth:
                                                                        "0px",
                                                                      borderStyle:
                                                                        "solid",
                                                                      borderColor:
                                                                        "rgba(229, 231, 235, 1)",
                                                                      boxSizing:
                                                                        "inherit",
                                                                      WebkitFontSmoothing:
                                                                        "antialiased",
                                                                      fontStyle:
                                                                        "inherit",
                                                                      fontWeight:
                                                                        "inherit",
                                                                    }}
                                                                  >
                                                                    {"€"}
                                                                  </span>
                                                                </button>
                                                              </p>{" "}
                                                              <div
                                                                className="control is-medium"
                                                                style={{
                                                                  borderWidth:
                                                                    "0px",
                                                                  borderStyle:
                                                                    "solid",
                                                                  borderColor:
                                                                    "rgba(229, 231, 235, 1)",
                                                                  WebkitFontSmoothing:
                                                                    "antialiased",
                                                                  boxSizing:
                                                                    "border-box",
                                                                  clear: "both",
                                                                  position:
                                                                    "relative",
                                                                  textAlign:
                                                                    "inherit",
                                                                  fontSize:
                                                                    "16px",
                                                                }}
                                                              >
                                                                <input
                                                                  className="input is-rounded is-expanded is-medium"
                                                                  name="ArbitrageMontant"
                                                                  type="text"
                                                                  inputMode="text"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    margin:
                                                                      "0px",
                                                                    fontFamily:
                                                                      "Roboto, sans-serif",
                                                                    border:
                                                                      "1px solid transparent",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    appearance:
                                                                      "none",
                                                                    alignItems:
                                                                      "center",
                                                                    display:
                                                                      "inline-flex",
                                                                    justifyContent:
                                                                      "flex-start",
                                                                    position:
                                                                      "relative",
                                                                    verticalAlign:
                                                                      "top",
                                                                    borderColor:
                                                                      "rgb(224, 222, 222)",
                                                                    backgroundColor:
                                                                      "rgb(255, 255, 255)",
                                                                    boxShadow:
                                                                      "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                                                    maxWidth:
                                                                      "100%",
                                                                    width:
                                                                      "100%",
                                                                    borderRadius:
                                                                      "9999px",
                                                                    paddingLeft:
                                                                      "calc(1.125em - 1px)",
                                                                    paddingRight:
                                                                      "calc(1.125em - 1px)",
                                                                    fontWeight: 400,
                                                                    fontStretch:
                                                                      "normal",
                                                                    fontStyle:
                                                                      "normal",
                                                                    lineHeight:
                                                                      "normal",
                                                                    letterSpacing:
                                                                      "normal",
                                                                    color:
                                                                      "rgb(0, 0, 0)",
                                                                    fontSize:
                                                                      "16px",
                                                                    height:
                                                                      "50px",
                                                                    borderBottomLeftRadius:
                                                                      "0px",
                                                                    borderTopLeftRadius:
                                                                      "0px",
                                                                    paddingTop:
                                                                      "0px",
                                                                    paddingBottom:
                                                                      "0px",
                                                                  }}
                                                                />
                                                              </div>{" "}
                                                            </div>
                                                          </div>
                                                        </div>{" "}
                                                        <div
                                                          className="pld-mt-3 input_hint_2I-eO has-text-black"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            marginTop:
                                                              "0.75rem",
                                                            display: "block",
                                                            width: "100%",
                                                            fontSize: "15px",
                                                            fontWeight: 400,
                                                            color:
                                                              "rgb(10, 10, 10)",
                                                          }}
                                                        >
                                                          300 € minimum
                                                        </div>{" "}
                                                      </div>{" "}
                                                      <div
                                                        id="ArbitrageFractionsMensuelles"
                                                        className="column is-12"
                                                        style={{
                                                          borderWidth: "0px",
                                                          borderStyle: "solid",
                                                          borderColor:
                                                            "rgba(229, 231, 235, 1)",
                                                          boxSizing: "inherit",
                                                          WebkitFontSmoothing:
                                                            "antialiased",
                                                          padding: "15px",
                                                          display: "block",
                                                          flex: "0 0 auto",
                                                          width: "100%",
                                                          paddingTop: "0px",
                                                          paddingBottom: "10px",
                                                        }}
                                                      >
                                                        {" "}
                                                        <div
                                                          className="pld-flex pld-items-center pld-space-x-3 pld-mb-3"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            marginBottom:
                                                              "0.75rem",
                                                            display: "flex",
                                                            alignItems:
                                                              "center",
                                                          }}
                                                        >
                                                          <label
                                                            className="input_label_mqESs !pld-text-base !pld-font-normal"
                                                            htmlFor="ArbitrageFractionsMensuelles"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              boxSizing:
                                                                "inherit",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              fontSize: "1rem",
                                                              lineHeight:
                                                                "1.5rem",
                                                              fontWeight: 400,
                                                            }}
                                                          >
                                                            <span
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                fontStyle:
                                                                  "inherit",
                                                                fontWeight:
                                                                  "inherit",
                                                              }}
                                                            >
                                                              Nombre de
                                                              fractions
                                                              mensuelles selon
                                                              lequel l'épargne
                                                              sera transférée
                                                            </span>

                                                            <span
                                                              className="required_1oOjx"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                fontStyle:
                                                                  "inherit",
                                                                fontWeight:
                                                                  "inherit",
                                                                color:
                                                                  "rgb(255, 209, 0)",
                                                              }}
                                                            >
                                                              *
                                                            </span>
                                                          </label>{" "}
                                                        </div>{" "}
                                                        <div
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                          }}
                                                        >
                                                          <div
                                                            className="control is-expanded pld-w-[100px]"
                                                            style={{
                                                              borderWidth:
                                                                "0px",
                                                              borderStyle:
                                                                "solid",
                                                              borderColor:
                                                                "rgba(229, 231, 235, 1)",
                                                              WebkitFontSmoothing:
                                                                "antialiased",
                                                              width: "100px",
                                                              boxSizing:
                                                                "border-box",
                                                              clear: "both",
                                                              fontSize: "1rem",
                                                              position:
                                                                "relative",
                                                              textAlign:
                                                                "inherit",
                                                            }}
                                                          >
                                                            <span
                                                              className="select is-medium is-fullwidth is-rounded is-empty"
                                                              style={{
                                                                borderWidth:
                                                                  "0px",
                                                                borderStyle:
                                                                  "solid",
                                                                borderColor:
                                                                  "rgba(229, 231, 235, 1)",
                                                                boxSizing:
                                                                  "inherit",
                                                                WebkitFontSmoothing:
                                                                  "antialiased",
                                                                fontStyle:
                                                                  "inherit",
                                                                fontWeight:
                                                                  "inherit",
                                                                display:
                                                                  "inline-block",
                                                                maxWidth:
                                                                  "100%",
                                                                position:
                                                                  "relative",
                                                                verticalAlign:
                                                                  "top",
                                                                fontSize:
                                                                  "1.25rem",
                                                                height: "auto",
                                                                width: "100%",
                                                              }}
                                                            >
                                                              <select
                                                                style={{
                                                                  borderWidth:
                                                                    "0px",
                                                                  borderStyle:
                                                                    "solid",
                                                                  boxSizing:
                                                                    "inherit",
                                                                  WebkitFontSmoothing:
                                                                    "antialiased",
                                                                  textTransform:
                                                                    "none",
                                                                  margin: "0px",
                                                                  fontFamily:
                                                                    "Roboto, sans-serif",
                                                                  border:
                                                                    "1px solid transparent",
                                                                  padding:
                                                                    "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                  appearance:
                                                                    "none",
                                                                  alignItems:
                                                                    "center",
                                                                  boxShadow:
                                                                    "none",
                                                                  justifyContent:
                                                                    "flex-start",
                                                                  position:
                                                                    "relative",
                                                                  verticalAlign:
                                                                    "top",
                                                                  borderColor:
                                                                    "rgb(224, 222, 222)",
                                                                  backgroundColor:
                                                                    "rgb(255, 255, 255)",
                                                                  outline:
                                                                    "none",
                                                                  cursor:
                                                                    "pointer",
                                                                  display:
                                                                    "block",
                                                                  maxWidth:
                                                                    "100%",
                                                                  borderRadius:
                                                                    "9999px",
                                                                  paddingLeft:
                                                                    "1em",
                                                                  paddingRight:
                                                                    "2.5em",
                                                                  fontWeight: 400,
                                                                  fontStretch:
                                                                    "normal",
                                                                  fontStyle:
                                                                    "normal",
                                                                  lineHeight:
                                                                    "normal",
                                                                  letterSpacing:
                                                                    "normal",
                                                                  color:
                                                                    "rgb(0, 0, 0)",
                                                                  fontSize:
                                                                    "16px",
                                                                  height:
                                                                    "50px",
                                                                  textRendering:
                                                                    "auto",
                                                                  width: "100%",
                                                                  paddingTop:
                                                                    "0px",
                                                                  paddingBottom:
                                                                    "0px",
                                                                }}
                                                              >
                                                                <option
                                                                  value="6"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    borderColor:
                                                                      "rgba(229, 231, 235, 1)",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    color:
                                                                      "rgb(74, 74, 74)",
                                                                  }}
                                                                >
                                                                  {"6"}
                                                                </option>
                                                                <option
                                                                  value="9"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    borderColor:
                                                                      "rgba(229, 231, 235, 1)",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    color:
                                                                      "rgb(74, 74, 74)",
                                                                  }}
                                                                >
                                                                  {"9"}
                                                                </option>
                                                                <option
                                                                  value="12"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    borderColor:
                                                                      "rgba(229, 231, 235, 1)",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    color:
                                                                      "rgb(74, 74, 74)",
                                                                  }}
                                                                >
                                                                  {"12"}
                                                                </option>
                                                                <option
                                                                  value="18"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    borderColor:
                                                                      "rgba(229, 231, 235, 1)",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    color:
                                                                      "rgb(74, 74, 74)",
                                                                  }}
                                                                >
                                                                  {"18"}
                                                                </option>
                                                                <option
                                                                  value="24"
                                                                  style={{
                                                                    borderWidth:
                                                                      "0px",
                                                                    borderStyle:
                                                                      "solid",
                                                                    borderColor:
                                                                      "rgba(229, 231, 235, 1)",
                                                                    boxSizing:
                                                                      "inherit",
                                                                    WebkitFontSmoothing:
                                                                      "antialiased",
                                                                    padding:
                                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                                    color:
                                                                      "rgb(74, 74, 74)",
                                                                  }}
                                                                >
                                                                  {"24"}
                                                                </option>
                                                              </select>
                                                            </span>
                                                          </div>
                                                        </div>{" "}
                                                        <div
                                                          className="pld-mt-3 input_hint_2I-eO"
                                                          style={{
                                                            borderWidth: "0px",
                                                            borderStyle:
                                                              "solid",
                                                            borderColor:
                                                              "rgba(229, 231, 235, 1)",
                                                            boxSizing:
                                                              "inherit",
                                                            WebkitFontSmoothing:
                                                              "antialiased",
                                                            marginTop:
                                                              "0.75rem",
                                                            display: "block",
                                                            width: "100%",
                                                            color:
                                                              "rgb(10, 10, 10)",
                                                            fontSize: "15px",
                                                            fontWeight: 400,
                                                          }}
                                                        >
                                                          ㅤ
                                                        </div>{" "}
                                                      </div>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="item_1LCcP"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  lineHeight: 1.5,
                                                  margin: "8px 24px",
                                                  width: "100%",
                                                  color: "rgb(74, 74, 74)",
                                                  borderRadius: "6px",
                                                }}
                                              >
                                                <input
                                                  className="hidden_3MT6Q"
                                                  type="checkbox"
                                                  value="733"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                    verticalAlign: "baseline",
                                                    display: "none",
                                                  }}
                                                />{" "}
                                                <div
                                                  className="check_1BKTb"
                                                  style={{
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgb(122, 122, 122)",
                                                    transition:
                                                      "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                                    display: "block",
                                                    flexShrink: 0,
                                                    marginRight: "12px",
                                                    width: "20px",
                                                    height: "20px",
                                                    fill: "currentcolor",
                                                    color: "transparent",
                                                    boxShadow:
                                                      "0 3px 10px rgb(0 0 0/0%)",
                                                    borderRadius: "4px",
                                                    borderWidth: "1px",
                                                    padding: "2px",
                                                  }}
                                                >
                                                  <svg
                                                    viewBox="0 0 1 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      display: "block",
                                                      verticalAlign: "middle",
                                                    }}
                                                  >
                                                    <path
                                                      d="M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                      }}
                                                    />
                                                  </svg>
                                                </div>{" "}
                                                <div
                                                  className="item_container_39Yko"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    width: "100%",
                                                  }}
                                                >
                                                  <div
                                                    className="item_text_2h4uY"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      color: "rgb(74, 74, 74)",
                                                    }}
                                                  >
                                                    <span
                                                      className="fs-18 has-text-weight-semibold"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontStyle: "inherit",
                                                        fontWeight: 600,
                                                        fontSize: "18px",
                                                      }}
                                                    >
                                                      Arbitrage automatique des
                                                      plus-values
                                                    </span>
                                                  </div>{" "}
                                                  <div
                                                    className="item_content_kaXrj"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    {" "}
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                className="item_1LCcP"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  display: "flex",
                                                  cursor: "pointer",
                                                  lineHeight: 1.5,
                                                  margin: "8px 24px",
                                                  width: "100%",
                                                  color: "rgb(74, 74, 74)",
                                                  borderRadius: "6px",
                                                }}
                                              >
                                                <input
                                                  className="hidden_3MT6Q"
                                                  type="checkbox"
                                                  value="733"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "100%",
                                                    padding: "0px",
                                                    lineHeight: "inherit",
                                                    color: "inherit",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                    verticalAlign: "baseline",
                                                    display: "none",
                                                  }}
                                                />{" "}
                                                <div
                                                  className="check_1BKTb"
                                                  style={{
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgb(122, 122, 122)",
                                                    transition:
                                                      "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                                    display: "block",
                                                    flexShrink: 0,
                                                    marginRight: "12px",
                                                    width: "20px",
                                                    height: "20px",
                                                    fill: "currentcolor",
                                                    color: "transparent",
                                                    boxShadow:
                                                      "0 3px 10px rgb(0 0 0/0%)",
                                                    borderRadius: "4px",
                                                    borderWidth: "1px",
                                                    padding: "2px",
                                                  }}
                                                >
                                                  <svg
                                                    viewBox="0 0 1 1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      display: "block",
                                                      verticalAlign: "middle",
                                                    }}
                                                  >
                                                    <path
                                                      d="M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                      }}
                                                    />
                                                  </svg>
                                                </div>{" "}
                                                <div
                                                  className="item_container_39Yko"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    width: "100%",
                                                  }}
                                                >
                                                  <div
                                                    className="item_text_2h4uY"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      color: "rgb(74, 74, 74)",
                                                    }}
                                                  >
                                                    <span
                                                      className="fs-18 has-text-weight-semibold"
                                                      style={{
                                                        borderWidth: "0px",
                                                        borderStyle: "solid",
                                                        borderColor:
                                                          "rgba(229, 231, 235, 1)",
                                                        boxSizing: "inherit",
                                                        WebkitFontSmoothing:
                                                          "antialiased",
                                                        fontStyle: "inherit",
                                                        fontWeight: 600,
                                                        fontSize: "18px",
                                                      }}
                                                    >
                                                      Réallocation automatique
                                                      de l'épargne sur la base
                                                      d'une répartition fixée
                                                      par le souscripteur
                                                    </span>
                                                  </div>{" "}
                                                  <div
                                                    className="item_content_kaXrj"
                                                    style={{
                                                      borderWidth: "0px",
                                                      borderStyle: "solid",
                                                      borderColor:
                                                        "rgba(229, 231, 235, 1)",
                                                      boxSizing: "inherit",
                                                      WebkitFontSmoothing:
                                                        "antialiased",
                                                      width: "100%",
                                                    }}
                                                  >
                                                    {" "}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>{" "}
                                      <button
                                        className="btn_1P7x4 block_1Jg7s outlined_3xSXE yellow_sJHfv pld-mx-auto is-hidden-touch"
                                        aria-label="Suivant"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          appearance: "button",
                                          lineHeight: "inherit",
                                          margin: "0px",
                                          fontFamily: "Roboto, sans-serif",
                                          outline: "none",
                                          border: "none",
                                          background: "unset",
                                          transition:
                                            "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          textTransform: "uppercase",
                                          userSelect: "none",
                                          cursor: "pointer",
                                          fontWeight: 700,
                                          backgroundImage: "unset",
                                          fontSize: "17px",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          display: "flex",
                                          borderRadius: "40px",
                                          padding: "0px 40px",
                                          height: "60px",
                                          color: "rgb(10, 10, 10)",
                                          backgroundColor: "rgb(255, 255, 255)",
                                          marginTop: "calc(30px * calc(1 - 0))",
                                          marginBottom: "calc(30px * 0)",
                                          boxShadow:
                                            "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 1px #ffd100",
                                        }}
                                      >
                                        {" "}
                                        <span
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            pointerEvents: "none",
                                          }}
                                        >
                                          Suivant
                                        </span>{" "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </span>{" "}
                              <div
                                className="pld-space-y-2"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                }}
                              >
                                {" "}
                              </div>
                            </div>
                          </div>{" "}
                          <div
                            className="pld-mt-2 alert_oaqVP"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              marginTop: "0.5rem",
                              fontWeight: 500,
                              padding: "16px",
                              borderRadius: "6px",
                              border: "2px solid transparent",
                              display: "flex",
                              backgroundColor: "rgb(246, 246, 246)",
                              placeItems: "flex-start",
                              flexDirection: "row",
                            }}
                          >
                            <div
                              className="icon_3fumg"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                flexShrink: 0,
                              }}
                            >
                              <img
                                alt="warning-icon"
                                src="https://souscrire.placement-direct.fr/images/icons/warning.png"
                                style={{
                                  borderWidth: "0px",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  borderStyle: "solid",
                                  display: "block",
                                  verticalAlign: "middle",
                                  height: "auto",
                                  maxWidth: "100%",
                                }}
                              />
                            </div>{" "}
                            <div
                              className="content_3Cxit"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                marginLeft: "16px",
                                marginTop: "0px",
                              }}
                            >
                              {
                                "En choisissant allocation libre, je prends la responsabilité du choix et du suivi des supports de mon contrat."
                              }
                              <span
                                className="has-text-weight-normal pld-mt-4 is-block"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  fontStyle: "inherit",
                                  marginTop: "1rem",
                                  fontWeight: 400,
                                  display: "block",
                                }}
                              >
                                <div
                                  id="DisclaimerAllocationLibreNonRecommende"
                                  className="field checkboxes"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                  }}
                                >
                                  <div
                                    className="field-body"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      flex: "5 1 0px",
                                      display: "flex",
                                    }}
                                  >
                                    <div
                                      className="field has-addons"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        marginBottom: "0px",
                                        flexShrink: 1,
                                        flexGrow: 1,
                                      }}
                                    >
                                      {" "}
                                      <div
                                        className="my-0 columns with-default-border is-multiline"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          marginLeft: "-15px",
                                          marginRight: "-15px",
                                          flexWrap: "wrap",
                                          display: "flex",
                                          marginTop: "0px",
                                          marginBottom: "0px",
                                        }}
                                      >
                                        <div
                                          className="is-flex column is-12"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            padding: "15px",
                                            flex: "0 0 auto",
                                            width: "100%",
                                            paddingTop: "0px",
                                            paddingBottom: "0px",
                                            display: "flex",
                                          }}
                                        >
                                          <label
                                            className="b-checkbox checkbox is-default mx-0"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              cursor: "pointer",
                                              lineHeight: 1.25,
                                              position: "relative",
                                              userSelect: "none",
                                              outline: "none",
                                              display: "inline-flex",
                                              alignItems: "center",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "16px",
                                              marginLeft: "0px",
                                              marginRight: "0px",
                                            }}
                                          >
                                            <input
                                              type="checkbox"
                                              autoComplete="on"
                                              value="603"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                fontSize: "100%",
                                                padding: "0px",
                                                lineHeight: "inherit",
                                                color: "inherit",
                                                margin: "0px",
                                                fontFamily:
                                                  "Roboto, sans-serif",
                                                verticalAlign: "baseline",
                                                cursor: "pointer",
                                                outline: "none",
                                                position: "absolute",
                                                left: "0px",
                                                opacity: 0,
                                                zIndex: -1,
                                              }}
                                            />
                                            <span
                                              className="check"
                                              style={{
                                                borderStyle: "solid",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                fontStyle: "inherit",
                                                fontWeight: "inherit",
                                                borderRadius: "4px",
                                                border:
                                                  "2px solid rgb(122, 122, 122)",
                                                transition:
                                                  "background 0.15s ease-out 0s",
                                                flexShrink: 0,
                                                borderWidth: "2px",
                                                height: "20px",
                                                width: "20px",
                                                background:
                                                  "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%232644a6'/%3E%3C/svg%3E\") 50% center no-repeat rgb(255, 255, 255)",
                                                borderColor: "rgb(54, 54, 54)",
                                              }}
                                            />
                                            <span
                                              className="control-label"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                fontStyle: "inherit",
                                                fontWeight: "inherit",
                                                paddingLeft:
                                                  "calc(0.75em - 1px)",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                }}
                                              >
                                                J'ai compris
                                              </span>
                                            </span>
                                          </label>{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>{" "}
                        </section>{" "}
                        <footer
                          className="is-flex mt-18"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            display: "flex",
                            marginTop: "18px",
                          }}
                        >
                          <button
                            onClick={onNextClick}
                            className="mx-auto button is-pld is-without-icon is-step"
                            style={{
                              borderStyle: "solid",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              backgroundImage: "none",
                              margin: "0px",
                              fontFamily: "Roboto, sans-serif",
                              appearance: "none",
                              alignItems: "center",
                              boxShadow: "none",
                              display: "inline-flex",
                              lineHeight: 1.5,
                              position: "relative",
                              verticalAlign: "top",
                              userSelect: "none",
                              borderColor: "rgb(224, 222, 222)",
                              borderWidth: "1px",
                              whiteSpace: "nowrap",
                              cursor: "pointer",
                              justifyContent: "center",
                              textAlign: "center",
                              border: "none",
                              borderRadius: "40px",
                              backgroundColor: "rgb(255, 209, 0)",
                              color: "rgb(0, 0, 0)",
                              textTransform: "uppercase",
                              fontWeight: 500,
                              minWidth: "150px",
                              padding: "0px 40px",
                              height: "60px",
                              fontSize: "17px",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          >
                            {"Valider"}
                          </button>
                        </footer>
                      </div>{" "}
                    </div>{" "}
                    <div
                      className="is-flex is-flex-wrap-wrap is-justify-content-space-between pld-mt-4 nav-wrapper"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        marginTop: "1rem",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <button
                        className="pld-m-2 btn_1P7x4 block_1Jg7s outlined_3xSXE shift_right_2U_ar yellow_sJHfv"
                        aria-label="Précédent"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          appearance: "button",
                          lineHeight: "inherit",
                          fontFamily: "Roboto, sans-serif",
                          outline: "none",
                          border: "none",
                          background: "unset",
                          transition:
                            "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                          alignItems: "center",
                          justifyContent: "center",
                          textTransform: "uppercase",
                          userSelect: "none",
                          cursor: "pointer",
                          fontWeight: 700,
                          backgroundImage: "unset",
                          fontSize: "17px",
                          margin: "0.5rem",
                          display: "flex",
                          borderRadius: "40px",
                          padding: "0px 40px",
                          height: "60px",
                          color: "rgb(10, 10, 10)",
                          backgroundColor: "rgb(255, 255, 255)",
                          minWidth: "200px",
                          boxShadow:
                            "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 1px #ffd100",
                        }}
                      >
                        {" "}
                        <span
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            pointerEvents: "none",
                            transition:
                              "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                          }}
                        >
                          {"Précédent"}
                        </span>{" "}
                        <svg
                          className="pld-ml-3 pld-rotate-180"
                          height="12"
                          width="10"
                          viewBox="0 0 8.9 11.3"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            display: "block",
                            verticalAlign: "middle",
                            pointerEvents: "none",
                            marginLeft: "0.75rem",
                            transform:
                              "translateX(0) translateY(0) rotate(180deg) skewX(0) skewY(0) scaleX(1) scaleY(1)",
                          }}
                        >
                          <path
                            d="M0 5.7V0l4.4 2.8 4.5 2.9-4.5 2.8L0 11.3V5.7z"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          />
                        </svg>
                      </button>{" "}
                    </div>{" "}
                    <div
                      className="pld-pt-10"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        paddingTop: "2.5rem",
                      }}
                    >
                      <div
                        className="has-background-grey-lighter columns pld-p-2 md:pld-p-8"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          padding: "2rem",
                          marginLeft: "-15px",
                          marginRight: "-15px",
                          display: "flex",
                          marginTop: "0px",
                          marginBottom: "0px",
                          backgroundColor: "rgb(246, 246, 246)",
                        }}
                      >
                        <div
                          className="is-flex is-align-content-flex-start column is-6 pld-mb-4 sm:pld-mb-0 md:pld-pr-6"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            marginBottom: "0px",
                            padding: "15px",
                            paddingRight: "15px",
                            flex: "0 0 auto",
                            width: "50%",
                            paddingTop: "0px",
                            paddingBottom: "10px",
                            alignContent: "flex-start",
                            display: "flex",
                          }}
                        >
                          <div
                            className="pld-mr-5 md:pld-mr-10 is-flex-shrink-0"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              marginRight: "2.5rem",
                              flexShrink: 0,
                            }}
                          >
                            <img
                              alt="icon avec deux personnes"
                              src="https://souscrire.placement-direct.fr/images/icons/two-people.svg"
                              style={{
                                borderWidth: "0px",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                borderStyle: "solid",
                                display: "block",
                                verticalAlign: "middle",
                                height: "auto",
                                maxWidth: "60px",
                              }}
                            />
                          </div>{" "}
                          <div
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          >
                            <h5
                              className="heading-3 pld-mb-1"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                margin: "0px",
                                padding: "0px",
                                marginBottom: "0.25rem",
                                fontSize: "18px",
                                fontWeight: 500,
                                lineHeight: "24px",
                              }}
                            >
                              Protection des données
                            </h5>{" "}
                            <p
                              className="text"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                margin: "0px",
                                padding: "0px",
                                fontSize: "16px",
                                lineHeight: "24px",
                              }}
                            >
                              {
                                "Toutes les informations que vous nous communiquez resteront confidentielles."
                              }
                            </p>
                          </div>
                        </div>{" "}
                        <div
                          className="is-flex column is-6"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            padding: "15px",
                            flex: "0 0 auto",
                            width: "50%",
                            paddingTop: "0px",
                            paddingBottom: "10px",
                            display: "flex",
                          }}
                        >
                          <div
                            className="pld-mr-5 md:pld-mr-10 is-flex-shrink-0"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              marginRight: "2.5rem",
                              flexShrink: 0,
                            }}
                          >
                            <img
                              alt="bouton on/off"
                              src="https://souscrire.placement-direct.fr/images/icons/switch.svg"
                              style={{
                                borderWidth: "0px",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                borderStyle: "solid",
                                display: "block",
                                verticalAlign: "middle",
                                height: "auto",
                                maxWidth: "60px",
                              }}
                            />
                          </div>{" "}
                          <div
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                            }}
                          >
                            <h5
                              className="heading-3 pld-mb-1"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                margin: "0px",
                                padding: "0px",
                                marginBottom: "0.25rem",
                                fontSize: "18px",
                                fontWeight: 500,
                                lineHeight: "24px",
                              }}
                            >
                              Sauvegarde automatique
                            </h5>{" "}
                            <p
                              className="text"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                margin: "0px",
                                padding: "0px",
                                fontSize: "16px",
                                lineHeight: "24px",
                              }}
                            >
                              {
                                "Reprenez à tout moment votre souscription là où vous l’avez laissée en utilisant le lien que vous venez de recevoir par email"
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </section>
        </div>{" "}
        <footer
          className="footer"
          style={{
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: "rgba(229, 231, 235, 1)",
            boxSizing: "inherit",
            WebkitFontSmoothing: "antialiased",
            display: "block",
            background: "none",
            backgroundColor: "initial",
            padding: "60px 0px 0px",
            paddingBottom: "0px",
          }}
        >
          <div
            className="container"
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
              borderTop: "1px solid rgb(224, 222, 222)",
              paddingTop: "32px",
              maxWidth: "1344px",
            }}
          >
            <div
              className="columns mb-20"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgba(229, 231, 235, 1)",
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                marginLeft: "-15px",
                marginRight: "-15px",
                marginTop: "-15px",
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <div
                className="column is-6"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgba(229, 231, 235, 1)",
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  padding: "15px",
                  display: "block",
                  flex: "0 0 auto",
                  width: "50%",
                }}
              >
                <div
                  className="columns"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgba(229, 231, 235, 1)",
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    marginLeft: "-15px",
                    marginRight: "-15px",
                    marginTop: "-15px",
                    marginBottom: "-15px",
                    display: "flex",
                  }}
                >
                  <div
                    className="column is-6"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      padding: "15px",
                      display: "block",
                      flex: "0 0 auto",
                      width: "50%",
                    }}
                  >
                    <img
                      className="mb-30"
                      width={142}
                      alt="Placement direct"
                      src="https://souscrire.placement-direct.fr/images/placement-direct-logo.svg"
                      style={{
                        borderWidth: "0px",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        borderStyle: "solid",
                        display: "block",
                        verticalAlign: "middle",
                        height: "auto",
                        maxWidth: "100%",
                        marginBottom: "30px",
                      }}
                    />{" "}
                    <div
                      className="followUs is-uppercase footer-social"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        textTransform: "uppercase",
                      }}
                    >
                      <p
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          marginBottom: "12px",
                          fontSize: "16px",
                          fontWeight: 500,
                          fontStretch: "normal",
                          fontStyle: "normal",
                          lineHeight: "normal",
                          letterSpacing: "normal",
                          color: "rgb(0, 0, 0)",
                        }}
                      >
                        Suivez-nous
                      </p>{" "}
                      <a
                        className="btn-pld btn-pld-social-share"
                        href="https://www.linkedin.com/company/placement-direct"
                        target="_blank"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          textDecoration: "none",
                          cursor: "pointer",
                          padding: "0px",
                          margin: "0px 10px 10px 0px",
                          display: "inline-block",
                          color: "rgb(166, 165, 165)",
                        }}
                      >
                        <span
                          className="btn-pld-inner-wrapper"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            height: "inherit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="icon"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              fontStyle: "inherit",
                              fontWeight: "inherit",
                              alignItems: "center",
                              display: "inline-flex",
                              justifyContent: "center",
                              height: "1.5rem",
                              width: "1.5rem",
                              userSelect: "none",
                              cursor: "inherit",
                            }}
                          >
                            <i
                              id="linkedin"
                              className="mdi mdi-linkedin mdi-24px"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            />
                          </span>
                        </span>
                      </a>{" "}
                      <a
                        className="btn-pld btn-pld-social-share"
                        href="https://www.facebook.com/PlacementDirect/"
                        target="_blank"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          textDecoration: "none",
                          cursor: "pointer",
                          padding: "0px",
                          margin: "0px 10px 10px 0px",
                          display: "inline-block",
                          color: "rgb(166, 165, 165)",
                        }}
                      >
                        <span
                          className="btn-pld-inner-wrapper"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            height: "inherit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="icon"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              fontStyle: "inherit",
                              fontWeight: "inherit",
                              alignItems: "center",
                              display: "inline-flex",
                              justifyContent: "center",
                              height: "1.5rem",
                              width: "1.5rem",
                              userSelect: "none",
                              cursor: "inherit",
                            }}
                          >
                            <i
                              id="facebook"
                              className="mdi mdi-facebook mdi-24px"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            />
                          </span>
                        </span>
                      </a>{" "}
                      <a
                        className="btn-pld btn-pld-social-share"
                        href="https://twitter.com/placementdirect"
                        target="_blank"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          textDecoration: "none",
                          cursor: "pointer",
                          padding: "0px",
                          margin: "0px 10px 10px 0px",
                          display: "inline-block",
                          color: "rgb(166, 165, 165)",
                        }}
                      >
                        <span
                          className="btn-pld-inner-wrapper"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            height: "inherit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="icon"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              fontStyle: "inherit",
                              fontWeight: "inherit",
                              alignItems: "center",
                              display: "inline-flex",
                              justifyContent: "center",
                              height: "1.5rem",
                              width: "1.5rem",
                              userSelect: "none",
                              cursor: "inherit",
                            }}
                          >
                            <i
                              id="twitter"
                              className="mdi mdi-twitter mdi-24px"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            />
                          </span>
                        </span>
                      </a>{" "}
                      <a
                        className="btn-pld btn-pld-social-share"
                        href="https://www.youtube.com/channel/UCGCSiHv7lH0wnr4TRF56MIw/videos"
                        target="_blank"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          textDecoration: "none",
                          cursor: "pointer",
                          padding: "0px",
                          margin: "0px 10px 10px 0px",
                          display: "inline-block",
                          color: "rgb(166, 165, 165)",
                        }}
                      >
                        <span
                          className="btn-pld-inner-wrapper"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            fontStyle: "inherit",
                            fontWeight: "inherit",
                            height: "inherit",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <span
                            className="icon"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              fontStyle: "inherit",
                              fontWeight: "inherit",
                              alignItems: "center",
                              display: "inline-flex",
                              justifyContent: "center",
                              height: "1.5rem",
                              width: "1.5rem",
                              userSelect: "none",
                              cursor: "inherit",
                            }}
                          >
                            <i
                              id="youtube"
                              className="mdi mdi-youtube mdi-24px"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                              }}
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>{" "}
                  <div
                    className="column is-6 footer-top-links"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      padding: "15px",
                      display: "block",
                      flex: "0 0 auto",
                      width: "50%",
                    }}
                  >
                    <ul
                      className="pld-menu is-uppercase"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        padding: "0px",
                        listStyle: "none",
                        position: "relative",
                        marginLeft: "0px",
                        textTransform: "uppercase",
                      }}
                    >
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/assurance-vie"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          ASSURANCE VIE
                        </a>
                      </li>{" "}
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/retraite"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          RETRAITE
                        </a>
                      </li>{" "}
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/actualites"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          ACTUALITÉS
                        </a>
                      </li>{" "}
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/qui-sommes-nous"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          Qui sommes-nous
                        </a>
                      </li>{" "}
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/contactez-nous"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          CONTACTEZ-NOUS
                        </a>
                      </li>{" "}
                      <li
                        className="pld-menu-item"
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(229, 231, 235, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          position: "relative",
                          padding: "0px 15px",
                          display: "block",
                          marginBottom: "17px",
                          textAlign: "left",
                        }}
                      >
                        <a
                          href="https://www.placement-direct.fr/glossaire"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition:
                              "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                            position: "relative",
                            display: "inline-block",
                            color: "rgb(0, 0, 0)",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            fontSize: "16px",
                          }}
                        >
                          Glossaire
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div
              className="footer-bottom"
              style={{
                borderWidth: "0px",
                borderStyle: "solid",
                borderColor: "rgba(229, 231, 235, 1)",
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div
                className="has-text-left"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgba(229, 231, 235, 1)",
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  textAlign: "left",
                }}
              >
                <p
                  className="allRightsReserved"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgba(229, 231, 235, 1)",
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    lineHeight: "24px",
                    color: "rgb(0, 0, 0)",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                >
                  2023 Tous droits réservés
                </p>
              </div>{" "}
              <div
                className="has-text-right footer-bottom-links"
                style={{
                  borderWidth: "0px",
                  borderStyle: "solid",
                  borderColor: "rgba(229, 231, 235, 1)",
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  textAlign: "right",
                }}
              >
                <ul
                  className="pld-menu"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgba(229, 231, 235, 1)",
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    listStyle: "none",
                    position: "relative",
                    marginLeft: "0px",
                  }}
                >
                  <li
                    className="pld-menu-item"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      position: "relative",
                      marginBottom: "17px",
                      textAlign: "left",
                      display: "inline-block",
                      padding: "0px 8px",
                    }}
                  >
                    <a
                      href="https://www.placement-direct.fr/mentions-legales"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition:
                          "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                        position: "relative",
                        display: "inline-block",
                        color: "rgb(0, 0, 0)",
                        fontSize: "12px",
                        textTransform: "none",
                        fontWeight: 400,
                      }}
                    >
                      Mentions légales
                    </a>
                  </li>{" "}
                  <li
                    className="pld-menu-item"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      position: "relative",
                      marginBottom: "17px",
                      textAlign: "left",
                      display: "inline-block",
                      padding: "0px 8px",
                    }}
                  >
                    <a
                      href="https://www.placement-direct.fr/protection-des-donnees"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition:
                          "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                        position: "relative",
                        display: "inline-block",
                        color: "rgb(0, 0, 0)",
                        fontSize: "12px",
                        textTransform: "none",
                        fontWeight: 400,
                      }}
                    >
                      Protection des données
                    </a>
                  </li>{" "}
                  <li
                    className="pld-menu-item"
                    style={{
                      borderWidth: "0px",
                      borderStyle: "solid",
                      borderColor: "rgba(229, 231, 235, 1)",
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      position: "relative",
                      marginBottom: "17px",
                      textAlign: "left",
                      display: "inline-block",
                      padding: "0px 8px",
                    }}
                  >
                    <a
                      href="https://www.placement-direct.fr/sitemap"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(229, 231, 235, 1)",
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        textDecoration: "none",
                        cursor: "pointer",
                        transition:
                          "all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                        position: "relative",
                        display: "inline-block",
                        color: "rgb(0, 0, 0)",
                        fontSize: "12px",
                        textTransform: "none",
                        fontWeight: 400,
                      }}
                    >
                      Plan du site
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  border-width: 0px;
  border-style: solid;
  border-color: rgba(229, 231, 235, 1);
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden scroll;
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  overflow-x: hidden;
}

body {
  border-width: 0px;
  border-style: solid;
  border-color: rgba(229, 231, 235, 1);
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  line-height: 1.5;
  overflow-x: hidden;
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-family: Roboto, sans-serif;
}
`,
        }}
      />
    </>
  );
}
