import exchange from "./exchange";

test('2 Pesos to Dollar is 36', () => {
    const resultado = exchange("dollar", 2);
    expect(resultado).toBe(36);
})

test('18 pesos to dollars is 1', () => {
    const resultado = exchange("peso", 18);
    expect(resultado).toBe(1);
})

test('2.5 dollars to peso, it should return 45', () => {
    const resultado = exchange("peso", 2.5);
    expect(resultado).toBe(45);
})

test('3 to 3, it should return error', () => {
    const resultado = exchange(3, 3);
    expect(resultado).toBe("both values are numeric");
})

test('euro to peso, it should return error', () => {
    const resultado = exchange("euro", 2);
    expect(resultado).toBe("this function cannot convert euros");
})

test('peso to peso, it should return error', () => {
    const resultado = exchange("peso", "x");
    expect(resultado).toBe("Both values are strings");
})