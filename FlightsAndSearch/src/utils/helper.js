function compartTime(t1,t2){
    let dateTime1=new Date(t1);
    let dateTime2=new Date(t2);
    return dateTime1.getTime()<dateTime2.getTime();
}

module.exports={
    compartTime,
}