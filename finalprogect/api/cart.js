// import { api } from "../config/api.js"

//   export const cartsmethod ={
//     getAll: async () => {
//         let req = await fetch(api.products);
//         let res = await req.json();
//         return res;
//       },
//       post: async (data) => {
//         try {
//           const response = await fetch(api.products, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//           });
      
//           const resData = await response.json();
//           console.log("Response from server:", resData);
//         } catch (error) {
//           console.error("Error posting data:", error);
//         }
//       }
//       ,
//       update: async (id,data)=>{
//         await fetch(`${api.products}/${id}`, {
//           method: "PATCH",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(data),
//         })
//       },

//       delete: async (id) => {
//         try {
//           const response = await fetch(`/api/cart/${id}`, {
//             method: 'DELETE',
//           });
//           if (!response.ok) {
//             throw new Error('Failed to delete item');
//           }
//           return await response.json();
//         } catch (error) {
//           console.error('Error deleting item:', error);
//         }
//       },
// }


import { api } from "../config/api.js";

export const cartsmethod = {
  getAll: async () => {
    let req = await fetch(api.carts); // <-- Correct endpoint
    let res = await req.json();
    return res;
  },

  getbyid: async (id) => {
    try {
      const res = await fetch(`${api.carts}/${id}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (err) {
      return null;
    }
  },

  post: async (data) => {
    try {
      const response = await fetch(api.carts, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  },

  update: async (id, data) => {
    return await fetch(`${api.carts}/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },

  delete: async (id) => {
    try {
      const response = await fetch(`${api.carts}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete item");
      return await response.json();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  },
};
