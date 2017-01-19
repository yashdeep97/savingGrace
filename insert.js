function CreateUser(BitsId,name){

  db.COLL.insert({
    ID:BitsId;
    Username:name;

  })
}
function setGrace(BitsId,date){
  db.COLL.insert({

    ID:BitsId;
    Grace : date;
    if(date.len >4){
      //what to do then??
      date={};
    }
  })



}
var exp= {
  CreateUser(BitsId,name),
  setGrace(BitsId,yy,mm,dd)

}
module.exports = exp;
