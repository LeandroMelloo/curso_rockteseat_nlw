import { Request, Response } from 'express'
import conn from '../database/connection'

class ItemsController {
    async index (req: Request, res: Response) { 
        const items = await conn('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/upload/${item.image}`
            }
        })
    
        return res.json(serializedItems);
    }
}

export default ItemsController