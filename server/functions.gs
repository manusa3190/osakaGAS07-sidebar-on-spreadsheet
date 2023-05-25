const 人口推移 = new Sheet({})

const setData=(data)=>{
  const newItems = JSON.parse(data)

  const docs = 人口推移.docs
  
  newItems.forEach(newItem=>{
    const {都道府県} = newItem
    if(都道府県 in docs){
      docs[都道府県] = Object.assign(docs[都道府県],newItem)
    }else{
      docs[都道府県] = newItem
    }
  })

  人口推移.renew(Object.values(docs))
}

const check=()=>{
  console.log(人口推移)
}