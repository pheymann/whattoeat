
export default {
  valToString,
  valToNumber
}

function valToString(val: string | number | string[]): string {
  if (typeof val === "string") {
    return val
  }
  else {
    throw new Error(`Expected 'val' to be a string, but got: '${val}: ${typeof val}'.`)
  }
}

function valToNumber(val: string | number | string[]): number {
  if (typeof val === "number") {
    return val as number
  }
  else if (typeof val === "string") {
    return parseInt(val)
  }
  else {
    throw new Error(`Expected 'val' to be a number, but got: '${val}: ${typeof val}'.`)
  }
}