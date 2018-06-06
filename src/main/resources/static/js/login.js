
var email = "";
var password = "";

$(document).ready(function()
{
	$('#submit').click(function ()
	{
		email = $("#email").val();
		password = $("#password").val();
		  
		if( (email=='') || (password=='') || (email==null) || (password==null) )
		{
			alert("Wrong credentials");
		}
		else
		{
			validateLogin();
		}
	});
});

function validateLogin()
{
	var dataObj = {
					"email": email ,
					"password": password
	};
	
	$.ajax({
			type: "GET",
			contentType : "application/json;charset=UTF-8",
			beforeSend: function (xhr) {
	       	    xhr.setRequestHeader ("Authorization", "Basic " + btoa(email + ":" + password));
	       	},
			url: "http://localhost:8088/rest/hello/",
			data:JSON.stringify(dataObj),
		    success: function (data) 
		    {
			  alert(data);
			  window.location="http://localhost:8088/"+data;
		    },
		    error: function (data)
		    {
		      alert("error");
		    }
	       	/*,
		  dataType: dataType*/
		});
	
	/*$.ajax({
       	type: "POST",
       	contentType : "application/json;charset=UTF-8",
       	beforeSend: function (xhr) {
       	    xhr.setRequestHeader ("Authorization", "Basic " + btoa(email + ":" + password));
       	},
       	url: "http://localhost:8088/rest/hello",
       	data:JSON.stringify(dataObj),
       	cache:false,
	    success: function (data) 
	    {
		  alert(data);
		  window.location="http://localhost:8090/"+data;
	    },
	    error: function (data)
	    {
	      alert("error");
	    }
   
      });*/
}