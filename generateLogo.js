class Circle {
    static generateCircleLogo(data) {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${data.color}" />
      </svg>
`
    }
}

class Triangle {
    static generateTriangleLogo(data) {
        return `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="${data.color}" />
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