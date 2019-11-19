import './index.scss';

import * as $ from "jquery";
import { Recipe, addNewDishRecipe, addNewOtherRecipe } from "./Recipe";

const recipesId = 'recipes'

function recipesElement() {
  return $('#recipes')
}

function renderRecipes(recipes: Recipe[]): void {
  const recipesHtml = recipes.map(recipe => recipeToHtml(recipe))

  recipesElement().append(`<ul>${recipesHtml}</ul>`)
}

function recipeToHtml(recipe: Recipe): string {
  const html = `<h4>${recipe.name} (${recipe.creationTime}min)</h4>`

  return `
    <li>
      ${html}
    </li>`
}

function removeRecipes(): void {
  recipesElement().children().remove()
}

function valToNumber(val: string | number | string[]): number {
  if (typeof val === "number") {
    return val as number
  }
  else if (typeof val === "string") {
    return parseInt(val)
  }
  else {
    throw new Error(`Expected 'val' to be a number, but got: '${val}: ${typeof val}'.`)
  }
}

function mainDishOptionHtml(day: number): string {
  return `<option value="${day}">${day}</option>`
}

function mainDisSelectiohHtml(numberOfDays: number): string {
  const options = Array
    .from(Array(numberOfDays).keys())
    .map(day => mainDishOptionHtml(day + 1) + "\n")
    .reverse()
    .join("\n")

  return `
    <select id="two-main-dish-selection">
      ${options}
    </select>`
}

function mainDishSelectionElement() {
  return $('#number-of-days-with-two-main-dishes')
}

function renderMainDishSelection(numberOfDays: number): void {
  mainDishSelectionElement().append(mainDisSelectiohHtml(numberOfDays))
}

function removeMainDishSelection(): void {
  mainDishSelectionElement().children().remove()
}

$(document).ready(() => {

  // Init
  const initialNumOfDays = valToNumber($('#number-of-days option:selected').val())

  renderMainDishSelection(initialNumOfDays)

  // Event API
  $('#select-single-recipe').click(event => {
    event.preventDefault()

    const recipe = addNewDishRecipe([])

    removeRecipes()
    renderRecipes(recipe)
  })

  $('#number-of-days').change(() => {
    const numberOfDays = valToNumber($('#number-of-days option:selected').val())

    removeMainDishSelection()
    renderMainDishSelection(numberOfDays)
  })

  $('#select-recipes').click(event => {
    event.preventDefault()

    const numberOfDays      = valToNumber($('#number-of-days option:selected').val())
    const numberOfTwoDishes = valToNumber($('#two-main-dish-selection option:selected').val())
    const numberOfDishes    = numberOfDays + numberOfTwoDishes

    console.debug(`number of days: ${numberOfDays}, days with two dishes: ${numberOfTwoDishes}`)

    let recipes: Recipe[] = []
    let counter = 1

    while (counter < numberOfDishes) {
      recipes = addNewDishRecipe(recipes)
      counter = counter + 1
    }

    removeRecipes()
    renderRecipes(recipes)
  })
})