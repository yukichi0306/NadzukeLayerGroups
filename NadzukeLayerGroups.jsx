/* 
==============================================================================================
NadzukeLayerGroups
Last Update:2018/04/24
https://github.com/yukichi0306/
==============================================================================================
*/

//アクティブドキュメントのレイヤーセット
var lsObj = activeDocument.layerSets;

//ダイアログを表示=================================================================================
uDlg = new Window('dialog','NadukeLayerGroups',[0,0,440,280]);
uDlg.center();
uDlg.sText1 = uDlg.add("statictext",[0,20,440,20+24],"CSVから読み込んだ文字列をもとに、レイヤーグループの名前を変更します。");
uDlg.sText1.justify = "center";
uDlg.sText = uDlg.add("statictext",[66,76,66+54,76+24], "CSV ：");
uDlg.eText1 = uDlg.add("edittext",[128,76,128+200,76+24]);
uDlg.csvBtn = uDlg.add("button",[334,76,334+48,76+24], "file", {name: "csv"});
uDlg.sText = uDlg.add("statictext",[66,124,66+160,124+24], "レイヤーグループの名前のつけ方：");
uDlg.rBtn1 = uDlg.add("radiobutton",[234,124,234+120,124+24], "昇順 ↑ （下から上へ）");
uDlg.rBtn1.value = true;
uDlg.rBtn2 = uDlg.add("radiobutton",[234,154,234+120,154+24], "降順 ↓ （上から下へ）");
uDlg.cancelBtn = uDlg.add("button", [92,236,92+80,236+24], "キャンセル", {name: "cancel"});
uDlg.okBtn = uDlg.add("button",[268,236,268+80,236+24], "実行", { name:"ok"});

//CSVフォルダを選ぶ
uDlg.csvBtn.onClick = function ()
{
    var filename = File.openDialog("CSV")
    if(filename)
    {
    fileObj = new File(filename);
    csvname = fileObj.fsName;
    uDlg.eText1.text = csvname;
     }
}


//実行ボタンが押された時の処理
uDlg.okBtn.onClick = function ()
{
    var filename = uDlg.eText1.text;
    var fileObj = new File(filename);
    var flag1 = fileObj.exists;

    if(flag1 == true)
    {
        IdName();
        CreateLayerSet();
        Naming();
        uDlg.close();
        alert("Finish!");
    }
    else if(flag1 == false)
    {
        alert("CSVが正しく選ばれていません。");
     }

}

//キャンセルボタンを押す時の処理
uDlg.cancelBtn.onClick = function ()
{
    uDlg.close();
}

uDlg.show();
//==============================================================================================

//CSVのデータを配列に===============================================================================
function IdName()
{
IdArray = [];
filename = uDlg.eText1.text;
fileObj = new File(filename);
flag = fileObj.open("r");
if (flag == true)
{
    var text = fileObj.read();
    TempArray = text.split("\n");//"\n":改行
    fileObj.close();
    //配列から空文字を排除する
    for (var i=0; i<TempArray.length; ++i)
    {
        if (TempArray[i] !== "") IdArray.push(TempArray[i]);
        }
}
else
{
alert("ファイルが開けませんでした");
}
}

//レイヤーセットを名前の分だけ作成する==============================================================
function CreateLayerSet()
{
var shortageLs = IdArray.length - lsObj.length;
if(lsObj.length == 0)
{
    for(var i=0; i<IdArray.length; i++)
    {
        activeDocument.layerSets.add();
        LayerSetColor();
    }
}
//昇順を選択実行時、レイヤーグループの数が足りない場合
else if((0<lsObj.length<IdArray.length) && (uDlg.rBtn1.value == true))
{
    for(var i=0; i<shortageLs; i++)
    {
        activeDocument.layerSets.add();
        LayerSetColor();
    }
}
//降順を選択実行時、レイヤーグループの数が足りない場合
else if((0<lsObj.length<IdArray.length) && (uDlg.rBtn2.value == true))
{
    for(var i=0; i<shortageLs; i++)
    {
        activeDocument.layerSets.add();
        LayerSetColor();
        lsObj[0];
        Send2Back();
    }
}
}

//レイヤーセットの名前変更=========================================================================
function Naming()
{
    if(uDlg.rBtn1.value == true)
    {
        for(var i=0, j=lsObj.length-1; i<IdArray.length; i++, j--)
        {
            lsObj[j].name = IdArray[i];
            }
        }
    else if(uDlg.rBtn2.value == true)
    {
    for(var i=0; i<IdArray.length; i++)
    {
        lsObj[i].name = IdArray[i];
    }
}
}

//レイヤーセットカラー（紫）を設定 =============================================================
function LayerSetColor()
{
var idsetd = charIDToTypeID( "setd" );
    var desc23 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref6 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref6.putEnumerated( idLyr, idOrdn, idTrgt );
    desc23.putReference( idnull, ref6 );
    var idT = charIDToTypeID( "T   " );
        var desc24 = new ActionDescriptor();
        var idClr = charIDToTypeID( "Clr " );
        var idClr = charIDToTypeID( "Clr " );
        var idVlt = charIDToTypeID( "Vlt " );
        desc24.putEnumerated( idClr, idClr, idVlt );
    var idLyr = charIDToTypeID( "Lyr " );
    desc23.putObject( idT, idLyr, desc24 );
executeAction( idsetd, desc23, DialogModes.NO );
}

//レイヤーを最背面へ =========================================================================
function Send2Back()
{
var idmove = charIDToTypeID( "move" );
    var desc28 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
        var ref7 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idTrgt = charIDToTypeID( "Trgt" );
        ref7.putEnumerated( idLyr, idOrdn, idTrgt );
    desc28.putReference( idnull, ref7 );
    var idT = charIDToTypeID( "T   " );
        var ref8 = new ActionReference();
        var idLyr = charIDToTypeID( "Lyr " );
        var idOrdn = charIDToTypeID( "Ordn" );
        var idBack = charIDToTypeID( "Back" );
        ref8.putEnumerated( idLyr, idOrdn, idBack );
    desc28.putReference( idT, ref8 );
executeAction( idmove, desc28, DialogModes.NO );
}
