(function  () {
	var zhuce=$('#zhuce');
	var sub=$('#sub');
	var name1=$('#userName');
	var pass1=$('#passWord');
	var denglu=$('.content');
	var zhuceb=$('#zhucec');
	var phone=$('#phone');
	var pass=$('#pass');
	var sub2=$('#sub2');
	  sub[0].onclick=function() {
	  	var a=name1[0].value;
		var b=pass1[0].value;
		$.ajax({
		type:"get",
		url:"../../php/code/denglu.php?username="+a+"&pwd="+b,
		async:true,
		success:function(obj){
           var arr=JSON.parse(obj);
           console.log(obj)
			  if (obj == 1) {
//			    alert('登录成功')
//			    window.open("../index.html")
			    window.location.assign("../index.html")
			    }else {
			      alert('密码错误');
			    }
			}
		})
		name1[0].value = '';
		pass1[0].value = '';
	 }
	  
	  sub2[0].onclick=function  () {
//			  	var judge = false
//			for (var i = 0; i < input.length; i++) {
//				judge = input[i].judge
//				if (judge == false) {
//					input[i].onblur()
//					break;
//				};
//			};
//			if (judge) {
//				var imgValue = input[3].value
//				if (imgValue != str) {
//					alert("注册成功")
//				}else{
	  	var s=phone[0].value
	  	var c=pass[0].value
		  	$.ajax({
		  	type:"get",
		  	url:"../../php/code/zhuce.php?username1="+s+"&pas="+c,
		  	async:true,
		  	success:function (obj) {
		  		var my = JSON.parse(obj)
		  		console.log(my)
		  		if (obj) {
		            	alert('恭喜你注册成功')
		            }else {
		            	alert('该手机号已被注册')
		            }
		  	}
		  });
		  phone[0].value = '';
		  pass[0].value = '';
		  	
//	};
//	}	  
	  }
	 
	  zhuce[0].onclick=function  () {
	  	if (zhuce[0].innerHTML=='登录') {
	  	denglu[0].style.display='block'
	  	zhuceb[0].style.display='none'
	  	zhuce[0].innerHTML='注册'
	  	}else{
	  	denglu[0].style.display='none'
	  	zhuceb[0].style.display='block'
	  	zhuce[0].innerHTML='登录'
	  	}
	  }
	  
	// 图片验证码数组
			var arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
			"o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4",
			"5","6","7","8","9","0"]
			var color = ["red","blue","cyan","orange","green","purple"];
			var canvas = document.getElementsByTagName("canvas")[0];
			var ctx = canvas.getContext("2d");
			var str;
			
			function random(min,max){
				return parseInt(Math.random()*(max-min+1)+min)
			}
			
			function testing(){
				str = arr[random(0,arr.length-1)]+arr[random(0,arr.length-1)]+arr[random(0,arr.length-1)]+arr[random(0,arr.length-1)];
				ctx.beginPath();
				ctx.font = '30px arial';
				ctx.strokeStyle = color[random(0,color.length-1)];
				ctx.strokeText(str,22,22)
				for (var i = 0; i < 3; i++) {
					ctx.beginPath();
					ctx.moveTo(0,random(0,33))
					ctx.lineTo(random(0,105),random(0,33));
					ctx.lineTo(random(0,105),random(0,33));
					ctx.lineTo(105,random(0,33));
					ctx.strokeStyle = color[random(0,color.length-1)];
					ctx.stroke()
				};
			}
			testing()
			canvas.onclick = function(){
				ctx.clearRect(0,0,105,33);
				testing()
			
			}
})()




var hint=document.getElementsByClassName('hint')
var UPS=document.getElementsByClassName('UPS')
var input=document.getElementsByClassName('input')
for (var i = 0; i < input.length; i++) {
	input[i].index = i;
	input[i].judge = false;
};
// 形参分别为 正则判断式数组  内容为空 为错误是弹出的信息
function judge(obj,regArr,n,f,index){
	var panduan = false
	for (var i = 0; i < regArr.length; i++) {
		panduan = regArr[i].test(obj.value)
		if (panduan == false) {
			break;
		};
	};
	if (obj.value == "") {
		hint[index].style.display = 'block';
		hint[index].style.backgroundPositionX = '-47px';
		UPS[index].innerHTML = "<span>◆</span>" + n;
		UPS[index].style.display = 'block';
		UPS[index].style.right = -UPS[index].offsetWidth - 7 + "px"
		obj.judge = false;
		setTimeout(function(){
			hint[index].style.display = 'none';
			UPS[index].style.display = 'none';
		},2500)
	}else if(panduan) {
		hint[index].style.display = 'block';
		hint[index].style.backgroundPositionX = '-24px'
		obj.judge = true;
	}else{
		hint[index].style.display = 'block';
		hint[index].style.backgroundPositionX = '-47px';
		UPS[index].innerHTML = "<span>◆</span>" + f;
		UPS[index].style.display = 'block';
		UPS[index].style.right = -UPS[index].offsetWidth - 7 + "px"
		obj.judge = false;
		setTimeout(function(){
			hint[index].style.display = 'none'
			UPS[index].style.display = 'none'
		},2500)
	}
}
input[0].onblur = function(){
	var reg = /^1[34578]{1}[0-9]{9}$/
	var arr = [reg];
	var n = "请输入您的手机号";
	var f = "请输入正确的手机号码"
	judge(this,arr,n,f,this.index);
}
input[1].onblur = function(){
	var reg = /[a-zA-Z]/g
	var reg2 = /[0-9]/g
	var reg3 = /^[0-9a-zA-Z_-]{8,16}$/g
	var arr = [reg,reg2,reg3]
	var n = "请输入密码";
	var f = "请输入6-18位数字、字母、-、_组成的密码"
	judge(this,arr,n,f,this.index);
}
input[2].onblur = function(){
	if (input[1].judge) {
		if (this.value == input[1].value) {
			hint[2].style.display = 'block';
			hint[2].style.backgroundPositionX = '-24px'
			this.judge = true;
		}else{
			hint[2].style.display = 'block';
			hint[2].style.backgroundPositionX = '-47px';
			UPS[2].innerHTML = "<span>◆</span>" + "两次密码不匹配，请重新输入";
			UPS[2].style.display = 'block';
			UPS[2].style.right = -UPS[2].offsetWidth - 7 + "px"
			this.judge = false;
			setTimeout(function(){
				hint[2].style.display = 'none'
				UPS[2].style.display = 'none'
			},2500)
		}
	}else{
		input[1].onblur();
	}
}
input[3].onblur = function(){
	var reg = /^[0-9a-zA-Z]{4}$/i
	var arr = [reg];
	var n = "请输入验证码";
	var f = "请输入四位验证码"
	judge(this,arr,n,f,this.index);
}
input[4].onblur = function(){
	if (input[0].judge) {
		var reg = /^[0-9a-zA-Z]{6}$/i
		var arr = [reg];
		var n = "请输入6位短信验证码";
		var f = "请输入6位短信验证码";
		judge(this,arr,n,f,this.index);
	}else{
		input[0].onblur()
	}
}
