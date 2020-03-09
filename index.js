/*escape button*/
$(document).keydown(function(event) { 
  if (event.keyCode == 27) { 
      $("#all123123").show();
      $("#offer123456").hide();
      $("#pizza123456").hide();
      $("#kfc123456").hide();
  }
});
/* back to top*/
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
/*validation*/


  $("#md100").hover(function(){
      $("#mdb100").show();
      
    },
    function(){
          $("#mdb100").hide();
        });
        $("#md101").hover(function(){
          $("#mdb101").show();
          
        },
        function(){
              $("#mdb101").hide();
            });
            $("#md102").hover(function(){
              $("#mdb102").show();
              
            },
            function(){
                  $("#mdb102").hide();
                });
                $("#md103").hover(function(){
                  $("#mdb103").show();
                  
                },
                function(){
                      $("#mdb103").hide();
                    });
                    $("#md104").hover(function(){
                      $("#mdb104").show();
                      
                    },
                    function(){
                          $("#mdb104").hide();
                        });
                        $("#md105").hover(function(){
                          $("#mdb105").show();
                          
                        },
                        function(){
                              $("#mdb105").hide();
                            });
                            $("#md106").hover(function(){
                              $("#mdb106").show();
                              
                            },
                            function(){
                                  $("#mdb106").hide();
                                });
                                $("#md107").hover(function(){
                                  $("#mdb107").show();
                                  
                                },
                                function(){
                                      $("#mdb107").hide();
                                    });





                                    $("#mdk100").hover(function(){
                                      $("#mdbk100").show();
                                      
                                    },
                                    function(){
                                          $("#mdbk100").hide();
                                        });
                                        $("#mdk101").hover(function(){
                                          $("#mdbk101").show();
                                          
                                        },
                                        function(){
                                              $("#mdbk101").hide();
                                            });
                                            $("#mdk102").hover(function(){
                                              $("#mdbk102").show();
                                              
                                            },
                                            function(){
                                                  $("#mdbk102").hide();
                                                });
                                                $("#mdk103").hover(function(){
                                                  $("#mdbk103").show();
                                                  
                                                },
                                                function(){
                                                      $("#mdbk103").hide();
                                                    });
                                                    $("#mdk104").hover(function(){
                                                      $("#mdbk104").show();
                                                      
                                                    },
                                                    function(){
                                                          $("#mdbk104").hide();
                                                        });
                                                        $("#mdk105").hover(function(){
                                                          $("#mdbk105").show();
                                                          
                                                        },
                                                        function(){
                                                              $("#mdbk105").hide();
                                                            });
                                                            $("#mdk106").hover(function(){
                                                              $("#mdbk106").show();
                                                              
                                                            },
                                                            function(){
                                                                  $("#mdbk106").hide();
                                                                });
                                                                $("#mdk107").hover(function(){
                                                                  $("#mdbk107").show();
                                                                  
                                                                },
                                                                function(){
                                                                      $("#mdbk107").hide();
                                                                    });

                                                                    

                                                                    $("#mdk1100").hover(function(){
                                                                      $("#mdbk1100").show();
                                                                      
                                                                    },
                                                                    function(){
                                                                          $("#mdbk1100").hide();
                                                                        });
                                                                        $("#mdk1101").hover(function(){
                                                                          $("#mdbk1101").show();
                                                                          
                                                                        },
                                                                        function(){
                                                                              $("#mdbk1101").hide();
                                                                            });
                                                                            $("#mdk1102").hover(function(){
                                                                              $("#mdbk1102").show();
                                                                              
                                                                            },
                                                                            function(){
                                                                                  $("#mdbk1102").hide();
                                                                                });
                                                                                $("#mdk1103").hover(function(){
                                                                                  $("#mdbk1103").show();
                                                                                  
                                                                                },
                                                                                function(){
                                                                                      $("#mdbk1103").hide();
                                                                                    });
                                                                                    $("#mdk1104").hover(function(){
                                                                                      $("#mdbk1104").show();
                                                                                      
                                                                                    },
                                                                                    function(){
                                                                                          $("#mdbk1104").hide();
                                                                                        });
                                                                                        $("#mdk1105").hover(function(){
                                                                                          $("#mdbk1105").show();
                                                                                          
                                                                                        },
                                                                                        function(){
                                                                                              $("#mdbk1105").hide();
                                                                                            });
                                                                                            $("#mdk1106").hover(function(){
                                                                                              $("#mdbk1106").show();
                                                                                              
                                                                                            },
                                                                                            function(){
                                                                                                  $("#mdbk1106").hide();
                                                                                                });
                                                                                                $("#mdk1107").hover(function(){
                                                                                                  $("#mdbk1107").show();
                                                                                                  
                                                                                                },
                                                                                                function(){
                                                                                                      $("#mdbk1107").hide();
                                                                                                    });
                              
function offer123(){
  $("#meat-cart").hide();
  $("#all123123").hide();
  $("#offer123456").show(1000);
  $("#pizza123456").hide();
  $("#kfc123456").hide();
}

function kfc123456(){
  $("#meat-cart").hide();
  $("#offer123456").hide();
  $("#all123123").hide();
  $("#pizza123456").hide();
  $("#kfc123456").show(1000);
}
function pizza123456(){
  $("#meat-cart").hide();
  $("#offer123456").hide();
  $("#all123123").hide();
  $("#kfc123456").hide();
  $("#pizza123456").show(1000);
}

$(".card").hover(function(){
$(this).css("opacity","0.5");
},function(){
$(this).css("opacity","1");
}
);