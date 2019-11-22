
export {
  isKnownDish,
  stringToDishType,
  totalNumberRecipes,
  addNewRecipe,
  findIngredients
};

export interface Recipe {
  name: string;
  tags: string[];
  ingredients: string[],
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

const recipes: Recipe[] = [
  makeRecipe(
    'Auberginen-Lasagne mit Kichererbsencreme', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Aubergine, 1x', 'Rote Bete, 280g', 'Kichererbsen, 250g', 'Cashewmus, 50g', 'Knoblauch'],
    30
  ),
  makeRecipe(
    'Spaghetti mit Spinat-Mandel-Creme', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Blattspinat, 200g', 'rote Zwiebeln, 2x', 'Knoblauch', 'Parmesan, 100g', 'Vollkornspaghetti, 250g', 'Mandelcreme, 60g', 'Pinienkerne, 30g'],
    30
  ),
  makeRecipe(
    'Spinat Petersillien Pesto Wraps', 
    DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear,
    ['rote Paprika, 1x', 'Zitrone, 1x', 'Avocado, 1x', 'Spinat, 80g', 'Wraps', 'Weiße Bohnen, 240g', 'Kürbiskerne, 25g', 'Petersilie, 50g'],
    10
  ),
  makeRecipe(
    'Kürbis Chilli',
    DishType.main, DishTemperatur.warm, DishAvailability.autumm, 
    ['Kürbis, 1x', 'Knoblauch', 'Gehacktes, 500g', 'Dosentomaten, 2x', 'Schwarzebohnen Dose, 1x'],
    40
  ),
  makeRecipe(
    'Apfel-Hafer-Tower mit Kiwisoße', 
    DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear, 
    ['Äpfel, 2', 'Kiwis, 3', 'Pekannnüsse, 60g', 'Haferflocken, zart, 120g', 'Hafermilch, 160ml'],
    10
  ),
  makeRecipe(
    'Auberginenröllchen mit Kürbis-Spinat-Füllung', 
    DishType.main, DishTemperatur.warm, DishAvailability.autumm,
    ['Auberginen, 400g', 'Hokkaido-Kürbis, 375g', 'Weiße Zwiebeln, 1,5x', 'Babyspinat, 150g', 'getrocknete Tomaten, 50g', 'Mandelmus, 50g', 'Tomatenmark, 35g', 'Dosentomaten gehackt, 200g', 'tiefgefrorener Basilikum (oder Gewürz)'],
    40
  ),
  makeRecipe(
    'Pancakes mit Tomaten-Pinienkern-Topping', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Babyspinat, 360g', 'Kirschtomaten, 220g', 'Rote Zwiebeln, 2x', 'Mandelmus, 50g', 'Pinienkerne, 30g', 'Mehl, 200g', 'Hafermilch, 300ml', 'gepopptes Quinoa, 30g', 'Backpulver, 2TL'],
    30
  ),
  makeRecipe(
    'Lycopin Reisbowl', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Paprika, 1x', 'Weiße Zwiebel, 1,5x', 'getrocknete Tomaten, 100g', 'Reis, 150g', 'Rotkohl, 240g'],
    20
  ),
  makeRecipe(
    'Spinatrisotto', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Rote Zwiebel, 1,5x', 'Babyspinat, 160g', 'Knoblauch', 'Reis, 200g', 'Mandelmus, 1EL'],
    20
  ),
  makeRecipe(
    'Gurkenlasagne mit Paprika-Cashew-Paste', 
    DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear,
    ['Salatgurke, 1,5x', 'Avocado, 2x', 'Paprikaschote, 100g', 'Dill, EL', 'Cashewkerne, 180g', 'Pinienkerne, 30g'],
    35
  ),
  makeRecipe(
    'Coleslaw mit Kürbiscreme und Sesamtofu', 
    DishType.main, DishTemperatur.kalt, DishAvailability.autumm, 
    ['Spitzkohl, 300g', 'Hokkaido Kürbis, 270g', 'Tofu natur, 200g', 'Cashewmus, 40g', 'Sojasoße'],
    25
  ),
  makeRecipe(
    'Ofengemüse', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['Paprika, 2x', 'Pastinake, 2x', 'Kürbis, 1x', 'Bohnen, 100g', 'Quark, 200g'],
    20
  ),
  makeRecipe(
    'Indische Gelbe Erbsensuppe', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Schälerbsen, 200g'],
    15
  ),
  makeRecipe(
    'Chili sin Carne', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['Paprika, 2x', 'Zwiebeln, 2x', 'Gehacktes, 500g', 'Dose Gehackte Tomaten, 2x', 'Dose Kidneybohnen, 1x', 'Reis, 200g', 'dunkle Schokolade'],
    30
  ),
  makeRecipe(
    'Porree Käse Suppe', 
    DishType.main, DishTemperatur.warm, DishAvailability.autumm, 
    ['Porree, 2x', 'Zwiebel, 1x', 'Gehacktes, 250g', 'Schmelzkäse, 120g '],
    35
  ),
  makeRecipe(
    'Basilikum Reisbällchen', 
    DishType.main, DishTemperatur.kalt, DishAvailability.wholeyear,
    ['Porree, 1x', 'Tomaten, 400g', 'frischer Basilikum, halbes Bund', 'Ei, 1x', 'Magerquark, 25g', 'Parmesan, 1x', 'Mozzarella, 1x', 'Reis, 120g'],
    40
  ),
  makeRecipe(
    'Mixsalat mit Kürbis-Rosmarin-Wedges', 
    DishType.salad, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['Hokkaido Kürbis, 470g', 'Limetten, 1x', 'Salat, 200g', 'Möhre, 1x', 'Paprika, 1x', 'Blaubeeren, 200g', 'Walnüsse, 40g', 'Mandelmus '],
    20
  ),
  makeRecipe(
    'Petersilie Hirse Salat', 
    DishType.salad, DishTemperatur.kalt, DishAvailability.wholeyear, 
    ['Hirse, 100g', 'Petersilie, 4 Bund', 'Tomaten, 300g', 'Minzblätter, 10x', 'Zitronensaftkonzentrat '],
    25
  ),
  makeRecipe(
    'Ramen', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['Suppengrün, 1x', 'Frühlingszwiebeln, 1x', 'Bambussproßen Glas, 1x', 'Eier, 2x', 'Ingwer, 50g', 'Knoblauch', 'Kombu Seetang, 10g', 'Shiitake Pilze oder Steinpilze, 25g', 'Ramen, 400g', 'Sojasoße'],
    20
  ),
  makeRecipe(
    'Kokosmilch Pilaw', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['Staudensellerie, 200g', 'Zwiebel, 1x', 'Gelbe Paprika, 1x', 'Zitrone, 1x', 'TK Erbsen, 100g', 'Dose Kokosmilch, 1x'],
    20
  ),
  makeRecipe(
    'Kartoffel Tortilla', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear, 
    ['festkochende Kartoffeln, 400g', 'Zwiebel, 1x', 'Knoblauch', 'Rote Paprika, 1x', 'Eier, 2x', 'Speisequark (40% Fett), 125g', 'TK Petersilie'],
    40
  ),
  makeRecipe(
    'Spinat Lasagne', 
    DishType.main, DishTemperatur.warm, DishAvailability.wholeyear,
    ['Spinat, 600g', 'Zwiebel, 1x', 'Knoblauch', 'Käse, 100g', 'Haferdrink', 'Hafercuisine, 2x', 'passierte Tomaten, 400g', 'Lasagne Platten'],
    30
  ),
  makeRecipe(
    'Korean Bowl', 
    DishType.salad, DishTemperatur.kalt, DishAvailability.wholeyear,
    ['Chinakohl, 400g (oder Kimchi kaufen)', 'Frühlingszwiebel, 4x', 'Karotte, 5x', 'Gurke, 1x', 'Eier, 2x', 'Knoblauch', 'Chilipaste, 100g', 'Sojasauce', 'Ingwerpulver'],
    20
  ),
  makeRecipe(
    'Oriental Bowl', 
    DishType.salad, DishTemperatur.kalt, DishAvailability.wholeyear,
    ['Blumenkohl, 1x', 'Hummus, 1x', 'Hirtenkäse, 1x', 'Granatapfel, 1x', 'Rotkohl, 1x', 'Mandeln, ', 'Kräuterquark'],
    20
  ),
]

const allDishTypes = [DishType.main, DishType.breakfast, DishType.salad, DishType.sweet]

function isKnownDish(dish: string): boolean {
  return allDishTypes.some(d => d === dish)
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

function findIngredients(name: string): string[] {
  const recipe = recipes.find(recipe => recipe.name === name)

  if (recipe === undefined) {
    return []
  }
  else {
    return recipe.ingredients
  }
}

function selectIndex(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function makeRecipe(name: string, 
                    _type: DishType, 
                    temp: DishTemperatur, 
                    availability: DishAvailability,
                    ingredients: string[],
                    creationTime: number): Recipe {
  return {
    name: name,
    tags: [_type, temp, availability],
    ingredients: ingredients,
    creationTime: creationTime
  }
}