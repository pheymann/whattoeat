import * as $ from "jquery";
import {Recipe, DishType, totalNumberRecipes, addNewRecipe} from "./Recipe";

export default {
  render,
  registerCopy,
  remove
}

function render(dishType: DishType, numberOfDishes: number, action: (html: string) => void): void {
  const recipes = selectRecipes(dishType, numberOfDishes)
  const html    = renderRecipes(recipes)

  action(html)
}

function registerCopy(): void {
  $('.recipe-copy').click(event => {
    event.preventDefault()
    
    const clipboardStorage = document.createElement("textarea");

    clipboardStorage.setAttribute("display", "none")
    document.body.appendChild(clipboardStorage)
    clipboardStorage.value = event.target.id;
    clipboardStorage.select();
    document.execCommand("copy");
    document.body.removeChild(clipboardStorage);
  })
}

function remove(): void {
  element().remove()
}

function selectRecipes(dishType: DishType, numberOfDishes: number): Recipe[] {
  const total = totalNumberRecipes(dishType)
  const limit = total - numberOfDishes < 0 ? total : numberOfDishes

  let recipes: Recipe[] = []
  let counter = 0

  while (counter < limit) {
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
    <ul id="${Id}">
      ${recipesHtml}
    </ul>`
}

function renderRecipe(recipe: Recipe): string {
  const name       = `<h4>${recipe.name}</h4>`
  const details    = `<p>${recipe.creationTime}min</p>`
  const copyButton = `<button class="recipe-copy" id="${recipe.name}">Copy</button>`

  return `
    <li>
      ${name}
      ${details}
      ${copyButton}
    </li>`
}

const Id = "recipe-recommendations"

function element() {
  return $(`#${Id}`)
}