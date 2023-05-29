const array = ["$B$u$i$ld", "$t$$h$e", "$N$e$x$t", "$E$$ra", "$$$o$f$", "$S$$of$t$wa$r$e", "$De$$ve$l$op$me$n$t"];

const string = array.join("").replace(/\$/g, "");

console.log(string);


//expectedOutput = BUILD THE NEXT ERA OF SOFTWARE DEVELOPMENT