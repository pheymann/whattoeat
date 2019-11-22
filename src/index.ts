import './index.scss';

import * as $ from "jquery";
import Util from "./Util";
import NumberOfDishes from "./NumberOfDishes";
import RecipeRecos from "./RecipeRecommendations";
import {isKnownDish} from "./Recipe";

$(document).ready(() => {

  // Event API
  $('#dish-type-selection').change(() => {
    const dishType = '#' + Util.valToString($('#dish-type-selection option:selected').val())

    if (isKnownDish(dishType)) {
      NumberOfDishes.remove()
      RecipeRecos.remove()
      NumberOfDishes.render(html => $('#dish-type-selection').after(html))
      
      NumberOfDishes.register(id => {
        const numberOfDays = Util.valToNumber($(`#${id}`).val())

        console.debug(`[DEBUG] select ${numberOfDays} ${dishType} recipes`)

        RecipeRecos.remove()
        RecipeRecos.render(dishType, numberOfDays, html => $(`#${id}`).after(html))
      })
      NumberOfDishes.setFocusOn()
    }
    else {
      console.debug(`[DEBUG] not a known dish type: '${dishType}'`)
    }
  })
})