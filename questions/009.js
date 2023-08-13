function convertmetrictoimperial(metricmeasurement) {
  let conversionfactor = 3.28084;
  let imperialunits = metricmeasurement * conversionfactor;
  return imperialunits;
}
let metricmeasurement = prompt('enter metricmeasurement in meter');
const IU = convertmetrictoimperial(metricmeasurement);
alert(IU);
