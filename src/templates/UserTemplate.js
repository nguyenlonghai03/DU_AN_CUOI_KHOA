import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

export const UserTemplate = (props) => {
  const [heigth, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);
  const { Component, ...restParams } = props;
  return (
    <Route
      {...restParams}
      render={(...propsRoute) => {
        return (
          <div>
            <div className="row">
              <div style={{ height: window.innerHeight }} className="col-6">
                <img
                  src="https://picsum.photos/2000/2000"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-6">
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
