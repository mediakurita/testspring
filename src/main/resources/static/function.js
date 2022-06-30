function cancell(){
    document.getElementById('updateDialog').style.display='none';
}

function update(row){
    document.getElementById('update_id').value = row.cells[0].firstChild.data;
    document.getElementById('update_task').value = row.cells[1].firstChild.data;
    document.getElementById('update_deadline').value = row.cells[2].firstChild.data;
    document.getElementById('update_status').selectedIndex = (row.cells[3].firstChild.data=='完了')?1:0;

    var dialog = document.getElementById('updateDialog');
    dialog.style.left = ((window.innerWidth-500)/2)+'px';
    dialog.style.display = 'block';
}

function importList(tasklist){

}

function exportList(tasklist){
    const json = JSON.stringify(tasklist);

    var blob = new Blob([json], {"type":"application/json"});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "tasklist.json"; 
    link.click();
    link.remove();
     alert('JSONファイルの出力に成功しました');
}