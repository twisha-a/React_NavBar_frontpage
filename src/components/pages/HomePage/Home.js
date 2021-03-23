import React from "react";
import Sec1 from "../../Sec1";
import { homeObjOne } from "./Data";

function Home() {
  return (
    <div>
      <Sec1 {...homeObjOne} />
    </div>
  );
}

export default Home;
