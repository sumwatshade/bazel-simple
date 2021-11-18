import index from '@package/core';

describe('test', () => {
    it('runs', () => {
        expect(index('world')).toBe(`rules_nodejs world!`)
    })

    it('uses utils package and runs', () => {
        expect(index()).toBe(`rules_nodejs iamtest!`)
    })
})