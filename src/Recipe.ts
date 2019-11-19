
export {
  addNewDishRecipe,
  addNewOtherRecipe
};

export interface Recipe {
  name: string;
  tags: string[];
  creationTime: number;
}

const recipes: Recipe[] = [
  {
    name: 'Auberginen-Lasagne mit Kichererbsencreme',
    tags: ['#main', '#warm', '#wholeyear'],
    creationTime: 30
  },
  {
    name: 'Spaghetti mit Spinat-Mandel-Creme',
    tags: ['#main', '#warm', '#wholeyear'],
    creationTime: 30
  }
]

const dishRecipes: Recipe[] = recipes.filter(recipe => recipe.tags.some(tag => tag === "#main"))

const otherRecipes: Recipe[] = recipes.filter(recipe => recipe.tags.some(tag => tag !== "#main"))

function selectIndex(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

function addNewDishRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipe(alreadySelected, dishRecipes);
}

function addNewOtherRecipe(alreadySelected: Recipe[]): Recipe[] {
  return addNewRecipe(alreadySelected, otherRecipes);
}

function addNewRecipe(alreadySelected: Recipe[], baseRecipes: Recipe[]): Recipe[] {
  let recipe = baseRecipes[selectIndex(baseRecipes.length)];

  while (alreadySelected.some(el => el.name === recipe.name)) {
    recipe = baseRecipes[selectIndex(baseRecipes.length)];
  }

  alreadySelected.push(recipe);

  return alreadySelected;
}