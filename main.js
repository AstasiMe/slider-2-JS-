$(document).ready(function() {
    let position = 0;
    let i = 0;

    const sliderToShow = 1;
    const sliderToScroll = 1;
    
    const container = $('.slider-container');
    const track = $('.slider-track');
    const item = $('.slider-item');
    let elemCount = $('.slider-track > div').length;
    const btnNext = $('.btn-next');
    const btnPrev = $('.btn-prev');

    const itemWidth = container.width() / sliderToShow;
    const movePosition = sliderToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function() {
        i--;
        if (i > 0){
            position += movePosition;
            setPosition();
        } else {
            i = elemCount; 
            position = -(itemWidth * (elemCount-1));
            setPosition();
        }
    });

    btnNext.click(function() {
        i++;
        if (i <= (elemCount-1)){
            position -= movePosition;
            setPosition();
        } else {
            i = 0; 
            position = 0;
            setPosition();
        }
    });

    const setPosition = () => {
        track.css({
            transform: `translateX(${position}px)`
        });
    };
  
 
});