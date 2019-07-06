document.getElementById('generate-names').addEventListener('submit' , submitData);

function submitData() {
    
    // get the form data
    const country = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    const quantity = document.getElementById('quantity').value;
    
    
    //get the request value
    let url = 'https://uinames.com/api/?';
    
    // read country name and append it to the url
    if (country !== '') {
        url += `region=${country}&`;
    }
    
    // read gender and append it to the url
    if (gender !== '') {
        url += `gender=${gender}&`;
    }
    
    // read quantity and append it to the url
    if (quantity !== '') {
        url += `amount=${quantity}&`;
    }
    
    loadData(url);
}


function loadData(url) {
    
//    // create a ajax connection
//    const xhr = new XMLHttpRequest();
//    
//    try {    //get the data from the url..
//        xhr.open('GET' , url , true);
//
//        //read the data from the response
//        xhr.onload = () => {
//            if (this.status === 200 && this.status < 400 ) {
//                // convert it into object...
//                const names = JSON.parse(this.responseText);
//
//                let content = "<h2 class='h2'>Generated names</h2>";
//                content += "<ul class='list-unstyled'>"
//                names.forEach( (name) => {
//                   content += `<li class='list-item'>${name.name}</li>`;
//                });
//                content += "</ul>";
//                document.getElementById("result").innerHTML = content;
//            } else {
//                document.getElementById("result").innerHTML = "<h4 class'h4'>Resource Limit Reached, try again</h4>";
//            }
//
//
//
//        }
//    }
//    finally {
//        document.getElementById("result").innerHTML = "<h4 class'h4'>Resource Limit Reached, try again</h4>";
//    }
//    
//    //send the ajax request
//    xhr.send();
    
    
    
//    // by using fetch api
    fetch(url)
    .then( response => response.json()) // we can write arrow function in single line without Parenthesis for single parameters 
    .then( names => {
        let content = "<h2 class='h2'>Generated names</h2>";
        content += "<ul class='list-unstyled'>"
        names.forEach( (name) => {
           content += `<li class='list-item'>${name.name}</li>`;
        });
        content += "</ul>";
        document.getElementById("result").innerHTML = content;
    })
    .catch( error => document.getElementById("result").innerHTML = "<h4 class'h4'>Resource Limit Reached, try again</h4>" )
    
}


















