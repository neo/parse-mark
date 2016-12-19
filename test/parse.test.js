const parse = require('../src/parse');

test('strong', () => {
  expect(parse('**strong**')).toBe('<strong>strong</strong>');
});

test('em', () => {
  expect(parse('*em*', '\\*', 'em')).toBe('<em>em</em>');
});

test('*John Smith*', () => {
  expect(parse('*John Smith*', '\\*', 'b')).toBe('<b>John Smith</b>');
});

test('escape', () => {
  expect(parse('\*escape*')).toBe('*escape*');
  expect(parse('*escape\*')).toBe('*escape*');
});

test('single', () => {
  expect(parse('This is a single asterisk: *', '\\*')).toBe('This is a single asterisk: *');
});
