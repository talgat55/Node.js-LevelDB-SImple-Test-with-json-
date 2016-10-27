
var path = require('path');
var levelup = require('levelup');
  
var db = levelup(__dirname + '/dprk.db', { valueEncoding: 'json' })

db.put(  
    'dprk', 
    {
        name       : 'Kim Jong-un', 
        spouse     : 'Ri Sol-ju', 
        dob        : '8 January 1983', 
        occupation : 'Clown'
    }
)
db.get('dprk', function (err, value) {
    console.log('dprk:', value)
    db.close()
})