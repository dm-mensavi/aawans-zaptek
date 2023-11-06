import React from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import { caseData } from "./CasesData";
import { Link } from "react-router-dom";
import "../../Styles/Cases.css";

function Cases() {
  return (
    <div>
      <Helmet>
        <title>Cases - AawAans</title>
      </Helmet>
      <Header pageTitle="All Cases" name="Cases" />
      <div className="lg:pt-40 sm:pt-20 pt-20 pb-20 lg:pb-20 sm:pb-20 flex justify-center my-16 general-margin">
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 ">
          {caseData.map((cases) => (
            <Link className="relative card-container" to={`/cases/${cases.id}`}>
              <img
                src={cases.image}
                alt={cases.title}
                className="w-full lg:w-96 rounded-2xl h-80"
              />
              <div className="text-container text-center rounded-2xl pb-20">
                <p className="text-white font-serif font-semibold text-3xl pt-44 header-text">{cases.title}</p>
                <p className="text-xl mt-3  text-primary subheading-text">{cases.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cases;
