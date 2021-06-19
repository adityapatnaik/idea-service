import {Idea} from '../route/route';

interface Service {
    getIdeas: (id:string)=> Promise<Object | string>
    delIdeas: (id:string)=> Promise<Object | string>
    addIdeas: (idea:Idea)=> Promise<Object | string>
    updateIdeas: (id:string,idea:Idea)=> Promise<Object | string>
}

const service : Service = {

    getIdeas: async (id:string)=>{
        return `Idea with id: ${id} found!`
    },
    delIdeas: async (id:string)=>{

        return `Idea with id:${id} deleted!`
    },
    addIdeas: async (idea:Idea)=>{

        return `Added Idea: ${Object.entries(idea)}`
    },
    updateIdeas: async (id:string, idea:Idea)=>{

        return `Updated Idea: ${Object.entries(idea)}`
    },



}

export default service;