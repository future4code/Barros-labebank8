import {users} from "./data";
import * as type from "./type";
import  express, { Request, Response} from 'express'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
    console.log("Server is ready to be shut down\n you can press Ctrl+C")
})

app.get('/allusers', (req: Request, res: Response) => {

    try {
        if (!users) {
            throw new Error("O usuário não existe");
        }
        
        res.status(200).send(users)

    } catch (err: any) {
    console.log("Uh oh! Error: ", err.message);
    } finally {
    console.log("You're the man!");
    }
    }
)

app.post("/allusers", (req: Request, res: Response) =>{
    const{
        id,
        name,
        cpf,
        age,
        birthDate,
        balance
    } = req.body

    try{
        const newId = users.length + 1
        const newUser = {
            id: newId,
            name,
            cpf,
            age,
            birthDate,
            balance
        }
        if (newUser.age<18){ throw new Error("Menor de Idade")};
        
        
        users.push(newUser)

        res.status(200).send(users)

    } catch (err: any) {
        res.status(500).send(err.message)
    } finally {
        console.log("Comando completado");
        }
        
})