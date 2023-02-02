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
    return this.api.client.post(new PayPayload(model, this, "Pay", new Pay()));
  }

  payRemainder(model?) {
    return model;
  }
  issuers(): any {
    return this;
  }
}
