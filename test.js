const { message } = require('./index.js');

test('debe retornar el mensaje correcto', () => {
  expect(message).toBe("¡Hola desde el pipeline!");
});
