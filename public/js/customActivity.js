    var connection = new Postmonger.Session();

    connection.trigger('ready');

    connection.on('initActivity', initialize);
    
    connection.on('clickedNext', save);
   
    function initialize(data)
    {
        document.getElementById('configuration').value = JSON.stringify(data,null,2);
    }
        
    function save()
    {
        var configuration = JSON.parse(document.getElementById('configuration').value);
        connection.trigger('updateActivity',configuration);
    }
