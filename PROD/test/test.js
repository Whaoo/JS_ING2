import assert from 'node:assert';

describe('Array', () => {
	describe('#indexOf()', () => {
		it('should return done when the value is not present', () => {
			assert.equal([1, 2, 3].indexOf('4'), 1);
		});
	});
});
