import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/amitchaudhari9121/dao-proposal-basic" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🏛️ PowDAO"
        subTitle="Simple DAO template"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
