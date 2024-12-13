sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("eaes.invoices.controller.MainView", {
        onInit: function () {
            const oJSONModel = new sap.ui.model.json.JSONModel();
            const oView = this.getView();
            oJSONModel.loadData("./model/SelectionScreenMenu.json");
            oView.setModel(oJSONModel, "selectionScreen");
        },
        onFilter: function (){

        },
        onClearFilter: function (){
            const oModelSelScreen = this.getView().getModel("selectionScreen");
            oModelSelScreen.setProperty("/ShipName", "");
            oModelSelScreen.setProperty("/CountryKey", "");
        }
    });
});
