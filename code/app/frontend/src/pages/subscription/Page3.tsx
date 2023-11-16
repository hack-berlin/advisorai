import React, { MouseEventHandler } from "react";
import Breadcrumbs from './components/Breadcrumbs';
import { on } from '@fluentui/react';

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
                            color: "black",
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
                          Which product do you want to subscribe to?
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
                                        borderColor: "rgb(194, 20, 73)",
                                        borderWidth: "3px",
                                        color: "rgb(194, 20, 73)",
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
                                            borderColor: "rgb(194, 20, 73)",
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
                                          Darjeeling
                                        </div>{" "}
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
                                          Maximo
                                        </div>{" "}
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
                                          SBU
                                        </div>{" "}
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
                                  </div>                                </div>
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
                              backgroundColor: "rgb(194, 20, 73)",
                              color: "white",
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
                            {"Validate"}
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
