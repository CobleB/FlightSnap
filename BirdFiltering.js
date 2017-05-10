var outings = require('./eBirdOutings.js');
var birds = require('./BirdNames.js');
var fs = require('fs');

var exercise = {};

var startYear = 2004; //year to start tracking data (ends in 2004)

exercise.combine = function(months){

    var coSightings = [];

    function dateFilter(item){
        return months.includes(item.Month) && item.Year >= startYear;
    }
    var filteredSightings = outings.filter(dateFilter);

    birds.forEach(function(item){

        var tempData = {mainbird: item, cobirds: []};

        filteredSightings.forEach(function(item2){
            if(item2.Common.includes(item)){
                item2.Common.forEach(function(item3){
                    if(item3 !== item) tempData.cobirds.push(item3);
                });
            }
        });
       // if(tempData.cobirds.length>0) coSightings.push(tempData);
        coSightings.push(tempData);
    });

    return coSightings;

};

//We originally sorted by season:
// var winter = exercise.combine([12,1,2]);
// var spring = exercise.combine([3,4,5]);
// var summer = exercise.combine([6,7,8]);
// var fall = exercise.combine([9,10,11]);
// var all = exercise.combine([1,2,3,4,5,6,7,8,9,10,11,12]);

var Jan = exercise.combine([1]);
var Feb = exercise.combine([2]);
var Mar = exercise.combine([3]);
var Apr = exercise.combine([4]);
var May = exercise.combine([5]);
var Jun = exercise.combine([6]);
var Jul = exercise.combine([7]);
var Aug = exercise.combine([8]);
var Sep = exercise.combine([9]);
var Oct = exercise.combine([10]);
var Nov = exercise.combine([11]);
var Dec = exercise.combine([12]);

/*-----------------------------------------------------------------------

Writing all of the output to javascript files:
*/
// var jsonAll = JSON.stringify(all);
// var jsonWinter = JSON.stringify(winter);
// var jsonSpring = JSON.stringify(spring);
// var jsonSummer = JSON.stringify(summer);
// var jsonFall = JSON.stringify(fall);

// fs.writeFile('CompleteData.json', jsonAll);
// fs.writeFile('WinterData.json', jsonWinter);
// fs.writeFile('SpringData.json', jsonSpring);
// fs.writeFile('SummerData.json', jsonSummer);
// fs.writeFile('FallData.json', jsonFall);

var jsonJan = JSON.stringify(Jan);
var jsonFeb = JSON.stringify(Feb);
var jsonMar = JSON.stringify(Mar);
var jsonApr = JSON.stringify(Apr);
var jsonMay = JSON.stringify(May);
var jsonJun = JSON.stringify(Jun);
var jsonJul = JSON.stringify(Jul);
var jsonAug = JSON.stringify(Aug);
var jsonSep = JSON.stringify(Sep);
var jsonOct = JSON.stringify(Oct);
var jsonNov = JSON.stringify(Nov);
var jsonDec = JSON.stringify(Dec);

fs.writeFile('all_Jan04Data.json', jsonJan);
fs.writeFile('all_Feb04Data.json', jsonFeb);
fs.writeFile('all_Mar04Data.json', jsonMar);
fs.writeFile('all_Apr04Data.json', jsonApr);
fs.writeFile('all_May04Data.json', jsonMay);
fs.writeFile('all_Jun04Data.json', jsonJun);
fs.writeFile('all_Jul04Data.json', jsonJul);
fs.writeFile('all_Aug04Data.json', jsonAug);
fs.writeFile('all_Sep04Data.json', jsonSep);
fs.writeFile('all_Oct04Data.json', jsonOct);
fs.writeFile('all_Nov04Data.json', jsonNov);
fs.writeFile('all_Dec04Data.json', jsonDec);
