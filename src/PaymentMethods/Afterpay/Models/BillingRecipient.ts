import IAddress,{Address} from "../../../Models/IAddress";
import IPerson,{Person} from "../../../Models/IPerson";
import IPhone,{Phone} from "../../../Models/IPhone";
import Model from '../../../Models/Model'

export declare interface IBillingRecipient  {
  recipient: IPerson
  address: IAddress
  email: string
  phone?: IPhone
}
export default class BillingRecipient extends Model{
  recipient: IPerson
  address: IAddress
  email: string
  phone?: IPhone
  constructor (data) {
    super()
    this.recipient = data.recipient
    this.address = data.address
    this.email = data.email
    this.phone = data.phone
    // if((data.address.country ===  'NL' || data.address.country === 'BE')
    //     && typeof this.phone === undefined){
    //   throw new Error('Missing required Parameter Phone')
    // }
  }

  groupType? (): string {
    return 'BillingCustomer'
  }
}
