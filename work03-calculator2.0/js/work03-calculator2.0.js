function a(calculator)
{

	//封装部分

	//div
	var contain = document.getElementById(calculator);
	contain.style.width = "550px";
	contain.style.height = "600px";
	contain.style.float = "left";
	contain.style.backgroundImage = "url(images/background01.jpeg)";
	contain.style.margin = "20px 50px";
	contain.style.boxShadow = "15px 15px 10px #6E6E6F";
	
	//input
	var val = document.createElement("input");
	contain.appendChild(val);
	val.value=0;
	val.style.width = "500px";
	val.style.height = "80px";
	val.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	val.style.margin = "20px 23px";
	val.style.textAlign = "right";
	val.style.fontSize = "30px";

	//子div
	var but = document.createElement("div");
	contain.appendChild(but);
	but.style.width = "500px";
	but.style.height = "420px";
	but.style.margin = "20px 23px";
	
	//button
	var lalala = document.createElement("button");
	lalala.innerHTML = "(｡•ˇ‸ˇ•｡)";
	but.appendChild(lalala);
	lalala.style.width = "125px";
	lalala.style.height = "70px";
	lalala.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	lalala.style.fontSize = "20px";
	lalala.style.cursor = "pointer";
	lalala.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	lalala.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};


	var roott = document.createElement("button");
	roott.innerHTML = "√";
	but.appendChild(roott);
	roott.onclick = function(){others(this);};
	roott.style.width = "125px";
	roott.style.height = "70px";
	roott.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	roott.style.fontSize = "20px";
	roott.style.cursor = "pointer";
	roott.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	roott.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var square = document.createElement("button");
	square.innerHTML = "x²";
	but.appendChild(square);
	square.onclick = function(){others(this);};
	square.style.width = "125px";
	square.style.height = "70px";
	square.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	square.style.fontSize = "20px";
	square.style.cursor = "pointer";
	square.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	square.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var upDown = document.createElement("button");
	upDown.innerHTML = "1/x";
	but.appendChild(upDown);
	upDown.onclick = function(){others(this);};
	upDown.style.width = "125px";
	upDown.style.height = "70px";
	upDown.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	upDown.style.fontSize = "20px";
	upDown.style.cursor = "pointer";
	upDown.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	upDown.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var ce = document.createElement("button");
	ce.innerHTML = "CE";
	but.appendChild(ce);
	ce.onclick = clearSecond;
	ce.style.width = "125px";
	ce.style.height = "70px";
	ce.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	ce.style.fontSize = "20px";
	ce.style.cursor = "pointer";
	ce.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	ce.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var c = document.createElement("button");
	c.innerHTML = "C";
	but.appendChild(c);
	c.onclick = clearAll;
	c.style.width = "125px";
	c.style.height = "70px";
	c.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	c.style.fontSize = "20px";
	c.style.cursor = "pointer";
	c.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	c.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var back = document.createElement("button");
	back.innerHTML = "←";
	but.appendChild(back);
	back.onclick = clearOne;
	back.style.width = "125px";
	back.style.height = "70px";
	back.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	back.style.fontSize = "20px";
	back.style.cursor = "pointer";
	back.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	back.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var div = document.createElement("button");
	div.innerHTML = "÷";
	but.appendChild(div);
	div.onclick = function(){operatorIn(this);};
	div.style.width = "125px";
	div.style.height = "70px";
	div.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	div.style.fontSize = "20px";
	div.style.cursor = "pointer";
	div.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	div.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var seven = document.createElement("button");
	seven.innerHTML = "7";
	but.appendChild(seven);
	seven.onclick = function(){numIn(this);};
	seven.style.width = "125px";
	seven.style.height = "70px";
	seven.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	seven.style.fontSize = "20px";
	seven.style.cursor = "pointer";
	seven.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	seven.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var eight = document.createElement("button");
	eight.innerHTML = "8";
	but.appendChild(eight);
	eight.onclick = function(){numIn(this);};
	eight.style.width = "125px";
	eight.style.height = "70px";
	eight.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	eight.style.fontSize = "20px";
	eight.style.cursor = "pointer";
	eight.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	eight.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var nine = document.createElement("button");
	nine.innerHTML = "9";
	but.appendChild(nine);
	nine.onclick = function(){numIn(this);};
	nine.style.width = "125px";
	nine.style.height = "70px";
	nine.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	nine.style.fontSize = "20px";
	nine.style.cursor = "pointer";
	nine.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	nine.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var multi = document.createElement("button");
	multi.innerHTML = "×";
	but.appendChild(multi);
	multi.onclick = function(){operatorIn(this);};
	multi.style.width = "125px";
	multi.style.height = "70px";
	multi.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	multi.style.fontSize = "20px";
	multi.style.cursor = "pointer";
	multi.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	multi.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var four = document.createElement("button");
	four.innerHTML = "4";
	but.appendChild(four);
	four.onclick = function(){numIn(this);};
	four.style.width = "125px";
	four.style.height = "70px";
	four.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	four.style.fontSize = "20px";
	four.style.cursor = "pointer";
	four.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	four.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var five = document.createElement("button");
	five.innerHTML = "5";
	but.appendChild(five);
	five.onclick = function(){numIn(this);};
	five.style.width = "125px";
	five.style.height = "70px";
	five.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	five.style.fontSize = "20px";
	five.style.cursor = "pointer";
	five.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	five.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var six = document.createElement("button");
	six.innerHTML = "6";
	but.appendChild(six);
	six.onclick = function(){numIn(this);};
	six.style.width = "125px";
	six.style.height = "70px";
	six.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	six.style.fontSize = "20px";
	six.style.cursor = "pointer";
	six.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	six.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var minus = document.createElement("button");
	minus.innerHTML = "-";
	but.appendChild(minus);
	minus.onclick = function(){operatorIn(this);};
	minus.style.width = "125px";
	minus.style.height = "70px";
	minus.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	minus.style.fontSize = "20px";
	minus.style.cursor = "pointer";
	minus.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	minus.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var one = document.createElement("button");
	one.innerHTML = "1";
	but.appendChild(one);
	one.onclick = function(){numIn(this);};
	one.style.width = "125px";
	one.style.height = "70px";
	one.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	one.style.fontSize = "20px";
	one.style.cursor = "pointer";
	one.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	one.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var two = document.createElement("button");
	two.innerHTML = "2";
	but.appendChild(two);
	two.onclick = function(){numIn(this);};
	two.style.width = "125px";
	two.style.height = "70px";
	two.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	two.style.fontSize = "20px";
	two.style.cursor = "pointer";
	two.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	two.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var three = document.createElement("button");
	three.innerHTML = "3";
	but.appendChild(three);
	three.onclick = function(){numIn(this);};
	three.style.width = "125px";
	three.style.height = "70px";
	three.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	three.style.fontSize = "20px";
	three.style.cursor = "pointer";
	three.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	three.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var plus = document.createElement("button");
	plus.innerHTML = "+";
	but.appendChild(plus);
	plus.onclick = function(){operatorIn(this);};
	plus.style.width = "125px";
	plus.style.height = "70px";
	plus.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	plus.style.fontSize = "20px";
	plus.style.cursor = "pointer";
	plus.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	plus.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var oppo = document.createElement("button");
	oppo.innerHTML = "±";
	but.appendChild(oppo);
	oppo.onclick = sign;
	oppo.style.width = "125px";
	oppo.style.height = "70px";
	oppo.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	oppo.style.fontSize = "20px";
	oppo.style.cursor = "pointer";
	oppo.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	oppo.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var zero = document.createElement("button");
	zero.innerHTML = "0";
	but.appendChild(zero);
	zero.onclick = function(){numIn(this);};
	zero.style.width = "125px";
	zero.style.height = "70px";
	zero.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	zero.style.fontSize = "20px";
	zero.style.cursor = "pointer";
	zero.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	zero.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var dot = document.createElement("button");
	dot.innerHTML = ".";
	but.appendChild(dot);
	dot.onclick = function(){numIn(this);};
	dot.style.width = "125px";
	dot.style.height = "70px";
	dot.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	dot.style.fontSize = "20px";
	dot.style.cursor = "pointer";
	dot.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	dot.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};

	var equal = document.createElement("button");
	equal.innerHTML = "=";
	but.appendChild(equal);
	equal.onclick = function(){orderIn(this)};
	equal.style.width = "125px";
	equal.style.height = "70px";
	equal.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
	equal.style.fontSize = "20px";
	equal.style.cursor = "pointer";
	equal.onmouseover=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.7)"};
	equal.onmouseleave=function(){this.style.backgroundColor="rgba(255, 255, 255, 0.5)"};
	


	//计算器部分

	var first = 0;//第一操作数
	var second = 0;//第二操作数
	var operator;//储存运算符
	var another;//一步运算操作
	var pointer=1;//对一或二操作数操作的标志
	var afterCaculation=false;//是否运算的标志


	function clearAll()//清空所有
	{
		val.value = 0;
		first = 0;
		second = 0;
		pointer = 1;
		operator = false;
		another = false;
		afterCaculation = false;
	}

	function clearSecond()//清空上一串数
	{
		if(val.value == "Error" )
		{
			clearAll();
		}//Error时的CE操作与C操作相同
		
		if(afterCaculation == true)
		{
			first =0;
			second = second;
			val.value = first;
		}//如果已经进行过计算，清除结果后点等于仍使用第二操作数运算
		
		else
		{
			if(pointer == 2)
			{
				pointer = 2;
				val.value = 0;
				second = val.value;
			}//清除第二操作数
			
			if(pointer == 1)
			{
				pointer = 1;
				val.value = 0;
				first = val.value;
			}//清除第一操作数
		}
	}

	function clearOne()//退格
	{
		if(val.value != "Error" && afterCaculation == false && !another)
		{//Error不能退格且运算结果不能退格且一步运算结果不能退格
			if(pointer == 1)
			{
				val.value = val.value.substring(0,val.value.length - 1);
				first = val.value;
				
				if(val.value.length == 0)
				{
					val.value = "0";
					first = val.value;
				}//退到最后变为0
				
				if(first[0]=="-" && val.value.length == 1)
				{
					val.value = "0";
					first = val.value;
				}//“-”变为0
				
				if(val.value == "-0")
				{
					val.value = "0";
					first = val.value;
				}//“-0”变为0
			}
			
			if(pointer == 2 && second != 0)
			{//按运算符后不能退格
				val.value = val.value.substring(0,val.value.length - 1);
				second = val.value;
				
				if(val.value.length == 0)
				{
					val.value = "0";
					second = val.value;
				}//退到最后变为0
				
				if(second[0]=="-" && val.value.length == 1)
				{
					val.value = "0";
					second = val.value;
				}//“-”变为0
				
				if(val.value == "-0")
				{
					val.value = "0";
					first = val.value;
				}//“-0”变为0
			}
			
			if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
			{
			 	val.value="Error";
			}
		}
	}

	function sign()//正负号
	{
		
		
		if((val.value - 0) > 0)
		{//正数变负
			val.value = "-" + val.value;
			
			if(pointer == 1)
			{
				first = val.value;
			}
			
			if(pointer == 2)
			{
				second = val.value;
			}
		}
		
		else if((val.value - 0) < 0)
		{//负数变正
			val.value = val.value.substring(1,val.value.length);
			
			if(pointer == 1)
			{
				first = val.value;
			}
			
			if(pointer == 2)
			{
				second = val.value;
			}
		}
		
		if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
		{
			val.value="Error";		
		}
	}

	function numIn(obj)//输入一串数字
	{
		if(val.value != "Error")
		{//不出现Error时才允许操作
			if(afterCaculation == false && operator && first &&(!second))
			{//转而对第二操作数操作的判定
				pointer = 2;
				val.value = 0;
			}
			
			if(afterCaculation == true && pointer == 1)
			{//转而对第一操作数操作的判定
				val.value = 0;
				afterCaculation = false;
			}
			
			
			
			if(val.value == "0" && obj.innerHTML == ".")
			{//显示内容为0且点击“.”时显示“0.”
				val.value = "0" + obj.innerHTML;
			}
			
			else if(val.value == "0")//显示为0时直接改变显示值
				val.value = obj.innerHTML;
			
			else
			{
				if(val.value.indexOf(".") > -1 && obj.innerHTML == ".")
				{//只准输入一次小数点
					val.value = val.value;
				}
				
				else//输入一串数字
					val.value = val.value + obj.innerHTML;
			}

			//对变量赋值
			if(pointer == 1)
			{
				first = val.value;
			}
			
			else if(pointer == 2)
			{
				second = val.value;
			}
			if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
			{
			 	val.value="Error";
			}
		}
	}

	function operatorIn(obj)//运算符
	{
		if(val.value != "Error")
		{//不出现Error时才允许操作
			if(pointer == 1)
			{//储存运算符并转而对第二操作数操作
				pointer = 2;
				second = 0;
				afterCaculation = false;
				operator = obj.innerHTML;
			}
			
			if(afterCaculation == false && second!= 0 && pointer == 2)
			{//不点等于的连续运算
				orderIn();
				second = false;
				afterCaculation = false;
				operator = obj.innerHTML;
			}
			else
				operator = obj.innerHTML;//以最后一个运算符为准
			if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
			{
			 	val.value="Error";
			}
		}
	}

	function others(obj)//直接运算的……
	{
		if(val.value != "Error")
		{//不出现Error时才允许操作
			another = obj.innerHTML;
			if(another == "√")//平方根
			{
				if(first < 0)
				{//不能为负
					
					val.value = "Error";
					pointer = 1;
				}
				
				else
				{//分别对一二操作数运算
					if(pointer == 1)
					{
						first = Math.sqrt(first);
						
						val.value = first;
						pointer = 1;
						afterCaculation = true;//相当于运算完毕了！
					}
					
					if(pointer == 2)
					{
						second = Math.sqrt(second);
						
						val.value = second;
						afterCaculation = false;//不能相当于运算完毕
					}
				}
			}

			if(another == "x²")//平方
			{//分别对一二操作数运算
				if(pointer == 1)
				{
					first = (first - 0) * (first - 0);
					
					val.value = first;
					pointer = 1;
					afterCaculation = true;//相当于运算完毕了！
				}
				
				else if(pointer == 2)
				{
					second = (second - 0) * (second - 0);
					
					val.value = second;
					afterCaculation = false;//不能相当于运算完毕
				}
			}

			if(another == "1/x")//倒数
			{
				if(first == 0)
				{//不能为0
					
					val.value = "Error";
					pointer = 1;
				}
				
				else
				{//分别对一二操作数运算
					if(pointer == 1)
					{
						first = 1/(first - 0);
						
						val.value = first;
						pointer = 1;
						afterCaculation = true;//相当于运算完毕了！
					}
					
					else if(pointer == 2)
					{
						second = 1/(second - 0);
						
						val.value = second;
						afterCaculation = false;//不能相当于运算完毕
					}
				}
			}
			
			if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
			{
			 	val.value="Error";
			}
		}
	}

	function orderIn(obj)//运算啦运算啦
	{
		if(val.value != "Error")
		{//不出现Error时才允许操作
			if(operator == "+")//加
			{
				if(!second)//不点第二操作数进行的连续运算
				{
					second = first;
				}
				
				var r1,r2,m;
				try{r1=first.toString().split(".")[1].length}catch(e){r1=0}
				try{r2=second.toString().split(".")[1].length}catch(e){r2=0}
				m=Math.pow(10,Math.max(r1,r2));
				first = (first*m+second*m)/m;
				
				val.value = first;
				pointer = 1;
			}

			if(operator == "-")//减
			{
				if(!second)
				{
					second = first;
				}
				
				var r1,r2,m,n;
				try{r1=first.toString().split(".")[1].length}catch(e){r1=0}
				try{r2=second.toString().split(".")[1].length}catch(e){r2=0}
				m=Math.pow(10,Math.max(r1,r2));
				n=(r1>=r2)?r1:r2;
				first =((first*m-second*m)/m).toFixed(n);
				
				val.value = first;
				pointer = 1;
			}

			if(operator == "×")//乘
			{
				if(!second)
				{
					second = first;
				}
				
				var m=0,s1=first.toString(),s2=second.toString();
				try{m+=s1.split(".")[1].length}catch(e){}
				try{m+=s2.split(".")[1].length}catch(e){}
				first= Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
				
				val.value = first;
				pointer = 1;
			}

			if(operator == "÷")//除
			{
				if(!second)
				{
					second = first;
				}
				
				if(second == 0)
				{//除数不能为0
					
					val.value = "Error";
					pointer = 1;
				}
				
				else
				{
					var t1=0,t2=0,r1,r2;
					try{t1=first.toString().split(".")[1].length}catch(e){}
					try{t2=second.toString().split(".")[1].length}catch(e){}
					with(Math)
					{
						r1=Number(first.toString().replace(".",""));
						r2=Number(second.toString().replace(".",""));
						first =(r1/r2)*pow(10,t2-t1);
					}
					
					val.value = first;
					pointer = 1;
				}
			}

			if(!operator)//没点运算符字符串变为数
			{
				val.value = (val.value - 0);
			}

			afterCaculation = true;
			
			if(val.value=="NaN"||val.value=="Infinity"||val.value=="null"||val.value=="undefined")
			{
			 	val.value="Error";
			}

		}
	}
}
a("hahaha");//执行函数
a("lalala");