const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(request, response) {
        return response.render('index');
    },


    async orphanege(request, response) {

        try {
            Database.then(async db => {

                const id = request.query.id;

                const results = await db.all(`SELECT * FROM orphanages WHERE id = ${id}`)
                const orphanage = results[0]

                orphanage.images = orphanage.images.split(",")
                orphanage.fisthImage = orphanage.images[0]
                if (orphanage.open_on_weekends == 0) {
                    orphanage.open_on_weekends = false
                } else {
                    orphanage.open_on_weekends = true
                }


                return response.render('orphanege', { orphanage });
            })

        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados')

        }
    },

    async orphaneges(request, response) {
        try {
            Database.then(async db => {

                const orphanages = await db.all("SELECT * FROM orphanages")
                return response.render('orphaneges', { orphanages })
            })


        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados')

        }

    },

    createOrphanege(request, response) {
        return response.render('create-orphanege');
    },

    async saveOrphanage(request, response) {
        const field = request.body

        if (Object.values(field).includes('')) {
            return response.send('Todos os campos devem ser preenchidos')
        }

        try {

            const db = await Database
            await saveOrphanage(db, {
                lat: field.lat,
                lng: field.lng,
                name: field.name,
                about: field.about,
                whatsapp: field.whatsapp,
                images: field.images.toString(),
                instructions: field.instructions,
                opening_hours: field.opening_hours,
                open_on_weekends: field.open_on_weekends

            })

            return res.redirect('/orphaneges')

        } catch (err) {
            console.log(err)
            return response.send('Erro ao cadastrar orfanato')
        }

    }

}