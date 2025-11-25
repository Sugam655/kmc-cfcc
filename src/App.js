import React, { useState } from "react";
import Header from "./components/Header/Header";
import AuthModal from "./components/AuthModal/AuthModal";
import Hero from "./components/Hero/Hero";
import Dashboard from "./components/Dashboard/Dashboard";
import Sponsors from "./components/Sponsors/Sponsors";
import Rewards from "./components/Rewards/Rewards";
// import Leaderboard from "./components/Leaderboard/Leaderboard";
import Footer from "./components/Footer/Footer";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("signin"); // signin or register

  const openAuthModal = (type) => {
    setActiveTab(type); // "signin" | "signup"
    setIsModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Header */}
      <Header onOpenAuthModal={openAuthModal} />

      {/* Hero Section */}
      <Hero />

      {/* Dashboard Section */}
      <Dashboard />

      {/* Sponsors Section */}
      <Sponsors />
      {/* Rewards Section */}
      <Rewards />

      {/* Leaderboard Section */}
      {/* <Leaderboard /> */}
      {/* Footer Section */}
      <Footer />


      {/* Auth Modal */}
      {isModalOpen && (
        <AuthModal
          isOpen={isModalOpen}
          onClose={closeAuthModal}
          activeTab={activeTab === "signup" ? "register" : activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      )}
    </div>
  );
}

export default App;
