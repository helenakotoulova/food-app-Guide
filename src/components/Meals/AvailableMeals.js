import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AvailableMeals() {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              description={meal.description}
              name={meal.name}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;

/*
Pozor! Mela jsem to takhle:
<ul>
            {DUMMY_MEALS.map((meal)=> {
                <li key={meal.id}>
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                    <p>{meal.price}</p>
                </li>
            })}
        </ul>

Byly tam navic ty slozene zavorky za tou sipkou. 
Psalo to, ze Array.prototype.map() expects a return value from arrow function 
*/
