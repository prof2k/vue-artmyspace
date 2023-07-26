<template>
  <div id="join-form" data-state="0">
    <div class="overlay"></div>
    <div class="box content">
      <button class="close-modal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width="20" fill="#333">
          <path
            d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z">
          </path>
        </svg>
        <span>Close Form</span>
      </button>
      <h2>Join Us</h2>
      <form>
        <div class="names flx-cntr flx-jst-spc-btw">
          <div class="pos-rel">
            <input type="text" placeholder="Jane" id="firstname" required="required">
            <label for="firstname">Firstname</label>
          </div>

          <div class="pos-rel">
            <input type="text" placeholder="Doe" id="lastname">
            <label for="lastname">Lastname</label>
          </div>
        </div>

        <div class="pos-rel">
          <input type="email" placeholder="jane@doe.com" id="email" required="required">
          <label for="email">Email</label>
        </div>

        <div>
          <p>Do you have any artworks?</p>
          <div class="flx-cntr">
            <div class="pos-rel">
              <input type="radio" name="have-artwork" id="has-artwork-yes" value="1">
              <label for="has-artwork-yes">Yes</label>
            </div>

            <div class="pos-rel">
              <input type="radio" name="have-artwork" id="has-artwork-no" value="0">
              <label for="has-artwork-no">No</label>
            </div>
          </div>
        </div>

        <div id="form-home-or-office">
          <p></p>
          <div class="flx-cntr">
            <div class="pos-rel">
              <input type="radio" name="home-or-office" id="ishome" value="home">
              <label for="ishome">Home</label>
            </div>

            <div class="pos-rel">
              <input type="radio" name="home-or-office" id="isoffice" value="office">
              <label for="isoffice">Office</label>
            </div>
          </div>
        </div>
        <div id="form-agreement">
          <p>Clicking the Submit button below means you agree to us sending you notifications and updates about
            ArtMySpace. Don't worry. We don't spam 😊.</p>
        </div>
        <div id="join-form-submit" class="tac">
          <button class="call-to-action">Submit</button>
        </div>
      </form>
      <div id="form-success" class="tac">

      </div>
      <div id="form-fail" class="tac">
        <span class="big">Oh! Something went wrong.</span>
        <p>Please try again.</p>
        <button id="form-try-again" class="call-to-action">Try Again</button>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

/* Join Section */
#join {
	padding: 0;
	background-size: cover;
}

#join .container {
	padding: 4em 0;
}

#join .boxes {
	margin-bottom: 2em;
}

#join .box img {
	max-width: 300px;
	max-height: 300px !important;
}

#join .box {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1em;
}

#join .box img {
	display: block;
	margin: 1em;
	margin-bottom: 3em;
	filter: drop-shadow(-5px 5px 10px rgba(0,0,0,.5));
}

#join .box > div {
	display: flex;
	justify-content: center;
	align-items: center;
	/*flex-grow: 3;*/
}

#join .box > span {
	font-size: 1.2em;
	/*flex-grow: 2;*/
}

#twenty-percent-off > span {
	display: inline-block;
	background: crimson;
	color: #fff;
	font-size: 3em;
	padding: .7em;
	border-radius: 100%;
	outline: .2em dotted #fff;
	outline-offset: -10px;
	transform: rotate(-20deg);
	margin: 1em;
}

/* Footer */
footer {
	font-size: 1em;
	padding: 4em 0;
	padding-bottom: 2em;
	background: #333;
	color: #fff;
}

#footer-social {
	margin-right: 2em;
}

#footer-social a {
	display: flex;
	align-items: center;
	padding: .5em 1em;
	margin-right: .4em;
	text-decoration: none;
	color: inherit;
	border-radius: .2em;
	transition: all ease-in-out 250ms;
}

#footer-social a:hover {
	background: #fff;
	color: #333;
}

#footer-social a:hover > svg {
	fill: currentColor;
	color: #333;
}

#footer-social a > svg {
	margin-right: .5em;
	max-height: 25px;
	max-width: 25px;
	transition: inherit;
}

#gigcreative-attr a{
	text-decoration: none;
}

/* Join Us form */
body {
	/* overflow: hidden; */
}

#join-form {
	position: fixed;
	top: 0; left: 0;
	right: 0;
	height: 100vh;
	padding: 2em 2em;
	top: 0;
	z-index: 1;
	font-size: 1.1em;
	overflow: auto;
	background: rgba(0,0,0,0.8);
	box-sizing: border-box;
	visibility: hidden;
	opacity: 0;
	transition: all ease-in-out 150ms;
	z-index: 1;
}

#join-form.show {
	visibility: visible;
	opacity: 1;
}

#join-form .close-modal {
	position: absolute;
	top: 1em;
	right: 1em;
	background: none;
	border: 0;
	position: absolute;
}

#join-form .close-modal > span {
	display: none;
}

#join-form .overlay {
	position: absolute;
	top: 0; bottom: 0;
	left: 0; right: 0;
	z-index: -1;
}

#join-form .img-showcase {
	background: url("../imgs/artmyspace_logo_3d.png");
	background-position: center;
	background-size: cover;
}

#join-form .content {
	margin: auto;
	position: relative;
	max-width: 700px;
	padding: 2em 3em;
	box-sizing: border-box;
	background: #fff;
	z-index: 1;
	box-shadow: 0 10px 30px rgba(0,0,0,.9);
	transform: scale(.92);
	transition: all cubic-bezier(.09, .18, .1, 2.96) .7s;
}

@media (min-width: 710px) {
	#join-form .content {
		min-width: 700px;
	}
}

#join-form.show .content {
	transform: scale(1);
}

#join-form .content h2 {
	margin-top: 0;
}

#join-form form p {
	margin-top: 1.5em;
	font-weight: bold;
}

#join-form input {
	display: inline-block;
	position: relative;
	font-size: 1em;
	font-family: inherit;
	padding: .7em 1.2em;
	border: 2px solid #333;
	border-radius: .2em;
	width: 100%;
	box-sizing: border-box;
} 

#join-form input[type=email],
#join-form input[type=text]	{
	margin: 1.5em 0;
	background: transparent;
}


#join-form input[required] label::after {
	content: "*";
	color: #dc143c;
	background: red;
}

#join-form .names > div {
	flex-basis: 48%;
	margin-right: .1%;
}

#join-form input[type=text] + label,
#join-form input[type=email] + label {
	position: absolute;
	top: 0px;
	left: 0;
	
}	

#join-form input[type=radio] {
	display: block;
	position: absolute;
	clip: rect(0,0,0,0);
}

#join-form input[type=radio] + label {
	margin-right: 1em;
	padding-left: 1.5em;
	cursor: pointer;
}


#join-form input[type=radio]:focus + label:hover::before,
#join-form input[type=radio]:focus + label::before {
	background: #333 !important;
}

#join-form input[type=radio] + label::before {
	content: "";
	position: absolute;
	left: 0; top: -.2em;
	display: inline-block;
	width: 1em; height: 1em;
	background: #fff;
	border-radius: 100%;
	box-shadow: 0 0 0 2px #333;
	transition: all ease-in-out 250ms;
}

#join-form input[type=radio]:checked + label::before {
	background: #333;
	box-shadow: 0 0 0 2px #fff, 0 0 0 5px #333, inset 0 0 0 1px #fff;
}

#form-home-or-office {
	display: none;
}

#form-home-or-office.show {
	display: unset;
}

#form-agreement p {
	font-size: .9em;
	font-weight: normal !important;
}

#join-form-submit {
	padding: 1em 0;
}

#join-form-submit button {
	font-family: inherit;
	transition: all ease-in-out 200ms;
	cursor: pointer;
}

#form-success,
#form-fail {
	font-size: 1.2em;
}

#form-success .big,
#form-fail .big {
	font-size: 1.2em;
}

#form-fail button {
	font-size: 1.2rem;
}

/* Form content beviour */
#join-form[data-state="0"] #form-sucess, 
#join-form[data-state="0"] #form-fail {
	display: none;
}

#join-form[data-state="success"] form, 
#join-form[data-state="success"] #form-fail {
	display: none;
}

#join-form[data-state="fail"] form, 
#join-form[data-state="fail"] #form-success {
	display: none;
}
</style>