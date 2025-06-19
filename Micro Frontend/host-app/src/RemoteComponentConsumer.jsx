import React, { Suspense } from "react";
const RemoteComponent = React.lazy(() => import("remoteApp/RemoteComponent"));

const RemoteComponentConsumer = () => (
  <Suspense fallback={<div>Loading Remote Component...</div>}>
    <RemoteComponent />
  </Suspense>
);

export default RemoteComponentConsumer;
