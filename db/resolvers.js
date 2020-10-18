const Usuario = require('../models/User');
//resolvers

const resolvers = {
    Query: {
        obtenerCurso: () => "algo"
    },
    Mutation: {
        nuevoUsuario: async (_, {input},ctx) => {
            
            const { email, password} = input;

            // Revisar Usuario registrado
            const existeUsuario = await Usuario.findOne({ email});
            console.log(existeUsuario);
            if(existeUsuario) {
                throw new Error('El usuario ya esta registrado');
            }

            //Hashear password

            //Guardar en DB

            try {
                const usuario = new Usuario(input);
                usuario.save();
                return usuario;
            } catch(error){
                console.log(error);
            }
        }
    }
}

module.exports = resolvers;