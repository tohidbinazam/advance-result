function Result() {
  this.result = function (marks) {
    let gpa;
    let gread;

    if (marks >= 0 && marks < 33) {
      gpa = 0.0;
      gread = 'F';
    } else if (marks >= 33 && marks < 40) {
      gpa = 2.0;
      gread = 'D';
    } else if (marks >= 40 && marks < 50) {
      gpa = 3.0;
      gread = 'C';
    } else if (marks >= 50 && marks < 60) {
      gpa = 3.5;
      gread = 'B';
    } else if (marks >= 60 && marks < 70) {
      gpa = 4.0;
      gread = 'A-';
    } else if (marks >= 70 && marks < 80) {
      gpa = 4.0;
      gread = 'A';
    } else if (marks >= 80 && marks <= 100) {
      gpa = 5.0;
      gread = 'A+';
    } else {
      gpa = 'invalid';
      gread = 'invalid';
    }

    return {
      gpacal: gpa,
      greadcal: gread
    }
  }

  this.finalCgpa = function (bn, en, math, sciance, socialscince, rel) {
    let totalgpa =
      res.result(bn).gpacal +
      res.result(en).gpacal +
      res.result(math).gpacal +
      res.result(sciance).gpacal +
      res.result(socialscince).gpacal +
      res.result(rel).gpacal;

    let finalscgpa = totalgpa / 6;

    if (
      bn < 33 || en < 33 || math < 33 || sciance < 33 || socialscince < 33 ||
      rel < 33){
      finalscgpa = 0.0;
      finalgread = "You fail in this exam";
    }else if(finalscgpa >= 0.0 && finalscgpa > 1.0){
      finalscgpa;
      finalgread = "D";
    }else if(finalscgpa >= 1.0 && finalscgpa > 2.0){
      finalscgpa;
      finalgread = "C";
    }else if(finalscgpa >= 2.0 && finalscgpa > 3.0){
      finalscgpa;
      finalgread = "B";
    }else if(finalscgpa >= 3.0 && finalscgpa > 3.5){
      finalscgpa;
      finalgread = "A-";
    }else if(finalscgpa >= 3.5 && finalscgpa > 4.0){
      finalscgpa;
      finalgread = "A";
    }else if(finalscgpa >= 4.0 && finalscgpa >= 5.0){
      finalscgpa;
      finalgread = "A+";
    }

    return{
      rescgpa : finalscgpa.toFixed(2),
      resgread : finalgread,
    }
  };
}
