import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const services = [
  {
    title: "Interview Preparation",
    description:
      "Get expert tips, practice questions, and mock interviews to boost your confidence and performance.",
    article: "https://www.indeed.com/career-advice/interviewing/interview-preparation",
    youtube: "https://www.youtube.com/watch?v=GmQjKcT1F6g",
  },
  {
    title: "Career Coaching",
    description:
      "Personalized coaching to help you set goals, overcome challenges, and advance your career.",
    article: "https://www.themuse.com/advice/career-coaching-what-is-it",
    youtube: "https://www.youtube.com/watch?v=QJ6yQpQYhGk",
  },
  {
    title: "Resume Building",
    description:
      "Learn how to craft a standout resume with templates, examples, and expert advice.",
    article: "https://www.careeronestop.org/ResumesInterviews/ResumeAdvice/ResumeAdvice.aspx",
    youtube: "https://www.youtube.com/watch?v=QFQ9gGzKq4Y",
  },
];

export const ServicesPage = () => {
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-2">Our Services <Sparkles className="inline ml-2" /></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
          Explore our range of services designed to help you succeed in your career journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-center text-muted-foreground mb-4">{service.description}</p>
            <a
              href={service.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mb-2"
            >
              Read Article
            </a>
            <a
              href={service.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:underline"
            >
              Watch on YouTube
            </a>
          </Card>
        ))}
      </div>
    </Container>
  );
};
