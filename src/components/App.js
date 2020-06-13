import React from 'react';

import './App.scss';
import Header from "./common/Header";
import HotelsPage from "./hotels/HotelsPage";
import PromotionAside from "./common/PromotionAside";

function App() {
  return (
    <div className="app">
        <Header />
        <div className="app__content">
            <HotelsPage />
            <PromotionAside />
        </div>
    </div>
  );
}

export default App;
