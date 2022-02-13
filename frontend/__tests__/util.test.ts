import { validate } from '../src/utils';

const MAX = 100;

describe('Utils', () => {
  describe('Validator', () => {
    it('empty input returns validation error', () => {
      const error = validate(undefined);
      const error2 = validate('');
      expect(error).toBe('input is required');
      expect(error2).toBe('input is required');
    });
    it('non number input returns validation error', () => {
      const error = validate('bad input');
      const error2 = validate({});
      expect(error).toBe('input must be a number');
      expect(error2).toBe('input must be a number');
    });
    it(`input bigger than ${MAX} returns validation error`, () => {
      const error = validate(101);
      const error2 = validate(1000);
      expect(error).toBe(`input must not be greater than ${MAX}`);
      expect(error2).toBe(`input must not be greater than ${MAX}`);
    });
    it(`number less than or equal to ${MAX} does not return any error`, () => {
      const error = validate(100);
      const error2 = validate(1);
      expect(error).not.toBeDefined();
      expect(error2).not.toBeDefined();
    });
  });
});
