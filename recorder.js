var recordFile = "recordings/record_" + util.getTimestamp() + ".csv";
var inputBuffer = [];
var dataToWrite = "";

function init() {
  script.log("dmx recorder module loaded");
  util.writeFile(recordFile, data, true);
}

function dmxEvent(values) {
  script.log(values.length);
  inputBuffer.push(values);
}

function record(param) {
}

function replay(param) {
}

