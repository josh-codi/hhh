window.preventNumberScroll = () =>  {
  document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
  });
}

window.modalHide = () => {
  $('.modal').modal('hide');
}

window.modalScrollUp = () => {
  $('.modal').scrollTop(0);
}

window.modalShow = (element) => {
  $('#'+element+'').modal('show');
}

window.resetForm = (form) => {
  $('#'+form+'')[0].reset();
}

window.copyText = (text) => {
  navigator.clipboard.writeText(text);
} 

window.parse_query_string = (query) => {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}