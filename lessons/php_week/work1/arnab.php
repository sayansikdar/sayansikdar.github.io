<?php
$NameErr="";
$EmailErr="";
$PhoneErr="";
$SexErr="";
$IntErr="";
$CountryErr="";
$AdressErr="";
$prev_name="";
$prev_email="";
$prev_sex="";
$prev_interest="";
$prev_country="";
$prev_adress="";

session_start();
 if( isset($_SESSION['name1']))
   {
     
      $NameErr=$_SESSION['name1'];
      
   }
  if(isset($_SESSION['email1']))
   {

      $EmailErr=$_SESSION['email1'];
   }
   if(isset($_SESSION['phoneno']))
   {

      $PhoneErr=$_SESSION['phoneno'];
   }
   
   if(isset($_SESSION['sexErr']))
   {

      $SexErr=$_SESSION['sexErr'];
   }
   if(isset($_SESSION['interestErr']))
   {
       $IntErr=$_SESSION['interestErr'];
   }
   if(isset($_SESSION['countryErr']))
   {
       $CountryErr=$_SESSION['countryErr'];
       
   }
   if(isset($_SESSION['addressErr']))
   {
      $AdressErr=$_SESSION['addressErr']; 
   }
   
   
   
   
   
   
  if (isset($_SESSION['counter'])) 
   {

   	$_SESSION['counter']+=1;
   }
   else
   {
       $_SESSION['counter']=1;
   }


  


   

?>


<!DOCTYPE html>
<html>
	<head>
		<title>BasicCSS</title>
		<link rel="stylesheet" type="text/css" href="arnab.css">
		<script src="myScript.js"></script>
	</head>

<body  <?php if(isset($_SESSION['phpHIT'])) echo "onload=clk('t2')" ?>>

<div class="tabs">

	<div class="tab1" id="t1">
		<h2 id="t1h2" onclick="clk('t1');"><a href="#" ><span id="tabb1">News</span></a></h2>

		<div class="con1">
			<p class="p_h1">Welcome </p>

			<p class="p_h2"> 
			Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library.Simple and effective AngularJS bindings for FusionCharts JavaScript Chariting Library. simple and effective.
			</p>		

			<p class="p_h3">
			AngularJS bindings for FusionCharts JavaScript Chariting Library.
			</p>
		</div> 

		<div class="con2"><p class="head">Latest News</p>
			<div class="image"><img src="image.jpg" alt="Image Preview"></div>
		</div>

		<a href="#"><div class="learn">LEARN MORE</div></a>

	</div>
	
	<div class="tab2" id="t2">
		<h2 id="t2h2" onclick="clk('t2');"><a href="#"><span id="tabb2">Subscribe</span></a></h2>
		<div class="wrap">
			<p class="p_h1">Subscription Form</p>



			<form method="POST" action="abc.php">

			<div class="leftcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Name</span></td>
						<td><input type="text" name="name"  class='text'  placeholder=<?php if(isset($_SESSION["name"])) echo $_SESSION["name"];?>> <span class="2x2">*<?php echo $NameErr ?></span></td>
					</tr>
					<tr>
						<td><span>Email</span></td>
						<td><input type="text" name="email"   class="text" value=<?php if(isset($_SESSION["email"])) echo $_SESSION["email"];?>> <span class="2x2">*<?php echo $EmailErr ?></span></td>
					</tr>
					<tr>
						<td><span>Mobile No.(+91)</span></td>
						<td><input type="text" name="phoneno" class="text"  maxlength="10"  id="mobile" value=<?php  if(isset($_SESSION["phnum"])) echo $_SESSION["phnum"];?>> <span class="2x2">*<?php echo $PhoneErr?></span>   &nbsp&nbsp  <div id="mobDiv"><img height="30" width="30" src="" id="mob"></div></td>
					</tr>				
					<tr>
						<td><span>Sex</span></td>
						<td><input type="radio" name="sex" value="Male">&nbsp<span>Male</span>&nbsp&nbsp&nbsp<input type="radio" name="sex" value="Female" >&nbsp<span>Female</span><span class="2x2">* <?php echo $SexErr?> </span></td>
					</tr>
					<tr>
						<td><span>Interest</span></td>
						<td>
							<input type="checkbox" name="interest" value="games" id="cb1">&nbsp<span>Games</span>&nbsp
	  						<input type="checkbox" name="interest" value="movies" id="cb2">&nbsp<span>Movie</span>&nbsp
	  						<input type="checkbox" name="interest" value="reading" id="cb3">&nbsp<span>Reading</span>
	  						<span class="2x2">*<?php echo $IntErr?></span>
  						</td>
					</tr>
				</table>
			</div>
				
			<div class="rightcon">
				<table cellspacing="6" cellpadding="6">
					<tr>
						<td><span>Country</span></td>
						<td>
							<select id="country" name="country">
								<option value=""></option>
								<!-- <option value="Afganistan">Afghanistan</option>
								<option value="Albania">Albania</option>
								<option value="Algeria">Algeria</option>
								<option value="American Samoa">American Samoa</option>
								<option value="Andorra">Andorra</option>
								<option value="Angola">Angola</option>
								<option value="Anguilla">Anguilla</option>
								<option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
								<option value="Argentina">Argentina</option>
								<option value="Armenia">Armenia</option>
								<option value="Aruba">Aruba</option>
								<option value="Australia">Australia</option>
								<option value="Austria">Austria</option>
								<option value="Azerbaijan">Azerbaijan</option>
								<option value="Bahamas">Bahamas</option>
								<option value="Bahrain">Bahrain</option>
								<option value="Bangladesh">Bangladesh</option>
								<option value="Barbados">Barbados</option>
								<option value="Belarus">Belarus</option>
								<option value="Belgium">Belgium</option>
								<option value="Belize">Belize</option>
								<option value="Benin">Benin</option>
								<option value="Bermuda">Bermuda</option>
								<option value="Bhutan">Bhutan</option>
								<option value="Bolivia">Bolivia</option>
								<option value="Bonaire">Bonaire</option>
								<option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
								<option value="Botswana">Botswana</option>
								<option value="Brazil">Brazil</option>
								<option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
								<option value="Brunei">Brunei</option>
								<option value="Bulgaria">Bulgaria</option>
								<option value="Burkina Faso">Burkina Faso</option>
								<option value="Burundi">Burundi</option>
								<option value="Cambodia">Cambodia</option>
								<option value="Cameroon">Cameroon</option>
								<option value="Canada">Canada</option>
								<option value="Canary Islands">Canary Islands</option>
								<option value="Cape Verde">Cape Verde</option>
								<option value="Cayman Islands">Cayman Islands</option>
								<option value="Central African Republic">Central African Republic</option>
								<option value="Chad">Chad</option>
								<option value="Channel Islands">Channel Islands</option>
								<option value="Chile">Chile</option>
								<option value="China">China</option>
								<option value="Christmas Island">Christmas Island</option>
								<option value="Cocos Island">Cocos Island</option>
								<option value="Colombia">Colombia</option>
								<option value="Comoros">Comoros</option>
								<option value="Congo">Congo</option>
								<option value="Cook Islands">Cook Islands</option>
								<option value="Costa Rica">Costa Rica</option>
								<option value="Cote DIvoire">Cote D'Ivoire</option>
								<option value="Croatia">Croatia</option>
								<option value="Cuba">Cuba</option>
								<option value="Curaco">Curacao</option>
								<option value="Cyprus">Cyprus</option>
								<option value="Czech Republic">Czech Republic</option>
								<option value="Denmark">Denmark</option>
								<option value="Djibouti">Djibouti</option>
								<option value="Dominica">Dominica</option>
								<option value="Dominican Republic">Dominican Republic</option>
								<option value="East Timor">East Timor</option>
								<option value="Ecuador">Ecuador</option>
								<option value="Egypt">Egypt</option>
								<option value="El Salvador">El Salvador</option>
								<option value="Equatorial Guinea">Equatorial Guinea</option>
								<option value="Eritrea">Eritrea</option>
								<option value="Estonia">Estonia</option>
								<option value="Ethiopia">Ethiopia</option>
								<option value="Falkland Islands">Falkland Islands</option>
								<option value="Faroe Islands">Faroe Islands</option>
								<option value="Fiji">Fiji</option>
								<option value="Finland">Finland</option>
								<option value="France">France</option>
								<option value="French Guiana">French Guiana</option>
								<option value="French Polynesia">French Polynesia</option>
								<option value="French Southern Ter">French Southern Ter</option>
								<option value="Gabon">Gabon</option>
								<option value="Gambia">Gambia</option>
								<option value="Georgia">Georgia</option>
								<option value="Germany">Germany</option>
								<option value="Ghana">Ghana</option>
								<option value="Gibraltar">Gibraltar</option>
								<option value="Great Britain">Great Britain</option>
								<option value="Greece">Greece</option>
								<option value="Greenland">Greenland</option>
								<option value="Grenada">Grenada</option>
								<option value="Guadeloupe">Guadeloupe</option>
								<option value="Guam">Guam</option>
								<option value="Guatemala">Guatemala</option>
								<option value="Guinea">Guinea</option>
								<option value="Guyana">Guyana</option>
								<option value="Haiti">Haiti</option>
								<option value="Hawaii">Hawaii</option>
								<option value="Honduras">Honduras</option>
								<option value="Hong Kong">Hong Kong</option>
								<option value="Hungary">Hungary</option>
								<option value="Iceland">Iceland</option> -->
								<option value="India">India</option>
								<!-- <option value="Indonesia">Indonesia</option>
								<option value="Iran">Iran</option>
								<option value="Iraq">Iraq</option>
								<option value="Ireland">Ireland</option>
								<option value="Isle of Man">Isle of Man</option>
								<option value="Israel">Israel</option>
								<option value="Italy">Italy</option>
								<option value="Jamaica">Jamaica</option>
								<option value="Japan">Japan</option>
								<option value="Jordan">Jordan</option>
								<option value="Kazakhstan">Kazakhstan</option>
								<option value="Kenya">Kenya</option>
								<option value="Kiribati">Kiribati</option>
								<option value="Korea North">Korea North</option>
								<option value="Korea Sout">Korea South</option>
								<option value="Kuwait">Kuwait</option>
								<option value="Kyrgyzstan">Kyrgyzstan</option>
								<option value="Laos">Laos</option>
								<option value="Latvia">Latvia</option>
								<option value="Lebanon">Lebanon</option>
								<option value="Lesotho">Lesotho</option>
								<option value="Liberia">Liberia</option>
								<option value="Libya">Libya</option>
								<option value="Liechtenstein">Liechtenstein</option>
								<option value="Lithuania">Lithuania</option>
								<option value="Luxembourg">Luxembourg</option>
								<option value="Macau">Macau</option>
								<option value="Macedonia">Macedonia</option>
								<option value="Madagascar">Madagascar</option>
								<option value="Malaysia">Malaysia</option>
								<option value="Malawi">Malawi</option>
								<option value="Maldives">Maldives</option>
								<option value="Mali">Mali</option>
								<option value="Malta">Malta</option>
								<option value="Marshall Islands">Marshall Islands</option>
								<option value="Martinique">Martinique</option>
								<option value="Mauritania">Mauritania</option>
								<option value="Mauritius">Mauritius</option>
								<option value="Mayotte">Mayotte</option>
								<option value="Mexico">Mexico</option>
								<option value="Midway Islands">Midway Islands</option>
								<option value="Moldova">Moldova</option>
								<option value="Monaco">Monaco</option>
								<option value="Mongolia">Mongolia</option>
								<option value="Montserrat">Montserrat</option>
								<option value="Morocco">Morocco</option>
								<option value="Mozambique">Mozambique</option>
								<option value="Myanmar">Myanmar</option>
								<option value="Nambia">Nambia</option>
								<option value="Nauru">Nauru</option>
								<option value="Nepal">Nepal</option>
								<option value="Netherland Antilles">Netherland Antilles</option>
								<option value="Netherlands">Netherlands (Holland, Europe)</option>
								<option value="Nevis">Nevis</option>
								<option value="New Caledonia">New Caledonia</option>
								<option value="New Zealand">New Zealand</option>
								<option value="Nicaragua">Nicaragua</option>
								<option value="Niger">Niger</option>
								<option value="Nigeria">Nigeria</option>
								<option value="Niue">Niue</option>
								<option value="Norfolk Island">Norfolk Island</option>
								<option value="Norway">Norway</option>
								<option value="Oman">Oman</option>
								<option value="Pakistan">Pakistan</option>
								<option value="Palau Island">Palau Island</option>
								<option value="Palestine">Palestine</option>
								<option value="Panama">Panama</option>
								<option value="Papua New Guinea">Papua New Guinea</option>
								<option value="Paraguay">Paraguay</option>
								<option value="Peru">Peru</option>
								<option value="Phillipines">Philippines</option>
								<option value="Pitcairn Island">Pitcairn Island</option>
								<option value="Poland">Poland</option>
								<option value="Portugal">Portugal</option>
								<option value="Puerto Rico">Puerto Rico</option>
								<option value="Qatar">Qatar</option>
								<option value="Republic of Montenegro">Republic of Montenegro</option>
								<option value="Republic of Serbia">Republic of Serbia</option>
								<option value="Reunion">Reunion</option>
								<option value="Romania">Romania</option>
								<option value="Russia">Russia</option>
								<option value="Rwanda">Rwanda</option>
								<option value="St Barthelemy">St Barthelemy</option>
								<option value="St Eustatius">St Eustatius</option>
								<option value="St Helena">St Helena</option>
								<option value="St Kitts-Nevis">St Kitts-Nevis</option>
								<option value="St Lucia">St Lucia</option>
								<option value="St Maarten">St Maarten</option>
								<option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
								<option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
								<option value="Saipan">Saipan</option>
								<option value="Samoa">Samoa</option>
								<option value="Samoa American">Samoa American</option>
								<option value="San Marino">San Marino</option>
								<option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
								<option value="Saudi Arabia">Saudi Arabia</option>
								<option value="Senegal">Senegal</option>
								<option value="Serbia">Serbia</option>
								<option value="Seychelles">Seychelles</option>
								<option value="Sierra Leone">Sierra Leone</option>
								<option value="Singapore">Singapore</option>
								<option value="Slovakia">Slovakia</option>
								<option value="Slovenia">Slovenia</option>
								<option value="Solomon Islands">Solomon Islands</option>
								<option value="Somalia">Somalia</option>
								<option value="South Africa">South Africa</option>
								<option value="Spain">Spain</option>
								<option value="Sri Lanka">Sri Lanka</option>
								<option value="Sudan">Sudan</option>
								<option value="Suriname">Suriname</option>
								<option value="Swaziland">Swaziland</option>
								<option value="Sweden">Sweden</option>
								<option value="Switzerland">Switzerland</option>
								<option value="Syria">Syria</option>
								<option value="Tahiti">Tahiti</option>
								<option value="Taiwan">Taiwan</option>
								<option value="Tajikistan">Tajikistan</option>
								<option value="Tanzania">Tanzania</option>
								<option value="Thailand">Thailand</option>
								<option value="Togo">Togo</option>
								<option value="Tokelau">Tokelau</option>
								<option value="Tonga">Tonga</option>
								<option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
								<option value="Tunisia">Tunisia</option>
								<option value="Turkey">Turkey</option>
								<option value="Turkmenistan">Turkmenistan</option>
								<option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
								<option value="Tuvalu">Tuvalu</option>
								<option value="Uganda">Uganda</option>
								<option value="Ukraine">Ukraine</option>
								<option value="United Arab Erimates">United Arab Emirates</option>
								<option value="United Kingdom">United Kingdom</option> -->
								<option value="United States of America">United States of America</option>
								<!-- <option value="Uraguay">Uruguay</option>
								<option value="Uzbekistan">Uzbekistan</option>
								<option value="Vanuatu">Vanuatu</option>
								<option value="Vatican City State">Vatican City State</option>
								<option value="Venezuela">Venezuela</option>
								<option value="Vietnam">Vietnam</option>
								<option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
								<option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
								<option value="Wake Island">Wake Island</option>
								<option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
								<option value="Yemen">Yemen</option>
								<option value="Zaire">Zaire</option>
								<option value="Zambia">Zambia</option>
								<option value="Zimbabwe">Zimbabwe</option> -->
							</select>
							<span class="2x2">*<?php echo $CountryErr?></span>
						</td>
					</tr>	
					<tr>
						
				
					<tr>
						<td valign="top"><span>Description</span></td>
						<td><textarea name="address" spellcheck="true"><?php if(isset($_SESSION["address"])) echo $_SESSION["address"]?> </textarea><span class="2x2">*<?php echo $AdressErr?></span></td>
					</tr>
				</table>
			</div>
			<input type="reset" value="RESET" class="button" id="reset"  />
                        <input type="submit" value="SUBSCRIBE" class="button" id="submit" <?php if(isset($_SESSION["counter"]))echo "onclick=clk('t2')"?>/>
			</form>







		</div>
		
	</div>

</div>


<?php session_unset(); ?>
</body>
</html>