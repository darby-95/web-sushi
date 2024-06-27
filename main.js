/* 🌟 header 영역 : 어느정도 스크롤을 내리면 생기는 그림자 */

// let scrollHeader=function(){} : 아래와 같은 형식
let scrollHeader = () => {
    let header = document.querySelector("#header")
    // console.log(scrollY)
    // console.log(pageYOffset)

    // 조건문?참일때 실행문 : 거짓일때 실행문
    pageYOffset >= 50 ?
        header.classList.add("bg-header") :
        header.classList.remove("bg-header")
}
// window.addEventListener("scroll",function(){
//     scrollHeader()
// })
window.addEventListener("scroll", scrollHeader)

////////////////////////////////////////////////////////

// 🌟 배경 테마 변경
let themeButton = document.querySelector("#change-theme")
let iconTheme = "ri-sun-fill" //ri-moon-line : 달
let darkTheme = "dark-theme"

let getCurrentTheme = () => {
    // 누구.classList.contains(클래스 명) : 누구가 클래스명을 가지고 있는가? (treu/false) 
    // 삼항 연산자 = (조건)참일때 실행문 : 거짓일때 실행문
    let result = document.body.classList.contains(darkTheme) ? "dark":"light"
    return result
}
// 🌟 아이콘 변경 
let getCurrentIcon = () => {
    let result = themeButton.classList.contains(iconTheme) ? "ri-moon-line":"ri-sun-fill"
    return result
}

// 💬 웹 스토어에 값 세팅 ✍
// : localStorage.setItem("키값") : 웹 스토어에 값 입력
// : localStorage.getItem("키값") : 웹 스토어에 값을 가져올때
themeButton.addEventListener("click", () => {
    // : add(만들다), remove(지우다), toggole(토글)
    // : toggole키란? 실행과 반실행을 가진다. 
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme) // : 달과 토글
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})
let selectedTheme = localStorage.getItem("selected-theme")
let selectedIcon = localStorage.getItem("selected-icon")
console.log(selectedTheme)

// 💬 웹 스토어에 세팅된 값을 저장🌟하여
// 만약 다크 테마로 껐을때 다시 키면 ❗❗ 리셋(light-theme)이 아닌 다크 테마로 실행된다.
if(selectedTheme){
    if(selectedTheme =="dark"){
        document.body.classList.add(darkTheme);
    }else{
        document.body.classList.remove(darkTheme);
    }

    if(selectedIcon == "ri-moon-line"){
        themeButton.classList.add(iconTheme)
    }else{
        themeButton.classList.remove(iconTheme)
    }
}

// 🌟 모바일 크기의 Menu toggle button
let navToggle=document.querySelector("#nav_toggle")
let navMenu=document.querySelector("#nav_menu")
let navClose=document.querySelector("#nav_close")

// 💬 navToggle 또는 navClose을 클릭했을때 show-menu의 클래스가 생기거나 지워진다.
navToggle.addEventListener("click",function(){
    navMenu.classList.add("show-menu")
})
navClose.addEventListener("click",function(){
    navMenu.classList.remove("show-menu")
})

// 🌟 Scroll Up
let scrollup=()=>{
    // let scrollY=scrollY : pageYOffset 과 같은 값

    let scrollUp=document.querySelector("#scroll-up")
    let scrollY=pageYOffset>=100?
    scrollUp.classList.add("show-scroll")
    :scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll",scrollup)


// 🌟 전체화면 애니, 각영역으로 이동, 메뉴
//let scrollActive=function(){}
let scrollActive=()=>{
    //let scrollY=pageYOffset
    let scrollYY=scrollY
    //console.log(scrollYY)
    //let sections=document.querySelectorAll("section[id]")//section태그중 속성 id가 있는것
    let sections=document.querySelectorAll(".section[id]")

    sections.forEach((current)=>{
        let sectionHeight=current.offsetHeight;//각 section의 높이값
        let sectionTop=current.offsetTop - 80;//각 section의 전체문서에서의 top의 위치

        let sectionId=current.getAttribute("id")
        //console.log(sectionId)

        let sectionClass=document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
        console.log(sectionClass)

        if(scrollYY>sectionTop && scrollYY <= sectionTop + sectionHeight){
            console.log("실행")
            sectionClass.classList.add('action-link')
        }else{
            sectionClass.classList.remove('action-link')
        }

    })
}
//window.addEventListener("scroll",function(){scrollActive();})
window.addEventListener("scroll",scrollActive)


// 🌟 scrollreveal : 영역에 진입했을때 지정된 방향에서 나타나는 효과 
ScrollReveal().reveal('.home_data, .home_img, .about_data, .about_img, .popular_card, .recently_data, .recently_img, .home_leaf-1, .recently_leaf-1, .home_leaf-2, .about_leaf, .recently_leaf-2,.footer_description,.footer_content,.footer_info', {
    distance: '150%',
    /* ~에서 위/아래로 간다는 뜻.(top을 적으면 top에서 바닥으로, bottom을 적으면 bottom에서 위로) */
    origin: 'top', 
    duration: 2500,
    delay: 400, // 0.4초
    reset: true // 영역에서 나갔다가 다시 진입했을때 다시 실행된다. (=onEnterBack)
});

ScrollReveal().reveal('.home_data', {
    origin: 'bottom',
});

ScrollReveal().reveal('.about_data, .recently_data, .home_leaf-1, .recently_leaf-1', {
    origin: 'left',
});

ScrollReveal().reveal('.about_img, .recently_img, .home_leaf-2, .about_leaf, .recently_leaf-2', {
    origin: 'right',
});

ScrollReveal().reveal('.popular_card, .footer_card img', {
    origin: 'top',
    interval: 400, // stagger과 같은 효과 (0.4초를 간격으로 차례대로 나타난다.)
});