import React from "react";
import "./header.scss";

interface headerProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ activeTab, setActiveTab }: headerProps) {
  const filterOptions = [
    {
      label: "Last hour",
      value: "Last hour",
    },
    {
      label: "Today",
      value: "Today",
    },
    {
      label: "Yesterday",
      value: "Yesterday",
    },
    {
      label: "Last 3 days",
      value: "Last 3 days",
    },
  ];

  const handleFilter = (label: string) => {
    setActiveTab(label);
  };
  return (
    <div className="Header__Container">
      <h2>Main Metrics</h2>
      <div className="Filter__container">
        {filterOptions.map((option, index) => (
          <div
            key={index}
            className={`${
              index < 3
                ? "Filter__container_label border_right"
                : "Filter__container_label"
            } ${activeTab === option.value ? "bg_blue" : ""}`}
            onClick={() => handleFilter(option.label)}
          >
            <p>{option.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
