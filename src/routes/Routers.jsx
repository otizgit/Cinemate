import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import SelectedMovie from "../pages/SelectedMovie";
import AllSeasons from "../pages/AllSeasons";
import AllCastAndCrew from "../pages/AllCastAndCrew";
import AllReviews from "../pages/AllReviews";
import PersonPage from "../pages/PersonPage";
import CompanyPage from "../pages/CompanyPage";

export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:category/:id" element={<CategoryPage />} />
        <Route path="/results/:id" element={<SearchResultsPage />} />
        <Route path="/:keyword/:title/:id" element={<SelectedMovie />} />
        <Route path="/seasons/:title/:id" element={<AllSeasons />} />
        <Route path="/:title/all-cast" element={<AllCastAndCrew />} />
        <Route path="/:title/all-reviews" element={<AllReviews />} />
        <Route path="/person/:title/:id" element={<PersonPage />} />
        <Route path="/company/:name/:id" element={<CompanyPage />} />
      </Routes>
    </div>
  );
}