(function() {
    "use strict";

    //when we save
    kintone.events.on(['app.record.create.submit',
                      'app.record.edit.submit',
                ], function(event) {

    var bankcode1 = record.銀行コード.value;
    var bankcode2 = record.支店コード.value;

    //zero padding bankcode 
    //(example) 123→0123, 77→0077, 1234→1234


    //zero padding bankcode
    //(example) 11→011, 7→007, 321→321

    
    
    //set result 
    //record.銀行コード.value = aaaaaa;
    //record.支店コード.value = bbbbbb;

    });
    
    return event;

})();
