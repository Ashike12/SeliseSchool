var data = [];

if(localStorage.getItem("Data")!==null){
    data = JSON.parse(localStorage.getItem("Data"));
}else {
    data = [
        {
            "Name": "ksadjfk",
            "Roll": "123421",
            "Department": "sadf",
            "Email": "sdhj.ds@gh.com"
        },
        {
            "Name": "ksafdsffdjfk",
            "Roll": "123421",
            "Department": "dsff",
            "Email": "nhgg.jgh@gmail.com"
        }
    ];
    localStorage.setItem("Data",JSON.stringify(data));
}


class TABLE{
    constructor(data){
        this.row = data.length;        
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
        var NoOfRow = TableData.length; 
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
        var NameOfCell = Object.keys(data[0]);        
        for(var i=1;i<RowLength;i++){
            var Cell = Table.rows.item(i).cells;
            var CellLength = Cell.length;
            var DisableButtonIfInvalidInputExist = document.getElementById(i-1);
            for(var j=0;j<CellLength-1;j++){
                var CellValue = Cell.item(j).innerHTML;
                if(CellValue==""){
                    ShowAlert(NameOfCell[j]+" can't be empty");
                    DisableButtonIfInvalidInputExist.disabled = true;
                    return;
                }
                else if(NameOfCell[j]=="Roll"){
                    if(!checkValidRoll(CellValue)){
                        DisableButtonIfInvalidInputExist.disabled = true;
                        return;
                    }
                }
                else if(NameOfCell[j]=="Email"){
                    if(!checkValidEmail(CellValue)){
                        DisableButtonIfInvalidInputExist.disabled = true;
                        return;
                    }
                }
            }
        }
        for(var i=1;i<RowLength;i++){
            var Cell = Table.rows.item(i).cells;
            var CellLength = Cell.length;
            var DisableButtonIfInvalidInputExist = document.getElementById(i-1);
            for(var j=0;j<CellLength-1;j++){
                var CellValue = Cell.item(j).innerHTML;
                var CellId = 'cell'+(i-1)+j;
                //console.log(CellId);
               // document.getElementById(CellId).textContent = CellValue;
                //console.log(CellValue);
                data[i-1][NameOfCell[j]] = CellValue;
            }
            DisableButtonIfInvalidInputExist.disabled = false;
        }
        localStorage.setItem("Data",JSON.stringify(data));
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
        if(document.getElementById(NameOfCell[i]).value==""){
            ShowAlert(NameOfCell[i]+" can't be empty");
            return;
        }
    }
    for(var i=0;i<NameOfCell.length;i++){
        var TableCellId = 'cell'+RowNo+i;
        var FormId = NameOfCell[i];
        var UserInput = document.getElementById(FormId).value
         if(FormId=="Roll"){
             if(checkValidRoll(UserInput)==false){
                 return;
             }             
         }
         else if(FormId=="Email"){
            if(!checkValidEmail(UserInput))
                 return;
        }
        
        document.getElementById(TableCellId).textContent = UserInput;
        
        data[RowNo][FormId] = UserInput;
        //console.log(document.getElementById(TableCellId).value);
        //console.log(document.getElementById(FormId).value);
        //console.log(TableCellId);
    }
    localStorage.setItem("Data",JSON.stringify(data));
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

function ShowAlert(message){
    alert(message);
}

function checkValidEmail(email){
    var InvalidMessage = 'Please enter valid email';
    if(email.search(' ')!=-1){
        ShowAlert(InvalidMessage);
        return;
    }
    if(email.search('@')>0){
        var DotAfterAt = email.search('@');
        for(;DotAfterAt<email.length-1;DotAfterAt++){
            if(email[DotAfterAt]=='.'){
                return true;
            }
        }
    }
    ShowAlert(InvalidMessage);
    return false;
}

function checkValidRoll(roll){
    var len = roll.length;
    for(var i=0;i<len;i++){
        if(roll[i]<'0' || roll[i]>'9'){
            alert("Roll must contain only digits");
            return false;
        }
    }
    return true;
}

function SaveTable(){
    var NoOfInputs = Object.keys(data[0]);
    var newData = {};
    
    for(var i=0;i<NoOfInputs.length;i++){
        //console.log(PropertyName);
        var UserInput = document.getElementById(NoOfInputs[i]).value;
        if(UserInput!=""){
            newData[NoOfInputs[i]] = document.getElementById(NoOfInputs[i]).value;
            if(NoOfInputs[i]=="Roll"){
                if(checkValidRoll(UserInput)==false){
                    return;
                }
            }
            else if(NoOfInputs[i]=="Email"){
                if(!checkValidEmail(UserInput))
                     return;
            }
        }else{
            ShowAlert(NoOfInputs[i]+" Can't be empty");
            return;
        }
        
    }
        data.push(newData);
        localStorage.setItem("Data",JSON.stringify(data));
        var NewTableObj = new  TABLE(data);
        var TableBodyId = document.getElementById('studentTableBody');
        var NewRowInfo = NewTableObj.CreateTableRows(NoOfInputs.length,NoOfInputs,data.length-1,data);
        TableBodyId.appendChild(NewRowInfo);
        var ShowForm = document.getElementById('form-view');
        ShowForm.style.display = "none";
        for(var i=0;i<NoOfInputs.length;i++){
            document.getElementById(NoOfInputs[i]).value = "";
        
    }
}

function ShowForm(SwitchButton,RowNo){
    var ShowForm = document.getElementById('form-view');
    ShowForm.style.display = "block";
    var ShowUpdateButton = document.getElementById('UpdatData');
    var ShowAddButton = document.getElementById('AddData');    
    if(SwitchButton=="Add"){
        ShowAddButton.style.display = "block";
        ShowUpdateButton.style.display = "none";
        var NameOfCell = Object.keys(data[0]);
        //console.log(NameOfCell);
        for(var i=0;i<NameOfCell.length;i++){
            console.log(document.getElementById(NameOfCell[i]).value);
            document.getElementById(NameOfCell[i]).value="";               
        }
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
    var NewTableHead = NewTableObj.CreateTableHeading(Object.keys(data[0]).length, Object.keys(data[0]));
    var NewTableBody = NewTableObj.CreateTableBody(data);
    NewTable.appendChild(NewTableHead);
    NewTable.appendChild(NewTableBody);

    var NewForm = new FORM;
    NewForm.CreateFormData('studentForm',Object.keys(data[0]));
}