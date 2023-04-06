  document.addEventListener('DOMContentLoaded', function(){
    let btnoption = document.querySelector('.login');
    let option = document.querySelector('.signup');
    // console.log(btnoptions);
    let changed = false;

    const changesignup=()=>{
        option.style.backgroundColor="white";
        option.style.color = "black";
    }
    const changelogin=()=>{
      btnoption.style.backgroundColor="black";
      btnoption.style.color = "white";
  }

    btnoption.addEventListener('click',changelogin);
    option.addEventListener('click',changesignup);


    const images = ["./images/kyle-johnson.jpg", "./images/michael-krahn.jpg", "./images/eberhard-grossgasteiger.jpg", "./images/huper-by-joshua-b.jpg", "./images/huper-by-joshua-a.jpg", "./images/jordan-steranka.jpg",];
    let index = 1;

    const changeImage1 = () => {
    const imageContainer1 = document.querySelector("#turn1");
    imageContainer1.style.backgroundImage = `url(${images[index]})`;
    // increment index
    index++;
    if (index >= images.length) {
      index = 0;
    }
  }
  const changeImage3 = () => {
    const imageContainer3 = document.querySelector("#turn3");
    imageContainer3.style.backgroundImage = `url(${images[index]})`;
    index++;
    if (index >= images.length) {
      index = 0;
    }
  }
  const changeImage2 = () => {
    const imageContainer2 = document.querySelector("#turn2");
    imageContainer2.style.backgroundImage = `url(${images[index]})`;
    // increment index
    index++;
    if (index >= images.length) {
      index = 0;
    }
  }
  setInterval(() => {
    return changeImage1()
  }, 5000);
  setInterval(() => {
    return changeImage2()
  }, 10000);
  setInterval(() => {
    return changeImage3()
  }, 15000);

  const btnView = document.querySelectorAll('.btn-view01');
  btnView[0].style.backgroundColor = '#CDCCCC';
  btnView[1].style.backgroundColor='#4169E1';
  btnView[2].style.backgroundColor = '#CDCCCC';
  btnView[3].style.backgroundColor='#4169E1';
  console.log(btnView);
})