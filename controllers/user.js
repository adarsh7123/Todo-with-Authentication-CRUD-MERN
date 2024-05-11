import { User } from "../models/user.js";

export const getAllUsers =  async (req, res) => {

    const users = await User.find({});

    // console.log(req.query);

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users: users,
    })
}

export  const register = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create({
        name,
        email,
        password,
    });
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Signup Successfully",
    });
}


export const specialFunk =  async (req, res) => {
 
    res.json({
      success: true,
      user:"just joking",
    })
  }

  export const getUserDetails = async (req, res) => {
    // const {id}= req.body;
    // const {id}= req.query;
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
      success: true,
      user,
    })
  }
  export const updateUser = async (req, res) => {
   
    const { id } = req.params;
    const user = await User.findById(id);
    res.json({
      success: true,
      message: 'Updated user',
    })
  }
  export const deleteUser = async (req, res) => {
    
    const { id } = req.params;
    const user = await User.findById(id);

    // await user.remove();

    res.json({
      success: true,
      message: 'Deleted user',
    })
  }