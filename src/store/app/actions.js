
export default {
  setData(store,data){
    return new Promise((resolve,reject)=>{
      axios.post('/api/TradeGood/GetTravelPageL',JSON.stringify(data),{
        headers:{
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
        .then(res=>{
          var data=res.data;
          console.log(data)
          if(Number(data.resultcode)==200){
            store.commit('initData',data.data);
            resolve();
          }else{
            reject(data.resultcontent);
          }
      })
    })
  },
}
