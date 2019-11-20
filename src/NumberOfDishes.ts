import * as $ from "jquery";

export default {
  render,
  register,
  remove
}

function render(action: (html: string) => void): void {
  const html = renderSelection(7)

  action(html)
}

function register(action: (id: string) => void): void {
  $('#number-of-days').change(() => {
    action('number-of-days')
  })
}

function remove(): void {
  $('#number-of-days').remove()
}

function renderSelection(numberOfDays: number): string {
  const options = Array
    .from(Array(numberOfDays).keys())
    .map(day => renderDaysOption(day + 1) + "\n")
    .reverse()
    .join("\n")

  return `
    <br/>
    <select id="number-of-days">
      ${options}
    </select>`
}

function renderDaysOption(days: number): string {
  return `<option value="${days}">${days}</option>`
}