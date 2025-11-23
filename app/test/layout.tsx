import { Suspense } from "react";
import Loading from "./loading";
import Test from "../page";

const layout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Test />
    </Suspense>
  );
};

export default layout;
