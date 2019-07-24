import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createMediaQueries, isPairs } from './functions';

const breakpoints = createBreakpoints({});

describe('functions', () => {
  it('should check if it is pairs', () => {
    expect(isPairs({})).toBeFalsy();
    expect(isPairs([])).toBeTruthy();
    expect(isPairs([[1, 2]])).toBeTruthy();
    expect(isPairs([[1, 2, 3]])).toBeTruthy();
    expect(isPairs([[1, 2, 3, 4]])).toBeFalsy();
    expect(isPairs([[1, 2], ''])).toBeFalsy();
    expect(isPairs([[1, 2], {}])).toBeFalsy();
    expect(isPairs([[1, 2], ['test']])).toBeFalsy();
    expect(isPairs([[1, 2], ['test', 'test']])).toBeTruthy();
  });

  it('should return correct queries', () => {
    expect(() => createMediaQueries()).toThrow();
    const value1 = 1;
    const value2 = '#fff';
    const value3 = { xs: 1, md: 3 };
    const value4 = { sm: 1, xl: 3 };
    const testCases = [
      [[['margin', value1]], { margin: 1 }],
      [[['color', value2]], { color: '#fff' }],
      [[['color', value2, val => `${val}000`]], { color: '#fff000' }],
      [
        [['padding', { xs: 1, md: 3 }]],
        {
          [breakpoints.up('xs')]: { padding: 1 },
          [breakpoints.up('md')]: { padding: 3 },
        },
      ],
      [
        [
          ['padding', { sm: 1, xl: 3 }],
          ['margin', '3em'],
          ['color', { xs: '#fff', lg: '#000' }],
        ],
        {
          margin: '3em',
          [breakpoints.up('xs')]: { color: '#fff' },
          [breakpoints.up('sm')]: { padding: 1 },
          [breakpoints.up('lg')]: { color: '#000' },
          [breakpoints.up('xl')]: { padding: 3 },
        },
      ],
      [
        [['padding', { xs: 1, md: 3 }, val => val + 1]],
        {
          [breakpoints.up('xs')]: { padding: 2 },
          [breakpoints.up('md')]: { padding: 4 },
        },
      ],
    ];
    testCases.forEach(([pairs, output]) => {
      expect(createMediaQueries(breakpoints, pairs)).toEqual(output);
    });
  });
});