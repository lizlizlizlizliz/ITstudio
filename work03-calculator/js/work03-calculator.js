var inputTemp;//input中的内容
var first;//第一操作数
var second;//第二操作数
var operator;//储存运算符
var pointer=1;
var afterCaculation=false;

function clearAll(){
	inputTemp.value = 0;
	first = 0;
	second = 0;
}//清空所有

function clearSecond(){
	second = 0;
	inputTemp.value = second;
}//清空上一串数

function clearOne(){
	inputTemp.value = inputTemp.value.substring(0,inputTemp.value.length - 1);
}//退格

function numIn(obj){
	if(afterCaculation == false && operator && first &&(!second)){
		pointer = 2;
		document.getElementById("textbox").value = 0;
	}

	if(afterCaculation == true && pointer == 1){
		document.getElementById("textbox").value = 0;
		afterCaculation = false;
	}

	inputTemp = document.getElementById("textbox");

	if(inputTemp.value == "0" && obj.innerHTML == "."){
		inputTemp.value = "0" + obj.innerHTML;
	}

	else if(inputTemp.value == "0")
		inputTemp.value = obj.innerHTML;

	else
		inputTemp.value = inputTemp.value + obj.innerHTML;

	if(pointer == 1){	
		first = inputTemp.value;
	}

	else if(pointer == 2){
		second = inputTemp.value;
	}

}//输入一串数字

function operatorIn(obj){
	operator = obj.innerHTML;
	if(pointer == 1){
		pointer = 2;
	}

	second = 0;

	afterCaculation = false;

	if(operator == "√"){
		first = Math.sqrt(first);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//平方根

	if(operator == "x²"){
		first = (first - 0) * (first - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//平方

	if(operator == "1/x"){
		first = 1/(first - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//倒数

	if(operator == "±"){
		if(inputTemp.value.indexOf("-")>0){
			inputTemp.value = inputTemp.value - "-";
		}
	}//正负号

}//运算符

function orderIn(obj){
	if(operator == "+"){
		first = (first - 0) + (second - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//加

	if(operator == "-"){
		first = (first - 0) - (second - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//减

	if(operator == "×"){
		first = (first - 0) * (second - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//乘

	if(operator == "÷"){
		first = (first - 0) / (second - 0);
		inputTemp = document.getElementById("textbox");
		inputTemp.value = first;
		pointer = 1;
	}//除

	afterCaculation = true;

	spot = true;

}//运算啦运算啦
