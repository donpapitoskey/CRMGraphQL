

//resolvers

const resolvers = {
    Query: {
        obtenerCurso: () => "algo"
    },
    Mutation: {
        nuevoUsuario: (_, {input},ctx) => {
            console.log(input);

            return 'Creando...'
        }
    }
}

module.exports = resolvers;