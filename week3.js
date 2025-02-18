// 第一階段

// 樂呵呵健身房目前有 8 位會員
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

let purchaseRecords = [];


function addPurchaseRecord(name, courses){
  if(!members.includes(name) || isNaN(courses) || courses <= 0){
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    return;
  }
  
  let price = 0;
  if(courses >0 && courses <= 10){
    price = 1500;
  }else if(courses > 10 && courses <= 20){
    price = 1300;
  }else {
    price = 1100;
  }
  
  let totalPrice = courses * price;

  const obj = {
    name,
    courses,
    price,
    totalPrice
  }
  purchaseRecords.push(obj);
  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`);
}

addPurchaseRecord("Alice", 4); 
addPurchaseRecord("Bob", 12); 
addPurchaseRecord("Charlie", 25); 
addPurchaseRecord("Hannah", 50); 
addPurchaseRecord("名稱", "課程數量"); 

// console.log(purchaseRecords);


/* 舉例：
addPurchaseRecord("Alice", 4); >> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
addPurchaseRecord("Bob", 12); >> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
addPurchaseRecord("Charlie", 25); >> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
addPurchaseRecord("Hannah", 50); >> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
addPurchaseRecord("名稱", “課程數量”); >> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。 */



// 第二階段
function calculateTotalPrice(){
  let totalPrice = 0;
  purchaseRecords.forEach((item)=>{
    totalPrice += item.totalPrice
  })
  console.log(`目前總營業額為 ${totalPrice} 元`);
}

calculateTotalPrice();