const { CarModel } = require('../src/infrastructure/database');
const car = require('../src/port/car_repository');

describe('create', () => {
    it('Valid Car', async () => {
        CarModel.prototype.save = jest.fn().mockImplementation(() => ({
            toObject: () => ({
                id: 1,
                marca: "BMW",
                modelo: "320i",
                placa: "FQG4900",
                cor: "branco"
            }),
        }));

        expect(await car.create({
            id: 1,
            marca: "BMW",
            modelo: "320i",
            placa: "FQG4900",
            cor: "branco"
        })).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                marca: expect.any(String),
                modelo: expect.any(String),
                cor: expect.any(String),
                placa: expect.any(String),
            }),
        );
    });
});