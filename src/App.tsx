import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import SlidingWindow from "./problems/slidingWindow";
import HashMap from "./problems/hashMap";
// import './App.css'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Select a problem</div>} />
        <Route path="/sliding-window" element={<SlidingWindow />} />
        <Route path="/hash-map" element={<HashMap />} />
      </Routes>
    </Layout>
  );
}

export default App
