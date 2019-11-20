
export {
  isKnownDish,
  addNewRecipe
};

export interface Recipe {
  name: string;
  tags: string[];
  creationTime: number;
}

const mainDish      = '#main'
const breakfastDish = '#breakfast'
const lightDish     = '#light'
const sweetDish     = '#sweet'

const dishTypes = [mainDish, breakfastDish, lightDish, sweetDish]

function isKnownDish(dish: string): boolean {
  return dishTypes.some(d => d === dish)
}

const recipes: Recipe[] = [
  {
    name: 'Auberginen-Lasagne mit Kichererbsencreme',
    tags: [mainDish, '#warm', '#wholeyear'],
    creationTime: 30
  },
  {
    name: 'Spaghetti mit Spinat-Mandel-Creme',
    tags: [mainDish, '#warm', '#wholeyear'],
    creationTime: 30
  }
]

function addNewRecipe(dishType: string, alreadySelected: Recipe[]): Recipe[] {
  if (dishType === mainDish) {
    return addNewMainRecipe(alreadySelected)
  }
  else if (dishType === breakfastDish) {
    return addNewBreakfastRecipe(alreadySelected)
  }
  else if (dishType === lightDish) {
    return addNewLightRecipe(alreadySelected)
  }
  else {
    return addNewSweetRecipe(alreadySelected)
  }
}

const mainRecipes = filterRecipes(mainDish)

function addNewMainRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, mainRecipes);
}

const breakfastRecipes = filterRecipes(breakfastDish)

function addNewBreakfastRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, breakfastRecipes);
}

const sweetRecipes = filterRecipes(sweetDish)

function addNewSweetRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, sweetRecipes);
}

const lightRecipes = filterRecipes(lightDish)

function addNewLightRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipeUtil(alreadySelected, lightRecipes);
}

function addNewRecipeUtil(alreadySelected: Recipe[], baseRecipes: Recipe[]): Recipe[] {
  let recipe = baseRecipes[selectIndex(baseRecipes.length)];

  while (alreadySelected.some(el => el.name === recipe.name)) {
    recipe = baseRecipes[selectIndex(baseRecipes.length)];
  }

  alreadySelected.push(recipe);

  return alreadySelected;
}

function filterRecipes(tag: string): Recipe[] {
  return recipes.filter(recipe => recipe.tags.some(tag => tag === tag))
}

function selectIndex(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}