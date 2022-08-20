function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68ayAtXK6XM":
        Script1();
        break;
      case "5VGLA1o4PXC":
        Script2();
        break;
      case "5qFDWAUeOG4":
        Script3();
        break;
      case "6hkwFVm2jS3":
        Script4();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var Num= player.GetVar("NumericEntry");
var Num1= player.GetVar("NumericEntry1");
var Num2= player.GetVar("NumericEntry2");
var Num3= player.GetVar("NumericEntry3");


Corrd = (1+Math.sqrt(Num*Num3/Num1/Num2));
Corrp = (Math.PI/Corrd);
Corr = (Math.cos(Corrp));


player.SetVar("Correlation",Corr);

}

function Script2()
{
  var player = GetPlayer();
var Num= player.GetVar("NumericEntry");
var Num1= player.GetVar("NumericEntry1");
var Num2= player.GetVar("NumericEntry2");
var Num3= player.GetVar("NumericEntry3");


Corrd = (1+Math.sqrt(Num*Num3/Num1/Num2));
Corrp = (Math.PI/Corrd);
Corr = (Math.cos(Corrp));


player.SetVar("Correlation",Corr);

}

function Script3()
{
  var player = GetPlayer();
var Num= player.GetVar("NumericEntry");
var Num1= player.GetVar("NumericEntry1");
var Num2= player.GetVar("NumericEntry2");
var Num3= player.GetVar("NumericEntry3");


Corrd = (1+Math.sqrt(Num*Num3/Num1/Num2));
Corrp = (Math.PI/Corrd);
Corr = (Math.cos(Corrp));


player.SetVar("Correlation",Corr);

}

function Script4()
{
  var player = GetPlayer();
var Num= player.GetVar("NumericEntry");
var Num1= player.GetVar("NumericEntry1");
var Num2= player.GetVar("NumericEntry2");
var Num3= player.GetVar("NumericEntry3");


Corrd = (1+Math.sqrt(Num*Num3/Num1/Num2));
Corrp = (Math.PI/Corrd);
Corr = (Math.cos(Corrp));


player.SetVar("Correlation",Corr);

}

