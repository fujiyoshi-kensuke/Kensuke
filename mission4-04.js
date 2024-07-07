function fortune(){
    var number = Math.random();
    var array = ["大吉", "中吉", "吉", "小吉", "末吉", "凶", "大凶"];
    var i = Math.floor(number * 7);
    console.log(array[i]);
}