
export {
  isKnownDish,
  stringToDishType,
  totalNumberRecipes,
  addNewRecipe
};

export interface Recipe {
  name: string;
  tags: string[];
  creationTime: number;
}

export enum DishType {
  main      = '#main',
  breakfast = '#breakfast',
  salad     = '#salad',
  sweet     = '#sweet'
}

function stringToDishType(_type: string): DishType | undefined {
  if (_type === DishType.main) {
    return DishType.main
  }
  else if (_type === DishType.breakfast) {
    return DishType.breakfast
  }
  else if (_type === DishType.salad) {
    return DishType.salad
  }
  else if (_type === DishType.sweet) {
    return DishType.sweet
  }
  else {
    return undefined
  }
}

enum DishTemperatur {
  warm = '#warm',
  kalt = '#kalt'
}

enum DishAvailability {
  wholeyear = '#wholeyear',
  autumm    = '#autumm'
}

const allDishTypes = [DishType.main, DishType.breakfast, DishType.salad, DishType.sweet]

function isKnownDish(dish: string): boolean {
  return allDishTypes.some(d => d === dish)
}

const recipes: Recipe[] = [
  makeRecipe('Auberginen-Lasagne mit Kichererbsencreme', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 30),
  makeRecipe('Spaghetti mit Spinat-Mandel-Creme', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 30),
  makeRecipe('Spinat Petersillien Pesto Wraps', DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear, 10),
  makeRecipe('Apfel-Hafer-Tower mit Kiwisoße', DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear, 10),
  makeRecipe('Auberginenröllchen mit Kürbis-Spinat-Füllung', DishType.main, DishTemperatur.warm, DishAvailability.autumm, 40),
  makeRecipe('Pancakes mit Tomaten-Pinienkern-Topping', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 30),
  makeRecipe('Lycopin Reisbowl', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 20),
  makeRecipe('Spinatrisotto', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 20),
  makeRecipe('Gurkenlasagne mit Paprika-Cashew-Paste', DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear, 35),
  makeRecipe('Coleslaw mit Kürbiscreme und Sesamtofu', DishType.main, DishTemperatur.kalt, DishAvailability.autumm, 25),
  makeRecipe('Ofengemüse', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 20),
  makeRecipe('Indische Gelbe Erbsensuppe', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 15),
  makeRecipe('Chili sin Carne', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 30),
  makeRecipe('Porree Käse Suppe', DishType.main, DishTemperatur.warm, DishAvailability.autumm, 35),
  makeRecipe('Basilikum Reisbällchen', DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear, 40),
  makeRecipe('Mixsalat mit Kürbis-Rosmarin-Wedges', DishType.salad, DishTemperatur.warm, DishAvailability.wholeyear, 20),
  makeRecipe('Petersilie Hirse Salat', DishType.salad, DishTemperatur.kalt, DishAvailability.wholeyear, 25),
  makeRecipe('Ramen', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 20),
  makeRecipe('Chili sin Carne', DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 30),
]

function makeRecipe(name: string, _type: DishType, temp: DishTemperatur, availability: DishAvailability, creationTime: number): Recipe {
  return {
    name: name,
    tags: [_type, temp, availability],
    creationTime: creationTime
  }
}

function totalNumberRecipes(dishType: DishType): number {
  if (dishType === DishType.main) {
    return mainRecipes.length
  }
  else if (dishType === DishType.breakfast) {
    return breakfastRecipes.length
  }
  else if (dishType === DishType.salad) {
    return saladRecipes.length
  }
  else {
    return sweetRecipes.length
  }
}

function addNewRecipe(dishType: DishType, alreadySelected: Recipe[]): Recipe[] {
  if (dishType === DishType.main) {
    return addNewMainRecipe(alreadySelected)
  }
  else if (dishType === DishType.breakfast) {
    return addNewBreakfastRecipe(alreadySelected)
  }
  else if (dishType === DishType.salad) {
    return addNewSaladRecipe(alreadySelected)
  }
  else {
    return addNewSweetRecipe(alreadySelected)
  }
}

const mainRecipes = filterRecipes(DishType.main)

function addNewMainRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, mainRecipes);
}

const breakfastRecipes = filterRecipes(DishType.breakfast)

function addNewBreakfastRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, breakfastRecipes);
}

const sweetRecipes = filterRecipes(DishType.sweet)

function addNewSweetRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, sweetRecipes);
}

const saladRecipes = filterRecipes(DishType.salad)

function addNewSaladRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, saladRecipes);
}

function addNewRecipeUtil(alreadySelected: Recipe[], baseRecipes: Recipe[]): Recipe[] {
  let recipe = baseRecipes[selectIndex(baseRecipes.length)];

  while (alreadySelected.some(el => el.name === recipe.name)) {
    recipe = baseRecipes[selectIndex(baseRecipes.length)];
  }

  alreadySelected.push(recipe);

  return alreadySelected;
}

function filterRecipes(dishType: DishType): Recipe[] {
  return recipes.filter(recipe => recipe.tags.some(tag => tag === dishType))
}

function selectIndex(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}