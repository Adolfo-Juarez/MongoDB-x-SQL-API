import { createUserService } from "./Services.mjs";

export async function createUserController(req,res) {
    if(Object.entries(req.body).length === 0){
        res.send("No has proporcionado información para crear un usuario")
        return
    }

    const status = await createUserService(req.body)

    if(status){
        res.json({"status":false, "message":"Tu petición no cumple los parámetros"})
        return
    }
    
    res.send({"status":true, "message":"Usuario creado con éxito"})

}