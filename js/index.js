$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


$(document).ready(function () {
  
    busresult();
    var search_input = document.querySelector("#input-bus-code");
    search_input.addEventListener("keyup", function (e) {

    var search_item=e.target.value.toLowerCase();
    var span_items=document.querySelectorAll("#bus-content .service-no .text");
  

    console.log(span_items);
    span_items.forEach(function(item){
      console.log(item.textContent);
      if(item.textContent.toLowerCase().indexOf(search_item) != -1){
         item.closest("tr").style.display ="";
      }
      else{
        item.closest("tr").style.display = "none";
      }
    })
  


})

  
    $("#btn-search").on("click", function (e) {
      e.preventDefault();
     
      let param = $("#input-bus-code").val();
  
      console.log("something");
      findBus(param);

    });
    

    function busresult() {
      var settings = {
        "url": "https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusServices",
        "method": "GET",
        async: true,
  
        crossDomain: true,
        "timeout": 0,
        "headers": {
          "AccountKey": "ly9L23Y+QCmAMhVZGbbRtA==", 
        },
      };
  
     
      $.ajax(settings).done(function (response) {

        let responseSummary = "";

  
        for (var i = 0; i < response.value.length; i++) {
          var obj = response.value[i];

          responseSummary += '<tr>' + '<td class="service-no">' +'<span class="text">'
          + obj['ServiceNo'] + '</span>'+'<br>' + '</td>' + '<td>' + obj['AM_Peak_Freq'] + '<br>' + '</td>' 
          + '<td>' + obj['AM_Offpeak_Freq'] + '<br>' + '</td>' + '<td>' + obj['PM_Peak_Freq'] 
          + '<br>' + '</td>' + '<td>' +obj['PM_Offpeak_Freq'] + '<br>' + '</td>' +'</tr>' 
        }
        $("#bus-content").html(responseSummary);
  
  
      });
  
    }



  });