<!DOCTYPE html>
<html>
    <head>
        <style id="antiClickjack">
            body {
                display: none !important;
            }
        </style>
    </head>

    <body>
        <div id="PGWHPCCARDContainer2"></div>    
    </body>

    <!-- INCLUDE SESSION.JS JAVASCRIPT LIBRARY -->
    <script type="text/javascript" src="https://test-bankalfalah.gateway.mastercard.com/form/version/54/merchant/TESTNIFT/session.js"></script>
    <!-- PGW HPC CARD PLUGIN -->
    <script type="text/javascript" src="https://uat-merchants.niftepay.pk/HPS/PGWHPCPlugin.js"></script>
    <!-- CrytoJS -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
    <!-- INITIALIZE PLUGIN -->
    <script type="text/javascript">

        const SALT = 'Rv+Rp1MkJTc=';

        function changeDateFormat() {
            Date.prototype.yyyymmdd = function () {
                function pad2(n) {
                    return (n < 10 ? "0" : "") + n;
                }

                return [this.getFullYear(),
                pad2(this.getMonth() + 1),
                pad2(this.getDate()),
                pad2(this.getHours()),
                pad2(this.getMinutes()),
                pad2(this.getSeconds())].join("");
            };
        }

        changeDateFormat();

        let date = new Date();
        let expDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000).yyyymmdd();
		console.log("DateTime: " + date.yyyymmdd());
		console.log("Expiry DateTime: " + expDate);
        let txnRefNo = ["T", date.yyyymmdd()].join("");

        //Update transaction parameters
        PGWHPCTransactionParameters._00amt_ = "1000"; //pp_Amount
        PGWHPCTransactionParameters._01brn_ = new Date().getTime().toString(); //pp_BillReference
        PGWHPCTransactionParameters._02des_ = "SF-123"; //pp_Description
        PGWHPCTransactionParameters._03lan_ = "EN";  //pp_Language
        PGWHPCTransactionParameters._04mid_ = "NV0001"; //pp_MerchantID
        PGWHPCTransactionParameters._05pwd_ = "Vd+UE9WAMy8="; //pp_Password
        PGWHPCTransactionParameters._06url_ = "https://venturegames.emergen.io/thankyou/"; //pp_ReturnURL
		PGWHPCTransactionParameters._07smid_= ""; //pp_SubMerchantID
        PGWHPCTransactionParameters._08seh_ = SALT; //pp_SecureHash
        PGWHPCTransactionParameters._09cur_ = "PKR"; //pp_TxnCurrency
        PGWHPCTransactionParameters._10tdt_ = date.yyyymmdd(); //pp_TxnDateTime
        PGWHPCTransactionParameters._11edt_ = expDate; //pp_TxnExpiryDateTime
        PGWHPCTransactionParameters._12trn_ = txnRefNo; //pp_TxnRefNo
        PGWHPCTransactionParameters._13ver_ = "1.1"; //pp_Version
        //PGWHPCTransactionParameters._14fbu_ = "";

        delete PGWHPCTransactionParameters._08seh_; //pp_SecureHash

        var keys = Object.keys(PGWHPCTransactionParameters).sort(function (a, b) {
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;
            return 0;
        });
        var message = "";
        keys.forEach(key => { message += PGWHPCTransactionParameters[key] ? [PGWHPCTransactionParameters[key], '&'].join("") : "" })
        message = [SALT, "&", message.slice(0, -1)].join("");

        // calculate secureHash
        var hash = CryptoJS.HmacSHA256(message, SALT);

        PGWHPCTransactionParameters._08seh_ = hash.toString().toUpperCase();

        //Initialize
        document.addEventListener("DOMContentLoaded", function (event) {
            PGWHPCCard.initialize("PGWHPCCARDContainer2"); //Render Card Fields
        });

        //Success Code Mappings
        PGWHPCSuccessMap.onValidSecurityCode = function (msg) {
            //alert('Valid Security Code')
            console.log(msg);
            //Your code to handle this success message
        }

        PGWHPCSuccessMap.onValidMasterCard = function (msg) {
            //alert('Valid MasterCard')
            console.log(msg);
            //Your code to handle this success message
        }

        PGWHPCSuccessMap.onValidSessionResponse = function (msg) {
            //alert('Valid Session Response')
            console.log(msg);
            //Your code to handle this success message
        }

        PGWHPCSuccessMap.onPurchaseProcessedViaCard = function (msg) {
            //alert("purchase done - Card");
            console.log("purchase done - Card");
            console.log(msg);
            //Your code to handle this success message
        }

        //Error Code Mappings
        PGWHPCErrorMap.onInvalidTransactionDetails = function (msg) {
            alert("Invalid Transaction Details");
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onInvalidContainerArea = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onInvalidCardNumber = function (msg) {
            //alert("Invalid Card Number");
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onInvalidExpiryYear = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onInvalidExpiryMonth = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onInvalidSecurityCode = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onRequestTimedOut = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onSystemError = function (msg) {
            console.log(msg);
            //Your code to handle this error
        }

        PGWHPCErrorMap.onGenericError = function (msg) {
            alert('Error')
            console.log(msg);
            //Your code to handle this error
        }

    </script>
</html>