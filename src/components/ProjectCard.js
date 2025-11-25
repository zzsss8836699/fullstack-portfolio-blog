import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-105 overflow-hidden">
      {project.imageUrl && (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-harmony-primary mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-harmony-primary hover:text-harmony-green-700 transition-colors"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-harmony-secondary hover:text-harmony-pink-600 transition-colors"
            >
              查看演示 →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

