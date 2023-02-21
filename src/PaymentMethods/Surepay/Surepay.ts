import PaymentMethod from '../PaymentMethod'
import client from "../../Request/Client";
import { PayForm } from "../../Models/PayForm";

class Surepay extends PaymentMethod {
  constructor () {
    super({
      paymentName:'surepay',
    })
  }

  async verify (data?) {
    const Transaction = new PayForm(data)
      .setServices(this.paymentName, this.serviceVersion, 'Verify', {})
      .setRequired(this.requiredFields)

    await client.post(
      Transaction,
      client.getDataRequestUrl())
  }
}

const surePay = new Surepay();

const verify = (data) => surePay.verify();

export {
  verify
}