window.onload=function(){
	
	var Pop_box=document.getElementById("star_list")
	var i=0;
	
	var Pop=document.getElementById("star_list").getElementsByTagName("ul")		
	
	var oSearchBox=document.getElementById("search_box")
	var oSearchInput=document.getElementById("search_input")
	var oSelection=document.getElementById("dropdown_selection")
	var oSearchBtn=document.getElementById("search_btn")
	var oInput1 = document.getElementById("input1");
	var oInput2 = document.getElementById("input2");
	var oJdNav = document.getElementById("jd_nav").getElementsByTagName("a")
	
	var jd1=document.getElementById("jd1")
	var jd2=document.getElementById("jd2")
	var jd3=document.getElementById("jd3")
	var jd4=document.getElementById("jd4")
	 jd1.style.display="block";
	for (var i = 0; i < oJdNav.length; i++) {
		oJdNav[i].index = i;
        oJdNav[i].onmousemove = function(){
            for(var j = 0;j<oJdNav.length;j++){
                oJdNav[j].className="";
               jd1.style.display="none";
               jd2.style.display="none";
               jd3.style.display="none";
               jd4.style.display="none";
            }
            this.className="active";
          	if(this.index==0){jd1.style.display="block";}
          	if(this.index==1){jd2.style.display="block";}
          	if(this.index==2){jd3.style.display="block";}
          	if(this.index==3){jd4.style.display="block";}
          
            
           
        }
    }
	
	
	
	/************************************search*******************************************************/
	oSearchInput.onclick=function(){
		oSearchBox.style.borderColor="#FF6700";
		oSelection.style.display="block";
		oSearchBtn.style.borderColor="#FF6700";
		oInput1.style.display="none";
		oInput2.style.display="none";
	}
	oSearchInput.onblur=function(){
		oSearchBox.style.borderColor="#E0E0E0";
		oSelection.style.display="none";
		oSearchBtn.style.borderColor="#E0E0E0";
		oInput1.style.display="block";
		oInput2.style.display="block";
		
	}
	
	/************************************明星产品：点击*******************************************************/	
	function Tab(aa,bb){
			var S_btn=document.getElementById(aa).getElementsByTagName("a")
			var Pop=document.getElementById(bb).getElementsByTagName("ul")//获取id名称为List里面的li标签的集合
			var i=0;
			Pop[i].style.display="block";
			S_btn[i].className="disabled_btn"
			S_btn[i+1].className="abled_btn";
				while(i<Pop.length){
					S_btn[i].index=i
					S_btn[i].onclick=function(){
						var i=0;
						while(i<Pop.length){
							Pop[i].style.display="none"
							
							S_btn[i].className="abled_btn"
							i++
						}
					 Pop[this.index].style.display="block";
					 this.className="disabled_btn"
					}
					i++
				}
			}
			Tab("scroll_btn","star_list")
	var S_btn=document.getElementById("scroll_btn").getElementsByTagName("a")
	var Pop=document.getElementById("star_list").getElementsByTagName("ul")
	var j=0;
	function slide(){
		var e=j
			j<Pop.length-1?j++:j=0
			Pop[e].style.display="none";
			Pop[j].style.display="block";
			S_btn[e].className="abled_btn";
			S_btn[j].className="disabled_btn";	
	}		
	var time2=setInterval(slide,2000)
			Pop_box.onmousemove=function(){
				clearInterval(time2)
			}
			Pop_box.onmouseout=function(){
				clearInterval(time2)
				time2=setInterval(slide,2000)
			}
	
	/*************banner开始************/
	var Dot=document.getElementById("dot").getElementsByTagName("a")
	var List=document.getElementById("banner_pic").getElementsByTagName("li")
	var Left=document.getElementById("left")
	var Right=document.getElementById("right")
	var box=document.getElementById("banner")
	/***********************************圆点点击*********************************************/	
	for (var i = 0; i < Dot.length; i++) {
        Dot[i].index = i;
        Dot[i].onclick = function(){
            for(var j = 0;j<Dot.length;j++){
                Dot[j].className="";
                List[j].style.display="none"
            }
            this.className="active";
            List[this.index].style.display="block"
        }
    }	

	
	/*********************************banner点击/轮播***********************************************/	
			/*function play(){
				
				var e=i
				i<List.length-1?i++:i=0
				List[e].style.display="none"
				List[i].style.display="block"
				Dot[e].className="";
				Dot[i].className="active";
				
			
			}*/
			function play(bool){
        		for(var i = 0;i<Dot.length;i++){
            		if(Dot[i].className=="active"){
                		var index = i;
                		break;
            		}
        		}
        		bool?(index == 0? index=Dot.length-1:index--):(index ==Dot.length-1? index= 0:index++);
        		for(var j = 0;j<Dot.length;j++){
            		Dot[j].className="";
            		List[j].style.display="none"
        		}
        		Dot[index].className="active";
        		List[index].style.display="block"
        		}

			Right.onclick=function(){
				
				play(false);
				
			}
			
			
			Left.onclick=function(){
				
				play(true);
				
			}
			
			var time=setInterval(function(){play(false);},2000)
			box.onmousemove=function(){
				clearInterval(time)
			}
			box.onmouseout=function(){
				clearInterval(time)
				time=setInterval(function(){play(false);},2000)
			}

	
	//var List=document.getElementById("banner_pic").getElementsByTagName("li")
	//var Btn=document.getElementById("dot").getElementsByTagName("a")

/*var t=document.getElementById("banner_pic").getElementsByTagName("li")
        var p=document.getElementById("dot").getElementsByTagName("a")
        var lbt=document.getElementById("banner")
        var l=document.getElementById("left")
        var r=document.getElementById("right")
        var i=0
        var j=0
        t[i].style.display="block"
        p[i].className="active"
        while(i< t.length) {
            p[i].index = i
            p[i].onclick = function () {
                var i = 0
                j=this.index
                while (i < t.length) {
                    t[i].style.display = "none"
                    p[i].className = ""
                    i++
                }
                t[this.index].style.display = "block"
                this.className = "active"
            }
            i++
        }
        function play(){
            if(j< t.length-1){
                t[j].style.display="none"
                p[j].className = ""
                t[j+1].style.display="block"
                p[j+1].className = "active"
                j=j+1
            }
            else{
                for(j=0;j< t.length;j++){
                    t[j].style.display="none"
                    p[j].className = ""
                }
                j=0;
                t[j].style.display="block"
                p[j].className = "active"
            }
        }
        r.onclick=function(){
            play();
        }
        l.onclick=function(){
            if(j>0) {
                t[j].style.display = "none"
                p[j].className = ""
                t[j-1].style.display = "block"
                p[j-1].className = "active"
                j = j - 1
            }
            else{
                for(j=0;j< t.length-1;j++){
                    t[j].style.display="none"
                    p[j].className = ""
                }
                j= t.length-1
                t[j].style.display="block"
                p[j].className = "active"
            }
        }
        time=setInterval(play,5000)
        lbt.onmousemove=function(){clearInterval(time)}
        lbt.onmouseout=function(){time=setInterval(play,5000)}*/

	/********/
	/*var i=0,f=0
	List[i].style.display="block";
	Btn[f].className="active"
		while(f<Btn.length){
				Btn[f].index=f
				Btn[f].onclick=function(){
					i=this.index              //点击的时候修改i，并且传到下面的方法
					var f=0
					while(f<Btn.length){
						Btn[f].className=""
						List[f].style.display="none";	
						f++
					}
					this.className="active"
					List[this.index].style.display="block";
				}
				f++
			}
			
			function play(){
				var e=i
				i<List.length-1?i++:i=0
				List[e].style.display="none";
				List[i].style.display="block";
				Btn[e].className=""
				Btn[i].className="active"
			}

			Right.onclick=play
			Left.onclick=function(){
				var e=i
				i>0?i--:i=List.length-1
	           List[e].style.display="none";
				List[i].style.display="block";		
				Btn[e].className=""
				Btn[i].className="active"
			}
			
			var time=setInterval(play,1000)
			box.onmousemove=function(){
				clearInterval(time)
			}
			box.onmouseout=function(){
				time=setInterval(play,1000)
			}*/

	

									/*************banner结束************/	
}
