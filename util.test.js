const { generateText } = require('./util')

test('should output name and age', () => {
  const text = generateText('bob', 20)
  expect(text).toBe('bob (20 years old)')
  const text2 = generateText("ann", 25);
  expect(text2).toBe("ann (25 years old)");
})

test('should output data-less text', () => {
  const text = generateText('', null)
  expect(text).toBe(' (null years old)')
})
