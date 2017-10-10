var presets = window.chartColors;
var utils = Samples.utils;
var h = new Date().getHours();
var color = Chart.helpers.color;

var config1 = {
    type: 'line',
    data: {
        //labels: [h, '', h + 1, '', h + 2, '', h + 3, '', h + 4, '', h + 5, '', h + 6, '', h + 7, '', h + 8, '', h + 9, '', h + 10],
        datasets: [{
            label: ' t-Факт',
            fill: -1,
            data: [],
            backgroundColor: presets.blue,
            borderColor: presets.blue,
            borderWidth: 1
        },
        {
            label: ' t-План',
            data: [
                {x: new Date(), y: 11},
                {x: new Date(new Date().getTime() + 10000), y: 13},
                {x: new Date(new Date().getTime() + 20000), y: 28},
                {x: new Date(new Date().getTime() + 30000), y: 29},
                {x: new Date(new Date().getTime() + 40000), y: 49},
                {x: new Date(new Date().getTime() + 50000), y: 60},
                {x: new Date(new Date().getTime() + 60000), y: 74},
                {x: new Date(new Date().getTime() + 70000), y: 95},
                {x: new Date(new Date().getTime() + 80000), y: 95},
                {x: new Date(new Date().getTime() + 90000), y: 80}
            ],
            backgroundColor: utils.transparentize(presets.red),
            borderColor: presets.red,
            borderWidth: 1
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Температура котла'
        },scales: {
            xAxes: [{
                borderDashOffset: 10,
                display: false,
                type: 'time',
                time: {
                    displayFormats: 'HH:mm:ss',
                    unit: 'second'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 20
                }
            }]
        },
        legend: {
            display: false
        }
    }
};
var myChart1 = new Chart("step1", config1);

var config2 = {
    type: 'radar',
    data: {
        labels: ["Агрегат 1", "Агрегат 2", "Агрегат 3", "Агрегат 4", "Агрегат 5"],
        datasets: [{
            label: "Давление текущее",
            backgroundColor: utils.transparentize(presets.blue),
            borderColor: presets.blue,
            fill: -1,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ]
        }, {
            label: "Давление плановое",
            backgroundColor: utils.transparentize(presets.red),
            borderColor: presets.red,
            data: [
                64,
                82,
                45,
                61,
                75
            ]
        }]
    },
    options: {
        title: {
            display: false,
            text: 'Давление'
        },
        legend: {
            display: false,
            position: 'right'
        },
        scale: {
            ticks: {
                beginAtZero: true
            }
        }
    }
};
var myChart2 = new Chart("radar", config2);