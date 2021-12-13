import React, { memo } from "react";

function DemoCallBack({ onIncrement }) {
  return (
    <>
      {console.log("callback render")}
      <button onClick={onIncrement}>incree</button>
    </>
  );
}

export default memo(DemoCallBack);
