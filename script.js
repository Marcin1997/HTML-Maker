/*

const elements = ['b', 'span', ['a', 'text'], 'dasdasdasdasd', ['div'], 'text', ['ol', 'li']]

function elementor() {
    const body = document.querySelector('body')

    const tagOne = document.createElement(elements[0])
    body.appendChild(tagOne)


    elements.forEach((e) => {
        for (let i = 1; i < e.length; i++) {


            if (Array.isArray(elements[i])) {
                console.log(elements[i])
                

            } else {
                let tag = elements[i]

                tagOne.innerText = elements[i]
            }



        }
    })



}
elementor()



*/













// Create an array to generate HTML elements
const array = [['div', ['h1', 'Website'], ['p', 'lorem ipsum'], ['h2', 'Smaller Heading'], ['p', 'paragraph', ['b', 'lsldasdasd']], ['footer', 'goodbye']]]

// Execute the createHTML function for each element inside the array.
array.forEach(function (e) {

    createHTML(e);

})

function createHTML(e) {
    //get the body element and append the first tag to it
    const body = document.querySelector('body')
    var tag = document.createElement(e[0]);
    body.appendChild(tag)
    e.splice(1).forEach(function (ee) {
        // Check which sections of the array are nested arrays and create an element appending to it
        if (Array.isArray(ee)) {
            tag.appendChild(createHTML(ee));
        }
        // If the element is not a nested array, treat it as text
        else {
            tag.innerHTML = ee
        }
    })
    return tag
}



