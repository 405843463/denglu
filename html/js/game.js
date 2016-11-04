/* -------------------------导航点击效果-------------------------- */
(function () {
  var items = $(".nav_item");
  $(items[2]).css({
    background: "#f5f5f5",
    borderTop: "7px solid #ff3366"
  })
  for (var i = 0; i < items.length; i++) {
    $(items[i]).on("click",function () {
      for (var j = 0; j < items.length; j++) {
        $(items[j]).css({
          borderTop: "",
          background:""
        })
      }
      $(this).css({
        background: "#f5f5f5",
        borderTop: "7px solid #ff3366"
      })
    })
  }
})();
/* -------------------------左边切换效果-------------------------- */
(function () {
  var h4 = $("h4");
  var a = $(".a");
  var h3 = $(".column-title");
  $(h4[0]).css({
    background: "#f5f5f5",
    borderLeft: "4px solid #ff3366"
  })
  for (var i = 0; i < h4.length; i++) {
    $(h4[i]).on("click",function () {
      for (var j = 0; j < h4.length; j++) {
        $(h4[j]).css({
          background: "",
          borderLeft: ""
        })
      }
      $(this).css({
        background: "#f5f5f5",
        borderLeft: "4px solid #ff3366"
      })
    })
  }
  $(h3[0]).text("最新上架")
  $(h3[1]).text("热门游戏")
  $(a[0]).on("click",function () {
    $(h3[0]).text("最新上架")
    $(h3[1]).text("热门游戏")
  })
  for (var i = 1; i < a.length; i++) {
    $(a[i]).on("click",function () {
      $(h3[0]).text($(this).text()+"-热门游戏")
      $(h3[1]).text($(this).text()+"-全部游戏")
    })
  }
})();
/* -------------------------最右边锚点-------------------------- */
(function () {
  var AnchorClick = function (obj) {
    var href = $(obj).attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({ scrollTop: pos }, 400);
  }
})();
/* ----------鼠标移入移出----------- */
(function () {
  var click = $("#click");
  var qrcode = $(".qrcode");
  var code_2d_box = $(".code_2d_box");
  var go_span1 = $(".go_span1");
  var go_span2 = $(".go_span2");
  var go1 = $(".go1");
  var go2 = $(".go2");
  $(qrcode).on("mouseover",function() {
    $(code_2d_box).css({
      right:"66px"
    })
  })
  $(qrcode).on("mouseout",function () {
    $(code_2d_box).css({
      right:"-139px"
    })
  })
  $(go_span1).css({display:"none"})
  $(go_span2).css({display:"none"})
  $(go1).on("mouseover",function () {
    $(go_span1).css({
      display:"block",
      background:"white"
    })
  });
  $(go1).on("mouseout",function () {
    $(go_span1).css({
      display:"none"
    })
  })
  $(go2).on("mouseover",function () {
    $(go_span2).css({
      display:"block",
      background:"white"
    })
  });
  $(go2).on("mouseout",function () {
    $(go_span2).css({
      display:"none"
    })
  })
})();
