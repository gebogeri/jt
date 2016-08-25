Chart.pluginService.register({
    afterDraw: function (chart, easing) {
        if (chart.config.options.showPercentage || chart.config.options.showLabel) {
            var self = chart.config;
            var ctx = chart.chart.ctx;

            ctx.font = 'bold 10px "Gill Sans", "Gill Sans MT", Lato, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, "MS Pゴシック", "MS PGothic",sans-serif';
            ctx.textAlign = "center";
            ctx.fillStyle = "#fff";

            self.data.datasets.forEach(function (dataset, datasetIndex) {
                var total = 0, //total values to compute fraction
                    labelxy = [],
                    offset = Math.PI / 2, //start sector from top
                    radius,
                    centerx,
                    centery,
                    lastend = 0; //prev arc's end line: starting with 0

                for (var val of dataset.data) { total += val; }

                //TODO needs improvement
                var i = 0;
                var meta = dataset._meta[i];
                while(!meta) {
                    i++;
                    meta = dataset._meta[i];
                }

                var element;
                for(index = 0; index < meta.data.length; index++) {

                    element = meta.data[index];
                    radius = 0.9 * element._view.outerRadius - element._view.innerRadius;
                    centerx = element._model.x;
                    centery = element._model.y -7.5;
                    var thispart = dataset.data[index],
                        arcsector = Math.PI * (2 * thispart / total);
                    if (element.hasValue() && dataset.data[index] > 0) {
                      labelxy.push(lastend + arcsector / 2 + Math.PI + offset);
                    }
                    else {
                      labelxy.push(-1);
                    }
                    lastend += arcsector;
                }
                var lradius = radius * 3 / 4;
                for (var idx in labelxy) {
                    if (labelxy[idx] === -1) continue;
                    var langle = labelxy[idx],
                    dx = centerx + lradius * Math.cos(langle) * 6,
                    dy = centery + lradius * Math.sin(langle) * 6,
                    val = Math.round(dataset.data[idx] / total * 100);
                    if (chart.config.options.showPercentage)
                        ctx.fillText(val, dx, dy);
                    else
                        ctx.fillText(chart.config.data.labels[idx], dx, dy);
                }
                ctx.restore();
            });
        }
    }
});

$(function(){
    $win = $(window),
    $doc = $(document);

    // ドーナツグラフ描画
    var i = 0;
    while(i<$('canvas[id^="circle"]').length){
        if(circleData[i]){
            var len = circleData[i]['value'].length,
                bdr = Array.apply(null, new Array(len)).map(Number.prototype.valueOf,0);

            var options = {
                type: 'doughnut',
                data: {
                    labels: [],
                    datasets: [{
                        label: '',
                        data: circleData[i]['value'],
                        backgroundColor: circleData[i]['color'],
                        hoverBackgroundColor: circleData[i]['color'],
                        borderWidth: bdr,
                    }]
                },
                options: {
                    tooltips: {
                        enabled: false,
                    },
                    showPercentage: true,
                    cutoutPercentage: 71,
                }
            };
            var ctx = document.getElementById("circle"+(++i)).getContext("2d");
            chart = new Chart(ctx, options);
        }else{
            break;
        }
    }
});