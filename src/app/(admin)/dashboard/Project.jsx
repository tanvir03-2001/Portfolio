/* eslint-disable @next/next/no-img-element */
/* Dashboard Component to Manage Projects */
"use client";

import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    tech: "",
    github: "",
    live: "",
  });

  // Fetch all projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // const res = await fetch("/api/projects");
        // const data = await res.json();
        // setProjects(data);
        setProjects([
          {
            _id: "1",
            title: "AI-Powered Travel Planner",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
            likes: 102,
            tech: ["React", "Node.js", "OpenAI API", "Tailwind CSS"],
            github: "https://github.com/yourusername/ai-travel-planner",
            live: "https://ai-travel-planner.vercel.app",
          },
          {
            _id: "2",
            title: "Crypto Portfolio Dashboard",
            category: "Dashboard",
            image: "https://images.unsplash.com/photo-1622182923571-08b2a257fddf",
            likes: 87,
            tech: ["Next.js", "Chart.js", "CoinGecko API"],
            github: "https://github.com/yourusername/crypto-dashboard",
            live: "https://crypto-dash.io",
          },
        ]);
      } catch (err) {
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      if (res.ok) {
        setProjects(projects.filter((p) => p._id !== id));
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const body = {
        ...formData,
        tech: formData.tech.split(",").map((t) => t.trim()),
        likes: 0,
      };
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        const newProject = await res.json();
        setProjects([...projects, newProject]);
        setShowModal(false);
        setFormData({
          title: "",
          category: "",
          image: "",
          tech: "",
          github: "",
          live: "",
        });
      }
    } catch (err) {
      console.error("Failed to create project", err);
    }
  };

  return (
    <div className="h-full min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-sm"
          >
            + New Project
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-xl p-4 shadow flex flex-col justify-between"
              >
                <div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md mb-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50 text-indigo-600 text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex gap-3">
                    <a
                      href={`/dashboard/edit/${project._id}`}
                      className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                    >
                      <Pencil className="w-4 h-4" /> Edit
                    </a>
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="text-red-600 hover:underline text-sm flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" /> Delete
                    </button>
                  </div>
                  <span className="text-xs text-gray-400">
                    ❤️ {project.likes} likes
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal for Create Project */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <form onSubmit={handleCreate} className="space-y-3">
              {["title", "category", "image", "github", "live", "tech"].map(
                (field) => (
                  <input
                    key={field}
                    type="text"
                    name={field}
                    placeholder={
                      field === "tech"
                        ? "Tech (comma separated)"
                        : `Enter ${field}`
                    }
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field]: e.target.value })
                    }
                    className="w-full border px-3 py-2 rounded text-sm"
                    required
                  />
                )
              )}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
