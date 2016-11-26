var inputTemp = 0;//input中的内容
var first = 0;//第一操作数
var second = 0;//第二操作数
var operator;//储存运算符
var one;//一步运算操作
var pointer=1;//对一或二操作数操作的标志
var afterCaculation=false;//是否运算的标志


function clearAll()//清空所有
{
	inputTemp.value = 0;
	first = 0;
	second = 0;
	pointer = 1;
	operator = false;
	afterCaculation = false;
}

function clearSecond()//清空上一串数
{
	if(inputTemp.value == "Error" )
	{
		clearAll();
	}//Error时的CE操作与C操作相同
	
	if(afterCaculation == true)
	{
		first =0;
		second = second;
		inputTemp.value = first;
	}//如果已经进行过计算，清除结果后点等于仍使用第二操作数运算
	
	else
	{
		if(pointer == 2)
		{
			pointer = 2;
			inputTemp.value = 0;
			second = inputTemp.value;
		}//清除第二操作数
		
		if(pointer == 1)
		{
			pointer = 1;
			inputTemp.value = 0;
			first = inputTemp.value;
		}//清除第一操作数
	}
}

function clearOne()//退格
{
	if(inputTemp.value != "Error" && afterCaculation == false && !one)
	{//Error不能退格且运算结果不能退格且一步运算结果不能退格
		if(pointer == 1)
		{
			inputTemp.value = inputTemp.value.substring(0,inputTemp.value.length - 1);
			first = inputTemp.value;
			
			if(inputTemp.value.length == 0)
			{
				inputTemp.value = "0";
				first = inputTemp.value;
			}//退到最后变为0
			
			if(first[0]=="-" && inputTemp.value.length == 1)
			{
				inputTemp.value = "0";
				first = inputTemp.value;
			}//“-”变为0
			
			if(inputTemp.value == "-0")
			{
				inputTemp.value = "0";
				first = inputTemp.value;
			}//“-0”变为0
		}
		
		if(pointer == 2 && second != 0)
		{//按运算符后不能退格
			inputTemp.value = inputTemp.value.substring(0,inputTemp.value.length - 1);
			second = inputTemp.value;
			
			if(inputTemp.value.length == 0)
			{
				inputTemp.value = "0";
				second = inputTemp.value;
			}//退到最后变为0
			
			if(second[0]=="-" && inputTemp.value.length == 1)
			{
				inputTemp.value = "0";
				second = inputTemp.value;
			}//“-”变为0
			
			if(inputTemp.value == "-0")
			{
				inputTemp.value = "0";
				first = inputTemp.value;
			}//“-0”变为0
		}
		
		if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
		{
		 	inputTemp.value="Error";
		}
	}
}

function sign()//正负号
{
	inputTemp = document.getElementById("textbox");
	
	if((inputTemp.value - 0) > 0)
	{//正数变负
		inputTemp.value = "-" + inputTemp.value;
		
		if(pointer == 1)
		{
			first = inputTemp.value;
		}
		
		if(pointer == 2)
		{
			second = inputTemp.value;
		}
	}
	
	else if((inputTemp.value - 0) < 0)
	{//负数变正
		inputTemp.value = inputTemp.value.substring(1,inputTemp.value.length);
		
		if(pointer == 1)
		{
			first = inputTemp.value;
		}
		
		if(pointer == 2)
		{
			second = inputTemp.value;
		}
	}
	
	if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
	{
		inputTemp.value="Error";		
	}
}

function numIn(obj)//输入一串数字
{
	if(inputTemp.value != "Error")
	{//不出现Error时才允许操作
		if(afterCaculation == false && operator && first &&(!second))
		{//转而对第二操作数操作的判定
			pointer = 2;
			document.getElementById("textbox").value = 0;
		}
		
		if(afterCaculation == true && pointer == 1)
		{//转而对第一操作数操作的判定
			document.getElementById("textbox").value = 0;
			afterCaculation = false;
		}
		
		inputTemp = document.getElementById("textbox");
		
		if(inputTemp.value == "0" && obj.innerHTML == ".")
		{//显示内容为0且点击“.”时显示“0.”
			inputTemp.value = "0" + obj.innerHTML;
		}
		
		else if(inputTemp.value == "0")//显示为0时直接改变显示值
			inputTemp.value = obj.innerHTML;
		
		else
		{
			if(inputTemp.value.indexOf(".") > -1 && obj.innerHTML == ".")
			{//只准输入一次小数点
				inputTemp.value = inputTemp.value;
			}
			
			else//输入一串数字
				inputTemp.value = inputTemp.value + obj.innerHTML;
		}

		//对变量赋值
		if(pointer == 1)
		{
			first = inputTemp.value;
		}
		
		else if(pointer == 2)
		{
			second = inputTemp.value;
		}
		if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
		{
		 	inputTemp.value="Error";
		}
	}
}

function operatorIn(obj)//运算符
{
	if(inputTemp.value != "Error")
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
		if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
		{
		 	inputTemp.value="Error";
		}
	}
}

function others(obj)//直接运算的……
{
	if(inputTemp.value != "Error")
	{//不出现Error时才允许操作
		one = obj.innerHTML;
		if(one == "√")//平方根
		{
			if(first < 0)
			{//不能为负
				inputTemp = document.getElementById("textbox");
				inputTemp.value = "Error";
				pointer = 1;
			}
			
			else
			{//分别对一二操作数运算
				if(pointer == 1)
				{
					first = Math.sqrt(first);
					inputTemp = document.getElementById("textbox");
					inputTemp.value = first;
					pointer = 1;
					afterCaculation = true;//相当于运算完毕了！
				}
				
				if(pointer == 2)
				{
					second = Math.sqrt(second);
					inputTemp = document.getElementById("textbox");
					inputTemp.value = second;
					afterCaculation = false;//不能相当于运算完毕
				}
			}
		}

		if(one == "x²")//平方
		{//分别对一二操作数运算
			if(pointer == 1)
			{
				first = (first - 0) * (first - 0);
				inputTemp = document.getElementById("textbox");
				inputTemp.value = first;
				pointer = 1;
				afterCaculation = true;//相当于运算完毕了！
			}
			
			else if(pointer == 2)
			{
				second = (second - 0) * (second - 0);
				inputTemp = document.getElementById("textbox");
				inputTemp.value = second;
				afterCaculation = false;//不能相当于运算完毕
			}
		}

		if(one == "1/x")//倒数
		{
			if(first == 0)
			{//不能为0
				inputTemp = document.getElementById("textbox");
				inputTemp.value = "Error";
				pointer = 1;
			}
			
			else
			{//分别对一二操作数运算
				if(pointer == 1)
				{
					first = 1/(first - 0);
					inputTemp = document.getElementById("textbox");
					inputTemp.value = first;
					pointer = 1;
					afterCaculation = true;//相当于运算完毕了！
				}
				
				else if(pointer == 2)
				{
					second = 1/(second - 0);
					inputTemp = document.getElementById("textbox");
					inputTemp.value = second;
					afterCaculation = false;//不能相当于运算完毕
				}
			}
		}
		
		if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
		{
		 	inputTemp.value="Error";
		}
	}
}

function orderIn(obj)//运算啦运算啦
{
	if(inputTemp.value != "Error")
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
			inputTemp = document.getElementById("textbox");
			inputTemp.value = first;
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
			inputTemp = document.getElementById("textbox");
			inputTemp.value = first;
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
			inputTemp = document.getElementById("textbox");
			inputTemp.value = first;
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
				inputTemp = document.getElementById("textbox");
				inputTemp.value = "Error";
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
				inputTemp = document.getElementById("textbox");
				inputTemp.value = first;
				pointer = 1;
			}
		}

		if(!operator)//没点运算符字符串变为数
		{
			inputTemp.value = (inputTemp.value - 0);
		}

		afterCaculation = true;
		
		if(inputTemp.value=="NaN"||inputTemp.value=="Infinity"||inputTemp.value=="null"||inputTemp.value=="undefined")
		{
		 	inputTemp.value="Error";
		}

	}
}

