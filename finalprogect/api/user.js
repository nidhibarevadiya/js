const Baseurl = "http://localhost:3000/users";

const userMethod = {
    create: async (data) => {
        await fetch(Baseurl, {
            method: "POST",
            header: {
                "contect type": "application/json",
            },
            body: JSON.stringify(data)
        })
             },
        getAll: async () => {
            let req = await fetch(Baseurl);
            return await req.json();
                
        },
        delete : async (id) => {
            await fetch(`${Baseurl}/${id}`, {
                method: "DELETE",
            })
        },

        login: async (user) =>{
            let req= await fetch(`${Baseurl}?email=${user.email}&password=${user.password}`);
            let res =await req.json()
            return res 

        }
                
   
}


export default userMethod;