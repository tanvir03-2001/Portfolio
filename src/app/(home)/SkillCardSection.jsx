import {
    Brush,
    LayoutDashboard,
    Palette,
    PenTool,
    Sparkles,
} from "lucide-react";
  
  const skills = [
    {
      name: "Adobe Illustrator",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <PenTool className="w-10 h-10 text-orange-500" />,
    },
    {
      name: "Photoshop Expert",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <Brush className="w-10 h-10 text-blue-500" />,
    },
    {
      name: "UI/UX With XD",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <LayoutDashboard className="w-10 h-10 text-purple-600" />,
    },
    {
      name: "UI/UX In Figma",
      description:
        "It is a long established fact that a reader will be distracted by the readable content.",
      icon: <Palette className="w-10 h-10 text-pink-500" />,
    },
  ];
  
  export default function SkillCardSection() {
    return (
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              {/* Decorative sparkles */}
              <div className="absolute top-4 right-4 text-blue-400">
                <Sparkles className="w-5 h-5" />
              </div>
  
              {/* Icon */}
              <div className="mb-4">{skill.icon}</div>
  
              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  