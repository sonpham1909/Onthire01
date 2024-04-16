const { mongoose } = require('./db');
const xemaySchema = new mongoose.Schema({
   ten_xe_ph33179:{type:String, require:true},
   mau_sac_ph33179:{type:String, require:true},
   gia_ban_ph33179:{type:Number, require:true, default:0},
   mo_ta_ph33179:{type:String, require:false},
   hinh_anh_ph33179:{type:String,require:false},

},
{
    collection: 'XeMay'
}

);

let XeMay = mongoose.model('XeMay',xemaySchema);

module.exports = {XeMay}