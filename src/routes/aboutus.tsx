import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Sakib Hossain",
    role: "Founder and Lead Developer",
    img: "/img/office.jpg",
    bio: "Passionate about building impactful products and empowering job seekers with AI-driven solutions.",
  },
  {
    name: "Faria Yasmin",
    role: "Co-Founder and Product Designer",
    img: "/img/hero01.jpg",
    bio: "Designs intuitive user experiences and ensures VocalPrep is accessible and beautiful for everyone.",
  },
  {
    name: "Yuki Bhuiyan",
    role: "Co-Founder and AI Specialist",
    img: "/img/office02.jpg",
    bio: "Brings advanced AI expertise to help users prepare smarter and ace their interviews.",
  },
];

export const AboutUs = () => {
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">About Us <Sparkles className="inline ml-2" /></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
          <strong>VocalPrep</strong> is powered by a passionate and diverse team dedicated to helping you succeed in your career journey. Our mission is to empower individuals with the tools, guidance, and support needed to achieve professional growth and confidence.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We believe everyone deserves access to high-quality career resources and expert mentorship. VocalPrep was founded to bridge the gap between ambition and achievement, offering a supportive platform for career development.
        </p>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-6">Meet the Team</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="flex flex-col items-center p-6 shadow-lg">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
            />
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <h4 className="text-md text-gray-500 mb-2">{member.role}</h4>
            <p className="text-center text-muted-foreground text-sm">{member.bio}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
};
