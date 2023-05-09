const arthimetic = require('./simplecalculator')

describe('simpleCalculator', () =>{
    test('addition',()=>{
       expect(arthimetic.add(1,2)).toBe(3); 
    });
    test('subtract',()=>{
        expect(arthimetic.subtract(2,2)).toBe(0); 
     })
     test('division',()=>{
        expect(arthimetic.division(2,2)).toBe(1); 
     });
     test('multiplication',()=>{
        expect(arthimetic.multiplication(1,2)).toBe(2); 
     })
})