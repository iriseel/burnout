$("textarea").keyup(function(e) {
  let str = e.target.value; 
    // . Matches any single character except line terminators
  let res = str.replace(/./g, "a");
  e.target.value = res;
});