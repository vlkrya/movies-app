import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Container/Home';
import Liked from '../Container/Liked';
import WatchLater from '../Container/WatchLater';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watchlater" element={<WatchLater />} />
    </Routes>
  );
};

export default AppRoutes;





