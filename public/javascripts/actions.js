var startTime = new Date().getTime();
var currentTime = 0;
var intervalID;
$(function(){
    $('.checkout-wrap').on('click', function() {
        $('.maininfo').height('auto');
    });
    $('.checkout-bar>li').on('click', function() {
        if ($(this).hasClass('active')) {
            $('.shortinfo').html('Этап "' + $(this).text() + '" в процессе.');
        }
        if ($(this).hasClass('visited')) {
            if ($(this).hasClass('ok')) {
                $('.shortinfo').html('Этап "' + $(this).text() + '" завершен успешно.<br>Время начала 9:00, время окончания 11:30.<br>Время в работе 2:30');
            }
            if ($(this).hasClass('warning')) {
                $('.shortinfo').html('Этап "' + $(this).text() + '" завершен c предупрежением.<br>Время начала 10:15, время окончания 12:25.<br>Время в работе 2:10.<br>Во время выполнения температура вышла за пределы расчетной на 2 градуса.<br>Время инцедента 10:31');
            }
            if ($(this).hasClass('error')) {
                $('.shortinfo').html('Этап "' + $(this).text() + '" завершен c ошибкой.<br>Время начала 8:15, время окончания 18:00.<br>Время в работе 9:30.<br>Во время выполнения давление привысило критическое.<br>Время инцедента 11:42');
            }
        }
    });


    function changeStats() {
        currentTime+=1000;
        gauge1.update(parseInt(currentTime/123)%100);
        config1.data.datasets[0].data.push({x: new Date(startTime + currentTime), y: Math.floor(Math.random() * 80) + 10});
        myChart1.update();
        if (currentTime%2000) {
            config2.data.datasets[0].data = [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ];
            myChart2.update();
        }
        if (currentTime >= 90000) {
            clearInterval(intervalID);
        }

        $('.checkout-bar').each(function () {
            var active = $(this).children('li:not(.visited):first');
            active.addClass('active');
            if (!(currentTime%10000) && currentTime) {
                active.find('.after').css({width: '100%'});
                active.removeClass('active').addClass('visited').next().addClass('active');
            } else {
                active.children('.after').css({width: (currentTime%10000)/100  + '%'});
            }
        });
        
    }
    intervalID = window.setInterval(changeStats, 1000);
});