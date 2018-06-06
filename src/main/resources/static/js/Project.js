

// Function where data of time and date will be fetched from DB and stored in javascript variables which will be shown in front end //  
function dataFromDataBase()
{
     
                  var userID="testUser1";  // test user data //
                  document.getElementById('User').innerHTML = userID;
              //  Hardcoded data for match 1 //
                  var match1hour=4;
                  var match1minutes=30;
                  var match1goalscoreByTeam1=0 ;  
                  var match1goalscoreByTeam2=0 ;
                  var match1matchId=1;

                  var match1team1Name="ENGLAND";
                  var match1team2Name="SPAIN";
    
                // data insertion for match1 //

                document.getElementById('team1ScoreLabel').innerHTML = match1goalscoreByTeam1;
                document.getElementById('team2ScoreLabel').innerHTML = match1goalscoreByTeam2;

                document.getElementById('matchIdData').innerHTML = match1matchId;
              
                document.getElementById('match1TimingData').innerHTML = match1hour;
                document.getElementById('match1TimingData2').innerHTML = match1minutes;

                document.getElementById('team1Label').innerHTML = match1team1Name;
                document.getElementById('team2Label').innerHTML = match1team2Name;


                //  Hardcoded data for match 2 //
                 var match2hour=03;
                 var match2minutes=30;
                 var match2goalscoreByTeam1=0 ;  
                 var match2goalscoreByTeam2=0 ;
                 var match2matchId=2;
                 var match2team1Name="ARGENTINA";
                 var match2team2Name="GERMANY";
                 
               // data insertion for match2 //

                document.getElementById('match2team1ScoreLabel').innerHTML = match2goalscoreByTeam1;
                document.getElementById('match2Team2ScoreLabel').innerHTML = match2goalscoreByTeam2;

                document.getElementById('matchIdData2').innerHTML = match2matchId;
              
                document.getElementById('match2TimingData').innerHTML = match2hour;
                document.getElementById('match2TimingData2').innerHTML = match2minutes;

                document.getElementById('match2team1Label').innerHTML = match2team1Name;
                document.getElementById('match2Team2Label').innerHTML = match2team2Name;



                //  Hardcoded data for match 3//
                var match3hour=1;
                var match3minutes=30;
                var match3goalscoreByTeam1=0 ;  
                var match3goalscoreByTeam2=0 ;
                var match3matchId=3;
                var match3team1Name="BRAZIL";
                var match3team2Name="PORTUGAL";
              

                // data insertion for match 3 //

              document.getElementById('match3team1ScoreLabel').innerHTML = match3goalscoreByTeam1;
              document.getElementById('match3team2ScoreLabel').innerHTML = match3goalscoreByTeam2;

              document.getElementById('matchIdData3').innerHTML = match3matchId;

              document.getElementById('match3TimingData').innerHTML = match3hour;
              document.getElementById('match3TimingData2').innerHTML = match3minutes;

              document.getElementById('match3team1Label').innerHTML = match3team1Name;
              document.getElementById('match3team2Label').innerHTML = match3team2Name;

     
              
            //TIME-BASED DISABILITY OF MATCH PREDICTIONS //
				      var d = new Date();
				      var m = d.getMinutes();
				      var h = d.getHours();
				
				      if(h == '0') {h = 24}
				      
				      var currentTime = h+"."+m;
				      console.log(currentTime);
				      
				      var currentTimeObject = new Date();
				      currentTimeObject.setHours(currentTime);
				
				      var hour1=match1hour+12;
				      var hour2=match2hour+12;
				      var hour3=match3hour+12;
				
				      //Create date object and set the time to that
				
				      // time of 1st match //
				      var match1TimeObjectFromDB = new Date(currentTimeObject);
				      match1TimeObjectFromDB.setHours(hour1,match1minutes);
				      console.log(match1TimeObjectFromDB);
				      console.log(currentTimeObject);
				      
				
				      // time of 2nd match //
				      var match2TimeObjectFromDB = new Date(currentTimeObject);
				      match2TimeObjectFromDB.setHours(hour2,match2minutes);
				
				       // time of 3rd  match //
				       var match3TimeObjectFromDB = new Date(currentTimeObject);
				       match3TimeObjectFromDB.setHours(hour3,match3minutes);
				    
			       
			       
			      
			
				
			        if((currentTimeObject > match1TimeObjectFromDB)&&(currentTimeObject > match2TimeObjectFromDB)&&(currentTimeObject > match3TimeObjectFromDB))
				       {
			        	     alert('Sorry !!!! All matches have already started..See you tomorrow.');
			        	     document.getElementById("t1").disabled = true;
				             document.getElementById("t2").disabled = true;
				             document.getElementById("t3").disabled = true;
				             document.getElementById("t4").disabled = true;
				             document.getElementById("t5").disabled = true;
				             document.getElementById("t6").disabled = true;
				       }  
			        
			
				        else if((currentTimeObject > match1TimeObjectFromDB)&&(currentTimeObject > match2TimeObjectFromDB))
					 	      {
					      	   alert('Match 1 and 2 already started');
					 	       document.getElementById("t1").disabled = true;
					           document.getElementById("t2").disabled = true;
					           document.getElementById("t3").disabled = true;
					           document.getElementById("t4").disabled = true;
					     	  }
				  
				       
				        else if(currentTimeObject > match1TimeObjectFromDB)
				              {
				                alert('Match 1 already started');
				                document.getElementById("t1").disabled = true;
				                document.getElementById("t2").disabled = true;
				              }
				  
			       
			            else if(currentTimeObject > match2TimeObjectFromDB)
			              {
			                alert('Match 2 already started');
			                document.getElementById("t3").disabled = true;
			                document.getElementById("t4").disabled = true;
			              }
			
			
			           else if(currentTimeObject > match3TimeObjectFromDB)
			              {
			                alert('Match 3 already started');
			                document.getElementById("t5").disabled = true;
			                document.getElementById("t6").disabled = true;
			              }
			
			         
			      
			         else if((currentTimeObject < match1TimeObjectFromDB)&&(currentTimeObject < match2TimeObjectFromDB)&&(currentTimeObject < match3TimeObjectFromDB))
			          {
			            alert("All Matches will start... Give your prediction");
			           
			          }
}

      

