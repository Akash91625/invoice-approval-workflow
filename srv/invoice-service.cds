using { invoice.workflow as db} from '../db/schema';

service InvoiceService {
    entity Vendors as projection on db.Vendors;
    entity Invoices as projection on db.Invoices;
    entity ApprovalHistory as projection on db.ApprovalHistory;
    entity PaymentSchedule as projection on db.PaymentSchedule;
}