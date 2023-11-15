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
        <Breadcrumbs currentStep={1}></Breadcrumbs>
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
              className="columns relative"
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
              {" "}
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
                {" "}
                <div
                  className="mt-50 mb-20"
                  style={{
                    borderWidth: "0px",
                    borderStyle: "solid",
                    borderColor: "rgba(229, 231, 235, 1)",
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    marginBottom: "20px",
                    marginTop: "50px",
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
                    Vos coordonnées
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
                        All the information you provide to us will remain confidential.
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
                      {"required information"}
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
                      id="accordion-0"
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
                        color: "rgb(10, 10, 10)",
                        boxShadow: "rgba(0, 0, 0, 0.1) 0px 3px 15px",
                        marginBottom: "0px",
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
                        >
                          <div
                            className="w-full card-header is-flex-wrap-wrap"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              backgroundColor: "transparent",
                              alignItems: "stretch",
                              display: "flex",
                              width: "100%",
                              borderTopLeftRadius: "0.25rem",
                              borderTopRightRadius: "0.25rem",
                              borderBottomLeftRadius: "0.25rem",
                              borderBottomRightRadius: "0.25rem",
                              boxShadow: "none",
                              cursor: "auto",
                              padding: "30px",
                              flexWrap: "wrap",
                            }}
                          >
                            <div
                              className="is-flex is-align-items-center is-flex-grow-1"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                alignItems: "center",
                                flexGrow: 1,
                                display: "flex",
                              }}
                            >
                              {" "}
                              <h2
                                className="heading-2 pld-my-0"
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
                                  fontWeight: 700,
                                  fontSize: "26px",
                                  lineHeight: "34px",
                                }}
                              >
                                Personal Information
                              </h2>{" "}
                              <a
                                className="card-header-action ml-auto"
                                role="button"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  textDecoration: "none",
                                  color: "rgb(72, 95, 199)",
                                  cursor: "pointer",
                                  marginLeft: "auto",
                                }}
                              >
                                <svg
                                  className="has-text-primary fill-current"
                                  height="20"
                                  width="30"
                                  aria-hidden="true"
                                  focusable="false"
                                  role="img"
                                  viewBox="0 0 448 512"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                    display: "block",
                                    verticalAlign: "middle",
                                    fill: "currentcolor",
                                    transition: "rotate 0.2s ease-in-out 0s",
                                    width: "30px",
                                    height: "30px",
                                    transform: "rotate(180deg)",
                                    transformOrigin: "center center",
                                    color: "rgb(27, 67, 172)",
                                  }}
                                >
                                  <path
                                    d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                    }}
                                  />
                                </svg>
                              </a>
                            </div>{" "}
                            <div
                              className="break"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                flexBasis: "100%",
                                height: "0px",
                              }}
                            />{" "}
                          </div>
                        </div>
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
                        <div
                          className="form-container"
                          style={{
                            borderWidth: "0px",
                            borderStyle: "solid",
                            borderColor: "rgba(229, 231, 235, 1)",
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
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
                              display: "flex",
                              marginTop: "0px",
                              marginBottom: "0px",
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
                                paddingTop: "0px",
                                paddingBottom: "10px",
                              }}
                            >
                            </div>
                          </div>{" "}
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
                              display: "flex",
                              marginTop: "0px",
                              marginBottom: "0px",
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
                                paddingTop: "0px",
                                paddingBottom: "10px",
                              }}
                            >
                              <div
                                className="input-row"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  paddingTop: "10px",
                                  paddingBottom: "4px",
                                }}
                              >
                                {" "}
                                <div
                                  id="lastName"
                                  className="field is-expanded"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                  }}
                                >
                                  {" "}
                                  <label
                                    className="label"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "flex",
                                      alignItems: "center",
                                      fontWeight: 500,
                                      color: "rgb(0, 0, 0)",
                                      fontSize: "16px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    <label
                                      className="input_label_mqESs"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "28px",
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
                                        Quel est votre nom de famille ?
                                      </span>

                                      <span
                                        className="required_1oOjx"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          fontWeight: "inherit",
                                          color: "rgb(255, 209, 0)",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                  </label>{" "}
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
                                  >
                                    {" "}
                                    <div
                                      className="field-body w-input"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        flex: "5 1 0px",
                                        display: "flex",
                                        width: "35%",
                                      }}
                                    >
                                      <div
                                        className="field has-addons is-flex is-align-items-center"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          justifyContent: "flex-start",
                                          marginBottom: "0px",
                                          flexShrink: 1,
                                          flexGrow: 1,
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <div
                                          className="control is-clearfix is-medium is-expanded"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            WebkitFontSmoothing: "antialiased",
                                            boxSizing: "border-box",
                                            clear: "both",
                                            fontSize: "1rem",
                                            position: "relative",
                                            textAlign: "inherit",
                                            flexGrow: 1,
                                            flexShrink: 1,
                                          }}
                                        >
                                          <input
                                            className="input text is-rounded is-medium has-text-left"
                                            type="text"
                                            maxLength={255}
                                            inputMode="text"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              fontFamily: "Roboto, sans-serif",
                                              border: "1px solid transparent",
                                              padding:
                                                "calc(0.5em - 1px) calc(0.75em - 1px)",
                                              appearance: "none",
                                              alignItems: "center",
                                              display: "inline-flex",
                                              justifyContent: "flex-start",
                                              position: "relative",
                                              verticalAlign: "top",
                                              borderColor: "rgb(224, 222, 222)",
                                              backgroundColor:
                                                "rgb(255, 255, 255)",
                                              boxShadow:
                                                "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                              maxWidth: "100%",
                                              width: "100%",
                                              borderRadius: "9999px",
                                              paddingLeft:
                                                "calc(1.125em - 1px)",
                                              paddingRight:
                                                "calc(1.125em - 1px)",
                                              fontWeight: 400,
                                              fontStretch: "normal",
                                              fontStyle: "normal",
                                              lineHeight: "normal",
                                              letterSpacing: "normal",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "16px",
                                              height: "50px",
                                              textAlign: "left",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                            }}
                                          />
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <p
                                    className="help text"
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
                              </div>
                            </div>
                          </div>{" "}
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
                              display: "flex",
                              marginTop: "0px",
                              marginBottom: "0px",
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
                                paddingTop: "0px",
                                paddingBottom: "10px",
                              }}
                            >
                              <div
                                className="input-row"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  paddingTop: "10px",
                                  paddingBottom: "4px",
                                }}
                              >
                                {" "}
                                <div
                                  id="firstName"
                                  className="field is-expanded"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                  }}
                                >
                                  {" "}
                                  <label
                                    className="label"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "flex",
                                      alignItems: "center",
                                      fontWeight: 500,
                                      color: "rgb(0, 0, 0)",
                                      fontSize: "16px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    <label
                                      className="input_label_mqESs"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "28px",
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
                                        Quel est votre prénom ?
                                      </span>

                                      <span
                                        className="required_1oOjx"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          fontWeight: "inherit",
                                          color: "rgb(255, 209, 0)",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                  </label>{" "}
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
                                  >
                                    {" "}
                                    <div
                                      className="field-body w-input"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        flex: "5 1 0px",
                                        display: "flex",
                                        width: "35%",
                                      }}
                                    >
                                      <div
                                        className="field has-addons is-flex is-align-items-center"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          justifyContent: "flex-start",
                                          marginBottom: "0px",
                                          flexShrink: 1,
                                          flexGrow: 1,
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <div
                                          className="control is-clearfix is-medium is-expanded"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            WebkitFontSmoothing: "antialiased",
                                            boxSizing: "border-box",
                                            clear: "both",
                                            fontSize: "1rem",
                                            position: "relative",
                                            textAlign: "inherit",
                                            flexGrow: 1,
                                            flexShrink: 1,
                                          }}
                                        >
                                          <input
                                            className="input text is-rounded is-medium has-text-left"
                                            type="text"
                                            maxLength={26}
                                            inputMode="text"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              fontFamily: "Roboto, sans-serif",
                                              border: "1px solid transparent",
                                              padding:
                                                "calc(0.5em - 1px) calc(0.75em - 1px)",
                                              appearance: "none",
                                              alignItems: "center",
                                              display: "inline-flex",
                                              justifyContent: "flex-start",
                                              position: "relative",
                                              verticalAlign: "top",
                                              borderColor: "rgb(224, 222, 222)",
                                              backgroundColor:
                                                "rgb(255, 255, 255)",
                                              boxShadow:
                                                "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                              maxWidth: "100%",
                                              width: "100%",
                                              borderRadius: "9999px",
                                              paddingLeft:
                                                "calc(1.125em - 1px)",
                                              paddingRight:
                                                "calc(1.125em - 1px)",
                                              fontWeight: 400,
                                              fontStretch: "normal",
                                              fontStyle: "normal",
                                              lineHeight: "normal",
                                              letterSpacing: "normal",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "16px",
                                              height: "50px",
                                              textAlign: "left",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                            }}
                                          />
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <p
                                    className="help text"
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
                              </div>
                            </div>
                          </div>{" "}
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
                              display: "flex",
                              marginTop: "0px",
                              marginBottom: "0px",
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
                                paddingTop: "0px",
                                paddingBottom: "10px",
                              }}
                            >
                              <div
                                className="input-row"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  paddingTop: "10px",
                                  paddingBottom: "4px",
                                }}
                              >
                                {" "}
                                <div
                                  id="email"
                                  className="field is-expanded"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                  }}
                                >
                                  {" "}
                                  <label
                                    className="label"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "flex",
                                      alignItems: "center",
                                      fontWeight: 500,
                                      color: "rgb(0, 0, 0)",
                                      fontSize: "16px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    <label
                                      className="input_label_mqESs"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "28px",
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
                                        Quelle est votre adresse email ?
                                      </span>

                                      <span
                                        className="required_1oOjx"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          fontWeight: "inherit",
                                          color: "rgb(255, 209, 0)",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                    <span
                                      className="mx-10 is-flex-shrink-0"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontStyle: "inherit",
                                        fontWeight: "inherit",
                                        cursor: "pointer",
                                        flexShrink: 0,
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                      }}
                                    >
                                      <img
                                        id="iconHelp"
                                        className="is-block"
                                        height={20}
                                        width={20}
                                        aria-expanded="false"
                                        src="https://souscrire.placement-direct.fr/images/help.svg"
                                        style={{
                                          borderWidth: "0px",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          borderStyle: "solid",
                                          verticalAlign: "middle",
                                          height: "auto",
                                          maxWidth: "100%",
                                          display: "block",
                                        }}
                                      />
                                    </span>
                                  </label>{" "}
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
                                  >
                                    {" "}
                                    <div
                                      className="field-body w-input"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        flex: "5 1 0px",
                                        display: "flex",
                                        width: "35%",
                                      }}
                                    >
                                      <div
                                        className="field has-addons is-flex is-align-items-center"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          justifyContent: "flex-start",
                                          marginBottom: "0px",
                                          flexShrink: 1,
                                          flexGrow: 1,
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <div
                                          className="control is-clearfix is-medium is-expanded"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            WebkitFontSmoothing: "antialiased",
                                            boxSizing: "border-box",
                                            clear: "both",
                                            fontSize: "1rem",
                                            position: "relative",
                                            textAlign: "inherit",
                                            flexGrow: 1,
                                            flexShrink: 1,
                                          }}
                                        >
                                          <input
                                            className="input text is-rounded is-medium has-text-left"
                                            type="email"
                                            inputMode="email"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              fontFamily: "Roboto, sans-serif",
                                              border: "1px solid transparent",
                                              padding:
                                                "calc(0.5em - 1px) calc(0.75em - 1px)",
                                              appearance: "none",
                                              alignItems: "center",
                                              display: "inline-flex",
                                              justifyContent: "flex-start",
                                              position: "relative",
                                              verticalAlign: "top",
                                              borderColor: "rgb(224, 222, 222)",
                                              backgroundColor:
                                                "rgb(255, 255, 255)",
                                              boxShadow:
                                                "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                              maxWidth: "100%",
                                              width: "100%",
                                              borderRadius: "9999px",
                                              paddingLeft:
                                                "calc(1.125em - 1px)",
                                              paddingRight:
                                                "calc(1.125em - 1px)",
                                              fontWeight: 400,
                                              fontStretch: "normal",
                                              fontStyle: "normal",
                                              lineHeight: "normal",
                                              letterSpacing: "normal",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "16px",
                                              height: "50px",
                                              textAlign: "left",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                            }}
                                          />
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <p
                                    className="help text"
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
                              </div>
                            </div>
                          </div>{" "}
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
                              display: "flex",
                              marginTop: "0px",
                              marginBottom: "0px",
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
                                paddingTop: "0px",
                                paddingBottom: "10px",
                              }}
                            >
                              <div
                                className="input-row"
                                style={{
                                  borderWidth: "0px",
                                  borderStyle: "solid",
                                  borderColor: "rgba(229, 231, 235, 1)",
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased",
                                  paddingTop: "10px",
                                  paddingBottom: "4px",
                                }}
                              >
                                {" "}
                                <div
                                  id="birthDate"
                                  className="field is-expanded"
                                  style={{
                                    borderWidth: "0px",
                                    borderStyle: "solid",
                                    borderColor: "rgba(229, 231, 235, 1)",
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased",
                                  }}
                                >
                                  {" "}
                                  <label
                                    className="label"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "flex",
                                      alignItems: "center",
                                      fontWeight: 500,
                                      color: "rgb(0, 0, 0)",
                                      fontSize: "16px",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    <label
                                      className="input_label_mqESs"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        fontWeight: 500,
                                        fontSize: "18px",
                                        lineHeight: "28px",
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
                                        Quelle est votre date de naissance ?
                                      </span>

                                      <span
                                        className="required_1oOjx"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          fontWeight: "inherit",
                                          color: "rgb(255, 209, 0)",
                                        }}
                                      >
                                        *
                                      </span>
                                    </label>{" "}
                                  </label>{" "}
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
                                  >
                                    {" "}
                                    <div
                                      className="field-body w-150px"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        flex: "5 1 0px",
                                        display: "flex",
                                        width: "150px",
                                      }}
                                    >
                                      <div
                                        className="field has-addons is-flex is-align-items-center"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          justifyContent: "flex-start",
                                          marginBottom: "0px",
                                          flexShrink: 1,
                                          flexGrow: 1,
                                          alignItems: "center",
                                          display: "flex",
                                        }}
                                      >
                                        {" "}
                                        <div
                                          className="control is-clearfix is-medium is-expanded"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            WebkitFontSmoothing: "antialiased",
                                            boxSizing: "border-box",
                                            clear: "both",
                                            fontSize: "1rem",
                                            position: "relative",
                                            textAlign: "inherit",
                                            flexGrow: 1,
                                            flexShrink: 1,
                                          }}
                                        >
                                          <input
                                            className="input text is-rounded is-medium has-text-left"
                                            type="text"
                                            placeholder="JJ/MM/AAAA"
                                            inputMode="numeric"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              fontFamily: "Roboto, sans-serif",
                                              border: "1px solid transparent",
                                              padding:
                                                "calc(0.5em - 1px) calc(0.75em - 1px)",
                                              appearance: "none",
                                              alignItems: "center",
                                              display: "inline-flex",
                                              justifyContent: "flex-start",
                                              position: "relative",
                                              verticalAlign: "top",
                                              borderColor: "rgb(224, 222, 222)",
                                              backgroundColor:
                                                "rgb(255, 255, 255)",
                                              boxShadow:
                                                "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                              maxWidth: "100%",
                                              width: "100%",
                                              borderRadius: "9999px",
                                              paddingLeft:
                                                "calc(1.125em - 1px)",
                                              paddingRight:
                                                "calc(1.125em - 1px)",
                                              fontWeight: 400,
                                              fontStretch: "normal",
                                              fontStyle: "normal",
                                              lineHeight: "normal",
                                              letterSpacing: "normal",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "16px",
                                              height: "50px",
                                              textAlign: "left",
                                              paddingTop: "0px",
                                              paddingBottom: "0px",
                                            }}
                                          />
                                        </div>{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <p
                                    className="help text"
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
                              </div>
                            </div>
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>
                  </div>
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
                  <button
                    onClick={onNextClick}
                    className="pld-m-2 btn_1P7x4 block_1Jg7s filled_FpChn shift_left_22ha8 yellow_sJHfv"
                    aria-label="Suivant"
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
                      color: "rgba(0,0,0,0.7)",
                      backgroundColor: "#ffd100",
                      minWidth: "200px",
                      boxShadow:
                        "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 0px #ffd100",
                    }}
                  >
                    <svg
                      className="pld-mr-3"
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
                        marginRight: "0.75rem",
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
                    </svg>{" "}
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
                      {"Suivant"}
                    </span>{" "}
                  </button>
                </div>{" "}
              </div>
            </div>
          </section>
        </div>{" "}
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