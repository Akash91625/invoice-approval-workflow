namespace invoice.workflow;

using { managed } from '@sap/cds/common';

entity Vendors : managed {
    key ID : UUID;
    vendorCode : String(20);
    vendorName : String(100);
    email : String(100);
    contactNumber : String(20);
}

entity Invoices : managed {
    key ID : UUID;
    invoiceNumber : String(30);
    poNumber : String(30);
    amount : Decimal(15,2);
    taxAmount : Decimal(15,2);
    dueDate : Date;
    status : String(20);
    remarks : String(255);
    vendor : Association to Vendors;
}

entity ApprovalHistory : managed{
    key ID : UUID;
    invoice : Association to Invoices;
    action : String(30);
    actionBy : String(30);
    role : String(30);
    comments : String(255);
}

entity PaymentSchedule : managed{
    key ID : UUID;
    invoice : Association to Invoices;
    scheduleDate : Date;
    paymentStatus : String(30);
    paymentReference : String(50);
}