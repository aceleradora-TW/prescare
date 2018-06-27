htmlToPdf.convertHTMLFile('path/to/source.html', 'path/to/destination.pdf',
    function (error, success) {
       if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    }
);