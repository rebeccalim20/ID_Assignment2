$(document).ready(function () {
    $("#bus-dashboard").hide();
    $("#loading").hide();
  

    $("#frm-query").submit(function (e) {
      e.preventDefault();
  

      console.log('submitting form');
      let userBusCode = $('#txt-busstop-code').val();

      if (userBusCode) {
        getArrivalByBusStopCode(userBusCode);
      } 
    });
  

    function getArrivalByBusStopCode(userBusCode) {
  
      //our ajax settings 
      var settings = {
        "url": `https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${userBusCode}`,
        "method": "GET",
        "headers": {
          "AccountKey": "ly9L23Y+QCmAMhVZGbbRtA=="
        },
        "beforeSend": function() {
          $("#loading").show();
        }
      };
  

      $.ajax(settings).done(function (response) {
 
        console.log(response);

        const services = response.Services;
  

        let arrivals = "";
        for(var i = 0 ; i <services.length; i++){
          
          arrivals = `<tr>${arrivals}
          <td>${services[i].ServiceNo}</td>        
          <td>
          <div>Arrival Time: ${services[i].NextBus.EstimatedArrival}</div>
          
          </td>
           <td>
          </tr>`;
        }
        
        $("#bus-dashboard").toggle();
        $("#loading").toggle();
  

        
        $("#bus-arrivals").html(arrivals);
        
      });
    }


  });