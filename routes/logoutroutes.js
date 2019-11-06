exports.Clientslogout = function(req,res){
    //res.send(req.session)
    if (req.session.Clients) {
        // delete session object
        
        req.session.Clients  = null;
        res.send({
            "status":"Logged out"
        })
    }
}
exports.Customerlogout = function(req,res){
    //res.send(req.session)
    if (req.session.Customers) {
        // delete session object
        
        req.session.Customers  = null;
        res.send({
            "status":"Logged out"
        })
    }
    
                
}
