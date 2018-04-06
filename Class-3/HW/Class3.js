var data = {
    "STUDENT1": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT2": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT3": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT4": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT5": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT6": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT7": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    },
    "STUDENT8": {
        "NAME": "Ashike",
        "ROLL": "123100",
        "PASSING_YEAR": "2017",
        "DEPARTMENT": "CSE",
        "UNIVERSITY": "RUET",
        "HOMEDISTRICT": "NARAYANGANJ",
        "MARRIED": "NO"
    }
}



class Student{
    Student(){
        var NAME,ROLL,PASSINGYEAR,DEPARTMENT,UNIVERSITY,HOMEDISTRICT;
    }
};

var Students = _.keys(data);
var noOfStudent = Students.length;


function ShowTable(){
    var Row = document.getElementById('tableRowNo').value;
    var column = document.getElementById('tableColumnNo').value;

    console.log(Row);
}

//var maxlength = data.length();

/*function SubmitData(){
   
    var student = new Student;
    student.NAME = document.getElementById('Name');
    student.HOMEDISTRICT = document.getElementById('HomeDistrict');
    student.DEPARTMENT = document.getElementById('Department');
    student.ROLL = document.getElementById('Roll');
    student.PASSINGYEAR = document.getElementById('PassingYear');
    student.UNIVERSITY = document.getElementById('University');
    noOfStudent++;
    Student_Data.push(student);
   
}*/












/*angular.module('Dynamic-Table-App')
       .controller('Dynamic-Table-controller',function($http){
         var data = $http.get('E:\Selise-School\Class-3\HW\table-data.json')
                         .then({});
       });

(function (angular){
    function constructor (){
        var vm = this;
        alert('ashdfoahd');
    }
    angular.module('Dynamic-Table-App').controller('dynamicTableAppController',constructor);
})(window.angular);*/
