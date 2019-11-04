// ____________36936936936936936
// ____________36936936936936936
// ____________369369369369369369
// ___________36936936936936933693
// __________3693693693693693693693
// _________369369369369369369369369
// _________3693693693693693693693699
// ________3693693693693693693693699369
// _______36936939693693693693693693693693
// _____3693693693693693693693693693693636936
// ___36936936936936936936936936936___369369369
// __36936___369336936369369369369________36936
// _36936___36936_369369336936936__¶¶__¶¶
// 36933___36936__36936___3693636_¶¶¶¶¶¶¶¶
// 693____36936__36936_____369363_¶¶¶¶¶¶¶¶
// ______36936__36936______369369__¶¶¶¶¶¶
// _____36936___36936_______36936___¶¶¶¶
// _____36936___36936________36936___¶¶
// _____36936___36936_________36936___11,
// ______369____36936__________369___11,
// ______________369________________11,
// _______________________________11,
// _____________________________11,
// ___________________________11,
// ________________________¶¶¶_¶¶¶
// _______________________¶¶¶¶¶¶¶¶¶
// _______________________¶¶¶¶¶¶¶¶¶
// ________________________¶¶¶¶¶¶¶
// _________________________¶¶¶¶¶
// __________________________¶¶¶
// ___________________________¶
// ______________________________11,
// ________________________________11,
// __________________________________11,
// ___________________________________11,
// ___________________________________11,
// __________________________________11,
// _________________________________11,
// _______________________________11,
// ___________________________¶¶__¶¶
// __________________________¶¶¶¶¶¶¶¶
// __________________________¶¶¶¶¶¶¶¶
// ___________________________¶¶¶¶¶¶
// ____________________________ ¶¶¶
// _____________________________ ¶
// ____________________________11,
// __________________________11,
// _________________________11,
// ___________________________11,
// _____________________________11,
// ________________________________11,
// __________________________________11,
// ______________369___________________11,
// ______369____36936__________369_____11,
// _____36936___36936_________36936___11,
// _____36936___36936________36936___11,
// _____36936___36936_______36936___11,
// ______36936__36936______369369 _¶¶_¶¶
// 693____36936__36936_____369363 ¶¶¶¶¶¶¶
// 36933___36936__36936___3693636 ¶¶¶¶¶¶¶
// _36936___36936_369369336936936 _¶¶¶¶¶
// __36936___369336936369369369369 _¶¶¶__3696
// ___36936936936936936936936936936 _¶_336939
// _____36936936936936936936936936936936936
// _______369369396936936936936936693693
// ________36936936936936936936999369
// _________36936936936936936933699
// _________3693693693693693369369
// __________36936936936936993693
// ___________369369369369333693
// ____________3693693693699369
// ____________369369369366936
// ____________36936936936693



$(document).ready(function () {
  // day night
  $('.toggler').on('click', function () {
    $(this).find('.fas').toggleClass('fa-sun fa-moon');
    $('body').toggleClass('day');
  })


  function calculator() {
    var sum = "";
    var view = "";
    var len;
    //var arr= [];
    var operators = ["+", "-", "&times;", "/", "%"];
    var inputVal = document.getElementById("screen");
    $("table tr td.digit").on('click', function () {
      var num = $(this).attr('value');
      //console.log(arr);
      if (num == 0) {
        var check = $('#screen').html();
        if (check == 0) {
          return false;
        }
      }

      sum += num;
      view += num;

      //arr.push(num);
      $("#screen").html(view);
      len = inputVal.innerHTML.split("");
      // console.log(len);
      if (len.length == 14) {
        alert('এইবার অফ যান ভাই!!!');
        return false;
      }


    });


    // zero



    $("table tr td.operator").on('click', function (e) {
      e.preventDefault();
      // return 0

      var ops = $(this).attr('value');
      var dps = $(this).attr('value');

      if (ops === '/' || ops === '*') {
        if ($('#screen').html() === '0') {
          return false;
        }
      }


      if (dps == '*') {
        var abc = $(this).attr('cs');
        dps = abc;
      }
      if (dps == '/') {
        var abc = $(this).attr('cs');
        dps = abc;
      }

      var screen = $('#screen').html()
      if (sum == "") {
        view = screen + dps;
        sum = screen + ops;
        $('#screen').html(view);
      } else {




        sum += ops;
        view += dps;
        //arr.push(num);

        len = inputVal.innerHTML;
        if (/(?=(\D{2}))/g.test(sum)) {
          sum = len.substring(0, len.length - 1);
          sum += ops;
          $("#screen").html(sum);
        }
        if (/(?=(\D{2}))/g.test(view)) {
          view = len.substring(0, len.length - 1);
          view += dps;
          $("#screen").html(view);
        }

        len = inputVal.innerHTML.split("");

        $("#screen").html(view);

        //console.log(len);

        //console.log(arr);
      }

    });

    //   backspace
    $('#del').click(function () {
      var len = $('#screen').html();
      sum = sum.substring(0, len.length - 1);
      view = len.substring(0, len.length - 1);
      $("#screen").html(view);
      if ($('#screen').html() == "") {
        $('#screen').html(0);
      }

    })


    // $('#multiply').click(function(){
    //     var sign = $(this).attr('cs');
    //     $('#screen').html(sum+sign);
    //     sum = sum+'*';
    // })

    $("#equal").on('click', function () {
      var get = $('#screen').html();
      $('#subscreen').html(get);
      var total = eval(sum);
      //$("#screen").attr('value', total);
      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total);
      sum = "";
      view = "";
    });




    $("#percent").on('click', function () {
      var get = $('#screen').html();
      $('#subscreen').html(get);
      var total = eval(sum);
      //$("#screen").attr('value', total);
      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total / 100);
      sum = $('#screen').html();
      view = $('#screen').html();
    });

    $("#pm").on('click', function () {
      // var get =$('#screen').html();
      // $('#subscreen').html(get);
      var total = eval(sum);
      //$("#screen").attr('value', total);
      $("#screen").html(total % 1 != 0 ? total.toFixed(2) : total * -1);
      sum = sum * (-1);
      view = view * (-1);


    });




    $("#clear").on('click', function () {
      sum = "";
      view = "";
      arr = [];
      $("#screen").html(0);
    });

  };
  calculator();


});


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = h >= 12 ? 'pm' : 'am';
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + " " + ampm;
  t = setTimeout(function () {
    startTime()
  }, 500);
}
startTime();