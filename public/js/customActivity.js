    var connection = new Postmonger.Session();

    connection.trigger('ready');

    connection.on('initActivity', initialize);
    
    connection.on('clickedNext', save);
   
    function initialize(data)
    {
        document.getElementById('congress').value = JSON.stringify(data,null,2);
    }
        
    function save()
    {
        var configuration = JSON.parse(document.getElementById('congress').value);
        connection.trigger('updateActivity',configuration);
    }
