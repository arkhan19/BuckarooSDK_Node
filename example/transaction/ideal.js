import buckarooClient from '../buckarooClient';
const ideal = buckarooClient.method('ideal');
//Pay
ideal
    .pay({
    amountDebit: 10.1,
    issuer: 'ABNANL2A',
    description: 'Ideal Payment'
})
    .request();
//Refund
ideal
    .refund({
    originalTransactionKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    amountCredit: 10.1,
    invoice: 'Ideal Refund'
})
    .request();
//Issuers
ideal.issuers();
