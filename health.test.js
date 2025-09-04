const getHealthStatus = require('./health');

test('Здоровье больше 50 должно быть healthy', () => {
    expect(getHealthStatus({name: 'Маг', health: 90})).toBe('healthy');
});

test('Здоровье 50 должно быть wounded', () => {
    expect(getHealthStatus({name: 'Воин', health: 50})).toBe('wounded');
});

test('Здоровье 15 должно быть wounded', () => {
    expect(getHealthStatus({name: 'Лучник', health: 15})).toBe('wounded');
});

test('Здоровье меньше 15 должно быть critical', () => {
    expect(getHealthStatus({name: 'Нежить', health: 10})).toBe('critical');
});
