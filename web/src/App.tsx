import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import DevicesList from "./components/DevicesList";

function App() {
  return (
    <div>
      <Header/>
      <Layout>
          <DevicesList/>
      </Layout>
    </div>
  );
}

export default App;
