import React from 'react'
import Script from 'next/script';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import Head from 'next/head';

function index() {

  // async function LoadLibraries() {
  //   await AddLibrary("https://test-bankalfalah.gateway.mastercard.com/form/version/54/merchant/TESTNIFT/session.js");
  //   await AddLibrary("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js")
  //   await AddLibrary("https://uat-merchants.niftepay.pk/HPS/PGWHPCPlugin.js");
  // }


  function parameters() {
        PGWHPCTransactionParameters.__00amt__ = "1000"; //pp_Amount
        PGWHPCTransactionParameters.__01brn__ = new Date().getTime().toString(); //pp_BillReference
        PGWHPCTransactionParameters.__02des__ = "SF-123"; //pp_Description
        PGWHPCTransactionParameters.__03lan__ = "EN";  //pp_Language
        PGWHPCTransactionParameters.__04mid__ = "NV0001"; //pp_MerchantID
        PGWHPCTransactionParameters.__05pwd__ = "Vd+UE9WAMy8="; //pp_Password
        PGWHPCTransactionParameters.__06url__ = "https://venturegames.emergen.io/thankyou/"; //pp_ReturnURL
		    PGWHPCTransactionParameters.__07smid__= ""; //pp_SubMerchantID
        PGWHPCTransactionParameters.__08seh__ = SALT; //pp_SecureHash
        PGWHPCTransactionParameters.__09cur__ = "PKR"; //pp_TxnCurrency
        PGWHPCTransactionParameters.__10tdt__ = date.yyyymmdd(); //pp_TxnDateTime
        PGWHPCTransactionParameters.__11edt__ = expDate; //pp_TxnExpiryDateTime
        PGWHPCTransactionParameters.__12trn__ = txnRefNo; //pp_TxnRefNo
        PGWHPCTransactionParameters.__13ver__ = "1.1"; //pp_Version
        //PGWHPCTransactionParameters.__14fbu__ = "";

        delete PGWHPCTransactionParameters.__08seh__; //pp_SecureHash

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

        PGWHPCTransactionParameters.__08seh__ = hash.toString().toUpperCase();

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
  }

  function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = false;
    script.type = "text/javascript";
    document.body.appendChild(script);
    return script;

    script.addEventListener("load", () => {
      console.log("File loaded")
    });
     // error event
    script.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
  }

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



  useEffect(() => {
    console.log("UseEffect");
    // PGWHPCTransactionParameters.__00amt__ = "1000"; //pp_Amount
    
    setTimeout(() => {
      PGWHPCTransactionParameters.__00amt__ = "1000"; //pp_Amount
    }, 3000)
  }, [])

  return (
    <>
    {console.log("here")}
    <div>
      <Head>
        <Script src="https://test-bankalfalah.gateway.mastercard.com/form/version/54/merchant/TESTNIFT/session.js" strategy='beforeInteractive' />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" strategy='beforeInteractive' />
        <Script src="https://uat-merchants.niftepay.pk/HPS/PGWHPCPlugin.js" onReady={() => {parameters()}} />  
      </Head>
      <h1>Hello World</h1>
        <style
          id="antiClickjack"
          dangerouslySetInnerHTML={{
            __html:
              "\n body {\n display: none !important;\n}\n"
          }}
        />
        <div id="PGWHPCCARDContainer2" />
        
 
     </div>
     </>
    );
}


export default index