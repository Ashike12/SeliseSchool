var data = {
    "0": {
        "Name": "ksadjfk",
        "Roll": "123421",
        "Department": "sadf"
    },
    "1": {
        "Name": "ksafdsffdjfk",
        "Roll": "1234df21",
        "Department": "dsff"
    }
};


class TABLE{ 
    constructor(data){
        this.row = Object.keys(data).length;        
        this.TableHeadValue = Object.keys(data[0]);
        this.col = this.TableHeadValue.length;
    }

    CreateTable(ParentId,OnfocusoutFunction,TableId,TableClass){
        var Table = document.getElementById(ParentId);
        var CreateTable = document.createElement('Table');
        CreateTable.setAttribute("class", TableClass);
        CreateTable.setAttribute("onfocusout", OnfocusoutFunction);
        CreateTable.setAttribute("id", TableId);
        return Table;
    }

    CreateTableHeading(NoOfHeading,HeadingInfo){
        var CreateTableHeadings = document.createElement('thead');
        var CreateTableRow = document.createElement('tr');
        for(var i=0;i<NoOfHeading;i++){
            var CreateTableHeading = document.createElement('th');
            CreateTableHeading.textContent = HeadingInfo[i];
            CreateTableRow.appendChild(CreateTableHeading);
        }
        CreateTableHeadings.appendChild(CreateTableRow);
        /*var CreateTableHeadingDetail = document.createElement('th');
        CreateTableHeadingDetail.textContent = "Show Details";
        CreateTableHeadings.appendChild(CreateTableHeadingDetail);*/
        return CreateTableHeadings;
    }

    CreateTableRows(NoOfCell, CellInfo, RowNo, TableData){
        var CreateTableRow = document.createElement('tr');
        for(var i=0;i<NoOfCell;i++){
            var CreateCell = document.createElement('td');
            CreateCell.textContent = TableData[RowNo][CellInfo[i]];
            CreateCell.setAttribute("contenteditable", "true");
            var IdOfCurrentCell = "cell"+RowNo+i;
            console.log(IdOfCurrentCell);
            CreateCell.setAttribute("id",IdOfCurrentCell);
            CreateTableRow.appendChild(CreateCell);
        }
        var CreateCell = document.createElement('td');
        var CreateDetailsButton = document.createElement('button');
        CreateDetailsButton.setAttribute("onclick","ShowForm('',"+RowNo+")");
        CreateDetailsButton.setAttribute("id",RowNo);
        CreateDetailsButton.setAttribute("value", RowNo);
        CreateDetailsButton.textContent = "Details";
        CreateCell.appendChild(CreateDetailsButton);
        CreateTableRow.appendChild(CreateCell);
        return CreateTableRow;
    }

    CreateTableBody(TableData){
        var CreateBody = document.createElement('tbody');
        CreateBody.setAttribute("id","studentTableBody");
        var NoOfRow = this.row; 
        for(var i=0;i<NoOfRow;i++){
            var CellInfo = Object.keys(TableData[i]);
            var NoOfCell = CellInfo.length;
            var CreateRow = this.CreateTableRows(NoOfCell, CellInfo, i, TableData);
            CreateBody.appendChild(CreateRow);
        }
        return CreateBody;
    }

    GetTableInfo(TableId){
        
        var Table = document.getElementById(TableId);
        var RowLength = Table.rows.length;
        var NameOfCell = this.col;
        for(var i=1;i<RowLength;i++){
            var Cell = Table.rows.item(i).cells;
            var CellLength = Cell.length;
            for(var j=0;j<CellLength-1;j++){
                var CellValue = Cell.item(j).innerHTML;
                var CellId = 'cell'+(i-1)+j;
                //console.log(CellId);
               // document.getElementById(CellId).textContent = CellValue;
                //console.log(CellValue);
                data[i-1][NameOfCell[j]] = CellValue;
            }
        }
    }
}

class FORM{
    constructor(NoOfField){
        this.NoOfField = NoOfField;
    }

    CreateFormData(ParentId, LabelInfo){
        var Form = document.getElementById(ParentId);
        for(var i=0;i<LabelInfo.length;i++){
            var CreateLabel = document.createElement('label');
            var CreateInput = document.createElement('input');
            CreateLabel.textContent = LabelInfo[i];
            CreateInput.setAttribute("id", LabelInfo[i]);
            Form.appendChild(CreateLabel);
            Form.appendChild(CreateInput);
        }
        /*var Button = document.createElement('button');
        Button.setAttribute("onclick", "UpdateTable()");
        Button.textContent = "Update";
        
        Form.appendChild(document.createElement('br'));
        Form.appendChild(document.createElement('br'));
        Form.appendChild(Button);*/
    }
}

function UpdateTableOnFocusOut(){
    var NewTableObj = new TABLE(data);
    NewTableObj.GetTableInfo('studnetTable');

   // console.log("clicked");

   //var RowToBeUpadte =
}

function UpdateTable(RowNo){
    var NameOfCell = Object.keys(data[0]);
    for(var i=0;i<NameOfCell.length;i++){
        var TableCellId = 'cell'+RowNo+i;
        var FormId = NameOfCell[i];
        document.getElementById(TableCellId).textContent = document.getElementById(FormId).value;
        //console.log(document.getElementById(TableCellId).value);
        //console.log(document.getElementById(FormId).value);
        //console.log(TableCellId);
    }
    var ShowForm = document.getElementById('form-view');
    ShowForm.style.display = "none";
}

function SetFormData(RowNo){
    var CellInfo = Object.keys(data[0]);
    for(var i=0;i<CellInfo.length;i++){
        document.getElementById(CellInfo[i]).value = data[RowNo][CellInfo[i]];
    }
    var UpdateButton = document.getElementById('UpdatData');
    UpdateButton.setAttribute("onclick","UpdateTable("+RowNo+")");
}

function SaveTable(){
    var NoOfInputs = Object.keys(data[0]);
    var newData = {};
    var curDataLength = Object.keys(data);
    console.log(curDataLength);

    for(var i=0;i<NoOfInputs.length;i++){
        //console.log(PropertyName);
        newData[NoOfInputs[i]] = document.getElementById(NoOfInputs[i]).value;
        document.getElementById(NoOfInputs[i]).value = "";
    }
    data[curDataLength]=newData;
    var NewTableObj = new  TABLE(data);
    var TableBodyId = document.getElementById('studentTableBody');
    var NewRowInfo = NewTableObj.CreateTableRows(NoOfInputs.length,NoOfInputs,curDataLength-1,data);
    TableBodyId.appendChild(NewRowInfo);
    var ShowForm = document.getElementById('form-view');
    ShowForm.style.display = "none";
    console.log(data);

}

function ShowForm(SwitchButton,RowNo){
    var ShowForm = document.getElementById('form-view');
    ShowForm.style.display = "block";
    var ShowUpdateButton = document.getElementById('UpdatData');
    var ShowAddButton = document.getElementById('AddData');    
    if(SwitchButton=="Add"){
        ShowAddButton.style.display = "block";
        ShowUpdateButton.style.display = "none";
    }
    else{
        ShowAddButton.style.display = "none";
        ShowUpdateButton.style.display = "block";
        SetFormData(RowNo);
        //console.log(SwitchButton);
        //console.log(RowNo);
    }
}

function onInit(){
    var NewTableObj = new  TABLE(data);
    //var NewTable =  NewTableObj.CreateTable("tableSection", "UpdateTable()", "studentTable", "table-design");
    var NewTable = document.getElementById('studnetTable');
    var NewTableHead = NewTableObj.CreateTableHeading(NewTableObj.col, NewTableObj.TableHeadValue);
    var NewTableBody = NewTableObj.CreateTableBody(data);
    NewTable.appendChild(NewTableHead);
    NewTable.appendChild(NewTableBody);
    var NewForm = new FORM;
    NewForm.CreateFormData('studentForm',NewTableObj.TableHeadValue);
    //localStorage.setItem('username','Ashike');
    //alert(localStorage.getItem("username"));
    console.log(data);
}