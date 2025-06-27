var log = {
    info: function(info){
        console.log ('Info: ' + info);
    },
    warning:function(warning) {
        console.log('WarningP ' + warning);
    },
    error:function(error) {
        console.log('Error: '+ error);
    }
};
module.exports = log
module.exports = function(msg) {
    console.log(msg);
}
