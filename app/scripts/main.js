document.addEventListener("DOMContentLoaded", (event) => {
  let a = 0;
  window.addEventListener("scroll", () => {
    const oTop = document.getElementsByClassName("counter")[0].offsetTop - window.innerHeight;
    if (a === 0 && window.scrollY > oTop) {
      const counter = document.querySelectorAll("[data-count]");
      counter.forEach(item => {
        $({countNum: 0}).animate(
          { countNum: item.dataset.count },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              item.textContent = parseInt(this.countNum, 0).toString();
            },
            complete: function () {
              item.textContent = this.countNum;
            }
          }
        );
      });
      a = 1;
    }
  }, {passive: true});

  setTimeout( () => {
    document.getElementById("loading").classList.add("animate__slideOutRight");
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, 800);
});
// progressbar
UIkit.util.ready(function () {
  
  var bar = document.getElementById('js-progressbar');
  var animate = setInterval(function () {

      bar.max -= 10;

      if (bar.max >= bar.value) {
          clearInterval(animate);
      }

  }, 1000);

});
