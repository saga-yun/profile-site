function scr_ani(scr, offs_max) {
    var window_h = $(window).height(),
      offs_length = $(".offs").length,
      ons_length = $(".ons").length;
    if (offs_length) {
      var first_item = offs_max - offs_length;
      for (var i = 0; i < offs_length; i++) {
        var data_scr = first_item + i;
        var offs = $('.offs[data-scr="' + data_scr + '"]');
        var target = offs.offset().top;
        var trigger = target - (window_h + scr - window_h * 0.3);
        if (trigger < 0) {
          offs.removeClass("offs").addClass("ons");
        } else {
          break;
        }
      }
    }
    if (ons_length) {
      var last_item = ons_length - 1;
      for (var i = 0; i < ons_length; i++) {
        var data_scr = last_item - i;
        var ons = $('.ons[data-scr="' + data_scr + '"]');
        var target = ons.offset().top;
        var trigger = target - (window_h + scr);
        if (trigger > 0) {
          ons.removeClass("ons").addClass("offs");
        } else {
          break;
        }
      }
    }
  }
  
  $(function () {
    /*
    スクロール出現
    */
    var scr = $(window).scrollTop();
    // スクロール出現アイテムにナンバリング
    var offs_max = $(".offs").length;
    for (var i = 0; i < offs_max; i++) {
      $(".offs").eq(i).attr("data-scr", i);
    }
  
    scr_ani(scr, offs_max);
  
    /************
    スクロール時
    ************/
    $(window).on("scroll", function () {
      var scr = $(window).scrollTop();
      /*
      スクロール出現
      */
      scr_ani(scr, offs_max);
    }); // end scroll
  }); // end function

  
 
  const changeVisibility = () => {
    var element = $('#list_of_deliverables2');
    element.css('width', '100%').css('height', `${$(document).height()}px`);
    element.css('opacity','1'); 
    $('#batsu').css('opacity','1');
  }
  const close = () => {
    var element = $('#list_of_deliverables2');
    element.css('width', '0%').css('height', '0%'); 
    element.css('opacity','0');
    $('#batsu').css('opacity','0');
    
  }

  $("#batsu").click(function (e) { 
    close()
    
  });
  
  $('#profile-container').empty();
  if ($(window).width() > 600) {
    $('#profile-container').append('<div id="profile-element">\
            <div class="top-wrapper">\
                <div class="self-introduction">\
                    <img class="my-photo" src="img/cat .jpg" alt="猫が映ってる写真">\
                    <div class="self-introduction-text">\
                        <h2>Profile</h2>\
                        <p>愛知県在住の23歳、YUNAと申します。<br class="text-hidden">\
                            私はWEBサイトの作成に興味があり、あまりパソコンを触ったことがないような知識0の状態から、約2ヶ月の独学でHTML/CSS・JavaScript・jQueryを学習し、『WEBサイトを作成する』という目標を達成しました。<br class="text-hidden">\
                            その学習を進める中でデザインやコーディングに興味を持ち、さらに腕を磨くべく、本や学習サイトを通じて学習を進め、Figmaでデザインを考えながら実際にコーディングをしたり、動きがあるWEBページを作ったりしています。<br class="text-hidden">\
                            自分のデザインやコーディングで作成したWEBサイトをユーザーに利用していただき、多くの人の役に立ちたいと思っています。\
                        </p>\
                    </div>\
                </div>\
            </div>\
        </div>')
  } else {
    $('#profile-container').append('<div id="profile-element">\
          <details id="profile">\
              <summary>Profile</summary>\
              <p>愛知県在住の23歳、YUNAと申します。<br class="text-hidden">\
                            私はWEBサイトの作成に興味があり、あまりパソコンを触ったことがないような知識0の状態から、約2ヶ月の独学でHTML/CSS・JavaScript・jQueryを学習し、『WEBサイトを作成する』という目標を達成しました。<br class="text-hidden">\
                            その学習を進める中でデザインやコーディングに興味を持ち、さらに腕を磨くべく、本や学習サイトを通じて学習を進め、Figmaでデザインを考えながら実際にコーディングをしたり、動きがあるWEBページを作ったりしています。<br class="text-hidden">\
                            自分のデザインやコーディングで作成したWEBサイトをユーザーに利用していただき、多くの人の役に立ちたいと思っています。</p>\
          </details>\
      </div>')
      $('#profile-element').css('margin-bottom','50px');
  }
      
 
  $(function() {
    $(window).resize(function() {
      $('#profile-container').empty();
      if ($(window).width() > 600) {
        $('#profile-container').append('<div id="profile-element">\
                <div class="top-wrapper">\
                    <div class="self-introduction">\
                        <img class="my-photo" src="img/cat .jpg" alt="猫が映ってる写真">\
                        <div class="self-introduction-text">\
                            <h2>Profile</h2>\
                            <p>愛知県在住の23歳、YUNAと申します。<br>\
                                私はWEBサイトの作成に興味があり、あまりパソコンを触ったことがないような知識0の状態から、約2ヶ月の独学でHTML/CSS・JavaScript・jQueryを学習し、『WEBサイトを作成する』という目標を達成しました。<br>\
                                その学習を進める中でデザインやコーディングに興味を持ち、さらに腕を磨くべく、本や学習サイトを通じて学習を進め、Figmaでデザインを考えながら実際にコーディングをしたり、動きがあるWEBページを作ったりしています。<br>\
                                自分のデザインやコーディングで作成したWEBサイトをユーザーに利用していただき、多くの人の役に立ちたいと思っています。\
                            </p>\
                        </div>\
                    </div>\
                </div>\
            </div>')
      } else {
        $('#profile-container').append('<div id="profile-element">\
              <details id="profile">\
                  <summary>Profile</summary>\
                  <p>愛知県在住の23歳、YUNAと申します。<br>\
                                私はWEBサイトの作成に興味があり、あまりパソコンを触ったことがないような知識0の状態から、約2ヶ月の独学でHTML/CSS・JavaScript・jQueryを学習し、『WEBサイトを作成する』という目標を達成しました。<br>\
                                その学習を進める中でデザインやコーディングに興味を持ち、さらに腕を磨くべく、本や学習サイトを通じて学習を進め、Figmaでデザインを考えながら実際にコーディングをしたり、動きがあるWEBページを作ったりしています。<br>\
                                自分のデザインやコーディングで作成したWEBサイトをユーザーに利用していただき、多くの人の役に立ちたいと思っています。</p>\
              </details>\
          </div>')
          $('#profile-element').css('margin-bottom','50px');
        }
      })
  })
  
    