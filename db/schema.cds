namespace invoice.workflow;

entity Vendors {
    key ID : UUID;
    vendorCode : String(20);
    vendorName : String(100);
    email : String(100);
}

entity Invoices {
    key ID : UUID;
    invoiceNumber : String(30);
    amount : Decimal(15,2);
    status : String(20);
    vednor : Association to Vendors;
}
