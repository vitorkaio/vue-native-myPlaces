// Cor padrão do app.
export const primaryColor = '#42b983';

// Cor das bordas da navbar.
export const navbarBorderColor = '#dddddd';
// export const navbarBorderColor = '#ebebeb';


// Cor de fundo das telas.
export const pagesColor = 'whitesmoke';

// Gera cor aleatoriamente.
export const getRandomColor = () => {
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}