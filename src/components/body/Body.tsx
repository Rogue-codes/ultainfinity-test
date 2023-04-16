import React from "react";
import "./body.scss";
import MetricCard from "../cards/MetricCard";
import { circle, circle2, circle3, shape } from "../../assets";
import { ResponseData } from "../../interfaces/interface";
import Datum from "../chart/Datum";

interface bodyProps {
  res: ResponseData | null | undefined;
  activeTab: string;
}
export default function Body({ res, activeTab }: bodyProps) {
  console.log(res);
  return (
    <div className="body__container">
      {/* error container */}
      <div className="errors_container">
        <div>
          <h2>
            Errors:{" "}
            {activeTab === "Yesterday"
              ? res?.data[0].errors_yesterday.toFixed(2) + "%"
              : activeTab === "Last 3 days"
              ? res?.data[0].errors_last_3days?.toFixed(2) + "%"
              : "N/A"}{" "}
          </h2>
          <p>Average: 0,11%</p>
        </div>

        <div>
          <h2>
            Zeroes:{" "}
            {activeTab === "Yesterday"
              ? res?.data[0].zeroes_yesterday.toFixed(2) + "%"
              : activeTab === "Last 3 days"
              ? res?.data[0].zeroes_last_3days?.toFixed(2) + "%"
              : "N/A"}
          </h2>
          <p>Average: 0,11%</p>
        </div>

        <div>
          <h2>
            Timeouts:{" "}
            {activeTab === "Yesterday"
              ? res?.data[0].timeout_yesterday.toFixed(2) + "%"
              : activeTab === "Last 3 days"
              ? res?.data[0].timeout_last_3days?.toFixed(2) + "%"
              : "N/A"}
          </h2>
          <p>Average: 0,11%</p>
        </div>
      </div>
      {/* error container */}

      {/* datum container */}
      
      <Datum
        data={[
          { name: "Error 500", percentage: 30, colour: "#FFCC00" },
          { name: "Error 501", percentage: 25, colour: "#5856D5" },
          { name: "Error 502", percentage: 24, colour: "#2196F3" },
          { name: "Other", percentage: 21, colour: "#A0B0B9" },
        ]}
      />

      {/* cards section */}
      <div className="cards__container">
        <MetricCard
          img1={circle}
          img2={shape}
          category="Searches"
          categoryCount="+5"
          subcategory={res?.data[0].mobile_pessimizer}
          subCategoryWeb={res?.data[0].web_pessimizer}
          category3=""
          daycount={
            activeTab === "Yesterday" ? (
              res?.data[0].searches_previous_yesterday
            ) : activeTab === "Last 3 days" ? (
              res?.data[0].searches_previous_last_3days
            ) :  activeTab === "Last hour" || activeTab === "Today" ? (
              <small>N/A...</small>
            ): null
          }
          day="Yesterday"
          weekCount={res?.data[0].searches_previous_last_3days}
          week="Last friday"
          text="You get 100% traffic on mobile and desktop devices."
          helpText=" Searches, Pessimisation"
          activeTab={activeTab}
        />
        <MetricCard
          img1={circle2}
          img2={shape}
          category="Clicks"
          categoryCount="-13"
          category3="CTR"
          subcategory={
            activeTab === "Yesterday"
              ? res?.data[0].ctr_yesterday
              : activeTab === "Last 3 days"
              ? res?.data[0].ctr_last_3days
              : activeTab === "Last hour"
              ? res?.data[0].ctr_last_hour
              : activeTab === "Today"
              ? res?.data[0].ctr_last_hour
              : null
          }
          daycount={
            activeTab === "Yesterday" ? (
              res?.data[0].clicks_previous_yesterday
            ) : activeTab === "Last 3 days" ? (
              res?.data[0].clicks_previous_last_3days
            ) : activeTab === "Last hour" ? (
              res?.data[0].clicks_previous_last_hour
            ) : activeTab === "Today" ? (
              res?.data[0].clicks_previous_last_hour
            ) : (
              <small>N/A...</small>
            )
          }
          day="Yesterday"
          weekCount={res?.data[0].clicks_previous_last_3days}
          week="Last friday"
          text="Conversion from searches  to clicks on all devices."
          helpText=" CTR, Cliks"
          color="red"
          activeTab={activeTab}
        />
        <MetricCard
          img1={circle3}
          img2={shape}
          category="Sales"
          subcategory={
            activeTab === "Yesterday"
              ? res?.data[0].str_yesterday
              : activeTab === "Last 3 days"
              ? res?.data[0].str_last_3days
              : activeTab === "Last hour"
              ? res?.data[0].str_last_hour
              : null
          }
          category3="STR"
          daycount={
            activeTab === "Yesterday" ? (
              res?.data[0].bookings_previous_yesterday
            ) : activeTab === "Last 3 days" ? (
              res?.data[0].bookings_previous_last_3days
            ) : activeTab === "Last hour" ? (
              res?.data[0].bookings_current_last_hour
            ) : activeTab === "Today" ? (
              res?.data[0].bookings_previous_last_hour
            ) : (
              <small>N/A...</small>
            )
          }
          day="Yesterday"
          weekCount={res?.data[0].bookings_previous_last_3days}
          week="Last friday"
          text="Conversion from cliks  to bookings on all devices."
          helpText="STR, Bookings, Avg. Check"
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}
