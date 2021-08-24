/*global document */
(function() {
    var source = document.getElementById('main');

    source.innerHTML =  new NTCTable('../../data/ntc-sample-data.json', '../../data/tableHeadersArray.json')
})();
