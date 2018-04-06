var data = [
    {
        "Name": "ksadjfk",
        "Roll": "123421",
        "Department": "sadf"
    },
    {
        "Name": "ksafdsffdjfk",
        "Roll": "1234df21",
        "Department": "dsff"
    }
]
var row,column,tableHeader= Object.keys(data[0]);

console.log(tableHeader);
function checkValidRow_col(maximumData,dataProperty,row,column){
    console.log(row);console.log(column);
    if(maximumData<row && dataProperty<column){
        alert('Enter row no less or equal to '+maximumData+' \n and column no less or equal to '+dataProperty);
        return false;
    }
    else if(maximumData<row){
        alert('Enter row no less or equal to '+maximumData);
        return false;
    }
    else if(dataProperty<column){
        alert('Enter column no less or equal to '+dataProperty);
        return false;
    }
    return true;
}

function ShowTable(){

    row = document.getElementById('tableRowNo').value;
    column = document.getElementById('tableColumnNo').value;
    var maximumData = data.length;
    var dataProperty = tableHeader.length;
    //console.log(tableHeader);
    //console.log(dataProperty);console.log(maximumData);
    //if(!checkValidRow_col(maximumData,dataProperty,row,column)) return;   

    var tableView = document.getElementById('showTableView');
    var existingTable = document.getElementById('studentTable');
    //console.log(existingTable);
    if(existingTable!=null){
        tableView.removeChild(existingTable);
    }
   
    var table = document.createElement("table");
    table.setAttribute("id", "studentTable");
    var thead = document.createElement("thead");
    for(var i=0;i<column;i++){
        var th = document.createElement("th");
        th.textContent = tableHeader[i];
        thead.appendChild(th);
    }
    table.appendChild(thead);
    for(var i=0;i<row;i++){
        var tr = document.createElement('tr');
        for(var j=0;j<column;j++){
            var td = document.createElement('td');
           td.textContent = (data[i][tableHeader[j]]);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    tableView.appendChild(table);
}

