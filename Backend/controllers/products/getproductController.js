const productCollection = require("../../modules/productSchema");
const mongoose = require("mongoose");
const productcontroller = async (req, res) => {
    try {
        const { id, category, sub_category, name , rating,keyword} = req.params;
        let products;
        if (id ) {
            products = await productCollection.findById(id);
        }
        // else if (sub_category) {
        //     const searchsubcategory = sub_category.toLowerCase();
        //     products = await productCollection.find({ sub_category: { $regex: new RegExp(searchsubcategory, "i") } });
        // }
        else if (sub_category) {
            const searchsubcategory = sub_category.toLowerCase();
           
    
            if(req.path.includes("/lowtohigh")){
                products = await productCollection
                .find({
                    sub_category:{$regex:new RegExp(searchsubcategory,"i")},
                })
                .sort({new_price:1});
            } else if(req.path.includes("/hightolow")){
                products =await productCollection
                .find({
                    sub_category:{$regex:new RegExp(searchsubcategory,"i")},
                })
                .sort({new_price:-1});
            } else {
                products = await productCollection.find({ sub_category: { $regex: new RegExp(searchsubcategory, "i") } });
            }
        
        }

        else if (name) {
            const searchname = name.toLowerCase();
            
            if(req.path.includes("/asc")){
            products =  await productCollection.find().sort({name:1})
        }
        else if((req.path.includes("/desc"))) {
            products =  await productCollection.find().sort({name:-1})
        }}

        else if (keyword) {
            const searchkeyword = keyword.toLowerCase();
            products =  await productCollection.find({
                $or:[
                    {name:{$regex:new RegExp(searchname,"i")}},
                    {sub_category: { $regex: new RegExp(searchsubcategory, "i") } },
                    {category:{$regex:new RegExp(searchcategory,"i")}}
                ],
            });
        }


        // else if (name) {
        //     const searchname = name.toLowerCase();
        //     if(req.path.includes("/lowtohigh")){
        //         products = await productCollection
        //         .find({
        //             name:{$regex:new RegExp(searchname,"i")},
        //         })
        //         .sort({new_price:1});
        //     } else if(req.path.includes("/hightolow")){
        //         products =await productCollection
        //         .find({
        //             name:{$regex:new RegExp(searchname,"i")},
        //         })
        //         .sort({new_price:-1});
        //     } else {
        //         products =  await productCollection.find({ name: { $regex: new RegExp(searchname, "i") } });
        //     }
        
        // }
        
        
        else if(req.path.includes("/random")){
            products = await productCollection.aggregate([{
                $sample:{size:5}
            }]);
        } 
        else if(req.path.includes("/top-rated")){
            products = await productCollection.find().sort({rating:-1}).limit(5);
        }
        else if (category) {
            const searchcategory = category.toLowerCase();
            if(req.path.includes("/lowtohigh")){
                products = await productCollection
                .find({
                    category:{$regex:new RegExp(searchcategory,"i")},
                })
                .sort({new_price:1});
            } else if(req.path.includes("/hightolow")){
                products =await productCollection
                .find({
                    category:{$regex:new RegExp(searchcategory,"i")},
                })
                .sort({new_price:-1});
            } else {
                products =await productCollection
                .find({
                    category:{$regex:new RegExp(searchcategory,"i")},
                });
            }
        
        }
        else if(req.path.includes("/hightolow")){
            products = await productCollection.find().sort({new_price:-1})
        }
        else if(req.path.includes("/lowtohigh")){
            products = await productCollection.find().sort({new_price:1})
        }
        else if(rating){
            if(req.path.includes("/lowtohighrating")){
            products = await productCollection.find().sort({rating:1})
        }}
        // else if(req.path.includes("/lowtohighrating")){
        //     products = await productCollection.aggregate([{
        //         $match: {
        //             colors:"White"
        //       }},         
        // ])}
        // else if(req.path.includes("/avgRating")){
        //     products = await productCollection.aggregate([{
        //         $group:{
        //             _id:null,
        //             avgRating:{$avg:"$rating"},
        //         }},
                // {
                //     $addFields: {
                //         avgRating: "$avgRating"
                //     }
                // },
        //         {
        //             $match: {
        //                 $expr: {
        //                     $gt: ["$rating", "$avgRating"]
        //                 }
        //             }
        //     }
        //     ]);
        // } 
        else {
            products = await productCollection.find();
        }
        if (!products || products.length == 0)
            res.status(404).json({ message: "products not found" });
        res.status(200).send(products);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "internal Server Error" });
    }
};
module.exports = productcontroller;