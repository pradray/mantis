$(document).ready(function()
	{
	  $('#buttonSubmit').click(function ()
			  {
					
		        alert("ajax called");
		  
		       // values to be sent //
		  
		        // Match 1 Data //
                var matchId1=$("#matchIdData").text();
                var userID1=$("#User").text();
                var match1firstTeamName= $("#team1Label").text();
                var match1secondTeamName= $("#team2Label").text();
                var match1firstTeamScore=$("#t1").val(); 
                var match1secondTeamScore=$("#t2").val();
                var match1points=0 ;   // to be called form dataBase//
                var firstTeamFinalScore=$("#team1ScoreLabel").text();
                var secondTeamFinalScore=$("#team2ScoreLabel").text();
                var match1Hour=$("#match1TimingData");
                var match1Minutes=$("#match1TimingData2");
                var match1Time=match1Hour+":"+match1Minutes;
                
                
                
                
                
                
                // Match 2 Data //
                var matchId2=$("#matchIdData2").text();
                var match2firstTeamName= $("#match2team1Label").text();
                var match2secondTeamName= $("#match2Team2Label").text();
                var match2firstTeamScore=$("#t3").val();
                var match2secondTeamScore=$("#t4").val();
                var match2points=12;   // to be called form dataBase//
                var match2Hour=$("#match2TimingData");
                var match2Minutes=$("#match2TimingData2");
                var match2Time=match2Hour+":"+match2Minutes;
           
                // Match 3 Data //
                var matchId3=$("#matchIdData3").text();
                var match3firstTeamName= $("#match3team1Label").text();
                var match3secondTeamName= $("#match3team2Label").text();
                var match3firstTeamScore=$("#t5").val();
                var match3secondTeamScore=$("#t6").val();
                var match3points=10 ;   // to be called form dataBase//
                var match3Hour=$("#match3TimingData");
                var match3Minutes=$("#match3TimingData2");
                var match3Time=match3Hour+":"+match3Minutes;
               
          
                // data to be sent to rest controller //
		        var dataObj={
	                              "match1ID":matchId1,
	                              "userID":userID1,
	                              "match1firstTeamName":match1firstTeamName,
	                              "match1secondTeamName":match1secondTeamName,
	                              "match1firstTeamPredictedScore":match1firstTeamScore,
	                              "match1secondTeamPredictedScore":match1secondTeamScore,
	                              "match1firstTeamFinalScore":firstTeamFinalScore,
	                              "match1secondTeamFinalScore":secondTeamFinalScore,  
	                              "match1points":33,
                                  "match2ID":matchId2,
	                              "match2firstTeamName":match2firstTeamName,
	                              "match2secondTeamName":match2secondTeamName,
	                              "match2firstTeamPredictedScore":match2firstTeamScore,
	                              "match2secondTeamPredictedScore":match2secondTeamScore,
	                              "match2firstTeamFinalScore":firstTeamFinalScore,
	                              "match2secondTeamFinalScore":secondTeamFinalScore,  
	                              "match2points":match2points, 
	                              "match3ID":matchId3,
	                              "match3firstTeamName":match3firstTeamName,
	                              "match3secondTeamName":match3secondTeamName,
	                              "match3firstTeamPredictedScore":match3firstTeamScore,
	                              "match3secondTeamPredictedScore":match3secondTeamScore,
	                              "match3firstTeamFinalScore":firstTeamFinalScore,
	                              "match3secondTeamFinalScore":secondTeamFinalScore,  
	                              "match3points":21,


                            }
		  
                  console.log(dataObj);
		        
		  
		       // ajax call to rest api //
		            $.ajax({
					       	type: "POST",
					       	contentType : "application/json;charset=UTF-8",
					       	url: "http://localhost:8090/recievePrediction",
					       	data:JSON.stringify(dataObj),
					       	cache:false,
						    success: function (data) 
						    {
							  alert("Success");
						    },
						    error: function (data)
						    {
						      alert("error");
						    }
					   
					      });
				     
			  });
	});