$(document).ready(function () {
    $("#btn-search").on("click", function (e) {
      e.preventDefault();
      console.log($("#input-bus-code").val());
      let param = $("#input-bus-code").val();
  
      console.log("something");
      findBus(param);
      //process text
      //call Ajax by sending the text data
    });
  
    function findBus(param) {
      var settings = {
        "url": "https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusServices",
        "method": "GET",
        async: true,
  
        crossDomain: true,
        "timeout": 0,
        "headers": {
          "AccountKey": "ly9L23Y+QCmAMhVZGbbRtA==", //Use your own Account Key
        },
      };
  
      //ACCOUNTKEY = wX12O8DoTAuIZ9/3fMyKWQ==
      //UNIQUEUSERID = 438ffd3c-51ef-4ccb-bb52-aa7014a236fb
  
      $.ajax(settings).done(function (response) {
  
        console.log(response.value);
        // let a = response.value;
        
  
        // console.log(JSON.stringify(settings));
        let responseSummary = "";
        // console.log(response.value);
  
        for (var i = 0; i < response.value.length; i++) {
          var obj = response.value[i];
          console.log(obj['ServiceNo'])
          // if (obj['ServiceNo'] == param) {
          //   response.value.push(response.value[i]);
          // }
          // console.log(response[i]['ServiceNo']);
          // console.log(obj);
          responseSummary += '<tr>' + '<td>' + obj['ServiceNo'] + '<br>' + '</td>' + '<td>' + obj['AM_Peak_Freq'] + '<br>' + '</td>' + '<td>' + obj['AM_Offpeak_Freq'] + '<br>' + '</td>' +'</tr>'
        }
        $("#bus-content").html(responseSummary);
  
  
  
      });
  
    }
  });