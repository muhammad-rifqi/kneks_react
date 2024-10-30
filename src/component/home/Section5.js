import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Bi from "./dashboard/Bi";
import Bpjph from "./dashboard/Bpjph";
import KemenkoPmk from "./dashboard/KemenkoPmk";
import Kneks from "./dashboard/Kneks";
import Ojk from "./dashboard/Ojk";
import Blank from "./dashboard/Blank";

const dataTabs = [
    {
        key: "BI",
        contents: <Bi />,
    },
    {
        key: "BPJPH",
        contents: <Bpjph />,
    },
    {
        key: "KemenkoPMK",
        contents: <KemenkoPmk />,
    },
    {
        key: "KNEKS",
        contents: <Kneks />,
    },
    {
        key: "OJK",
        contents: <Ojk />,
    },
    {
        key: "(blank)",
        contents: <Blank />,
    },
];

const Section5 = () => {
    const [activeTab, setActiveTab] = useState("BI");

    return (
        <section className='funfact-section'>
            <div className='container-fluid'>
                <Tabs
                    activeKey={activeTab}
                    onSelect={setActiveTab}
                    className="mb-3 justify-content-center"
                  >
                    {dataTabs.map((tab) => (
                        <Tab eventKey={tab.key} title={tab.key} key={tab.key}>
                            {tab.contents}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default Section5;
