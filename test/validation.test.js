const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Carro correto', () => {
    const result = Validation.create({
        marca: "Ford",
        modelo: "Fiesta",
        placa: "abc123",
        cor: "preto"
    });
    expect(result).toEqual(undefined);
});

it('Carro sem placa', () => {
    const result = Validation.create({
        marca: "Ford",
        modelo: "Fiesta",
        cor: "preto"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
