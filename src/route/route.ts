import {Router} from  'express';
import service from '../service/service';
const router = Router();


export interface Idea {
    id: string
    title:string
    desc:string
}

router.get('/:id',async (req,res) =>{
    const id: string = req.params.id;
    const message: string | Object = await service.getIdeas(id); 
    res.json({message:`Get Ideas ${message}`})
})


router.delete('/:id',async (req,res) =>{
    const id: string = req.params.id; 
    const message: string | Object = await service.delIdeas(id);
    res.json({message:`Delete Ideas ${message}`})
})

router.put('/',async (req,res) =>{
    const idea:Idea = req.body;
    const message: string | Object = await service.addIdeas(idea);
    res.json({message:message})
})


router.post('/:id',async (req,res) =>{
    const updatedIdea:Idea = req.body;
    const id: string = req.params.id;
    const message:string | Object = await service.updateIdeas(id,updatedIdea);
    res.json({message:`${id} ${message}`})
})




module.exports = router;