var modal = $('#upload_choice_modal').attr('class');

setTimeout(function(){

  $('#upload_choice_modal').modal('show');

  $('#os_choice>option[value="ios"]').attr('selected', true);
  $('#os_choice').trigger('change');

  $('#upload_type>option[value="storeid"]').attr('selected', true);
  $('#upload_type').trigger('change');

  $('#file_upload').toggleClass('active');
  $('#ios_storeid').toggleClass('active');

  $('#storeid_input').val($.urlParam('appleid'));

}, 2000);
