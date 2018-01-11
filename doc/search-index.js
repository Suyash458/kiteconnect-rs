var searchIndex = {};
searchIndex["kiteconnect_rust"] = {"doc":"","items":[[3,"XKiteVersion","kiteconnect_rust","",null,null],[12,"0","","",0,null],[3,"UserAgent","","",null,null],[12,"0","","",1,null],[3,"Authorization","","",null,null],[12,"0","","",2,null],[3,"Error","","The Error type.",null,null],[12,"0","","The kind of the error.",3,null],[3,"KiteConnect","","",null,null],[4,"ErrorKind","","The kind of an error.",null,null],[13,"Msg","","A convenient variant for String.",4,null],[13,"Network","","",4,null],[13,"Io","","",4,null],[13,"Json","","",4,null],[13,"KiteException","","",4,null],[6,"Result","","Convenient wrapper around `std::Result`.",null,null],[8,"ResultExt","","Additional methods for `Result`, for easy interaction with this crate.",null,null],[10,"chain_err","","If the `Result` is an `Err` then `chain_err` evaluates the closure, which returns some type that can be converted to `ErrorKind`, boxes the original error to store as the cause, then returns a new error containing the original error.",5,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"xkiteversion"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"xkiteversion"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"xkiteversion"}],"output":{"name":"bool"}}],[11,"deref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"header_name","","",0,{"inputs":[],"output":{"name":"str"}}],[11,"parse_header","","",0,{"inputs":[{"name":"raw"}],"output":{"name":"result"}}],[11,"fmt_header","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"useragent"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"useragent"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"useragent"}],"output":{"name":"bool"}}],[11,"deref","","",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"deref_mut","","",1,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"header_name","","",1,{"inputs":[],"output":{"name":"str"}}],[11,"parse_header","","",1,{"inputs":[{"name":"raw"}],"output":{"name":"result"}}],[11,"fmt_header","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"authorization"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"authorization"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"self"},{"name":"authorization"}],"output":{"name":"bool"}}],[11,"deref","","",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"deref_mut","","",2,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"header_name","","",2,{"inputs":[],"output":{"name":"str"}}],[11,"parse_header","","",2,{"inputs":[{"name":"raw"}],"output":{"name":"result"}}],[11,"fmt_header","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",3,{"inputs":[{"name":"errorkind"},{"name":"state"}],"output":{"name":"error"}}],[11,"from_kind","","",3,null],[11,"with_chain","","",3,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"self"}}],[11,"kind","","",3,null],[11,"iter","","",3,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"chain_err","","",3,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"self"}}],[11,"backtrace","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"extract_backtrace","","",3,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"from_kind","","Constructs an error from a kind, and generates a backtrace.",3,{"inputs":[{"name":"errorkind"}],"output":{"name":"error"}}],[11,"with_chain","","Constructs a chained error from another error and a kind, and generates a backtrace.",3,{"inputs":[{"name":"e"},{"name":"k"}],"output":{"name":"error"}}],[11,"with_boxed_chain","","Construct a chained error from another boxed error and a kind, and generates a backtrace",3,{"inputs":[{"name":"box"},{"name":"k"}],"output":{"name":"error"}}],[11,"kind","","Returns the kind of the error.",3,{"inputs":[{"name":"self"}],"output":{"name":"errorkind"}}],[11,"iter","","Iterates over the error chain.",3,{"inputs":[{"name":"self"}],"output":{"name":"iter"}}],[11,"backtrace","","Returns the backtrace associated with this error.",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"chain_err","","Extends the error chain with a new entry.",3,{"inputs":[{"name":"self"},{"name":"f"}],"output":{"name":"error"}}],[11,"description","","",3,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"cause","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"errorkind"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",3,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"deref","","",3,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","A string describing the error kind.",4,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",4,{"inputs":[{"name":"str"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"string"}],"output":{"name":"self"}}],[11,"from","","",4,{"inputs":[{"name":"error"}],"output":{"name":"self"}}],[11,"new","","Constructor",6,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"self"}}],[11,"set_access_token","","Sets an access token for this instance",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"login_url","","Returns the login url",6,{"inputs":[{"name":"self"}],"output":{"name":"string"}}],[11,"request_access_token","","Request for access token",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[11,"invalidate_token","","Invalidates the access token",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"margins","","Return the account balance and cash margin details for a particular segment",6,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"holdings","","Get all holdings",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"positions","","Get all positions",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"profile","","Get user profile details",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"place_order","","Place an order",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"modify_order","","Modify an open order",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"cancel_order","","Cancel an order",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"option"}],"output":{"name":"result"}}],[11,"exit_order","","Exit a BO/CO order",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"option"}],"output":{"name":"result"}}],[11,"orders","","Get a list of orders",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"order_history","","Get the list of order history",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"trades","","Get all trades",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"order_trades","","Get all trades",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"convert_position","","Modify an open position product type",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"}],"output":{"name":"result"}}],[11,"mf_orders","","Get all mutual fund orders or individual order info",6,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"place_mf_order","","Place a mutual fund order",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"cancel_mf_order","","Cancel a mutual fund order",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"mf_sips","","Get list of mutual fund SIP's or individual SIP info",6,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"place_mf_sip","","Place a mutual fund SIP",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"option"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"modify_mf_sip","","Modify a mutual fund SIP",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"option"}],"output":{"name":"result"}}],[11,"cancel_mf_sip","","Cancel a mutual fund SIP",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"mf_holdings","","Get a list of mutual fund holdings",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"mf_instruments","","Get list of mutual fund instruments",6,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"instruments","","Retrieve the list of market instruments available to trade",6,{"inputs":[{"name":"self"},{"name":"option"}],"output":{"name":"result"}}],[11,"quote","","Retrieve quote for list of instruments",6,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"result"}}],[11,"ohlc","","Retreive OHLC and market depth for list of instruments",6,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"result"}}],[11,"ltp","","Retreive last price for list of instuments",6,{"inputs":[{"name":"self"},{"name":"vec"}],"output":{"name":"result"}}],[11,"instruments_margins","","Retreive margins provided for individual segments",6,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"historical_data","","Retreive historical data (candles) for an instument",6,{"inputs":[{"name":"self"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"},{"name":"str"}],"output":{"name":"result"}}]],"paths":[[3,"XKiteVersion"],[3,"UserAgent"],[3,"Authorization"],[3,"Error"],[4,"ErrorKind"],[8,"ResultExt"],[3,"KiteConnect"]]};
initSearch(searchIndex);
