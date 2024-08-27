//your JS code here. If required.

document.getElementById('signup-form').addEventListener('submit',(e)=>{

	e.preventDefault();

	const name=document.getElementById('name').value;
	const email=document.getElementById('email').value;
	const password=document.getElementById('password').value;
	const conPassword=document.getElementById('confirm-password').value;

	if(password===conPassword){

		sessionStorage.setItem('name',name)
		sessionStorage.setItem('email',email)
		sessionStorage.setItem('password',password)

				alert('Sign up successful!')
		

		
	}
	else{
		alert('Password do not match')
	}
	
})
