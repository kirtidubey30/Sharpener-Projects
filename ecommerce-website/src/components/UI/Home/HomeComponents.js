import React from "react";
import classes from "./HomeComponent.module.css";
function HomeComponents() {
  return (
    <section id="tours" className={`container ${classes.tours}`}>
      <h2>TOURS</h2>
      <div className={classes.toursDiv}>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL16</span>
          <span className={classes["tour-place"]}>DETROIT, MI</span>
          <span className={classes["tour-spec-place"]}>
            DTE ENERGY MUSIC THEATRE
          </span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL19</span>
          <span className={classes["tour-place"]}>TORONTO,ON</span>
          <span className={classes["tour-spec-place"]}>BUDWEISER STAGE</span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 22</span>
          <span className={classes["tour-place"]}> BRISTOW, VA</span>
          <span className={classes["tour-spec-place"]}>JIGGY LUBE LIVE</span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 29</span>
          <span className={classes["tour-place"]}>PHOENIX, AZ</span>
          <span className={classes["tour-spec-place"]}> AK-CHIN PAVILION</span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>AUG 2</span>
          <span className={classes["tour-place"]}>LAS VEGAS, NV</span>
          <span className={classes["tour-spec-place"]}>T-MOBILE ARENA</span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>AUG 7</span>
          <span className={classes["tour-place"]}>CONCORD, CA</span>
          <span className={classes["tour-spec-place"]}> CONCORD PAVILION</span>
          <button className={classes["buy-btn"]}>BUY TICKETS</button>
        </div>
      </div>
    </section>
  );
}

export default HomeComponents;
