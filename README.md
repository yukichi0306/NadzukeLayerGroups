# NadzukeLayerGroups

### 導入手順

1. NadzukeLayerGroups.jsxをダウンロード、または作成します。

2. \Program Files\Adobe\Adobe Photoshop（使用バージョン）\Presets\Script　に(１)のjsxファイルを追加します。

3. Photoshopを起動します。

4. ファイル -> スクリプト -> NadzukeLayerGroups



### 備考
・レイヤーグループの名前を、読み込んだCSVのファイルをもとに、名前を変更していくスクリプトです。  
・レイヤーグループが無い状態の場合、空のレイヤーグループを作成し名前を変更する処理を行います。  
・既にいくつかレイヤーグループがある場合は、足りない分のレイヤーグループを自動で追加します。
・追加されたレイヤーグループは、レイヤーパネルが紫色に設定されます。
・レイヤーグループのみ、CSVの情報を反映します。  
・１セル１項目１列でかき出されたCSVを前提に、設計しています。※1  
　そのため、CSVにはファイル名以外の情報を入れていると、その文字列もファイルの一部として生成されます。  
・CSVを読み込みとなっていますが、.txtでも可能です。※2   
・Photoshop CS5.5/CC2018で、動作確認済み。  
(上記以外のバージョンも問題ないと思いますが、保証は出来ません)


※1-左のように、２列以上では希望する結果が得られません。  
    右のように必ず１列でCSVを作成してください。  
![TIMimg02](https://github.com/yukichi0306/TemporaryImageMaker/blob/master/TIMimg02.png "参考画像２")  

※2-下図のように、一行一項目＜改行＞という形式であればデータとして使えます。  
![TIMimg03](https://github.com/yukichi0306/TemporaryImageMaker/blob/master/TIMimg03.png "参考画像３")  

### その他
不具合や要望などありましたらIssuesか、下記までお願いいたします。  
（要望は応えられない可能性が高いです。）  
<https://twitter.com/yukichi0306>
