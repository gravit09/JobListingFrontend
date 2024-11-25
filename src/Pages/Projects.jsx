import React, { useEffect } from "react";
import Example from "../Components/filterBox/filterBox";

function Jobs({ context }) {
  useEffect(() => {
    console.log(context);
  }, [context]);

  return <Example searchData={context} />;
}

export default Jobs;
