function parse(text, pattern = '\\*\\*', tag = 'strong') {
  const regexp = new RegExp(`(${pattern})(.*?)\\1`, 'g');
  return text.replace(regexp, `<${tag}>$2</${tag}>`);
}

module.exports = parse;
