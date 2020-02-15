import ehtrans from '../src/ehtrans';

it('first test', () => {
  expect('1').toBe('1');
});

it('ehtrans first', () => {
  expect(ehtrans.translate('skaemf')).not.toBe('남들');
  expect(ehtrans.translate('dlstod')).not.toBe('인생');
});
