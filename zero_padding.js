(function() {
    "use strict";

    //when we save
    kintone.events.on(['app.record.create.submit',
                      'app.record.edit.submit',
                      'app.record.index.edit.submit'], function(event) {

    var record= event.record;
    var bankcode1 = String(record['銀行コード'].value);
    var bankcode2 = String(record['支店コード'].value);

    var bankcode1_zero = ("0000" + bankcode1).slice(-4);
    var bankcode2_zero = ("000" + bankcode2).slice(-3);
    
    record['銀行コード'].value= bankcode1_zero;
    record['支店コード'].value= bankcode2_zero;

    
    return (event);

 });})();
