// const { spawn } = require("@sap/cds");
// const { func } = require("@sap/cds/lib/ql/cds-ql");

sap.ui.define([
    "sap/ui/core/mvc/Controller"
],function(Controller){
    "use strict";

    return Controller.extend("invoiceapproval.controller.invoiceDetail",{

        onInit:function(){
            const oRouter=this.getOwnerComponet.getRouter();
            oRouter.getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched,this);
            },

        _onObjectMatched:function(oEvent){
            const sinvoiceId=oEvent.getParameter("arguments").invoiceId;
            this.getView().bindElement("/Invoices("+sinvoiceId+")");
        },

        onApprove:function(){
            const oContext=this.getView.getBindingContext();
            const oModel=this.getView().getModel();
            oModel.setProperty("status","Approved",oContext);
            oModel.submitBatch("default").then(()=>{
                sap.m.MessageToast.show("Invoice Approved");
            });
        },

        onReject:function(){
            const oContext=this.getView.getBindingContext();
            const oModel=this.getView().getModel();
            oModel.setProperty("status","Rejected",oContext);
            oModel.submitBatch("default").then(()=>{
                sap.m.MessageToast.show("Invoice Rejected");
            });
        },

        onNavBack:function(){
            this.getOwnerComponet.getRouter.navTo("");
        }

    });
});