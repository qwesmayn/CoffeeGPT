import { FC } from "react";
import FirstBlock from "./FirstBlock/FirstBlock";
import Documentation from "./Documentation/Documentation";
import Models from "./Models/Models";
import ChatUse from "./ChatUse/ChatUse";
import Dashboard from "./Dashboard/Dashboard";
import HowWork from "./HowWork/HowWork";
import Pricing from "./Pricing/Pricing";
import Trial from "./Trial/Trial";

const Lending : FC = () => {
    return (
        <div>
            <FirstBlock />
            <Documentation />
            <Models/>
            <ChatUse />
            <Dashboard />
            <HowWork />
            <Pricing />
            <Trial />
        </div>
    );
}

export default Lending;