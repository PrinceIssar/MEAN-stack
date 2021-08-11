const Friend = require("../model/Friend");


// get ALL friends
const friend_all = async (req, res) => {
      try {
          const friends = await Friend.find(); //mongodb method find all listing
          res.json(friends);
      }catch (error){
          res.json({message: error});
      }

};

// Single friend
const friend_details = async (req, res) =>{
    try {
        const friend = await Friend.findById(req.params.friendId); 
        res.json(friend);
    }catch (error){
        res.json({message: error});
    }
};

// Add New friend
const friend_create = async (req, res) => {
   const friend = new Friend({
    name: req.body.name,
    phone: req.body.phone,
    image: req.body.image,
    details: req.body.details
   });
   
    try {
        const savedFriend = await friend.save();
        res.send(savedFriend);
    }catch (error) {
        res.status(400).send(error);
    }
};

// Update friend
const friend_update = async (req, res) => {
    try {
        const friend = {
          name: req.body.name,
          phone: req.body.phone,
          image: req.body.image,
          details: req.body.details
        };
    
        const updatedFriend = await Friend.findByIdAndUpdate(
          { _id: req.params.friendId },
          friend
        );
        res.json(updatedFriend);
      } catch (error) {
        res.json({ message: error });
      }
};

// Delete friend
const friend_delete = async (req, res) =>{
    try{
        const removeFriend = await Friend.findByIdAndDelete(req.params.friendId);
        res.json(removeFriend);
    }catch(error) {
        res.json({ message: Error });
    }
};


module.exports = {
    friend_all,
    friend_details,
    friend_create,
    friend_update,
    friend_delete
}
