const jsonServer=require('json-server')

const bookStoreServer=jsonServer.create()

const router=jsonServer.router('db.json')

const middleware=jsonServer.defaults()

bookStoreServer.use(middleware)
bookStoreServer.use(router)

const port=5000 || process.env.port

bookStoreServer.listen(port,()=>
{
    console.log(`bookstoreserver started at ${port} and waiting for the request`);
})