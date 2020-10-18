
const cursos = [
    {
        titulo: 'jama jama jjojoj',
        tecnologia: 'ES6 rules',
    },
    {
        titulo: 'React rules',
        tecnologia: 'ES5 not tha much',
    },
    {
        titulo: 'graphql rules',
        tecnologia: 'EmC braking bad',
    },
    {
        titulo: 'The goddess of my life',
        tecnologia: 'author unknown',
    },
]



//resolvers

const resolvers = {
    Query: {
        obtenerCursos: () => cursos,
        obtenerTecnologia: () => cursos
    }
}

module.exports = resolvers;