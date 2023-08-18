{
  /* <div id="mayur" class="test" style="">
  // HTML
</div>
const x = document.getElementById('mayur') // 
x.classList.add('test')
x.style = `background-color: "orange"; 
          align-items: "center"
          display: "flex";` */
}

// <div id="mayur" class="test" style="">
// document.getElementById('mayur') // single element
// document.getElementsByClassName('test') // x = [div, span, ]
// document.getElementsByTagName('div') // [div, div, div]
// document.querySelector('#mayur')
// document.querySelector('.test') // div -> returns only one, first ele.
// document.querySelectorAll('.test') // [div, div, div]
// document.querySelector('div')
// // for(let ele of x){
// //   ele.classList.remove('test')
// // }

// /**
//  * <div id="mayur"> <span id="mayu1">I am mayur</span>
//  * </div>
//  */
// const x = document.querySelector('#mayur')
// // x.innerHTML = "<span>I am mayur</span>"
// x.innerText = "Mayur"

// const x = document.createElement('div');
// x.innerHTML = 'Hello';
// x.classList.add('test');

// // .test

// const body = document.body;
// body.appendChild(x);
// console.log(x);

const btn = document.querySelector('#mayur');
btn.addEventListener('click', () => {
  let x = 'color: orange; background-color: black; font-size: 24px;';
  btn.style = x;

  setTimeout(() => {
    btn.style = '';
  }, 2000);
});
