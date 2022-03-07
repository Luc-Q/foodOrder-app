import React from 'react'
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
        <h2>Delicious Food, For you</h2>
        <p>
            Choose your facorite meal and enjoy lunch at home
        </p>
        <p>
            All ou meals are cooked with high-quality ingredients
        </p>
    </section>
  )
}

export default MealsSummary