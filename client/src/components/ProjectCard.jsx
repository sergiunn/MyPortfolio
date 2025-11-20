import { Link } from "react-router-dom";
function ProjectCard({title, description, link, imageUrl}){
    return(
        <div className="card">
            {/* Image */}
            <img src={imageUrl} alt={title} />

            <div classname="content">

                {/* Title */}
                <h3> {title} </h3>

                {/* Description */}
                <p> {description} </p>

                {/* Link to git */}
                <a href={link} target="_blank" rel="noopener noreferrer"> See repo </a>
            </div>
        </div>

    )
}

export default ProjectCard;