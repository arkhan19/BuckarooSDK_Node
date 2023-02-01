import PaymentMethod from "../PaymentMethod";
import BuckarooClient from "../../BuckarooClient";
import PayPayload from "../../Models/PayPayload";

class Pay {}

export default class Sofort extends PaymentMethod {
  protected requiredConfigFields: Array<string> = [];
  public serviceVersion = 1;
  constructor(api: BuckarooClient) {
    super(api);
    this.paymentName = "sofortueberweisung";
    this.requiredConfigFields = this.requiredConfigFields.concat(
      this.requiredFields
    );
  }

  async pay(model?) {
    let data = this.formatData(model, "Pay");
    let method = "POST";
    return this.api.client.call(data, method);
  }

  payRemainder(model?) {
    return model;
  }
  issuers(): any {
    return this;
  }
  formatData(data: {}, action) {
    const pay = new Pay();
    const newData = new PayPayload(data, this, action, pay);

    console.log(JSON.stringify(newData));
    return newData;
  }
}
