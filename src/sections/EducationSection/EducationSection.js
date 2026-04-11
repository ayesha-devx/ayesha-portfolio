import React from "react";
import "./EducationSection.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../utils/portfolio";

export default function EducationSection() {
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
