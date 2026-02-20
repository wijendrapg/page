import { motion } from "framer-motion";

interface Course {
  title: string;
  description: string;
}

const courses: Course[] = [
  {
    title: "Software Project Management",
    description:
      "Focuses on planning, managing, and delivering software projects using Agile and traditional approaches, covering risk management, scheduling, team coordination, and alignment with organisational strategy.",
  },
  {
    title: "Software Engineering Methods",
    description:
      "Covers structured approaches to software development including requirements engineering, system design, architectural patterns, Agile practices, and lifecycle management to build scalable and reliable systems.",
  },
  {
    title: "Software Quality Assurance",
    description:
      "Emphasises software testing, quality models, standards compliance, verification and validation, and continuous improvement to ensure dependable and maintainable systems.",
  },
  {
    title: "Digital Business",
    description:
      "Explores digital transformation, e-business models, innovation strategies, and the use of emerging technologies to create competitive advantage in modern organisations.",
  },
  {
    title: "Social, Professional and Legal Aspects of Computing",
    description:
      "Examines ethics, professional responsibility, data protection, cybersecurity law, intellectual property, and the societal impact of computing technologies.",
  },
  {
    title: "Strategic Information Systems",
    description:
      "Focuses on the design, implementation, and management of information systems to support organisational strategy and decision-making, including alignment of IT initiatives with business objectives, competitive advantage through digital innovation, and evaluation of information system performance.",
  },
];

const TeachingSection = () => {
  return (
    <section id="teaching" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-semibold mb-12"
        >
          Teaching
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-200"
            >
              <div className="w-8 h-1 bg-accent rounded-full mb-4" />
              <h3 className="text-base font-heading font-semibold text-foreground mb-3 leading-snug">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingSection;
