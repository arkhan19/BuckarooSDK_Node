require('../BuckarooClient.test')
import Paypal from '../../src/PaymentMethods/Paypal/index'

const method = new Paypal()

describe('Paypal', () => {
    test('Pay', async () => {
        await method
            .pay({
                amountDebit: 50.3
            })
            .then((info) => {
                expect(info.data).toBeDefined()
            })
    })
    test('Refund', async () => {
        await method
            .refund({
                amountCredit: 50.3,
                originalTransactionKey: '123456'
            })
            .then((info) => {
                expect(info.data).toBeDefined()
            })
    })
    test('ExtraInfo', async () => {
        await method
            .extraInfo({
                amountDebit: 50.3,
                address: {
                    city: 're',
                    country: 'rw',
                    state: 'fsd',
                    street: 'dsf',
                    street2: 'dsf',
                    zipcode: 'sdf'
                },
                addressOverride: false,
                costumer: { name: 'ers' },
                noShipping: 0,
                phone: { mobile: '534' }
            })
            .then((info) => {
                expect(info.data).toBeDefined()
            })
    })
})
