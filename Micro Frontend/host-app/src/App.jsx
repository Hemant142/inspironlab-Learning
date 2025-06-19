import React, { Suspense } from "react";
const RemoteHeader = React.lazy(() => import("remote_app/Header"));

export default function App() {
  return (
    <div>
      <h2>🌐 Host App</h2>
      <Suspense fallback={<p>Loading remote...</p>}>
        <RemoteHeader />
      </Suspense>
    </div>
  );
}
