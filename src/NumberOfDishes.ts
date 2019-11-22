import * as $ from "jquery";

export default {
  render,
  register,
  remove
}

function render(action: (html: string) => void): void {
  action('<br/><input id="number-of-days" type="number" min="1"/>')
}

function register(action: (id: string) => void): void {
  $('#number-of-days').change(() => {
    action('number-of-days')
  })
}

function remove(): void {
  $('#number-of-days').remove()
}