require('../BuckarooClient.test')
import KlarnaKp from "../../src/PaymentMethods/KlarnaKP";
const klarnaKp = new KlarnaKp()
describe('KlarnaKp', async () => {
    await klarnaKp.reserve({
    }).then((info) => {
      expect(info).toBeDefined()
    })
})