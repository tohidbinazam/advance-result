let res = new Result();

student.map((data) =>
  console.log(`


                        Marks       GPA         Gread

        Bangla =        ${data.bn}          ${res.result(data.bn).gpacal}         ${res.result(data.bn).greadcal}
        English =       ${data.en}          ${res.result(data.en).gpacal}         ${res.result(data.en).greadcal}
        Math =          ${data.math}          ${res.result(data.math).gpacal}         ${res.result(data.math).greadcal}
        Sciance =       ${data.scince}          ${res.result(data.scince).gpacal}         ${res.result(data.scince).greadcal}
        Social Scince = ${data.ss}          ${res.result(data.ss).gpacal}         ${res.result(data.ss).greadcal}
        Religion =      ${data.rel}          ${res.result(data.rel).gpacal}         ${res.result(data.rel).greadcal}
        ------------------------------------------------------
        Total CGPA = ${res.finalCgpa(data.bn, data.en, data.math, data.scince, data.ss, data.rel).rescgpa}
        Final result = ${res.finalCgpa(data.bn, data.en, data.math, data.scince, data.ss, data.rel).resgread}

`)
);
