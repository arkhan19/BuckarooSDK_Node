import { IKlarnaArticle } from './Article';
import { IBillingRecipient, IShippingRecipient } from './Recipient';
import { Payload } from '../../../Models/ITransaction';
import { ServiceParameterList } from "../../../Utils/ServiceParameter";
export interface IPay extends Payload {
    billing: IBillingRecipient;
    shipping?: IShippingRecipient;
    articles: IKlarnaArticle[];
}
export declare const Services: (data: IPay) => ServiceParameterList;
