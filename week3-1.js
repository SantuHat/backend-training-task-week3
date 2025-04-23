let purchaseRecords = [];

function addPurchaseRecord(name, courses) {
  // console.log(name,courses);
  // 防呆驗證
  if (
    name == 'undefined' ||
    name == '' ||
    typeof courses !== 'number' ||
    courses <= 0
  ) {
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量');
    return;
  }

  // 購買數量套用優惠價格
  let price = 0;
  if (courses <= 10) {
    price = 1500;
    // console.log(price);
  } else if (courses <= 20) {
    price = 1300;
    // console.log(price);
  } else {
    price = 1100;
    // console.log(price);
  }

  // 計算總價
  let totalPrice = price * courses;
  // console.log(totalPrice);

  // 將資料寫入陣列 purchaseRecords
  purchaseRecords.push({
    name,
    courses,
    price,
    totalPrice,
  });
  // console.log(purchaseRecords);

  // 印出 console.log，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
  console.log(
    `新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${totalPrice} 元。`
  );
}

addPurchaseRecord('Alice', 4);
addPurchaseRecord('Bob', 12);
addPurchaseRecord('Bob', -2);

// console.log(purchaseRecords);

function calculateTotalPrice() {
  let totalPrice = 0;
  purchaseRecords.forEach((record) => {
    console.log(record);
    totalPrice += record.totalPrice;
  });
  console.log(totalPrice);
}
calculateTotalPrice();
