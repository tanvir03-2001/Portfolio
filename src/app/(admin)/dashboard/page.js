"use client";
import { useEffect, useState } from "react";
import Project from "./Project";

// Dummy data
const initialProjects = [
  { id: 1, title: "Project 1", description: "Description for project 1" },
  { id: 2, title: "Project 2", description: "Description for project 2" },
];

const initialSkills = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
];

const initialBlogs = [
  { id: 1, title: "Blog 1", content: "Content for blog 1" },
  { id: 2, title: "Blog 2", content: "Content for blog 2" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isAdmin, setIsAdmin] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminStatus);
    if (adminStatus) {
      console.log("Admin is logged in");
    } else {
      console.log("Not an admin");
    }
  }, []);

  // Content states
  const [projects, setProjects] = useState(initialProjects);
  const [skills, setSkills] = useState(initialSkills);
  const [blogs, setBlogs] = useState(initialBlogs);

  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    skillName: "",
    blogTitle: "",
    blogContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProject = () => {
    const newProject = {
      id: projects.length + 1,
      title: formData.projectTitle,
      description: formData.projectDescription,
    };
    setProjects((prev) => [...prev, newProject]);
    setFormData({ ...formData, projectTitle: "", projectDescription: "" });
  };

  const handleAddSkill = () => {
    const newSkill = { id: skills.length + 1, name: formData.skillName };
    setSkills((prev) => [...prev, newSkill]);
    setFormData({ ...formData, skillName: "" });
  };

  const handleAddBlog = () => {
    const newBlog = {
      id: blogs.length + 1,
      title: formData.blogTitle,
      content: formData.blogContent,
    };
    setBlogs((prev) => [...prev, newBlog]);
    setFormData({ ...formData, blogTitle: "", blogContent: "" });
  };

  const handleDelete = (type, id) => {
    if (type === "project") {
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } else if (type === "skill") {
      setSkills((prev) => prev.filter((skill) => skill.id !== id));
    } else if (type === "blog") {
      setBlogs((prev) => prev.filter((blog) => blog.id !== id));
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 p-6 bg-indigo-600 text-white">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-4">
            <button
              onClick={() => setActiveTab("overview")}
              className={`block w-full text-left py-2 px-4 rounded ${
                activeTab === "overview"
                  ? "bg-indigo-700"
                  : "hover:bg-indigo-500"
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`block w-full text-left py-2 px-4 rounded ${
                activeTab === "projects"
                  ? "bg-indigo-700"
                  : "hover:bg-indigo-500"
              }`}
            >
              Manage Projects
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`block w-full text-left py-2 px-4 rounded ${
                activeTab === "skills"
                  ? "bg-indigo-700"
                  : "hover:bg-indigo-500"
              }`}
            >
              Manage Skills
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`block w-full text-left py-2 px-4 rounded ${
                activeTab === "blogs"
                  ? "bg-indigo-700"
                  : "hover:bg-indigo-500"
              }`}
            >
              Manage Blogs
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <button
              onClick={() => {
                localStorage.removeItem("isAdmin");
                window.location.reload();
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          </header>

          {/* Tabs */}
          {activeTab === "overview" && (
            <div className="text-center text-gray-700">
              <h2 className="text-2xl">Welcome to Your Dashboard</h2>
              <p>Choose a section to manage your content.</p>
            </div>
          )}

          {activeTab === "projects" && isAdmin && <Project />}
          {activeTab === "projects" && !isAdmin && (
            <div className="text-red-500">Access Denied. Admin only.</div>
          )}

          {/* Skills Management */}
          {activeTab === "skills" && isAdmin && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Skills</h2>
              <ul className="mb-4">
                {skills.map((skill) => (
                  <li key={skill.id} className="flex justify-between">
                    {skill.name}
                    <button
                      onClick={() => handleDelete("skill", skill.id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  name="skillName"
                  value={formData.skillName}
                  onChange={handleInputChange}
                  placeholder="New Skill"
                  className="border p-2 rounded"
                />
                <button
                  onClick={handleAddSkill}
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                >
                  Add Skill
                </button>
              </div>
            </div>
          )}

          {/* Blogs Management */}
          {activeTab === "blogs" && isAdmin && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Blogs</h2>
              <ul className="mb-4">
                {blogs.map((blog) => (
                  <li key={blog.id} className="mb-2">
                    <strong>{blog.title}</strong>: {blog.content}
                    <button
                      onClick={() => handleDelete("blog", blog.id)}
                      className="ml-4 text-red-500"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mb-2">
                <input
                  type="text"
                  name="blogTitle"
                  value={formData.blogTitle}
                  onChange={handleInputChange}
                  placeholder="Blog Title"
                  className="border p-2 rounded mr-2"
                />
                <input
                  type="text"
                  name="blogContent"
                  value={formData.blogContent}
                  onChange={handleInputChange}
                  placeholder="Blog Content"
                  className="border p-2 rounded"
                />
              </div>
              <button
                onClick={handleAddBlog}
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                Add Blog
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
