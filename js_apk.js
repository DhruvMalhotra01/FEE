document.getElementById('loadData').addEventListener('click',function(){
    const xhr = new XHMLHttpRequest();

    xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const data = JSON.parse(xhr.reponseText);
            letoutput = 'ul';
            data.forEach(function(post){
                output += <li><strong>${post.title}</strong>${post.body</li>;
            });
            output += '</ul>';
            document.getElementById('output').innerHTML = output;
        }
    };

    xhr.send();
})






// fetch 


document.getElementById('displayBtn').addEventListener('click',()=>{
    fetch('https://fakestoreapi.com/products')
    .then(reponse =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        Let tableBody = document.getElementById('tableData'),
            getElementByTagName('tbody')[0];
        Let rows = ' ';

        data.forEach(product = > {
            rows += 
            <tr>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td><img src="${product.image} alt = "${
                    product.title}"</td>
            </tr>;
        });

        tableBody.innerHTML  = rows;
    })
    .catch(error =>{
        console.error('There has been a problem with your fetch oerator:',error);
    });
});

