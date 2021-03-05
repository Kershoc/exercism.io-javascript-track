export class translator {
  static translate(input) {
    return input.replace(/\b(s?qu|[^aeiou ]+(?=y)|(?!yt|xr)[^aeiou ]+|)(\w+)/ig, "$2$1ay");
  }
}
