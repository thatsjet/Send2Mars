/* globals chrome */
var background = {

  modalSeen: {},

  init: function(){
      //listen for messages and route to appropriate function
      chrome.runtime.onMessage.addListener(function(request,sender,sendResponse) {
          if(request.fn in background){
            background[request.fn](request,sender,sendResponse);
          }
          //console.log("message received", request);
      });

  },

  setModalSeen: function(request,sender,sendResponse){
      //console.log("setting modalSeen", request.value);
      this.modalSeen = request.value;
  },

  getModalSeen: function(request,sender,sendResponse){
    sendResponse(this.modalSeen);
  }
};

background.init();
