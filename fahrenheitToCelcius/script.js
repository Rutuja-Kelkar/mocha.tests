// Problem to convert fahreheit to celcius
// [20, 140, 212, 41] => [-5, 60, 100, 5]
// (32°F − 32) × 5/9 = 0°C


function getCelcius(fahreheit)
{
    return fahreheit.map(value => (value-32)*5/9)
}








/* FUNCTIONS OR KEYWORDS LEARNT-

-map()
-Arrow function
-Initialising, assigning and using array
-mocha test framework boiler plate
-non mutating - non changing values
-

*/



/* METADATA-

File created date         21-03-2021
File created day          tuesday
File created start time   14:45:00
File created end time            
Resources                 https://www.youtube.com/watch?v=Rumf96j0cR0
                                 
Other observations 
                       
*/