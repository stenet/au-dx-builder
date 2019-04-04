export function toDashCase(camelCase: string): string {
  return camelCase.split('').reduce((p, c) => {
    if (c === c.toUpperCase()) {
      p += "-".concat(c.toLowerCase());
    } else {
      p += c;
    }

    return p;
  }, "");
}
export function toPascalCase(camelCase: string): string {
  return camelCase.substr(0, 1)
    .toUpperCase()
    .concat(camelCase.substr(1));
}