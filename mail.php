<html><?php
//mail("subtlesymbol@gmail.com","hello world","dId YoU eVeR HeAr tHe tRaGeDy oF dArTh pLaGuEiS tHe wIsE?","From: info@daikoshibu.dojo");
echo $_POST['name'].", thank you for your message. We will respond to you at ".$_POST['email']." or ".$_POST['phone'].".";
mail("daikoshibudojo@gmail.com",$_POST['name']." ".$_POST['phone'],$_POST['message'],"From:".$_POST['email']);
?>
<a href="http://24.231.182.198/Dojo/index.html?page=contact"><button id="button">← Return</button></a>
</html>
