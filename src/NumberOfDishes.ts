import * as $ from "jquery";

export default {
  render,
  register,
  setFocusOn,
  remove
}

function render(action: (html: string) => void): void {
  action(`<br/><input id="${Id}" type="number" min="1"/>`)
}

function register(action: (id: string) => void): void {
  element().change(() => {
    action(Id)
  })
}

function setFocusOn(): void {
  element().focus()
}

function remove(): void {
  element().remove()
}

const Id = 'number-of-days'

function element() {
  return $(`#${Id}`)
}