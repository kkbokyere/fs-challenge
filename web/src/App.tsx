import React from 'react';
import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import DevicesList from "./components/DevicesList";
import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout>
          <DevicesList/>
      </Layout>
    </div>
  );
}

export default App;
