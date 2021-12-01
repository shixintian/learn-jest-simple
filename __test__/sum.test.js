const sum = require('../src/sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('test toEqual', () => {
//   expect(['name']).toEqual(['name']);
// });

// test('test mockName', () => {
//   const mockfn = jest.fn();
//   mockfn.mockName('apple');
//   console.log(111, mockfn.getMockName() );
//   expect(['name']).toEqual(['name']);
// });

// test('test mock.calls', () => {
//   const mockFn = jest.fn();
//   mockFn('arg1', 'arg2');
//   mockFn('arg3');
//   console.log(mockFn.mock.calls);
// });

test('test mock.results', () => {
  const mockFn = jest.fn((type) => {
    if (type === 1) {
      return 'fruits'
    }
    if (type === 2) {
      return 'animals'
    }
    // throw new Error('error');
  });
  mockFn(1);
  mockFn(2);
  mockFn(3);
  console.log(mockFn.mock.results);
});