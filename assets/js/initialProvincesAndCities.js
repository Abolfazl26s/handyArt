$(function () {
  $.ajax({
    type: 'get',
    url: '../../json/provinces.json',
    data: 'data',
    dataType: 'json',
    success: (res, status) => {
      let listOstan = [];

      if (status == 'success') {
        $.each(res, (index, ostan) => {
          listOstan.push(`
          <option id="${ostan.id}" value="${ostan.name}">${ostan.name}</option>
          `);
        });
      }
      $('#ostan').html(listOstan);
    },
  }).then(() => {
    $('#ostan').on('change', function (e) {
      let ostanID = $(this).children('option:selected').attr('id');

      $.ajax({
        type: 'get',
        url: '../../json/cities.json',
        data: 'data',
        dataType: 'json',
        success: (res, textStatus) => {
          let filterShahr = [];

          if (textStatus == 'success') {
            $.each(res, (index, shahr) => {
              if (shahr.province_id == ostanID) {
                filterShahr.push(`
                  <option id="${shahr.id}" value="${shahr.name}">${shahr.name}</option>
                `);
              }
            });
            $('#shahr').html(filterShahr);
          }
        },
      });
    });
  });
});
