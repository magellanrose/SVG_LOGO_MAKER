class Circle {
    static generateCircleLogo(data) {
        return `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
     
     <rect width="300" height="200" fill="white" />
     
     <circle cx="150" cy="100" r="80" fill="${data.color}" />
     
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.letters}</text>

</svg>
`
    }
}



module.exports = generateLogo;