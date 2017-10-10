/**
 * Created by lvo on 09.10.2017.
 */

var config = liquidFillGaugeDefaultSettings();
config.waveHeight = 0.2;
config.waveAnimateTime = 3000;
var gauge1 = loadLiquidFillGauge("fillgauge1", 0, config);
function NewValue() {
    //if (Math.random() > .5) {
    return Math.round(Math.random() * 100);
    //} else {
    //  return (Math.random() * 100).toFixed(1);
    //}
}