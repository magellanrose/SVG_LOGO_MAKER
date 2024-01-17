class Circle {
    static generateCircleLogo(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

</svg>
`
    }
}


function generateLogo(data) {
    switch (data.shape) {
        case 'Circle':
            return Circle.generateCircleLogo(data);
            break;
        
        case 'Triangle':
            return Triangle.generateTriangleLogo(data);
            break;

        case 'Square':
                return Square.generateSquareLogo(data);
                break;
    }
}



module.exports = generateLogo;