import * as $ from "jquery";

export default {
  render,
  register,
  remove
}

function render(action: (html: string) => void): void {
  action(`<br/><button id="${Id}">Los!</button>`) 
}

function register(action: (id: string) => void): void {
  element().click(event => {
    event.preventDefault()

    action(Id)
  })
}

function remove(): void {
  element().remove()
}

const Id = 'select-recipes'

function element() {
  return $(`#${Id}`)
}