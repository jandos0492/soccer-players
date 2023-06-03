
'use strict';

const players = ['Lionel Messi', 'Kylian Mbappé', 'Karim Benzema', 'Erling Haaland', 'Luka Modric', 'Kevin De Bruyne', 'Robert Lewandowski', 'Vinícius Júnior', 'Thibaut Courtois', 'Mohamed Salah', 'Sadio Mané', 'Neymar', 'Harry Kane', 'Jude Bellingham', 'Casemiro', 'Achraf Hakimi', 'Antoine Griezmann', 'Federico Valverde', 'Pedri', 'Emiliano Martínez', 'Enzo Fernández', 'Bukayo Saka', 'Rafael Leão', 'Phil Foden', 'Jamal Musiala', 'Son Heung-min', 'Virgil van Dijk', 'Bruno Fernandes', 'Bernardo Silva', 'Olivier Giroud', 'Josko Gvardiol', 'Julián Álvarez', 'Christopher Nkunku', 'Alisson', 'Martin Ødegaard', 'João Cancelo', 'Gavi', 'Ángel Di María', 'Toni Kroos', 'Khvicha Kvaratskhelia', 'Joshua Kimmich', 'David Alaba', 'Yassine ‘Bono’ Bounou', 'Rúben Dias', 'Aurélien Tchouaméni', 'Theo Hernández', 'Alexis Mac Allister', 'Rodrigo De Paul', 'Sofyan Amrabat', 'Cody Gakpo', 'Cristiano Ronaldo', 'Victor Osimhen', 'Rodri', 'Ederson', 'Ilkay Gündogan', 'Antonio Rüdiger', 'Riyad Mahrez', 'Marcus Rashford', 'Luis Díaz', 'Trent Alexander-Arnold', 'Richarlison', 'Gabriel Jesus', 'Hakim Ziyech', 'Alphonso Davies', 'Marquinhos', 'Dusan Vlahovic', 'Éder Militão', 'Marcelo Brozovic', 'Ousmane Dembélé', 'Lautaro Martínez', 'Dominik Livakovic', 'Cristian Romero', 'Nicoló Barella', 'Mike Maignan', 'Thiago Silva', 'Hugo Lloris', 'Fabinho', 'Mehdi Taremi', 'Azzedine Ounahi', 'Kalidou Koulibaly', 'Lisandro Martínez', 'Darwin Núñez', 'Aleksandar Mitrovic', 'Kyle Walker', 'Raphaël Varane', 'Dayot Upamecano', 'Ciro Immobile', 'Declan Rice', 'Frenkie de Jong', 'Bruno Guimarães', 'Manuel Neuer', 'Giorgian de Arrascaeta', 'Rodrygo', 'Reece James', 'Serge Gnabry', 'Sandro Tonali', 'Andrew Robertson', 'Leroy Sané', 'Gabriel Barbosa', 'Nicolás Otamendi'];
const clubs = ['Paris Saint-Germain', 'Paris Saint-Germain', 'Real Madrid', 'Manchester City', 'Real Madrid', 'Manchester City', 'Barcelona', 'Real Madrid', 'Real Madrid', 'Liverpool', 'Bayern Munich', 'Paris Saint-Germain', 'Tottenham', 'Borussia Dortmund', 'Manchester United', 'Paris Saint-Germain', 'Atlético Madrid', 'Real Madrid', 'Barcelona', 'Aston Villa', 'Benfica', 'Arsenal', 'Milan', 'Manchester City', 'Bayern Munich', 'Tottenham', 'Liverpool', 'Manchester United', 'Manchester City', 'Milan', 'RB Leipzig', 'Manchester City', 'RB Leipzig', 'Liverpool', 'Arsenal', 'Manchester City', 'Barcelona', 'Juventus', 'Real Madrid', 'Napoli', 'Bayern Munich', 'Real Madrid', 'Sevilla', 'Manchester City', 'Real Madrid', 'Milan', 'Brighton', 'Atlético Madrid', 'Fiorentina', 'Liverpool', 'Al Nassr', 'Napoli', 'Manchester City', 'Manchester City', 'Manchester City', 'Real Madrid', 'Manchester City', 'Manchester United', 'Liverpool', 'Liverpool', 'Tottenham', 'Arsenal', 'Chelsea', 'Bayern Munich', 'Paris Saint-Germain', 'Juventus', 'Real Madrid', 'Internazionale', 'Barcelona', 'Internazionale', 'Dinamo Zagreb', 'Tottenham', 'Internazionale', 'Milan', 'Chelsea', 'Tottenham', 'Liverpool', 'Porto', 'Angers', 'Chelsea', 'Manchester United', 'Liverpool', 'Fulham', 'Manchester City', 'Manchester United', 'Bayern Munich', 'Lazio', 'West Ham', 'Barcelona', 'Newcastle', 'Bayern Munich', 'Flamengo', 'Real Madrid', 'Chelsea', 'Bayern Munich', 'Milan', 'Liverpool', 'Bayern Munich', 'Flamengo', 'Benfica'];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Players", [
      {
        name: players[0],
        age: 35,
        
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
