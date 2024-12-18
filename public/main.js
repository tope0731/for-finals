

const select = (id) => {
    axios.get('/view_product_axios/' + id).then((response) => {
        console.log('Response data:' , response.data)

        str = ""
        str += "Name: " + response.data[0].name + "<br>"
        str += "Description: " + response.data[0].description + "<br>"
        str += "Quantity: " + response.data[0].quantity + "<br>"
        str += "Price: " + response.data[0].price + "<br>"

        document.getElementById('output').innerHTML = str

    }).catch((err) => {
        console.log('Error fetching product details: ', err)
    })
}