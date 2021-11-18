import getName from '@package/utils';

describe('utils', () => {
    it('gets name', () => {
        expect(getName()).toBe('iamtest')
    })
})