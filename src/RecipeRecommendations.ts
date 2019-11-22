import * as $ from "jquery";
import {Recipe, addNewRecipe} from "./Recipe";

export default {
  render,
  remove
}

function render(dishType: string, numberOfDays: number, action: (html: string) => void): void {
  const recipes = selectRecipes(dishType, numberOfDays)
  const html    = renderRecipes(recipes)

  action(html)
}

function remove(): void {
  $('#recipe-recommendations').remove()
}

function selectRecipes(dishType: string, numberOfDays: number): Recipe[] {
  let recipes: Recipe[] = []
  let counter = 0

  while (counter < numberOfDays) {
    recipes = addNewRecipe(dishType, recipes)
    counter = counter + 1
  }

  return recipes
}

function renderRecipes(recipes: Recipe[]): string {
  const recipesHtml = recipes
    .map(recipe => renderRecipe(recipe))
    .join('\n')

  return `
    <ul id="recipe-recommendations">
      ${recipesHtml}
    </ul>`
}

function renderRecipe(recipe: Recipe): string {
  const name = `<h4>${recipe.name}</h4>`
  const details = `<p>${recipe.creationTime}min</p>`

  return `
    <li>
      ${name}
      ${details}
    </li>`
}