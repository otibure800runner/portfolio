$(function(){
  /*
  フェードインロゴ
  */
  if($.cookie("access") == undefined) {
    //accsessに値を設定(undifinedの解除)
    $.cookie("access","onece");
    $.cookie("access", { expires: 0 });
    setTimeout(function(){
      $(".start img,.start p").fadeIn(1600);
    },500);
    setTimeout(function(){
      $(".start").fadeOut(500);
    },3000);
  }else{
    //最初に設定してた背景の水色の削除
    $(".start").hide();
  }
  /*
  フェードインロゴここまで
  */
  /*
  スクロールすると現れるメニュー
  */
  var topBtn = $('#hide-menu');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });
  /*
  スクロールすると現れるメニューここまで
  */
  /*
  スクロールすると現れるページトップ
  */
  var topButton = $('#page-top');
  topButton.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          topButton.fadeIn();
      } else {
          topButton.fadeOut();
      }
  });
  //スクロールしてトップ
  topButton.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500);
      return false;
  });
  /*
  スクロールすると現れるページトップここまで
  */
  /*
  フォーム未記入チェック
  */
  $("form").submit(function(){
    var name
    var mail
    var text
    if ($("#name").val()===""){
      //対象の兄弟要素のクラスredを表示
      $("#name").next(".red").show();
      name=false;
    }else {
      //記入があればクラスredを消す
      $("#name").next(".red").hide();
      name=true;
    }
    if ($("#mail").val()===""){
      //対象の兄弟要素のクラスredを表示
      $("#mail").next(".red").show();
      mail=false;
    }else {
      //記入があればクラスredを消す
      $("#mail").next(".red").hide();
      mail=true;
    }
    if ($("#text").val()===""){
      //対象の兄弟要素のクラスredを表示
      $("#text").next(".red").show();
      text=false;
    }else {
      //記入があればクラスredを消す
      $("#text").next(".red").hide();
      text=true;
    }
    if (name===false||mail===false||text===false) {
      return false;
    }
  });
  /*
  フォーム未記入チェックここまで
  */
})
