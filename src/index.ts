import './index.scss';

import * as $ from "jquery";
import Util from "./Util";
import NumberOfDishes from "./NumberOfDishes";
import ActionButton from "./ActionButton";
import RecipeRecos from "./RecipeRecommendations";
import {isKnownDish, stringToDishType} from "./Recipe";

$(document).ready(() => {

  // Event API
  $('#dish-type-selection').change(() => {
    const _type    = '#' + Util.valToString($('#dish-type-selection option:selected').val())
    const dishType = stringToDishType(_type)

    if (dishType) {
      if (isKnownDish(dishType)) {
        NumberOfDishes.remove()
        ActionButton.remove()
        RecipeRecos.remove()
        NumberOfDishes.render(html => $('#dish-type-selection').after(html))
        
        NumberOfDishes.register(id => {
          const numberOfDays = Util.valToNumber($(`#${id}`).val())

          console.debug(`[DEBUG] select ${numberOfDays} ${dishType} recipes`)

          ActionButton.remove()
          ActionButton.render(html => $(`#${id}`).after(html))
          ActionButton.register(id => {
            RecipeRecos.remove()
            RecipeRecos.render(dishType, numberOfDays, html => $(`#${id}`).after(html))
            RecipeRecos.registerCopy()
          })
          ActionButton.setFocusOn()
        })
        NumberOfDishes.setFocusOn()
      }
      else {
        console.debug(`[DEBUG] not a known dish type: '${dishType}'`)
      }
    }
    else {
      console.error(`[ERROR] unknown dish type: ${_type}`)
    }
  })
})