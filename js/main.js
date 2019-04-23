var x=0;
function closeNevbar(){
	var navbar=document.getElementById("navbar");
	var navbarContent=document.getElementById("navbarContent");
	var contul=document.getElementById("contul");
	var sph=document.getElementById("sph");
	var spa=document.getElementById("spa");
	var spr=document.getElementById("spr");
	var spac=document.getElementById("spac");
	var sps=document.getElementById("sps");
	var spc=document.getElementById("spc");
	var menusp=document.getElementById("menusp");
	var socialmedia=document.getElementById("socialMedia");
	var sectionH=document.getElementById("home-cont");
	var sectionA=document.getElementById("about-cont");
	var sectionR=document.getElementById("resume-cont");
	var sectionS=document.getElementById("special-cont");
	var sectionC=document.getElementById("contact-cont");
	var sectionAC=document.getElementById("achivement-cont");
	var imgte=document.getElementById("imgTejsEmpire");
	
	if(x==0){
		x=1;
		navbar.classList.remove("navbar1");
		navbar.classList.add("navbar-collapse1");
		
		navbarContent.classList.remove("navbar-cont1");
		navbarContent.classList.add("navbar-cont-collapse1");
		
		contul.classList.remove("navbar-cont-ul1");
		contul.classList.add("navbar-cont-ul-collapse1");
		
		sph.classList.remove("navbar-cont-text1");
		sph.classList.add("navbar-cont-text-collapse1");
		
		spa.classList.remove("navbar-cont-text1");
		spa.classList.add("navbar-cont-text-collapse1");
		
		spr.classList.remove("navbar-cont-text1");
		spr.classList.add("navbar-cont-text-collapse1");
		
		spac.classList.remove("navbar-cont-text1");
		spac.classList.add("navbar-cont-text-collapse1");
		
		sps.classList.remove("navbar-cont-text1");
		sps.classList.add("navbar-cont-text-collapse1");
		
		spc.classList.remove("navbar-cont-text1");
		spc.classList.add("navbar-cont-text-collapse1");
		
		menusp.classList.remove("closed-menu1");
		menusp.classList.add("open-menu1");
		
		socialmedia.classList.remove("social-media1");
		socialmedia.classList.add("social-media-collapse1");
		
		imgte.classList.remove("cont-img-tejsempire");
		imgte.classList.add("cont-img-tejsempire-collapse");

		sectionH.classList.add("closed-menu-section1");

		sectionA.classList.add("closed-menu-section1");
		
		sectionR.classList.add("closed-menu-section1");
		
		sectionS.classList.add("closed-menu-section1");
		
		sectionC.classList.add("closed-menu-section1");
		
		sectionAC.classList.add("closed-menu-section1");

	}
	else{	
		x=0;
		navbar.classList.add("navbar1");
		navbar.classList.remove("navbar-collapse1");
		
		navbarContent.classList.add("navbar-cont1");
		navbarContent.classList.remove("navbar-cont-collapse1");
		
		contul.classList.add("navbar-cont-ul1");
		contul.classList.remove("navbar-cont-ul-collapse1");
		
		sph.classList.add("navbar-cont-text1");
		sph.classList.remove("navbar-cont-text-collapse1");
		
		spa.classList.add("navbar-cont-text1");
		spa.classList.remove("navbar-cont-text-collapse1");
		
		spr.classList.add("navbar-cont-text1");
		spr.classList.remove("navbar-cont-text-collapse1");
		
		spac.classList.add("navbar-cont-text1");
		spac.classList.remove("navbar-cont-text-collapse1");
		
		sps.classList.add("navbar-cont-text1");
		sps.classList.remove("navbar-cont-text-collapse1");
		
		spc.classList.add("navbar-cont-text1");
		spc.classList.remove("navbar-cont-text-collapse1");
		
		menusp.classList.add("closed-menu1");
		menusp.classList.remove("open-menu1");
		
		socialmedia.classList.add("social-media1");
		socialmedia.classList.remove("social-media-collapse1");

		imgte.classList.add("cont-img-tejsempire");
		imgte.classList.remove("cont-img-tejsempire-collapse");

		sectionH.classList.remove("closed-menu-section1");

		sectionA.classList.remove("closed-menu-section1");
		
		sectionR.classList.remove("closed-menu-section1");
		
		sectionC.classList.remove("closed-menu-section1");
		
		sectionS.classList.remove("closed-menu-section1");
		
		sectionAC.classList.remove("closed-menu-section1");

	}
}

window.onscroll = function() {scrollFunction(); scrollFunction2();};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("specialBar").style.top = "0";
  } else {
    document.getElementById("specialBar").style.top = "-100px";
  }

 
}

function scrollFunction2(){
	if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400){
		document.getElementById("specialText").innerHTML = "Video Editing";
	}
	else{
			if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
				document.getElementById("specialText").innerHTML = "Android Devlopment";
			}
			else{
				document.getElementById("specialText").innerHTML = "PhotoShop Creation";
		}
	}
}


