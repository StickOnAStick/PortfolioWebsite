import React from "react";
import FeatureSection from "./FeatureSection";
import HomeCardDisplay from "./HomeCardDisplay";

export default function HomeMain() {
    return (
        <div className="flex-grow">
            <FeatureSection />
            <HomeCardDisplay />
        </div>
    )
}