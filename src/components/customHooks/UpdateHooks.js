import React from "react";
import { useEffect } from "react";

const UpdateHooks = (data) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
};

export default UpdateHooks;