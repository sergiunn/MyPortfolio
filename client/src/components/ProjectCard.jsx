import { useState } from "react";
import ExpandIcon from "../assets/ExpandIcon";

function ProjectCard({ title, description, link, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card relative">

      <img className="project-card-image" src={imageUrl} alt={title} />

      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        <a
          className="project-card-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Repo
        </a>
      </div>

      <button
        className="absolute bottom-2 right-2 p-2 bg-black/60 rounded-md hover:bg-black/80 transition"
        onClick={() => setIsOpen(true)}
      >
        <ExpandIcon />
      </button>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg shadow-xl relative">

            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-3">{title}</h2>

            <img src={imageUrl} alt={title} className="w-full rounded-md mb-4" />

            <p className="text-gray-700 mb-4">{description}</p>

            <a
              href={link}
              target="_blank"
              className="text-blue-600 underline"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      )}

    </div>
  );
}

export default ProjectCard;
