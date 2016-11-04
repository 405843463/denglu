/* -------------------------导航点击效果-------------------------- */
(function () {
  var items = $(".nav_item");
  $(items[0]).css({
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
/* -------------------------装机必备-------------------------- */
(function () {
  var mustApps_bg = $("#mustApps_bg");
  var left = $(".left_list_wrap");
  var right = $(".right_list_wrap");
  var offLeft = mustApps_bg.offLeft;
  $(left).on("click",function () {
    $(mustApps_bg).css({left:0})
  })
  $(right).on("click",function () {
    $(mustApps_bg).css({left:"-1157px"})
  })
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
/* -------------------------热门推荐-------------------------- */
(function () {
  var current = $(".current");
  $(current[0]).css({
    borderBottom: "2px solid #ff3366"
  })
  for (var i = 0; i < current.length; i++) {
    $(current[i]).on("click",function () {
      for (var j = 0; j < current.length; j++) {
        $(current[j]).css({
          borderBottom: ""
        })
      }
      $(this).css({
        borderBottom: "2px solid #ff3366"
      })
    })
  }
})();
/* -------------------------选择APP-------------------------- */
(function () {
  var selector_btns = $(".selector_btn");
  $(selector_btns[0]).css({
    color: "#ff3366",
    borderBottom: "2px solid #ff3366"
  })
  for (var i = 0; i < selector_btns.length; i++) {
    $(selector_btns[i]).on("click",function () {
      for (var j = 0; j < selector_btns.length; j++) {
        $(selector_btns[j]).css({
          color: "#333",
          borderBottom: ""
        })
      }
      $(this).css({
        color: "#ff3366",
        borderBottom: "2px solid #ff3366"
      })
    })
  }
})();
