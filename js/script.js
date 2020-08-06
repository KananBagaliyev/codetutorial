// preload
document.querySelector("body").style.overflowY="hidden"
window.addEventListener("load",()=>{
  document.querySelector("body").style.overflowY="visible"
  const preload = document.querySelector(".preload")
  if(preload != null)
  {
    
    preload.classList.add("preload_finish")

  }
})

$(document).ready(function(){
  // remove preload
  const preload = document.querySelector(".preload")
  if(preload!=null){
    preload.remove();
  }

    // Mobile Navbar
    $(".menu_icon").click(function(){
      $(".mobile_navbar").slideToggle("fast")
      $(".menu_icon").toggleClass("closed")
      if($(".menu_icon").hasClass("closed")){
        $(this).children().removeClass("fas fa-bars")
        $(this).children().addClass("fas fa-times")
      }
      else{
        
        $(this).children().removeClass("fas fa-times")
        $(this).children().addClass("fas fa-bars")
      }
    })

    //dropdown menu button
    if($(window).width()>767){
      
      $(".sub_menu_holder").hover(function(e){
        e.preventDefault()
        $(this).find(".sub_menu").stop( true, true ).fadeToggle()
      })
      

    }
    else if($(window).width()<=767){
      $(".sub_menu_holder").click(function(e){
        e.preventDefault()
        $(this).find(".sub_menu").stop( true, true ).slideToggle()
        console.log($(this).find(".fa-plus").attr("class"))
        if($(this).find(".fa-plus").attr("class")=="fas fa-plus"){
          console.log(  $(this).find(".fa-plus"))
          $(this).find(".fa-plus").addClass("fa-minus")
          $(this).find(".fa-plus").removeClass("fa-plus")
        }
        else{
          $(this).find(".fa-minus").addClass("fa-plus")
          $(this).find(".fa-minus").removeClass("fa-minus")
        }
      })

    }
    // Sticky Navbar
    window.addEventListener("scroll",function(){
      var header = document.querySelector("header")
      header.classList.toggle("sticky",window.scrollY>0)
    })
    if(window.scrollY>0){
      var header = document.querySelector("header")
      header.classList.toggle("sticky")
    }

    // subject overflow handler
    let courses = document.querySelectorAll(".subject .course")
    let course_tools = document.querySelectorAll(".subject .course_tools")
    let course_headers = document.querySelectorAll(".subject .course_title")
    let course_contents = document.querySelectorAll(".subject .course_content")
    if(courses != null && course_tools != null && course_headers != null && course_contents != null)
    {
      for(let i = 0;i<courses.length;++i){
          if(course_tools[i].scrollWidth>courses[i].offsetWidth || course_tools[i].scrollHeight>courses[i].offsetHeight){
              course_tools[i].firstElementChild.innerHTML = course_tools[i].firstElementChild.innerHTML.substring(0,32).concat("...")
          }
          if(course_headers[i].scrollWidth>courses[i].offsetWidth || course_headers[i].scrollHeight>courses[i].offsetHeight){
            course_headers[i].firstElementChild.innerHTML = course_headers[i].firstElementChild.innerHTML.substring(0,32).concat("...")
          }
          if(course_contents[i].scrollWidth>courses[i].offsetWidth || course_contents[i].scrollHeight>courses[i].offsetHeight){
            course_contents[i].firstElementChild.innerHTML = course_contents[i].firstElementChild.innerHTML.substring(0,32).concat("...")
          }
      }

    }
    //Input custom label 
    if(document.querySelector(".form-group input") !=null)
    {
      
      if($(".form-group input").val().trim() !=""){
        $(".form-group input").next().css({"transform":"translateY(-35px)"})
      }

      $(".form-group input").focus(function(){
        $(this).next().css({"transform":"translateY(-35px)"})
      })

      $(".form-group input").focusout(function(){
        if($(this).val().trim()==""){
          $(this).next().css({"transform":"translateY(0px)"})
        }
      })
    }

    

    
});