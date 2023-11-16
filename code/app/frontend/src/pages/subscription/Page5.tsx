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
                      color: "black",
                    }}
                  >
                    Your product choice
                  </h1>{" "}
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
                            color: "rgb(194, 20, 73)",
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
                          Congratulations  &#129395; !
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
                            </div>
                            
                            <p>Welcome to the Swisslife Family  &#128525; !</p>
                          </div>{" "}
                        </section>{" "}
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
                            "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 1px #C21449",
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
