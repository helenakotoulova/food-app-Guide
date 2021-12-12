import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table with food" />
      </div>
    </React.Fragment>
  );
}
export default Header;

/*
Tak jak mam nadefinovany ten zdroj (src) obrazku je LOCAL
pokdu bych mela url, tak takhle: // src='https://...'
To alt je pro nevidome. Precte to ten text
*/
