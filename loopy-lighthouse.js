function printLighthouse () {
  var output;

  for (var i = 100; i < 201; i++) {

    if ((i % 3 === 0) && (i % 4 === 0)) output = ("LoopyLighthouse");
    else if (i % 3 === 0) output = ("Loopy");
    else if (i % 4 === 0) output = ("Lighthouse");
    else output = i;

    console.log(output);
  }

}

printLighthouse();