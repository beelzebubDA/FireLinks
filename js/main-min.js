"use strict";$(document).ready(function(){$(".accordion__title").on("click",function(e){e.preventDefault();var t=$(this);t.hasClass("accordion-active")?t.prev("").removeClass("rotate"):($(".accordion__content").slideUp(400),$(".accordion__title").removeClass("accordion-active"),t.prev().addClass("rotate"),$(".acc__bg02").not(t.prev()).removeClass("rotate")),t.toggleClass("accordion-active"),t.next().slideToggle()});new Swiper(".mySwiper",{slidesPerView:2,spaceBetween:20,loop:!0,keyboard:{enabled:!0},autoplay:{delay:1500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1},650:{slidesPerView:2,spaceBetween:10}}}),new Swiper(".main__news__swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var e=document.querySelector(".footer__feedback-tel");new IMask(e,{mask:"+{7} (000) 000-00-00"});var t=document.querySelector(".dropdown");t.onclick=function(){t.classList.toggle("active")},$(".registration__man__btn").on("click",function(e){e.preventDefault(),$(".registration__man").toggleClass("active"),$(".registration__btns").toggleClass("active")}),$(".header__hamburger").on("click",function(e){e.preventDefault(),$(".header__hamburger").toggleClass("active"),$(".header__lists").toggleClass("active")});var a=document.querySelector(".header");window.addEventListener("scroll",function(){window.pageYOffset>150?a.classList.add("is-sticky"):a.classList.remove("is-sticky")})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0aGlzIiwidGhpcyIsImhhc0NsYXNzIiwicHJldiIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsImFkZENsYXNzIiwibm90IiwidG9nZ2xlQ2xhc3MiLCJuZXh0Iiwic2xpZGVUb2dnbGUiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsImtleWJvYXJkIiwiZW5hYmxlZCIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsInBhZ2luYXRpb24iLCJlbCIsImNsaWNrYWJsZSIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIjMyMCIsIjY1MCIsInBob25lSW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiSU1hc2siLCJtYXNrIiwiZHJvcGRvd24iLCJvbmNsaWNrIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiaGVhZGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhZ2VZT2Zmc2V0IiwiYWRkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUVBQSxFQUFFQyxVQUFVQyxNQUFNLFdBRWhCRixFQUFFLHFCQUFxQkcsR0FBRyxRQUFTLFNBQVVDLEdBQzNDQSxFQUFFQyxpQkFDRixJQUFJQyxFQUFRTixFQUFFTyxNQUNURCxFQUFNRSxTQUFTLG9CQU1sQkYsRUFBTUcsS0FBSyxJQUFJQyxZQUFZLFdBTDNCVixFQUFFLHVCQUF1QlcsUUFBUSxLQUNqQ1gsRUFBRSxxQkFBcUJVLFlBQVksb0JBQ25DSixFQUFNRyxPQUFPRyxTQUFTLFVBQ3RCWixFQUFFLGNBQWNhLElBQUlQLEVBQU1HLFFBQVFDLFlBQVksV0FJaERKLEVBQU1RLFlBQVksb0JBQ2xCUixFQUFNUyxPQUFPQyxnQkFLRixJQUFJQyxPQUFPLFlBQWEsQ0FDbkNDLGNBQWUsRUFDZkMsYUFBYyxHQUNkQyxNQUFNLEVBQ05DLFNBQVUsQ0FDUkMsU0FBUyxHQUVYQyxTQUFVLENBQ1JDLE1BQU8sS0FDUEMsc0JBQXNCLEdBRXhCQyxXQUFZLENBQ1ZDLEdBQUkscUJBQ0pDLFdBQVcsR0FFYkMsV0FBWSxDQUNWQyxPQUFRLHNCQUNSQyxPQUFRLHVCQUVWQyxZQUFhLENBQ1hDLElBQUssQ0FDSGYsY0FBZSxHQUVqQmdCLElBQUssQ0FDSGhCLGNBQWUsRUFDZkMsYUFBYyxPQU9ILElBQUlGLE9BQU8sc0JBQXVCLENBQ2pERyxNQUFNLEVBQ05TLFdBQVksQ0FDVkMsT0FBUSxzQkFDUkMsT0FBUSx5QkFwQ1osSUF5Q0lJLEVBQWFsQyxTQUFTbUMsY0FBYyx5QkFDeEIsSUFBSUMsTUFBTUYsRUFBWSxDQUNwQ0csS0FBTSx5QkFRUixJQUFJQyxFQUFXdEMsU0FBU21DLGNBQWMsYUFDdENHLEVBQVNDLFFBQVUsV0FDakJELEVBQVNFLFVBQVVDLE9BQU8sV0FLNUIxQyxFQUFFLDJCQUEyQkcsR0FBRyxRQUFTLFNBQVVDLEdBQ2pEQSxFQUFFQyxpQkFDRkwsRUFBRSxzQkFBc0JjLFlBQVksVUFDcENkLEVBQUUsdUJBQXVCYyxZQUFZLFlBRXZDZCxFQUFFLHNCQUFzQkcsR0FBRyxRQUFTLFNBQVVDLEdBQzVDQSxFQUFFQyxpQkFDRkwsRUFBRSxzQkFBc0JjLFlBQVksVUFDcENkLEVBQUUsa0JBQWtCYyxZQUFZLFlBRWxDLElBQUk2QixFQUFTMUMsU0FBU21DLGNBQWMsV0FFcENRLE9BQU9DLGlCQUFpQixTQUFVLFdBQ1pELE9BQU9FLFlBQ1AsSUFDbEJILEVBQU9GLFVBQVVNLElBSkgsYUFNZEosRUFBT0YsVUFBVU8sT0FOSCIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vQkVHSU4gQUNDT1JESU9OXHJcbiAgICAkKFwiLmFjY29yZGlvbl9fdGl0bGVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKCEkdGhpcy5oYXNDbGFzcyhcImFjY29yZGlvbi1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgJChcIi5hY2NvcmRpb25fX2NvbnRlbnRcIikuc2xpZGVVcCg0MDApO1xyXG4gICAgICAgICAgICAkKFwiLmFjY29yZGlvbl9fdGl0bGVcIikucmVtb3ZlQ2xhc3MoXCJhY2NvcmRpb24tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAkdGhpcy5wcmV2KCkuYWRkQ2xhc3MoXCJyb3RhdGVcIik7XHJcbiAgICAgICAgICAgICQoJy5hY2NfX2JnMDInKS5ub3QoJHRoaXMucHJldigpKS5yZW1vdmVDbGFzcyhcInJvdGF0ZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkdGhpcy5wcmV2KFwiXCIpLnJlbW92ZUNsYXNzKFwicm90YXRlXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJhY2NvcmRpb24tYWN0aXZlXCIpO1xyXG4gICAgICAgICR0aGlzLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcbiAgICAvL0VORCBBQ0NPUkRJT05cclxuXHJcbiAgICAvLyBzd2lwZXJcclxuICAgIGxldCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBrZXlib2FyZDoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICAgICAgZGVsYXk6IDE1MDAsXHJcbiAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICBuZXh0RWw6IFwiLnN3aXBlci1idXR0b24tbmV4dFwiLFxyXG4gICAgICAgICAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA2NTA6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtYWluTmV3c1N3aXBlciBcclxuXHJcbiAgICBsZXQgc3dpcGVyTmV3cyA9IG5ldyBTd2lwZXIoXCIubWFpbl9fbmV3c19fc3dpcGVyXCIsIHtcclxuICAgICAgICBsb29wOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICAgICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcclxuICAgICAgICAgICAgcHJldkVsOiBcIi5zd2lwZXItYnV0dG9uLXByZXZcIixcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gaW11c2tcclxuICAgIGxldCBwaG9uZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJfX2ZlZWRiYWNrLXRlbFwiKTtcclxuICAgIGNvbnN0IHBob25lTWFzayA9IG5ldyBJTWFzayhwaG9uZUlucHV0LCB7XHJcbiAgICAgICAgbWFzazogXCIrezd9ICgwMDApIDAwMC0wMC0wMFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZHJvcGRvd24gXHJcblxyXG4gICAgZnVuY3Rpb24gc2hvdyh2YWx1ZSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dC1ib3hcIikudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpO1xyXG4gICAgXHJcbiAgICBkcm9wZG93bi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYnVyZ2VycyBcclxuXHJcbiAgICAkKFwiLnJlZ2lzdHJhdGlvbl9fbWFuX19idG5cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiLnJlZ2lzdHJhdGlvbl9fbWFuXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIucmVnaXN0cmF0aW9uX19idG5zXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5oZWFkZXJfX2hhbWJ1cmdlclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIuaGVhZGVyX19oYW1idXJnZXJcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5oZWFkZXJfX2xpc3RzXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xyXG4gICAgY29uc3QgdG9nZ2xlQ2xhc3MgPSBcImlzLXN0aWNreVwiO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsID4gMTUwKSB7XHJcbiAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gLy8gINC00YDRg9Cz0L7QuSDRgdC/0L7RgdC+0LEg0LTQvtCx0LDQstC70Y/RgtGMINC80L7QtNGD0LvQuFxyXG4vLyAvLz0gbW9kdWxlL2J1cmdlclNjcmlwdC5qc1xyXG4vLyAvLz0gbW9kdWxlLy9saWJzL2J1cmdlci5qc1xyXG4iXX0=