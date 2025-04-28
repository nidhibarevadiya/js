import { api } from "../config/api.js"

  export const productmethod ={
    getAll: async () => {
        let req = await fetch(api.products);
        let res = await req.json();
        return res;
      },
      post: async (data) => {
        await fetch(api.products, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });
      },
      update: async (id,data)=>{
        await fetch(`${api.products}/${id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
      },

      delete: async (id) => {
        await fetch(`${api.products}/${id}`, {
          method: "DELETE",
        });
      },
      getbyid:async(id)=>{
        let req =await fetch(`${api.products}/${id}`)
        let res = await req.json();
        return res;
      }
}