let wishListObj;

loadcountbagitem();
display();

function loadcountbagitem() {
    wishListObj = countbag.map(val => {
        return productObj.find(product => product.productId === val);
    }).filter(item => item !== undefined);
}

function remove(removeid) {
    countbag = countbag.filter(bagid => bagid != removeid);
    localStorage.setItem('countbag', JSON.stringify(countbag));
    loadcountbagitem();
    display();
    console.log(countbag);
}

function display() {
    let wishListCart = document.querySelector('#wishlist');
    let wishtotalprice = document.querySelector('#totalprice');
    let wishinnerHtml = '';
    let totalPrice = 0; // Initialize total price

    wishListObj.forEach(tableItem => {
        // Parse the price string to a float
        let price = parseFloat(tableItem.productPrice.replace('$', ''));
        
        wishinnerHtml += `
        <table width="100%">
            <tr>
                <td><i class="far fa-times-circle" onclick='remove(${tableItem.productId})'></i></td>
                <td><img src="${tableItem.productImg}" alt=""></td>
                <td>${tableItem.productName}</td>
                <td>${tableItem.productPrice}</td>
                <td><input type="number" value="1"></td>
                <td>${tableItem.productPrice}</td>
            </tr>
        </table>
        `;
        
        // Add parsed price to total
        totalPrice += price;
    });

    wishListCart.innerHTML = wishinnerHtml;

    // Clear previous total price
    wishtotalprice.innerHTML = '';

    // Display total price
    wishtotalprice.innerHTML = `<div>Total Price: $${totalPrice.toFixed(2)}</div>`;
}
