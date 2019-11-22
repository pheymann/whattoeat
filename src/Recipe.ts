
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

const allDishTypes = [DishType.main, DishType.breakfast, DishType.salad, DishType.sweet]

function isKnownDish(dish: string): boolean {
  return allDishTypes.some(d => d === dish)
}

const recipes: Recipe[] = [
  {
    name: 'Auberginen-Lasagne mit Kichererbsencreme',
    tags: [DishType.main, '#warm', '#wholeyear'],
    creationTime: 30
  },
  {
    name: 'Spaghetti mit Spinat-Mandel-Creme',
    tags: [DishType.main, '#warm', '#wholeyear'],
    creationTime: 30
  }
]

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