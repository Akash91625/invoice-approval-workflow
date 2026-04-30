sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("invoiceapproval.controller.invoiceapproval", {
        onInit() {
        },

        onInvoicePress:function(oEvent){
            const oItem=oEvent.getSource();
            const sInvoiceId=oItem.getBindingContext().getProperty("ID");
            this.getOwnerComponent().getRouter().navTo("RouteDetail",{
                invoiceId:sInvoiceId
            });
        }
    });
});