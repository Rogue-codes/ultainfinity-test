import React, { ReactNode } from "react";
import "./metricCard.scss";
import { circle, shape } from "../../assets";

interface metricCardProps{
  img1: string
  img2?: string
  category: string
  categoryCount?: string
  category3:string
  subcategory: number | null | undefined
  subCategoryWeb?:number
  daycount: number | undefined | ReactNode
  day:string
  weekCount: number | undefined
  week:string
  text:string
  helpText:string
  color?:string
  activeTab:string
}
export default function MetricCard({img1, img2, category, categoryCount, category3, activeTab, subcategory, subCategoryWeb, daycount, day, weekCount, week, text, helpText, color}:metricCardProps) {
  return (
    <div className="card__container">
      <div className="card__left">
        <div className="card__icon">
          <div>
            <img src={img1} alt="" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="card__content">
          <div>
            <p className={`${color === "red" ? "card__content__searches red" : "card__content__searches"}`}>
              {category} <span className={`${color === "red" ? "redBg" : "greenBg"}`}>{categoryCount}%</span>
            </p>
          </div>
          <div className="card__content__day">
            <p className="card__content__count">{daycount}</p>
            <p className="card__content__yesterday">{activeTab}</p>
          </div>

          <div className="card__content__week">
            <p className="card__content__count">{weekCount}</p>
            <p className="card__content__friday">{week}</p>
          </div>
        </div>
      </div>

      {/* right side of the card */}
      <div className="card__right">
        {
          category === "Searches" ? <h2>
            Mobile traffic: {subcategory?.toFixed(2)} % <br />
            Web traffic: {subCategoryWeb?.toFixed(2)} %
          </h2>
        :
        <h2 className={`${color === "red" ? "red" : ""}`}>
        {category3}: {subcategory?.toFixed(2)} %
        </h2>
        }

        <p>{text}</p>
        <small>Help:</small> <span>{helpText}</span>
      </div>
    </div>
  );
}
