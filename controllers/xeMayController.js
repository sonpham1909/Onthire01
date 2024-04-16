const { XeMay } = require("../modals/xeMayModal")

exports.getList = async(req,res,next)=>{
    let dieuKien = null;
    try{
        if(typeof(req.query.tenxe) != 'undefined'){
            dieuKien = {ten_xe_ph33179:req.query.tenxe}
        }



        let list = await XeMay.find();
        res.status(200).json(list);


    }catch(error){
        res.status(400).json({'msg':error.message()})

    }


}



exports.getOne = async(req,res,next)=>{
    try {
        let id = req.params.id;
        let objXe = await XeMay.findById(id);
        res.status(200).json(objXe);
        
    } catch (error) {
        res.status(400).json({'msg':error.message()})
        
    }

}



exports.createOne = async(req,res,next)=>{
    try {
        let{ten_xe_ph33179,mau_sac_ph33179,mo_ta_ph33179,hinh_anh_ph33179,gia_ban_ph33179} = req.body;

        if(ten_xe_ph33179.length <3){
            res.status(400).json({'msg':'Tên xe [hải ít nhất 3 kí tự'})

        }


        //tạo đối tượng
        let objXe = new XeMay();
        objXe.ten_xe_ph33179=ten_xe_ph33179;
        objXe.mau_sac_ph33179=mau_sac_ph33179;
        objXe.mo_ta_ph33179=mo_ta_ph33179
        objXe.hinh_anh_ph33179=hinh_anh_ph33179;
        objXe.gia_ban_ph33179=gia_ban_ph33179;

        let kq = await objXe.save();


        
        res.status(201).json(kq);


        
    } catch (error) {
        res.status(400).json({'msg':error});

        
    }

}