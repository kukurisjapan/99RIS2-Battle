// ブロック（数字など）
// 縦に0～12のブロック単位（12は壁）、横に0～7のブロック単位（0と7は壁）
// ブロック単位は7*7＝49のピースからなる
block = [
        //ブロック0
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],        
        ],
        //ブロック1
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ],
        //ブロック2
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],     
        ],
        //ブロック3
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック4
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック5
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック6
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック7
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック8
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック9
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック*(10)
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ],
        //ブロック=(11)
        [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],    
        ]   
    ];
        
    //ブロックの色
    biro = ['#FF0000', '#FF69B4', '#FFA500', '#FFFF00', '#DDA0DD', '#7CFC00', '#00FF7F', '#00FFFF', '#00BFFF', '#DEB887', '#FFFAFA', '#FFFAFA'];

//画像を配列に格納する
    var img = new Array();
           
    img[0] = new Image();    img[0].src = "image/0.jpg";
    img[1] = new Image();    img[1].src = "image/1.jpg";
    img[2] = new Image();    img[2].src=  "image/2.jpg";
    img[3] = new Image();    img[3].src = "image/3.jpg";
    img[4] = new Image();    img[4].src=  "image/4.jpg";
    img[5] = new Image();    img[5].src = "image/5.jpg";
    img[6] = new Image();    img[6].src = "image/6.jpg";
    img[7] = new Image();    img[7].src=  "image/7.jpg";
    img[8] = new Image();    img[8].src = "image/8.jpg";
    img[9] = new Image();    img[9].src=  "image/9.jpg";
    img[10] = new Image();   img[10].src=  "image/10.jpg";
    img[11] = new Image();   img[11].src = "image/11.jpg";
    img[12] = new Image();   img[12].src=  "image/12.jpg";
    img[13] = new Image();   img[13].src = "image/13.jpg";
    img[14] = new Image();   img[14].src=  "image/14.jpg";
    img[15] = new Image();   img[15].src = "image/15.jpg";
    img[16] = new Image();   img[16].src = "image/16.jpg";
    img[17] = new Image();   img[17].src=  "image/17.jpg";
    img[18] = new Image();   img[18].src = "image/18.jpg";
    img[19] = new Image();   img[19].src=  "image/19.jpg";
    img[20] = new Image();   img[20].src = "image/20.jpg";
    img[21] = new Image();   img[21].src = "image/21.jpg";
    img[22] = new Image();   img[22].src=  "image/22.jpg";
    img[23] = new Image();   img[23].src = "image/23.jpg";
    img[24] = new Image();   img[24].src=  "image/24.jpg";
    img[25] = new Image();   img[25].src = "image/25.jpg";
    img[26] = new Image();   img[26].src = "image/26.jpg";
    img[27] = new Image();   img[27].src=  "image/27.jpg";
    img[28] = new Image();   img[28].src = "image/28.jpg";
    img[29] = new Image();   img[29].src=  "image/29.jpg";
    img[30] = new Image();   img[30].src=  "image/30.jpg";
    img[31] = new Image();   img[31].src = "image/31.jpg";
    img[32] = new Image();   img[32].src=  "image/32.jpg";
    img[33] = new Image();   img[33].src = "image/33.jpg";
    img[34] = new Image();   img[34].src=  "image/34.jpg";
    img[35] = new Image();   img[35].src = "image/35.jpg";
    img[36] = new Image();   img[36].src = "image/36.jpg";
    img[37] = new Image();   img[37].src=  "image/37.jpg";
    img[38] = new Image();   img[38].src = "image/38.jpg";
    img[39] = new Image();   img[39].src=  "image/39.jpg"; 
    img[40] = new Image();   img[40].src = "image/40.jpg";
    img[41] = new Image();   img[41].src = "image/41.jpg";
    img[42] = new Image();   img[42].src=  "image/42.jpg";
    img[43] = new Image();   img[43].src = "image/43.jpg";
    img[44] = new Image();   img[44].src=  "image/44.jpg";
    img[45] = new Image();   img[45].src = "image/45.jpg";
    img[46] = new Image();   img[46].src = "image/46.jpg";
    img[47] = new Image();   img[47].src=  "image/47.jpg";
    img[48] = new Image();   img[48].src = "image/48.jpg";
    img[49] = new Image();   img[49].src=  "image/49.jpg";
    img[50] = new Image();   img[50].src=  "image/50.jpg";
    img[51] = new Image();   img[51].src = "image/51.jpg";
    img[52] = new Image();   img[52].src=  "image/52.jpg";
    img[53] = new Image();   img[53].src = "image/53.jpg";
    img[54] = new Image();   img[54].src=  "image/54.jpg";
    img[55] = new Image();   img[55].src = "image/55.jpg";
    img[56] = new Image();   img[56].src = "image/56.jpg";
    img[57] = new Image();   img[57].src=  "image/57.jpg";
    img[58] = new Image();   img[58].src = "image/58.jpg";
    img[59] = new Image();   img[59].src=  "image/59.jpg";
    img[60] = new Image();   img[60].src = "image/60.jpg";
    img[61] = new Image();   img[61].src = "image/61.jpg";
    img[62] = new Image();   img[62].src=  "image/62.jpg";
    img[63] = new Image();   img[63].src = "image/63.jpg";
    img[64] = new Image();   img[64].src=  "image/64.jpg";
    img[65] = new Image();   img[65].src = "image/65.jpg";
    img[66] = new Image();   img[66].src = "image/66.jpg";
    img[67] = new Image();   img[67].src=  "image/67.jpg";
    img[68] = new Image();   img[68].src = "image/68.jpg";
    img[69] = new Image();   img[69].src=  "image/69.jpg";
    img[70] = new Image();   img[70].src=  "image/70.jpg";
    img[71] = new Image();   img[71].src = "image/71.jpg";
    img[72] = new Image();   img[72].src=  "image/72.jpg";
    img[73] = new Image();   img[73].src = "image/73.jpg";
    img[74] = new Image();   img[74].src=  "image/74.jpg";
    img[75] = new Image();   img[75].src = "image/75.jpg";
    img[76] = new Image();   img[76].src = "image/76.jpg";
    img[77] = new Image();   img[77].src=  "image/77.jpg";
    img[78] = new Image();   img[78].src = "image/78.jpg";
    img[79] = new Image();   img[79].src=  "image/79.jpg"; 
    img[80] = new Image();   img[80].src = "image/80.jpg";
    img[81] = new Image();   img[81].src = "image/81.jpg";
    img[82] = new Image();   img[82].src=  "image/82.jpg";
    img[83] = new Image();   img[83].src = "image/83.jpg";
    img[84] = new Image();   img[84].src=  "image/84.jpg";
    img[85] = new Image();   img[85].src = "image/85.jpg";
    img[86] = new Image();   img[86].src = "image/86.jpg";
    img[87] = new Image();   img[87].src=  "image/87.jpg";
    img[88] = new Image();   img[88].src = "image/88.jpg";
    img[89] = new Image();   img[89].src=  "image/89.jpg";
    img[90] = new Image();   img[90].src=  "image/90.jpg";
    img[91] = new Image();   img[91].src = "image/91.jpg";
    img[92] = new Image();   img[92].src=  "image/92.jpg";
    img[93] = new Image();   img[93].src = "image/93.jpg";
    img[94] = new Image();   img[94].src=  "image/94.jpg";
    img[95] = new Image();   img[95].src = "image/95.jpg";
    img[96] = new Image();   img[96].src = "image/96.jpg";
    img[97] = new Image();   img[97].src=  "image/97.jpg";
    img[98] = new Image();   img[98].src = "image/98.jpg";
    img[99] = new Image();   img[99].src=  "image/99.jpg";      
    //画像切り替え関数
    function changeIMG(){
        //画像番号を進める
        if (cnt == 99)
          { cnt=0; }
          else
          { cnt++; }
        //画像を切り替える
          document.getElementById("gazo").src=img[cnt].src;
    }    

    // 次の数字
    function tsugiwotsukuru() {
        // 次の数字を作る
        btsugimoto = Math.floor(Math.random() * 324)
        if ((btsugimoto >= 0)&&(btsugimoto <=30)) {
            btsugi = 0;
        }
        if ((btsugimoto >= 31 )&&(btsugimoto <= 69 )) {
            btsugi = 1;
        }
        if ((btsugimoto >= 70 )&&(btsugimoto <= 112)) {
            btsugi = 2;
        }
        if ((btsugimoto >= 113)&&(btsugimoto <= 143)) {
            btsugi = 3;
        }
        if ((btsugimoto >= 144)&&(btsugimoto <= 182)) {
            btsugi = 4;
        }
        if ((btsugimoto >= 183)&&(btsugimoto <= 213)) {
            btsugi = 5;
        }
        if ((btsugimoto >= 214)&&(btsugimoto <= 246)) {
            btsugi = 6;
        }
        if ((btsugimoto >= 247)&&(btsugimoto <= 270)) {
            btsugi = 7;
        }
        if ((btsugimoto >= 271)&&(btsugimoto <= 301)) {
            btsugi = 8;
        }
        if ((btsugimoto >= 302)&&(btsugimoto <= 323)) {
            btsugi = 9;
        }
        // 次の数字を表示するためのキャンバスを取得
        tsugigamen = document.getElementById('tsugi');
        ct = tsugigamen.getContext('2d');
        // 表示する前に消す
        ct.clearRect(0, 0, 34, 34);
        // そこに描画する
        kaku(ct, 0, 0, btsugi);
    }
    
    // 動かせるかを確認
    // bx,byはブロックの左上のピースの座標
    function kakunin(bx, by, shurui) {
        p = block[shurui];     
        // ブロックの種類は0～9、10(*)、11(=)
                // ブロックを描画する位置が空欄かどうかを調べる
                // Xが範囲外のところには動かせない
                if ((bx < 7) || (bx > 42)) {
                    return false;
                }
                // Yが範囲外のところには動かせない
                if ((by < 0) || (by > 77)) {
                    return false;
                }
                // 空欄ではない場合は動かせない(無くてもよいが…)
                if (jyoutai[by][bx] != 100) {
                    return false;
                }
                // 下移動ブロックの、次のブロックの左上ピースが壁だと動かせない
                if (jyoutai[by + 6][bx] == 99){
                    return false;
                }
                // 横移動ブロックの、左上ピースが壁だと動かせない
                if (jyoutai[by][bx] == 99){
                    return false;
                }
                // 種類が*か＝で、ブロックが下に着いていたら動かせない
                if (((ishurui == 10)||(ishurui == 11))&&((jyoutai[by + 7][bx + 7] == 99)||(jyoutai[by + 7][bx - 7] == 99))){
                    return false;
                }
                // 左から２ブロック目なら『*』、４ブロック目なら『＝』
                if ((jyoutai[by + 7][bx] == 99)&&(ix == 14)){
                    ishurui = 10;
                }
                if ((jyoutai[by + 7][bx] == 99)&&(ix == 28)){
                    ishurui = 11;
                }
                return true;
    }
    // 一気に落とすときの確認
    function fallkakunin(bx, by, shurui) {
        p = block[shurui];     
                // 下移動ブロックの、次の次のブロックの左上ピースが壁だと動かさない
                if (jyoutai[by + 7][bx] == 99){
                    return false;
                }
                return true;                        
    }


    // 下移動（これを自動で繰り返す）
    function shitaidou() {
        // 下に移動する
        // 描く先のCanvasを取得
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 現在の座標と向きを保存　ix,iyはブロックの左上のピースの座標
        maenoix = ix;
        maenoiy = iy;
        // 消す
        kesu(cg, ix, iy, ishurui);
        // 移動(ピース単位で細かく落下)
        iy = iy + 1;
        // 移動できるかどうかを確認する
        kekka = kakunin(ix, iy, ishurui);
        if (kekka) {
            // 移動できる
            // 新しい位置に描く
            kaku(cg, ix, iy, ishurui);
            // 音を出さない（出すなら//を取る）
            // document.getElementById('ochiru').currentTime = 0;            
            // document.getElementById('ochiru').play();
        } 
        if (!kekka) {
            // 移動できない
            // 移動前の場所に戻す
            ix = maenoix;
            iy = maenoiy;
            // 新しい位置に描く
            kaku(cg, ix, iy, ishurui);
            // 着地音を出さない（出すなら//を取る）
            // document.getElementById('don').currentTime = 0;
            // document.getElementById('don').play();
            // 着地した
            // 着地したブロックのピース設定　および　数値設定
            // ブロックの左端一列のピースを壁99に、右端を種類の数値にする
            for (h = 0; h < 7; h++){
            jyoutai[iy + h][ix] = 99;
            }
            // どのパターンの数字ブロックか
            p = block[ishurui];
            for (n = 0; n < 7; n++) {
               for (m = 0; m < 7; m++) {
                    // 描いている数値を『1』のピースに割り当てる
                    if (p[n][m] == 1) {
                        jyoutai[iy + n][ix + m] = ishurui;
                    }
                }
            }
        }
        if (!kekka) {
            // 移動できない
            // ライン消しと得点計算をする
            tokutenkeisan();
        }
        if (!kekka) {
            // 移動できない
            // 次のブロックとして設定したものが落ちてくるようにする
            ix = (Math.floor(Math.random() * 6) + 1 )*7;
            iy = tenjyou;
            ishurui = btsugi;
            kaku(cg, ix, iy, ishurui);
            // そこに置けるかを判定
            kekka = kakunin(ix, iy, ishurui);
            if (!kekka) {
                // 重なっているのでゲームオーバー
                // 音を出す
                document.getElementById('gameover').currentTime = 0;
                document.getElementById('gameover').play();
                // 上壁をつくる
                owari();
                // 実行中であることを止める
                jikkou = false;
                clearTimeout(timer1);
                clearInterval(timer2);                                         
            }
            // さらに次のブロックを設定
            tsugiwotsukuru();
        }
        // 時間を少しずつ速くする
        jikan = jikan - 2;
        if (jikan < 99) {
            // すごく速くなったら元に戻す
            jikan = 990;
        }
    }

    // 一気に落下
    function fall() {
        tyakuti = 1;
        // 着地寸前まで一気に移動する
        do{
        // 描く先のCanvasを取得
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 現在の座標と向きを保存　ix,iyはブロックの左上のピースの座標
        maenoix = ix;
        maenoiy = iy;
        // 消す
        kesu(cg, ix, iy, ishurui);
        // 移動(ピース単位で細かく落下)
        iy = iy + 1;
        // 移動できるかどうかを確認する
        kekka = fallkakunin(ix, iy, ishurui);
        if (kekka) {
            // 移動できる
            // 新しい位置に描く
            kaku(cg, ix, iy, ishurui);
            // 音を出さない
        } 
        if (!kekka) {
            // 移動しない
            // 移動前の場所に戻す
            ix = maenoix;
            iy = maenoiy;
            // 新しい位置に描く
            kaku(cg, ix, iy, ishurui);
            //　着地寸前
            tyakuti = 0;
        }
        }while (tyakuti != 0);
    }

    // 数字を動かす
    function ugokasu(e) {
        // ［→］キーが押されたかどうか
        if (e.keyCode == 39) {
           // 右に移動 
           moveright();
        }
        // ［←］キーが押されたかどうか
        if (e.keyCode == 37) {
           // 左に移動
           moveleft();  
        }
         // 少しずつ下移動
        // ［Shift］キーが押されたときは下に、移動させる
        if (e.keyCode == 16) {
            shitaidou();
        }               
        // 一気に下移動
        // ［↓］キーが押されたときは下に、着地寸前まで一気に移動させる
        if (e.keyCode == 40) {
            fall();
        }        
        //  ごみ移動
        // ［↑］キーが押されたときはごみ箱に入れる
        if ((e.keyCode == 38) && (gomijyoutai[0][0] == 100) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)){
            gomiidou();
        }
        // ごみ箱がいっぱいのときはリユース(数字キーを押したらその数字にしてリサイクル)
        if ((e.keyCode == 38) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 99;
            gomireuse();
        }
        if (((e.keyCode == 49)||(e.keyCode == 97)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 1;
            gomireuse();
        }        
        if (((e.keyCode == 50)||(e.keyCode == 98)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 2;
            gomireuse();
        } 
        if (((e.keyCode == 51)||(e.keyCode == 99)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 3;
            gomireuse();
        } 
        if (((e.keyCode == 52)||(e.keyCode == 100)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 4;
            gomireuse();
        } 
        if (((e.keyCode == 53)||(e.keyCode == 101)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 5;
            gomireuse();
        } 
        if (((e.keyCode == 54)||(e.keyCode == 102)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 6;
            gomireuse();
        } 
        if (((e.keyCode == 55)||(e.keyCode == 103)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 7;
            gomireuse();
        } 
        if (((e.keyCode == 56)||(e.keyCode == 104)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 8;
            gomireuse();
        } 
        if (((e.keyCode == 57)||(e.keyCode == 105)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 9;
            gomireuse();
        } 
        if (((e.keyCode == 48)||(e.keyCode == 96)) && (gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            reshu = 0;
            gomireuse();
        } 
    }

    // 右移動
    function moveright(){
        // 描く先のCanvasを取得
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 現在の座標と向きを保存
        maenoix = ix;
        maenoiy = iy;
        // いまのブロックを消す
        kesu(cg, ix, iy, ishurui);
        // 右に移動
            ix = ix + 7;
            // 移動音を鳴らさない（鳴らすなら//を取る）
            // document.getElementById('idou').currentTime = 0;            
            // document.getElementById('idou').play();
           // 移動できるかどうかを確認
            kekka = kakunin(ix, iy, ishurui);
            if (!kekka) {
            // 移動できない
            // 元に戻す
                ix = maenoix;
                iy = maenoiy;
            } 
        // 新しい場所にブロックを描く
        kaku(cg, ix, iy, ishurui);            
    }

    // 左移動
    function moveleft(){
        // 描く先のCanvasを取得
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 現在の座標と向きを保存
        maenoix = ix;
        maenoiy = iy;
        // いまのブロックを消す
        kesu(cg, ix, iy, ishurui);
        // 左に移動
             ix = ix - 7;
             // 移動音を鳴らさない（鳴らすなら//を取る）
             // document.getElementById('idou').currentTime = 0;             
             // document.getElementById('idou').play();
             // 移動できるかどうかを確認
             kekka = kakunin(ix, iy, ishurui);
             if (!kekka) {
             // 移動できない
             // 元に戻す
                 ix = maenoix;
                 iy = maenoiy;
             } 
        // 新しい場所にブロックを描く
        kaku(cg, ix, iy, ishurui);       
    }

    // 消す処理
    function kesu(c, bx, by, shurui) {
        c.globalCompositeOperation = 'destination-out';
        // 描く（実際は消える）
        kaku(c, bx, by, shurui);
        // 元の描く処理に戻す
        c.globalCompositeOperation = 'source-over';
    }   

    // 描く処理
    function kaku(c, bx, by, shurui){
        // ブロックの色
        c.fillStyle = biro[shurui];
        // どのパターンの数字プロックを描くか
        p = block[shurui];
        // パターン通りに描く
        for (n = 0; n < 7; n++) {
            for (m = 0; m < 7; m++) {
                // 描くかどうか　ブロックのうち『1』のピースのとき5*5の■を塗る
                if (p[n][m] == 1) {
                    // ここに描く
                    // 5倍することで、ピースの左上端の座標となる
                    c.fillRect((bx + m)*5 , (by + n)*5 , 5, 5);
                }
            }
        }
    }
    
    // 式が成立しているかの判定と得点計算など
    function tokutenkeisan() {
        // 全ラインをチェック
        // 横方向に6個のブロックがそろっているかどうかを上から…
        for (y = 0; y < 12; y++) {
            sorottenai = false;
            for (x = 1; x <= 6; x++) {
                if (jyoutai[y*7][x*7] == 100) {
                    // ブロックがない（隙間：ブロック左上のピースが『100』だったら）
                    sorottenai = true;
                }
            }
            // 揃っていたとき、計算式が成立するかどうか
            // ピースの値で計算する
            if (!sorottenai) {
                s1 = jyoutai[y*7+1][10];
                if (jyoutai[y*7+1][10] == 100){s1 = jyoutai[y*7+1][9];}
                s2 = jyoutai[y*7+1][24];
                if (jyoutai[y*7+1][24] == 100){s2 = jyoutai[y*7+1][23];}
                s3 = jyoutai[y*7+1][38];
                if (jyoutai[y*7+1][38] == 100){s3 = jyoutai[y*7+1][37];}
                s4 = jyoutai[y*7+1][45];
                if (jyoutai[y*7+1][45] == 100){s4 = jyoutai[y*7+1][44];}
                sm = s1 * s2;
                su = s3 * 10 + s4;
               if (sm != su ){
                    // 揃っていないことにする
                    sorottenai = true;
                }
            }
            if (!sorottenai) {
                // 揃ってる
                // 得点を計算する
                if (shiyousuuti[s1][s2] == 0){
                    ten = ten + 3;
                    if (use == 99){
                        kabeage = 1;
                    }                    
                    if ((su == bonus1)||(su == bonus2)){
                        ten = ten + 2;
                        kabeage = 1;
                    }                
                }else {ten = ten + 1;} 
                tokuten = ('000'+ten).slice(-3);
                // 音を出す
                if (((su == bonus1)||(su == bonus2))&&(shiyousuuti[s1][s2] == 0)){
                    document.getElementById('kieru99').currentTime = 0;
                    document.getElementById('kieru99').play();
                }else{
                    if (shiyousuuti[s1][s2] == 0){
                        document.getElementById('kieru').currentTime = 0;
                        document.getElementById('kieru').play();
                }else{
                    document.getElementById('kieru2').currentTime = 0;
                    document.getElementById('kieru2').play();
                }
                }
                // 得点したら画像の切り替え
                    changeIMG();
                // 使用回数を＋１
                shiyousuuti[s1][s2] = shiyousuuti[s1][s2] + 1;     
                //
                // ごみを消す
                // 背景のCanvasを取得
                backgamen = document.getElementById('gomi');
                og = backgamen.getContext('2d');
                og.clearRect(0, 0, 35, 175);
                // ごみ箱は縦に0～34までのピース、ひとつの横ブロック内に0～6のピース
                gomijyoutai = new Array(35);
                for (i = 0; i < 35; i++) {
                gomijyoutai[i] = new Array(7);
                for (j = 0; j < 7; j++) {
                // まず、全てのピースを100（空白を意味）にする
                gomijyoutai[i][j] = 100;
                    }
               }
                // 時間をおく
                var startMsec = new Date();
                while (new Date() - startMsec < 1200);
                // ピースをブロック単位になるように上から詰める
                for (k = y*7 - 1; k >= 0; k--) {
                    for (x = 7; x <= 48; x++) {
                        jyoutai[k + 7][x] = jyoutai[k][x];
                    }
                }
                // 九九を成立させて消したら、その一段下も消して詰める（失敗を一段クリアできる）
                if (y <= 10){
                    for (k = y*7 + 6; k >= 7; k--) {
                        for (x = 7; x <= 48; x++) {
                            jyoutai[k + 7][x] = jyoutai[k][x];
                        }
                    }                    
                }
                // 落ちてきた壁を上げる(99点未満：ボーナス得点時　リサイクル99：3点得点時)
                if ((tenjyou > 0)&&(kabeage == 1)){
                    tenjyou = tenjyou - 7;
                    kabeage = 0;
                    // 背景のCanvasを取得
                    backgamen = document.getElementById('back');
                    cb = backgamen.getContext('2d');
                    // 壁を一段消す
                    cb.clearRect(35, tenjyou*5, 210, 36);
                }
                // 次回ボーナス数値の発生
                bos1 = Math.floor(Math.random() * 9 + 1);
                bos2 = Math.floor(Math.random() * 9 + 1);
                bonus1 = bos1 * bos2;
                bos3 = Math.floor(Math.random() * 9 + 1);
                bos4 = Math.floor(Math.random() * 9 + 1);
                bonus2 = bos3 * bos4;                                
            }    
        }
        // ピースを全部描き直す(揃っていなくても)
        // 1.キャンバスを取得する
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 2.全部消す
        cg.clearRect(0, 0, 279, 454);
        // 3.ピースに色があるところを描く
        for (y = 0; y < 84; y++) {
            for (x = 7; x <= 48; x++) {
                if ((jyoutai[y][x] != 100) &&(jyoutai[y][x] != 99)) {
                // ブロックを描く
                    cg.fillStyle = biro[jyoutai[y][x]];
                    cg.fillRect(x*5, y*5, 5, 5);
                }
            }
        }
        // 得点を表示する
        tgamen = document.getElementById('tokuten');
        tgamen.innerHTML = tokuten;
        tgamen.style.color = 'blue';


    }
    
    // 自動で下移動（ゲームの進行）
    function jikandeugokasu() {
        if (jikkou) {
            // 実行中
            // 下に動かす
            shitaidou();
            // 次の時間を設定
            timer1 = setTimeout(jikandeugokasu, jikan);
        } 
    }

    // 自動で壁落下
    function jikandeotikabe() {
        if (jikkou) {
            // 実行中
            // 壁落下
            otikabe();        
        } 
    }    

    // ゲーム開始
    function gamekaishi() {
        gamegamen = document.getElementById('game');
        cg = gamegamen.getContext('2d');
        // 壁を含む全画面を消す
        cg.clearRect(0, 0, 279, 454);
        // ごみのCanvasを取得
        backgamen = document.getElementById('gomi');
        og = backgamen.getContext('2d');
        og.clearRect(0, 0, 35, 175);
        // 背景のCanvasを取得
        backgamen = document.getElementById('back');
        cb = backgamen.getContext('2d');
        // 壁の全画面を消す
        cb.clearRect(35, 0, 210, 419);
        // ゲーム開始の音
        document.getElementById('gamestart').currentTime = 0;
        document.getElementById('gamestart').play();
        // 得点とリユースを0にするなど初期値設定
        ten = 0;
        kirikae = 0;        
        tokuten = ('000'+ten).slice(-3);
        use = 0;
        reuse = ('00'+use).slice(-2);
        tenjyou = 0;
        bonus1 = 99;
        bonus2 = 99;
        kabeage = 0;        
        recycle = 0;
        cnt=0; //画像番号用の変数
        document.getElementById("gazo").src=img[cnt].src;
        // 得点を表示する
        tgamen = document.getElementById('tokuten');
        tgamen.innerHTML = tokuten;
        tgamen.style.color = 'blue';
        // リユース回数を表示する
        rgamen = document.getElementById('reuse');
        rgamen.innerHTML = reuse;
        if (use == 99){
            rgamen.style.color = 'red';
        }else {
            rgamen.style.color = 'green';
        }    
        // ゲーム中に設定し、タイマーを設定する
        jikkou = true;
        timer1 = null;
        timer2 = null;
        reshu = null; 
        kabejikan = 99000;
        jikan = 990;
        timer1 = setTimeout(jikandeugokasu, jikan);
        timer2 = setInterval(jikandeotikabe, kabejikan);
        // 状態をクリア
        // 縦に0～90までのピース、ひとつの横ブロック内に0～55のピース
        jyoutai = new Array(91);
        for (i = 0; i < 91; i++) {
            jyoutai[i] = new Array(56);
            for (j = 0; j < 56; j++) {
            // まず、全てのピースを100（空白を意味）にする
                jyoutai[i][j] = 100;
            }
        }
        // 縦に0～9までの１つ目の数値、横に0～9までの２つ目の数値　の使用回数を入れるため
        shiyousuuti = new Array(10);
        for (i = 0; i < 10; i++) {
            shiyousuuti[i] = new Array(10);
            for (j = 0; j < 10; j++) {
            // まず、全ての使用回数を0にする
                shiyousuuti[i][j] = 0;
            }
        }
        // ごみ箱は縦に0～34までのピース、ひとつの横ブロック内に0～6のピース
        gomijyoutai = new Array(35);
        for (i = 0; i < 35; i++) {
            gomijyoutai[i] = new Array(7);
            for (j = 0; j < 7; j++) {
            // まず、全てのピースを100（空白を意味）にする
                gomijyoutai[i][j] = 100;
            }
        }
        // 壁を設定　壁のピースを99にする
        for (i = 0; i < 91; i++) {
            for (j = 0; j < 7; j++) {
            jyoutai[i][j] = 99;
            }
        }
        for (i = 0; i < 91; i++) {
            for (j = 49; j < 56; j++) {
                jyoutai[i][j] = 99;
            }
        }
        for (i = 84; i < 91; i++) {
            for (j = 0; j < 56; j++) {
                jyoutai[i][j] = 99;
            }
        }
        // ランダムなブロックを作る　ランダムな場所に出現
        ix = (Math.floor(Math.random() * 6) + 1 )*7;
        iy = tenjyou;
        ishurui = Math.floor(Math.random() * 10);
        // 次のブロックをセットする
        tsugiwotsukuru();
        kaku(cg, ix, iy, ishurui);
    }

    // はじめ
    function hajime() {
        // 背景のCanvasを取得
        backgamen = document.getElementById('back');
        cb = backgamen.getContext('2d');
        // 塗りを設定
        cb.fillStyle = '#CCCCCC';
        // 線を設定
        cb.strokeStyle = '#333333';
        cb.lineWidth = 1;
        // 左壁を描く
        x = 0;
        y = 0;
        for (i = 0; i < 13; i++) {
            cb.fillRect(x, y, 35, 35);
            cb.strokeRect(x, y, 35, 35);
            y = y + 35;
        }
        // 右壁を描く
        x = 245;
        y = 0;
        for (i = 0; i < 13; i++) {
            cb.fillRect(x, y, 35, 35);
            cb.strokeRect(x, y, 35, 35);
            y = y + 35;
        }
        // 下壁を描く
        x = 0;
        y = 420;
        for (i = 0; i < 8; i++) {
            cb.fillRect(x, y, 35, 35);
            cb.strokeRect(x, y, 35, 35);
            x = x + 35;
        }
    }

    // 壁を落とす
    function otikabe() {
        if ((jikkou)&&(tenjyou < 56)){
        // 実行中
        tenjyou = tenjyou + 7;
        // 落ちる上壁を描く
        // 背景のCanvasを取得
        backgamen = document.getElementById('back');
        cb = backgamen.getContext('2d');
        // 塗りを設定
        cb.fillStyle = '#CCCCCC';
        // 線を設定
        cb.strokeStyle = '#333333';
        cb.lineWidth = 1;
        x = 0;
        y = (tenjyou - 7)*5 ;
        for (i = 0; i < 8; i++) {
            cb.fillRect(x, y, 35, 35);
            cb.strokeRect(x, y, 35, 35);
            x = x + 35;
        }
        }
    }

    // ゲームオーバー時の壁
    function owari() {
        // 架空の上壁を設定　壁のピースを99にする
        for (i = 0; i < 7; i++) {
            for (j = 0; j < 56; j++) {
            jyoutai[i + tenjyou][j] = 99;
            }
        }
    }

    // 数字をゴミ箱へ
    function gomiidou() {
        //　数字ブロックをゴミ箱へ
        if ((jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)){
        //　ゴミ箱がいっぱいのときはリユース
        if ((gomijyoutai[0][0] == 99) && (jyoutai[iy + 7][ix] == 100) && (iy > tenjyou)&&(reuse < 99)){
            gomireuse();
        }else{    
        // いまのブロックを消す
            kesu(cg, ix, iy, ishurui);
            // 音を鳴らす
            document.getElementById('suteru').currentTime = 0;            
            document.getElementById('suteru').play();
        // 背景のCanvasを取得
        backgamen = document.getElementById('gomi');
        og = backgamen.getContext('2d');
        gx = 0;
        gy = 0;
        for (n = 1; n < 5; n++){
            if (gomijyoutai[gy + 7][gx] == 100){
                gy = gy + 7;
            }
        }
            kaku(og, gx, gy, ishurui);
            gomijyoutai[gy + 1][gx] = ishurui; 
            gomijyoutai[gy][gx] = 99;
            // 次のブロックとして設定したものが落ちてくるようにする
            ix = (Math.floor(Math.random() * 6) + 1 )*7;
            iy = tenjyou;
            ishurui = btsugi;
            kaku(cg, ix, iy, ishurui);
            // そこに置けるかを判定
            kekka = kakunin(ix, iy, ishurui);
            if (!kekka) {
            // 重なっているのでゲームオーバー
            // 音を出す
            document.getElementById('gameover').currentTime = 0;
            document.getElementById('gameover').play();
            // 上壁をつくる
            owari(); 
            // 実行中であることを止める
            jikkou = false;
            clearTimeout(timer1);
            clearInterval(timer2);            
            }
            // さらに次のブロックを設定
            tsugiwotsukuru();
        }
        }   
    }
    
    // リユースする
    function gomireuse() {
        // いまのブロックを消す
            kesu(cg, ix, iy, ishurui);
        // 音を鳴らす
            document.getElementById('gomireuse').currentTime = 0;
            document.getElementById('gomireuse').play();
        // リユースするブロック
            sitaishurui = gomijyoutai[29][0];
            uenoishurui = ishurui;      
        // 表示前に消す
        // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
            og.clearRect(0, 0, 35, 175);
        // 下から、ひとつ上の数字ブロックを描く
        // 4⇒5
        // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
            ishurui = gomijyoutai[22][0];
                gx = 0;
                gy = 28;
            kaku(og, gx, gy, ishurui);
            gomijyoutai[29][0] = ishurui;
        // 3⇒4
        // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
            ishurui = gomijyoutai[15][0];
                gx = 0;
                gy = 21;
            kaku(og, gx, gy, ishurui);
            gomijyoutai[22][0] = ishurui;
        // 2⇒3
        // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
            ishurui = gomijyoutai[8][0];
                gx = 0;
                gy = 14;
            kaku(og, gx, gy, ishurui);
            gomijyoutai[15][0] = ishurui;
        // 1⇒2
        // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
            ishurui = gomijyoutai[1][0];
                gx = 0;
                gy = 7;
            kaku(og, gx, gy, ishurui);
            gomijyoutai[8][0] = ishurui;    
        // 一番上の数字ブロックを描く
            // 背景のCanvasを取得
            backgamen = document.getElementById('gomi');
            og = backgamen.getContext('2d');
        　　ishurui = uenoishurui;
            kaku(og, 0, 0, ishurui);
            gomijyoutai[1][0] = ishurui; 
        // フィールドに戻す数字
            if (reshu == 99){ishurui = sitaishurui;}
            if (reshu ==  1){ishurui = 1;recycle = 1;}
            if (reshu ==  2){ishurui = 2;recycle = 1;}
            if (reshu ==  3){ishurui = 3;recycle = 1;}
            if (reshu ==  4){ishurui = 4;recycle = 1;}
            if (reshu ==  5){ishurui = 5;recycle = 1;}
            if (reshu ==  6){ishurui = 6;recycle = 1;}
            if (reshu ==  7){ishurui = 7;recycle = 1;}
            if (reshu ==  8){ishurui = 8;recycle = 1;}            
            if (reshu ==  9){ishurui = 9;recycle = 1;}            
            if (reshu ==  0){ishurui = 0;recycle = 1;}
            reshu = null;
        // リユース回数を+1 または+3(リサイクルのとき)
        use = use + 1;
        if (recycle == 1){use = use + 2;recycle = 0;}
        if (use >= 100){use = 99;}
        reuse = ('00'+use).slice(-2);
        // リユース回数を表示する
        rgamen = document.getElementById('reuse');
        rgamen.innerHTML = reuse;
        if (use == 99){
            rgamen.style.color = 'red';
        }else {
            rgamen.style.color = 'green';
        }
            // 描く先のCanvasを取得
            gamegamen = document.getElementById('game');
            cg = gamegamen.getContext('2d');
            // リユースしたブロックを描く
            kaku(cg, ix, iy, ishurui);
            // そこに置けるかを判定
            kekka = kakunin(ix, iy, ishurui);
            if (!kekka) {
            // 重なっているのでゲームオーバー
            // 音を出す
            document.getElementById('gameover').currentTime = 0;
            document.getElementById('gameover').play();
            // 上壁をつくる
              owari(); 
            // 実行中であることを止める
            jikkou = false;
            clearTimeout(timer1);
            clearInterval(timer2);                     
            }
    }
    // ゲーム終了
    function gameowari(){
        //実行中であることを止める
        jikkou = false;
        document.location.reload();
    }    
    // 途中でEnterキーやspaceキーに触れても大丈夫なように
    window.document.onkeydown = function(evt){
        if ((evt.which == 13)
        || (evt.which == 32)
        ){ evt.which = null;
        return false;}
       }           
    // 「かんたん九九りす」を作成。リサイクル機能で必要な数字を作り出せる。
    // 作成　2021.1
    //         フィールドタッチでもプレイ可能。卯年版。2023.1 
    // 山田 雅基（yamada masaki）
