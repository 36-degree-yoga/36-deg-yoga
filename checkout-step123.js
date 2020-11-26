   // 手機訂單明細收合↓↓
   $(".m_order_detail").hide();

   $(".m_openIt").on("click", function () {
     if ($(this).children().attr("src") == "svg/custom/plus_o_icon.svg") {
       $(this).children().attr("src", "svg/custom/minus_o_icon.svg");
       $(this).children("p").html("收起訂單明細");
     } else {
       $(this).children().attr("src", "svg/custom/plus_o_icon.svg");
       $(this).children("p").html("展開訂單明細");
     }
     $(this).parent().prev().slideToggle("500");
   });
   // 手機訂單明細收合↑↑


   $('.m_detail_button').on('click', function () {
    $('.order_history_detail_btn').toggleClass('change-margin-top');
})

     