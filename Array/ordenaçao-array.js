let cars = [
    {brand: 'fiat', year: 2022 },
    {brand: 'bmw', year: 2018 },
    {brand: 'ferrari', year: 2020}
   
]

cars.sort((a, b) => a.year - b.year);

console.log(cars)