import React, { MouseEventHandler, useContext } from "react";
import Breadcrumbs from './components/Breadcrumbs';
import Performance from './components/Performance';
import { AppContext } from "../context";


export default function Component({ onPrevClick, onNextClick, onTips }: { onPrevClick: MouseEventHandler<HTMLButtonElement>, onNextClick: MouseEventHandler<HTMLButtonElement>, onTips: (tip: string) => void }) {
  const { state } = useContext<any>(AppContext);

  function clickTips(tip : string): void {
    onTips(tip)
  }

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
        <Breadcrumbs currentStep={2}></Breadcrumbs>

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
                  Your investor profile
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
                    id="pi-accordion-4"
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
                                color: "black",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontWeight: 700,
                                fontSize: "26px",
                                lineHeight: "34px",
                              }}
                            >
                              Your financial goals
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
                                  color: "black",
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
                      <section
                        id="ObjectifsFinanciers"
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
                          className="columns is-multiline"
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
                            className="column is-12"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              padding: "15px",
                              display: "block",
                              flex: "0 0 auto",
                              width: "100%",
                              paddingTop: "0px",
                              paddingBottom: "10px",
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
                                    id="SouhaitAllocationFinanciere"
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
                                          What type of management do you want to choose?
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
                                        id="management-type-hint"
                                        onClick={() => clickTips('can you explain me difference between  delegated management and mixed management ?')}
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
                                    </label>{" "}{" "}

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
                                        className="columns is-multiline with-default-border is-mobile gap-y-10 is-variable is-2"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
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
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
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
                                            onClick={() => clickTips('can you explain me the delegated management ?')}
                                            style={{
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
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
                                              cursor: "pointer",
                                              justifyContent: "center",
                                              textAlign: "center",
                                              padding: "24px",
                                              borderRadius: "10px",
                                              whiteSpace: "unset",
                                              height: "auto",
                                              width: "100%",
                                              background: "none",
                                              textDecoration: "none",
                                              backgroundImage: "none",
                                              fontSize: "1rem",
                                              backgroundColor:
                                                "rgb(255, 255, 255)",

                                              border:
                                                "2px solid rgb(122, 122, 122)",
                                              borderColor: "black",
                                              borderWidth: "3px",
                                              color: "black",

                                            }}
                                          >
                                            {" "}
                                            <label
                                              className="b-radio radio is-hidden"
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
                                                value="571"
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
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  transition:
                                                    "background 0.15s ease-out 0s",
                                                  borderRadius: "50%",
                                                  display: "flex",
                                                  flexShrink: 0,
                                                  position: "relative",
                                                  cursor: "pointer",
                                                  border:
                                                    "2px solid rgb(10, 10, 10)",
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
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  paddingLeft: "6px",
                                                }}
                                              />
                                            </label>{" "}
                                            <div
                                              className="is-flex is-flex-direction-column is-align-items-center is-justify-content-start has-text-weight-normal pld-mb-auto"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                marginBottom: "auto",
                                                flexDirection: "column",
                                                justifyContent: "start",
                                                alignItems: "center",
                                                fontWeight: 400,
                                                display: "flex",
                                              }}
                                            >
                                              <div
                                                className="pld-space-y-[10px]"
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
                                                <img
                                                  className="pld-w-[100px] pld-mx-auto"
                                                  src="https://souscrire.placement-direct.fr/images/icons/gestion-pilotee.svg"
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
                                                    height: "auto",
                                                    maxWidth: "100%",
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    width: "100px",
                                                  }}
                                                />{" "}
                                                <div
                                                  className="pld-text-sm has-text-weight-bold is-uppercase has-text-primary"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "0.875rem",
                                                    lineHeight: "1.25rem",
                                                    marginTop:
                                                      "calc(10px * calc(1 - 0))",
                                                    marginBottom:
                                                      "calc(10px * 0)",
                                                    color: "black",
                                                    textTransform: "uppercase",
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  Delegated management
                                                </div>{" "}
                                                <div
                                                  className="pld-text-sm md:pld-text-[16px] has-text-grey-darker has-text-weight-bold"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    lineHeight: "1.25rem",
                                                    fontSize: "16px",
                                                    marginTop:
                                                      "calc(10px * calc(1 - 0))",
                                                    marginBottom:
                                                      "calc(10px * 0)",
                                                    color: "rgb(54, 54, 54)",
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  Allowing experts to choose the investment options for my policy
                                                </div>
                                              </div>
                                            </div>
                                          </button>{" "}
                                          <div
                                            className="pld-mt-4"
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
                                          />
                                        </div>
                                        <div
                                          className="is-flex is-flex-wrap-wrap column is-12-mobile is-6-tablet is-4-desktop"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
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
                                            onClick={() => clickTips('can you explain me the mixed management ?')}
                                            style={{
                                              borderStyle: "solid",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
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
                                              backgroundColor:
                                                "rgb(255, 255, 255)",
                                            }}
                                          >
                                            {" "}
                                            <label
                                              className="b-radio radio is-hidden"
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
                                                value="570"
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
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  transition:
                                                    "background 0.15s ease-out 0s",
                                                  borderRadius: "50%",
                                                  display: "flex",
                                                  flexShrink: 0,
                                                  position: "relative",
                                                  cursor: "pointer",
                                                  borderColor:
                                                    "black",
                                                  border:
                                                    "2px solid rgb(10, 10, 10)",
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
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  fontStyle: "inherit",
                                                  fontWeight: "inherit",
                                                  paddingLeft: "6px",
                                                }}
                                              />
                                            </label>{" "}
                                            <div
                                              className="is-flex is-flex-direction-column is-align-items-center is-justify-content-start has-text-weight-normal pld-mb-auto"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                marginBottom: "auto",
                                                flexDirection: "column",
                                                justifyContent: "start",
                                                alignItems: "center",
                                                fontWeight: 400,
                                                display: "flex",
                                              }}
                                            >
                                              <div
                                                className="pld-space-y-[10px]"
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
                                                <img
                                                  className="pld-w-[100px] pld-mx-auto"
                                                  src="https://souscrire.placement-direct.fr/images/icons/gestion-libre.svg"
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
                                                    height: "auto",
                                                    maxWidth: "100%",
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    width: "100px",
                                                  }}
                                                />{" "}
                                                <div
                                                  className="pld-text-sm has-text-weight-bold is-uppercase has-text-primary"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    fontSize: "0.875rem",
                                                    lineHeight: "1.25rem",
                                                    marginTop:
                                                      "calc(10px * calc(1 - 0))",
                                                    marginBottom:
                                                      "calc(10px * 0)",
                                                    color: "black",
                                                    textTransform: "uppercase",
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  Self-management{" "}
                                                  <span
                                                    className="has-text-success pld-text-[10px]"
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
                                                      fontSize: "10px",
                                                      color:
                                                        "rgb(72, 199, 142)",
                                                    }}
                                                  >
                                                    or
                                                  </span>{" "}
                                                  mixed
                                                </div>{" "}
                                                <div
                                                  className="pld-text-sm md:pld-text-[16px] has-text-grey-darker has-text-weight-bold"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    lineHeight: "1.25rem",
                                                    fontSize: "16px",
                                                    marginTop:
                                                      "calc(10px * calc(1 - 0))",
                                                    marginBottom:
                                                      "calc(10px * 0)",
                                                    color: "rgb(54, 54, 54)",
                                                    fontWeight: 700,
                                                  }}
                                                >
                                                  To choose my own investment options for my policy
                                                </div>
                                              </div>
                                            </div>
                                          </button>{" "}
                                          <div
                                            className="pld-mt-4"
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
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
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
                                  {" "}
                                  <Performance />

                                </div>
                              </div>
                            </div>
                          </div>{" "}
                          <span
                            className="column is-12"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              fontStyle: "inherit",
                              fontWeight: "inherit",
                              padding: "15px",
                              display: "block",
                              flex: "0 0 auto",
                              width: "100%",
                              paddingTop: "0px",
                              paddingBottom: "10px",
                            }}
                          >
                            {" "}
                            <input
                              type="hidden"
                              defaultValue="valid"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                fontSize: "100%",
                                padding: "0px",
                                lineHeight: "inherit",
                                color: "inherit",
                                margin: "0px",
                                fontFamily: "Roboto, sans-serif",
                              }}
                            />{" "}
                          </span>{" "}
                        </div>
                      </section>{" "}

                    </div>{" "}
                  </div>
                  <div
                    id="pi-accordion-7"
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
                                color: "black",
                                fontStretch: "normal",
                                fontStyle: "normal",
                                marginTop: "0px",
                                marginBottom: "0px",
                                fontWeight: 700,
                                fontSize: "26px",
                                lineHeight: "34px",
                              }}
                            >
                              Your investment
                            </h2>{" "}
                            <a
                              className="card-header-action ml-auto"
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
                                  color: "black",
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
                        {" "}
                        <div
                          className="columns !pld-mb-3"
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
                            marginBottom: "0.75rem",
                          }}
                        >
                          <div
                            className="column is-6 !pld-px-0"
                            style={{
                              borderWidth: "0px",
                              borderStyle: "solid",
                              borderColor: "rgba(229, 231, 235, 1)",
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              padding: "15px",
                              display: "block",
                              flex: "0 0 auto",
                              paddingTop: "0px",
                              paddingBottom: "10px",
                              paddingLeft: "0px",
                              paddingRight: "0px",
                            }}
                          >
                            <div
                              className="column is-12 !pld-py-0"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                padding: "15px",
                                display: "block",
                                flex: "0 0 auto",
                                width: "100%",
                                paddingTop: "0px",
                                paddingBottom: "0px",
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
                                      className="pld-flex pld-items-center pld-space-x-3 pld-mb-3"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        marginBottom: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
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
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                          }}
                                        >
                                          What amount would you like to invest for your {" "}
                                          <span
                                            className="has-text-success"
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
                                              color: "rgb(72, 199, 142)",
                                            }}
                                          >
                                            INITIAL {" "}
                                          </span>
                                          contribution?
                                        </span>

                                        <span
                                          className="required_1oOjx"
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                            fontStyle: "inherit",
                                            fontWeight: "inherit",
                                            color: "rgb(194, 20, 73)",
                                          }}
                                        >
                                          *
                                        </span>
                                      </label>{" "}
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
                                      {" "}
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
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
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
                                            className="control is-medium"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              boxSizing: "border-box",
                                              clear: "both",
                                              position: "relative",
                                              textAlign: "inherit",
                                              marginRight: "-1px",
                                              fontSize: "16px",
                                            }}
                                          >
                                            <input
                                              className="input is-rounded is-expanded is-medium md:!pld-w-[220px] !pld-w-[240px]"
                                              type="text"
                                              inputMode="decimal"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                margin: "0px",
                                                fontFamily:
                                                  "Roboto, sans-serif",
                                                border: "1px solid transparent",
                                                padding:
                                                  "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                appearance: "none",
                                                alignItems: "center",
                                                display: "inline-flex",
                                                justifyContent: "flex-start",
                                                position: "relative",
                                                verticalAlign: "top",
                                                borderColor:
                                                  "rgb(224, 222, 222)",
                                                backgroundColor:
                                                  "rgb(255, 255, 255)",
                                                boxShadow:
                                                  "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                                maxWidth: "100%",
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
                                                borderBottomRightRadius: "0px",
                                                borderTopRightRadius: "0px",
                                                width: "220px",
                                                paddingTop: "0px",
                                                paddingBottom: "0px",
                                              }}
                                            />
                                          </div>{" "}
                                          <p
                                            className="control is-h-full has-1-z-index"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              margin: "0px",
                                              padding: "0px",
                                              lineHeight: "24px",
                                              boxSizing: "border-box",
                                              clear: "both",
                                              fontSize: "1rem",
                                              position: "relative",
                                              textAlign: "inherit",
                                              zIndex: 1,
                                              height: "100%",
                                            }}
                                          >
                                            <button
                                              className="button is-h-full is-static is-rounded"
                                              type="button"
                                              style={{
                                                borderStyle: "solid",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                textTransform: "none",
                                                backgroundImage: "none",
                                                margin: "0px",
                                                fontFamily:
                                                  "Roboto, sans-serif",
                                                border: "1px solid transparent",
                                                appearance: "none",
                                                alignItems: "center",
                                                display: "inline-flex",
                                                fontSize: "1rem",
                                                lineHeight: 1.5,
                                                position: "relative",
                                                verticalAlign: "top",
                                                userSelect: "none",
                                                borderWidth: "1px",
                                                padding:
                                                  "calc(0.5em - 1px) 1em",
                                                whiteSpace: "nowrap",
                                                cursor: "pointer",
                                                justifyContent: "center",
                                                textAlign: "center",
                                                height: "100%",
                                                borderColor:
                                                  "rgb(224, 222, 222)",
                                                backgroundColor:
                                                  "rgb(245, 245, 245)",
                                                color: "rgb(122, 122, 122)",
                                                boxShadow: "none",
                                                pointerEvents: "none",
                                                borderRadius: "9999px",
                                                paddingLeft: "1.25em",
                                                paddingRight: "1.25em",
                                                borderBottomLeftRadius: "0px",
                                                borderTopLeftRadius: "0px",
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
                                                {"€"}
                                              </span>
                                            </button>
                                          </p>
                                        </div>
                                      </div>
                                    </div>{" "}
                                  </div>{" "}
                                  <div
                                    className="has-text-primary pld-mb-4"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      marginBottom: "1rem",
                                      color: "black",
                                    }}
                                  >
                                    Minimum required: 500 €
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                            <div
                              className="column is-12 !pld-py-0 pld-mt-4"
                              style={{
                                borderWidth: "0px",
                                borderStyle: "solid",
                                borderColor: "rgba(229, 231, 235, 1)",
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                marginTop: "1rem",
                                padding: "15px",
                                display: "block",
                                flex: "0 0 auto",
                                width: "100%",
                                paddingTop: "0px",
                                paddingBottom: "0px",
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
                                  <label
                                    className="pld-block input_label_mqESs"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      display: "block",
                                      fontWeight: 500,
                                      fontSize: "18px",
                                      lineHeight: "28px",
                                    }}
                                  >
                                    What amount would you like to invest for your {" "}
                                    <span
                                      className="has-text-success is-uppercase"
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
                                      Programmed
                                    </span> {" "}
                                    contributions


                                    {"?"}
                                  </label>{" "}
                                  <div
                                    className="columns column is-12 is-multiline"
                                    style={{
                                      borderWidth: "0px",
                                      borderStyle: "solid",
                                      borderColor: "rgba(229, 231, 235, 1)",
                                      boxSizing: "inherit",
                                      WebkitFontSmoothing: "antialiased",
                                      padding: "15px",
                                      marginLeft: "-15px",
                                      marginRight: "-15px",
                                      flex: "0 0 auto",
                                      width: "100%",
                                      flexWrap: "wrap",
                                      display: "flex",
                                      marginTop: "0px",
                                      marginBottom: "0px",
                                    }}
                                  >
                                    <div
                                      className="columns column is-flex is-align-items-center md:!pld-mb-0 !pld-mb-2 is-6"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        padding: "15px",
                                        marginLeft: "-15px",
                                        marginRight: "-15px",
                                        flex: "0 0 auto",
                                        marginTop: "0px",
                                        paddingTop: "0px",
                                        paddingBottom: "10px",
                                        marginBottom: "0px",
                                        alignItems: "center",
                                        display: "flex",
                                      }}
                                    >
                                      <span
                                        className="has-text-weight-medium pld-mr-2"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          marginRight: "0.5rem",
                                          display: "block",
                                          fontWeight: 500,
                                        }}
                                      >
                                        All of
                                      </span>{" "}
                                      <div
                                        className="md:pld-min-w-none pld-min-w-[200px]"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          minWidth: "200px",
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
                                            WebkitFontSmoothing: "antialiased",
                                          }}
                                        >
                                          <div
                                            className="control is-expanded"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              boxSizing: "border-box",
                                              clear: "both",
                                              fontSize: "1rem",
                                              position: "relative",
                                              textAlign: "inherit",
                                            }}
                                          >
                                            <span
                                              className="select is-medium is-fullwidth is-rounded"
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
                                                display: "inline-block",
                                                maxWidth: "100%",
                                                position: "relative",
                                                verticalAlign: "top",
                                                fontSize: "1.25rem",
                                                width: "100%",
                                                height: "auto",
                                              }}
                                            >
                                              <select
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  textTransform: "none",
                                                  margin: "0px",
                                                  fontFamily:
                                                    "Roboto, sans-serif",
                                                  border:
                                                    "1px solid transparent",
                                                  padding:
                                                    "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                  appearance: "none",
                                                  alignItems: "center",
                                                  boxShadow: "none",
                                                  justifyContent: "flex-start",
                                                  position: "relative",
                                                  verticalAlign: "top",
                                                  borderColor:
                                                    "rgb(224, 222, 222)",
                                                  backgroundColor:
                                                    "rgb(255, 255, 255)",
                                                  outline: "none",
                                                  cursor: "pointer",
                                                  display: "block",
                                                  maxWidth: "100%",
                                                  borderRadius: "9999px",
                                                  paddingLeft: "1em",
                                                  paddingRight: "2.5em",
                                                  width: "100%",
                                                  fontWeight: 400,
                                                  fontStretch: "normal",
                                                  fontStyle: "normal",
                                                  lineHeight: "normal",
                                                  letterSpacing: "normal",
                                                  color: "rgb(0, 0, 0)",
                                                  fontSize: "16px",
                                                  height: "50px",
                                                  textRendering: "auto",
                                                  paddingTop: "0px",
                                                  paddingBottom: "0px",
                                                }}
                                              >
                                                <option
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                />
                                                <option
                                                  value="165"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"Month"}
                                                </option>
                                                <option
                                                  value="166"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"Quarters"}
                                                </option>
                                                <option
                                                  value="167"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"Semesters"}
                                                </option>
                                                <option
                                                  value="168"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"Years"}
                                                </option>
                                              </select>
                                            </span>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>{" "}
                                    <div
                                      className="columns column is-flex is-align-items-center md:!pld-mb-0 !pld-mb-2 is-6"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        padding: "15px",
                                        marginLeft: "-15px",
                                        marginRight: "-15px",
                                        flex: "0 0 auto",
                                        marginTop: "0px",
                                        paddingTop: "0px",
                                        paddingBottom: "10px",
                                        marginBottom: "0px",
                                        alignItems: "center",
                                        display: "flex",
                                      }}
                                    >
                                      <span
                                        className="has-text-weight-medium pld-mr-2 md:pld-mx-2 pld-mx-0 pld-text-right pld-min-w-[80px]"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          minWidth: "80px",
                                          textAlign: "right",
                                          marginLeft: "0.5rem",
                                          marginRight: "0.5rem",
                                          display: "block",
                                          fontWeight: 500,
                                        }}
                                      >
                                        starting from
                                      </span>{" "}
                                      <div
                                        className="pld-min-w-[200px]"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          minWidth: "200px",
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
                                            WebkitFontSmoothing: "antialiased",
                                          }}
                                        >
                                          <div
                                            className="control is-expanded"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              boxSizing: "border-box",
                                              clear: "both",
                                              fontSize: "1rem",
                                              position: "relative",
                                              textAlign: "inherit",
                                            }}
                                          >
                                            <span
                                              className="select is-medium is-fullwidth is-rounded"
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
                                                display: "inline-block",
                                                maxWidth: "100%",
                                                position: "relative",
                                                verticalAlign: "top",
                                                fontSize: "1.25rem",
                                                width: "100%",
                                                height: "auto",
                                              }}
                                            >
                                              <select
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  boxSizing: "inherit",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  textTransform: "none",
                                                  margin: "0px",
                                                  fontFamily:
                                                    "Roboto, sans-serif",
                                                  border:
                                                    "1px solid transparent",
                                                  padding:
                                                    "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                  appearance: "none",
                                                  alignItems: "center",
                                                  boxShadow: "none",
                                                  justifyContent: "flex-start",
                                                  position: "relative",
                                                  verticalAlign: "top",
                                                  borderColor:
                                                    "rgb(224, 222, 222)",
                                                  backgroundColor:
                                                    "rgb(255, 255, 255)",
                                                  outline: "none",
                                                  cursor: "pointer",
                                                  display: "block",
                                                  maxWidth: "100%",
                                                  borderRadius: "9999px",
                                                  paddingLeft: "1em",
                                                  paddingRight: "2.5em",
                                                  width: "100%",
                                                  fontWeight: 400,
                                                  fontStretch: "normal",
                                                  fontStyle: "normal",
                                                  lineHeight: "normal",
                                                  letterSpacing: "normal",
                                                  color: "rgb(0, 0, 0)",
                                                  fontSize: "16px",
                                                  height: "50px",
                                                  textRendering: "auto",
                                                  paddingTop: "0px",
                                                  paddingBottom: "0px",
                                                }}
                                              >
                                                <option
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                />
                                                <option
                                                  value="619"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of december 2023"}
                                                </option>
                                                <option
                                                  value="608"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of January 2024"}
                                                </option>
                                                <option
                                                  value="609"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of february 2024"}
                                                </option>
                                                <option
                                                  value="610"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of mars 2024"}
                                                </option>
                                                <option
                                                  value="611"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of april 2024"}
                                                </option>
                                                <option
                                                  value="612"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of May 2024"}
                                                </option>
                                                <option
                                                  value="613"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of juin 2024"}
                                                </option>
                                                <option
                                                  value="614"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of july 2024"}
                                                </option>
                                                <option
                                                  value="615"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of August 2024"}
                                                </option>
                                                <option
                                                  value="616"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of september 2024"}
                                                </option>
                                                <option
                                                  value="617"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of october 2024"}
                                                </option>
                                                <option
                                                  value="618"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    borderColor:
                                                      "rgba(229, 231, 235, 1)",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    color: "rgb(74, 74, 74)",
                                                  }}
                                                >
                                                  {"End of november 2024"}
                                                </option>
                                              </select>
                                            </span>
                                          </div>
                                        </div>{" "}
                                      </div>
                                    </div>{" "}
                                    <div
                                      className="column !pld-p-0"
                                      style={{
                                        borderWidth: "0px",
                                        borderStyle: "solid",
                                        borderColor: "rgba(229, 231, 235, 1)",
                                        boxSizing: "inherit",
                                        WebkitFontSmoothing: "antialiased",
                                        flex: "1 1 0px",
                                        display: "block",
                                        padding: "0px",
                                        paddingTop: "0px",
                                        paddingBottom: "0px",
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
                                          style={{
                                            borderWidth: "0px",
                                            borderStyle: "solid",
                                            borderColor:
                                              "rgba(229, 231, 235, 1)",
                                            boxSizing: "inherit",
                                            WebkitFontSmoothing: "antialiased",
                                          }}
                                        >
                                          {" "}
                                          <div
                                            className="field-body"
                                            style={{
                                              borderWidth: "0px",
                                              borderStyle: "solid",
                                              borderColor:
                                                "rgba(229, 231, 235, 1)",
                                              boxSizing: "inherit",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              flex: "5 1 0px",
                                              display: "flex",
                                            }}
                                          >
                                            <div
                                              className="field has-addons"
                                              style={{
                                                borderWidth: "0px",
                                                borderStyle: "solid",
                                                borderColor:
                                                  "rgba(229, 231, 235, 1)",
                                                boxSizing: "inherit",
                                                WebkitFontSmoothing:
                                                  "antialiased",
                                                display: "flex",
                                                justifyContent: "flex-start",
                                                marginBottom: "0px",
                                                flexShrink: 1,
                                                flexGrow: 1,
                                              }}
                                            >
                                              {" "}
                                              <div
                                                className="control is-medium"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  boxSizing: "border-box",
                                                  clear: "both",
                                                  position: "relative",
                                                  textAlign: "inherit",
                                                  marginRight: "-1px",
                                                  fontSize: "16px",
                                                }}
                                              >
                                                <input
                                                  className="input is-rounded is-expanded is-medium !pld-w-[220px]"
                                                  type="text"
                                                  inputMode="decimal"
                                                  style={{
                                                    borderWidth: "0px",
                                                    borderStyle: "solid",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                    border:
                                                      "1px solid transparent",
                                                    padding:
                                                      "calc(0.5em - 1px) calc(0.75em - 1px)",
                                                    appearance: "none",
                                                    alignItems: "center",
                                                    display: "inline-flex",
                                                    justifyContent:
                                                      "flex-start",
                                                    position: "relative",
                                                    verticalAlign: "top",
                                                    borderColor:
                                                      "rgb(224, 222, 222)",
                                                    backgroundColor:
                                                      "rgb(255, 255, 255)",
                                                    boxShadow:
                                                      "rgba(10, 10, 10, 0.05) 0px 0.0625em 0.125em inset",
                                                    maxWidth: "100%",
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
                                                    borderBottomRightRadius:
                                                      "0px",
                                                    borderTopRightRadius: "0px",
                                                    width: "220px",
                                                    paddingTop: "0px",
                                                    paddingBottom: "0px",
                                                  }}
                                                />
                                              </div>{" "}
                                              <p
                                                className="control is-h-full has-1-z-index"
                                                style={{
                                                  borderWidth: "0px",
                                                  borderStyle: "solid",
                                                  borderColor:
                                                    "rgba(229, 231, 235, 1)",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  margin: "0px",
                                                  padding: "0px",
                                                  lineHeight: "24px",
                                                  boxSizing: "border-box",
                                                  clear: "both",
                                                  fontSize: "1rem",
                                                  position: "relative",
                                                  textAlign: "inherit",
                                                  zIndex: 1,
                                                  height: "100%",
                                                }}
                                              >
                                                <button
                                                  className="button is-h-full is-static is-rounded"
                                                  type="button"
                                                  style={{
                                                    borderStyle: "solid",
                                                    boxSizing: "inherit",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    textTransform: "none",
                                                    backgroundImage: "none",
                                                    margin: "0px",
                                                    fontFamily:
                                                      "Roboto, sans-serif",
                                                    border:
                                                      "1px solid transparent",
                                                    appearance: "none",
                                                    alignItems: "center",
                                                    display: "inline-flex",
                                                    fontSize: "1rem",
                                                    lineHeight: 1.5,
                                                    position: "relative",
                                                    verticalAlign: "top",
                                                    userSelect: "none",
                                                    borderWidth: "1px",
                                                    padding:
                                                      "calc(0.5em - 1px) 1em",
                                                    whiteSpace: "nowrap",
                                                    cursor: "pointer",
                                                    justifyContent: "center",
                                                    textAlign: "center",
                                                    height: "100%",
                                                    borderColor:
                                                      "rgb(224, 222, 222)",
                                                    backgroundColor:
                                                      "rgb(245, 245, 245)",
                                                    color: "rgb(122, 122, 122)",
                                                    boxShadow: "none",
                                                    pointerEvents: "none",
                                                    borderRadius: "9999px",
                                                    paddingLeft: "1.25em",
                                                    paddingRight: "1.25em",
                                                    borderBottomLeftRadius:
                                                      "0px",
                                                    borderTopLeftRadius: "0px",
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
                                                    {"€"}
                                                  </span>
                                                </button>
                                              </p>
                                            </div>
                                          </div>
                                        </div>{" "}
                                      </div>{" "}
                                      <span
                                        className="has-text-primary"
                                        style={{
                                          borderWidth: "0px",
                                          borderStyle: "solid",
                                          borderColor: "rgba(229, 231, 235, 1)",
                                          boxSizing: "inherit",
                                          WebkitFontSmoothing: "antialiased",
                                          fontStyle: "inherit",
                                          fontWeight: "inherit",
                                          display: "block",
                                          color: "black",
                                        }}
                                      >
                                        Minimum required: 50 €
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>{" "}
                        </div>{" "}
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
                      </span>{" "}
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

                    <button
                      onClick={onNextClick}
                      className="pld-m-2 btn_1P7x4 block_1Jg7s filled_FpChn shift_left_22ha8 yellow_sJHfv"
                      aria-label="Next"
                      style={{
                        borderWidth: "0px",
                        borderStyle: "solid",
                        borderColor: "rgba(194, 20, 73, 1)",
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
                        color: "white",
                        backgroundColor: "#C21449",
                        minWidth: "200px",
                        boxShadow:
                          "0 3px 10px rgb(0 0 0/0%),inset 0 0 0 0px #C21449",
                      }}
                    >
                      {" "}
                      <span
                        style={{
                          borderWidth: "0px",
                          borderStyle: "solid",
                          borderColor: "rgba(194, 20, 73, 1)",
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          fontStyle: "inherit",
                          fontWeight: "inherit",
                          pointerEvents: "none",
                          transition:
                            "all 0.15s cubic-bezier(0.215, 0.61, 0.355, 1) 0ms",
                        }}
                      >
                        {"Next"}
                      </span>{" "}
                    </button>
                  </div>{" "}
                </div>
              </div>{" "}
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