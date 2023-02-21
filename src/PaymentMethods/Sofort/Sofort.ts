import PaymentMethod from '../PaymentMethod'
import { IPayForm } from "../../Models/PayForm";

export default class Sofort extends PaymentMethod {
  constructor () {
    super({
      paymentName:'sofortueberweisung',
      serviceVersion:1
    });
  }
}


const sepa = new Sofort()

const pay = (data:IPayForm) => sepa.pay(data,{})