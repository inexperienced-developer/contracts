import React, {useState} from 'react'

const ProjectDetails = () => {
    let photos = { photo_project_1: null}
    const [projectCounter, setProjectCounter] = useState(1);
    const [projectPhotos, setProjectPhotos] = useState(photos)
    const addProject = (e) => {
        e.preventDefault();
        if(projectCounter >= 5)
            return;
        setProjectCounter(projectCounter + 1);
        photos[`photo_project_${projectCounter + 1}`] = null;
        setProjectPhotos(...projectPhotos, photos);
    }
    const removeProject = (e) => {
        e.preventDefault();
        if(projectCounter <= 1)
            return;
        setProjectCounter(projectCounter - 1);
    }
    const onChangePhoto = (e, i) => {
        const projectItem = React.Children.find(projects, project => {
            if(project.key === `project_${i + 1}`)
                return project;
        });
        photos[`photo_${projectItem.key}`] = e.target.files[0];
        setProjectPhotos(...projectPhotos, photos);
    }
    const projects = Array.from({ length: projectCounter });
    return (
    <div>
        {
            projects.map((_, i) => (
            <div key={`project_${i + 1}`}>
                <p>------------------------------------------------------------------------------------------------------------------------</p>
                <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
                    Project Name:
                </label>
                <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your project's name"
                />
                <label className="block font-bold mb-2 text-gray-700" htmlFor="details">
                Project Details:
                </label>
                <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="details"
                placeholder="Enter your project's details"
                rows="5"
                />
                <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                fill="currentColor">
                            <path fillRule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clipRule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                Select a photo</p>
                        </div>
                        <input type="file" className="opacity-0" onChange={(e) => onChangePhoto(e, i)} />
                        {
                            projectPhotos[`photo_project_${i + 1}`] !== null && (
                                <img src={URL.createObjectURL(projectPhotos[`photo_project_${i + 1}`])} alt="" />
                            )
                        }
                    </label>
                </div>
            </div>
            ))
        }
        <button className="bg-blue-500 text-white rounded-full p-3" onClick={(e) => addProject(e)}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="plus w-6 h-6">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
        </button>
        <button className="bg-red-500 text-white rounded-full p-3" onClick={removeProject}>
            <svg viewBox="0 0 20 20" fill="currentColor" className="minus w-6 h-6">
                <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
            </svg>
        </button>
    </div>
    )
}

export default ProjectDetails