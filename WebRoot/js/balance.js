/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/28.
 */
/**
 * Created by Administrator on 2015/7/26.
 */
oCanvas.domReady(function () {

//��������
    var canvas = oCanvas.create({
        canvas: "#canvas_balance",
        background: "#ccc",
        fps: 15
    });
    var bg = canvas.display.image({
        x: 0,
        y: 0,
        image: "image/balance.png"
    });
    canvas.addChild(bg);

    var GD01 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 736 ,y_cell: 168},
            {x_cell: 736, y_cell: 268},
            {x_cell: 906, y_cell: 268},
            {x_cell: 906, y_cell: 377},
            {x_cell: 816, y_cell: 377}

        ],  //�յ�����
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //��ǰ��������
        Speed: 2,           //ˮ���ٶ�
        GDwidth: 20,          //�ܵ����
        LineHeight: 30,       //�����ĳ���
        x_now: 0,        //��ǰ���Ƶ��λ��x
        y_now: 0,        //��ǰ���Ƶ��λ��y
        firstX: 0,       //��һ��ˮ��Ч���߶ε���ʼ����X
        firstY: 0,       //��һ��ˮ��Ч���߶ε���ʵ����Y
        beginHeight: 0,       //��һ�ιܵ���һ��ˮ��Ч���߶εĳ���
        endHeight: 0,     //��һ�ιܵ����һ��ˮ��Ч���߶εĳ���
        legacyHeight: 0,
        paused: 0,              //�Ƿ���ͣ
        full:0                      //�ܵ���ˮ�Ƿ��ѳ���
    });
    canvas.addChild(GD01);

    var GD02 = canvas.display.GD1({
        destination: {
            x_d: 0, y_d: 0
        },
        cells: [
            {x_cell: 600, y_cell: 100},
            {x_cell: 600, y_cell: 300},
            {x_cell: 600, y_cell: 500},
            {x_cell: 700, y_cell: 700},
            {x_cell: 900, y_cell: 700},
            {x_cell: 1100, y_cell: 500},
            {x_cell: 1100, y_cell: 100},
            {x_cell: 600, y_cell: 100}
        ],  //�յ�����
        deta: 1,
        deta_x: 1,
        deta_y: 0,
        flag_x: 1,
        flag_y: 0,
        cellIndex: 0,         //��ǰ��������
        Speed: 2,           //ˮ���ٶ�
        GDwidth: 20,          //�ܵ����
        LineHeight: 30,       //�����ĳ���
        x_now: 0,        //��ǰ���Ƶ��λ��x
        y_now: 0,        //��ǰ���Ƶ��λ��y
        firstX: 0,       //��һ��ˮ��Ч���߶ε���ʼ����X
        firstY: 0,       //��һ��ˮ��Ч���߶ε���ʵ����Y
        beginHeight: 0,       //��һ�ιܵ���һ��ˮ��Ч���߶εĳ���
        endHeight: 0,     //��һ�ιܵ����һ��ˮ��Ч���߶εĳ���
        legacyHeight: 0,
        paused: 0,
        full:0
    });
    GD02.bind("start",function(){
        GD02.paused=1;
        canvas.redraw();
    });
    canvas.addChild(GD02);
    canvas.setLoop(function () {
        //$.ajax({
        //    url:"update.jsp",
        //    method:"POST",
        //    data:{ data:"Onload",db:"PoolState",PoolID:"MTG_QS_SC01",t:SC01.t},
        //    success:function(da){
        //        var data=eval(da);
        //        SC01.height_now = 270 * parseFloat(data);
        //        if (SC01.t > 2000) {
        //            SC01.t = 0;
        //        }
        //        else {
        //            SC01.t +=5;
        //        }
        //    }
        //});
        GD01.advance();
        GD02.advance();
        if(GD01.full==1){
            GD02.trigger("start");
        }
        canvas.redraw();
    }).start();
    $("#btn_start").click(function(){
        GD01.paused=1;
    });
});