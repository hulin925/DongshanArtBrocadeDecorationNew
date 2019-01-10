export default{
  initData(state,data){
    state.initDataList=data;
  },
  setDecorate(state,id){//改变state数据
    state.footerList =  state.footerList.map((item,index)=>{
      if(index==id){
        item.active = true
        return item
      }else{
        item.active = false
        return item
      }
    })
  }

}
