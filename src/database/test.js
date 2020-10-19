const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
  /* await saveOrphanage(db, {
       
    lat: "-44.4678814",
    lng: "-22.4768271",
    name: "Deus é TUDO",
    about: "Deus habita em mim",
    whatsapp: "998500222",
    images: [
            "https://images.unsplash.com/photo-1597791366640-e91489aaf430?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"

    ].toString(), 
    instructions: "Venha como se sentir a vontade e traga muito amor",
    opening_hours: "Sempre aberto",
    open_on_weekends: "1"


   })
   */

   const selectOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectOrphanages)

   const orphanages = await db.all("SELECT * FROM orphanages WHERE id = '1'")
   console.log(orphanages)
})


