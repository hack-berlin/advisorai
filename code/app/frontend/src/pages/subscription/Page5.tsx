import React, { MouseEventHandler } from "react";
import Breadcrumbs from './components/Breadcrumbs';

export default function Component({ onPrevClick, onNextClick }: { onPrevClick: MouseEventHandler<HTMLButtonElement>, onNextClick: MouseEventHandler<HTMLButtonElement> }) {
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
        <Breadcrumbs currentStep={4}></Breadcrumbs>

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
                        aria-label="Previous"
                        onClick={onPrevClick}
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
                          {"Previous"}
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
