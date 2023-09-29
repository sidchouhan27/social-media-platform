import "./stories.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id: 1,
            name: "Siddharth Chouhan",
            img: "https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg",
        },
        {
            id: 2,
            name: "Siddharth Chouhan",
            img: "https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg",
        },
        {
            id: 3,
            name: "Siddharth Chouhan",
            img: "https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg",
        },
        {
            id: 4,
            name: "Siddharth Chouhan",
            img: "https://images.pexels.com/photos/6146704/pexels-photo-6146704.jpeg",
        },
    ];

    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories