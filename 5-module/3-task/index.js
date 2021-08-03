function initCarousel() {

  let position = 0;
  const slidesToShow = 1;
  const slidesToScroll = 1;
  const container = document.querySelector('.carousel');
  const track = document.querySelector('.carousel__inner');
  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');
  const items = document.querySelectorAll('.carousel__slide');
  const itemsCount = items.length;
  let visible = true;

  const itemWidth = track.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => { 
    item.style.minWidth = `${itemWidth}px`;
  });
  
  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
      
    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    if(position === 0) {
      btnPrev.style.display = 'none';
      visible = false;
    } else {
      btnPrev.style.display = '';
      visible = true;
    }

    if(position <= -(itemsCount - slidesToShow) * itemWidth) {
      btnNext.style.display = 'none';
      visible = false;
    } else {
      btnNext.style.display = '';
      visible = true;
    }
  };
  checkBtns();
};
}